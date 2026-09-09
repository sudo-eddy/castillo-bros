import { NextResponse } from "next/server";

const MAX_REQUEST_BYTES = 16_384;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type AppointmentRequest = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  preferredDate?: unknown;
  preferredTime?: unknown;
  notes?: unknown;
  website?: unknown;
};

const getString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] || character
  );

export async function POST(request: Request) {
  try {
    const requestText = await request.text();

    if (requestText.length > MAX_REQUEST_BYTES) {
      return NextResponse.json({ error: "Request is too large." }, { status: 413 });
    }

    const body = JSON.parse(requestText) as AppointmentRequest;
    const appointment = {
      name: getString(body.name),
      phone: getString(body.phone),
      email: getString(body.email),
      service: getString(body.service),
      preferredDate: getString(body.preferredDate),
      preferredTime: getString(body.preferredTime),
      notes: getString(body.notes),
    };

    if (getString(body.website)) {
      return NextResponse.json({ message: "Your appointment request was sent." });
    }

    const requiredFields = ["name", "email", "service", "preferredDate"] as const;
    const missing = requiredFields.filter((field) => !appointment[field]);

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required field(s): ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    if (!EMAIL_PATTERN.test(appointment.email)) {
      return NextResponse.json(
        { error: "Enter a valid email address." },
        { status: 400 }
      );
    }

    const resendApiKey = process.env.RESEND_API_KEY;
    const appointmentsEmail = process.env.APPOINTMENTS_EMAIL;
    const appointmentsFrom = process.env.APPOINTMENTS_FROM;

    if (!resendApiKey || !appointmentsEmail || !appointmentsFrom) {
      console.error("Appointment email environment variables are not configured.");
      return NextResponse.json(
        { error: "Appointment requests are temporarily unavailable. Please call the shop." },
        { status: 503 }
      );
    }

    const emailText = [
      "New appointment request from Castillo's Auto Service website",
      `Name: ${appointment.name}`,
      `Phone: ${appointment.phone || "N/A"}`,
      `Email: ${appointment.email}`,
      `Service: ${appointment.service}`,
      `Preferred Date: ${appointment.preferredDate}`,
      `Preferred Time: ${appointment.preferredTime || "N/A"}`,
      `Notes: ${appointment.notes || "No additional notes"}`,
    ].join("\n");

    const emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: appointmentsFrom,
        to: [appointmentsEmail],
        reply_to: appointment.email,
        subject: `Appointment request: ${appointment.service} - ${appointment.name} - ${appointment.preferredDate}`,
        text: emailText,
        html: `<h1>New appointment request</h1><p><strong>Name:</strong> ${escapeHtml(appointment.name)}</p><p><strong>Phone:</strong> ${escapeHtml(appointment.phone || "N/A")}</p><p><strong>Email:</strong> ${escapeHtml(appointment.email)}</p><p><strong>Service:</strong> ${escapeHtml(appointment.service)}</p><p><strong>Preferred date:</strong> ${escapeHtml(appointment.preferredDate)}</p><p><strong>Preferred time:</strong> ${escapeHtml(appointment.preferredTime || "N/A")}</p><p><strong>Notes:</strong><br>${escapeHtml(appointment.notes || "No additional notes").replace(/\n/g, "<br>")}</p>`,
      }),
      signal: AbortSignal.timeout(10_000),
    });

    if (!emailResponse.ok) {
      console.error("Resend rejected an appointment email:", emailResponse.status);
      return NextResponse.json(
        { error: "Unable to send your request. Please call the shop." },
        { status: 502 }
      );
    }

    return NextResponse.json({
      message:
        "Your appointment request was sent. The shop will reply by email to confirm availability or suggest another time.",
    });
  } catch (error) {
    console.error("Appointment submission error:", error);
    return NextResponse.json(
      { error: "There was a problem processing the appointment request." },
      { status: 500 }
    );
  }
}
