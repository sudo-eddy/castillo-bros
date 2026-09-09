import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const requiredFields = ["name", "service", "preferredDate"];
    const missing = requiredFields.filter((field) => !String(body[field] || "").trim());

    if (missing.length > 0) {
      return NextResponse.json(
        { error: `Missing required field(s): ${missing.join(", ")}` },
        { status: 400 }
      );
    }

    const emailText = [
      "New appointment request from Castillo's Auto Service website",
      `Name: ${body.name}`,
      `Phone: ${body.phone || "N/A"}`,
      `Email: ${body.email || "N/A"}`,
      `Service: ${body.service}`,
      `Preferred Date: ${body.preferredDate}`,
      `Preferred Time: ${body.preferredTime || "N/A"}`,
      `Notes: ${body.notes || "No additional notes"}`,
    ].join("\n");

    const calendarLink = (() => {
      const dateValue = body.preferredDate;
      const timeValue = body.preferredTime || "09:00";
      const start = new Date(`${dateValue}T${timeValue}:00`);
      const end = new Date(start.getTime() + 60 * 60 * 1000);

      const formatGoogleDate = (value: Date) =>
        value.toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");

      return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
        `Castillo's Auto Service - ${body.service}`
      )}&details=${encodeURIComponent(
        `Appointment request for ${body.name}.\nPhone: ${body.phone || "N/A"}\nEmail: ${body.email || "N/A"}\nNotes: ${body.notes || "No additional notes"}`
      )}&location=${encodeURIComponent("Castillo's Brothers Auto Service")}&dates=${formatGoogleDate(
        start
      )}/${formatGoogleDate(end)}`;
    })();

    console.log("\n--- NEW APPOINTMENT REQUEST ---");
    console.log(emailText);
    console.log("--- END REQUEST ---\n");

    return NextResponse.json({
      message:
        "Your appointment request has been received. The shop will confirm availability and either approve the time or suggest an alternative.",
      googleCalendarLink: calendarLink,
    });
  } catch (error) {
    console.error("Appointment submission error:", error);
    return NextResponse.json(
      { error: "There was a problem processing the appointment request." },
      { status: 500 }
    );
  }
}
