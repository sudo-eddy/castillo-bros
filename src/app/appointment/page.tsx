"use client";

import { useState } from "react";
import { MessageCircle, Phone } from "lucide-react";
import SiteHeader from "../../components/layout/siteHeader";

const serviceOptions = [
  "Emissions Diagnostics",
  "Mechanical Failure",
  "Electrical Failure",
  "Diesel Engine Diagnostics",
  "Routine Maintenance",
  "General Inspection",
];

const initialForm = {
  name: "",
  phone: "",
  email: "",
  service: "Emissions Diagnostics",
  preferredDate: "",
  preferredTime: "",
  notes: "",
  website: "",
};

export default function AppointmentPage() {
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const updateField = (field: keyof typeof initialForm, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Unable to submit your request.");
      }

      setStatus({
        type: "success",
        message:
          data.message ||
          "Your appointment request was sent. The shop will reply by email to confirm availability or suggest another time.",
      });
      setForm(initialForm);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "There was a problem submitting your request.",
      });
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#050816] text-white">
      <SiteHeader />

      <section className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="mb-12 max-w-3xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.24em] text-blue-300">
            Schedule service
          </p>
          <h1 className="text-4xl font-semibold tracking-[-0.05em] text-white sm:text-5xl">
            Request an appointment
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-white/70">
            Share your vehicle issue and preferred time. The shop can review your request,
            confirm availability, or suggest a better slot.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.1fr_1.3fr]">
          <div className="space-y-4">
            {serviceOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => updateField("service", option)}
                className={`flex w-full items-center justify-between rounded-2xl border px-5 py-4 text-left transition ${
                  form.service === option
                    ? "border-blue-500/55 bg-blue-500/10 text-white"
                    : "border-white/10 bg-white/[0.02] text-white/75 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                <span className="font-medium">{option}</span>
                <span className="text-xs uppercase tracking-[0.18em] text-blue-300">
                  {form.service === option ? "Selected" : "Select"}
                </span>
              </button>
            ))}

            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
              <p className="text-xs uppercase tracking-[0.2em] text-white/50">Need help now?</p>
              <div className="mt-4 flex flex-col gap-3">
                <a
                  href="tel:8156303149"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-blue-300 hover:text-blue-200"
                >
                  <Phone className="h-4 w-4" />
                  Call (815) 630-3149
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=16307551481"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-lg font-semibold text-emerald-300 hover:text-emerald-200"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp / Hablamos español
                </a>
              </div>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block md:col-span-1">
                <span className="mb-2 block text-sm font-medium text-white/70">Full name</span>
                <input
                  value={form.name}
                  onChange={(event) => updateField("name", event.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0b1324] px-4 py-3 text-white outline-none transition focus:border-blue-500/60"
                  placeholder="Your name"
                />
              </label>

              <label className="block md:col-span-1">
                <span className="mb-2 block text-sm font-medium text-white/70">Phone</span>
                <input
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#0b1324] px-4 py-3 text-white outline-none transition focus:border-blue-500/60"
                  placeholder="(773) 555-0147"
                />
              </label>

              <label className="block md:col-span-1">
                <span className="mb-2 block text-sm font-medium text-white/70">Email</span>
                <input
                  type="email"
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0b1324] px-4 py-3 text-white outline-none transition focus:border-blue-500/60"
                  placeholder="you@example.com"
                />
              </label>

              <label className="block md:col-span-1">
                <span className="mb-2 block text-sm font-medium text-white/70">Preferred service</span>
                <select
                  value={form.service}
                  onChange={(event) => updateField("service", event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#0b1324] px-4 py-3 text-white outline-none transition focus:border-blue-500/60"
                >
                  {serviceOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block md:col-span-1">
                <span className="mb-2 block text-sm font-medium text-white/70">Preferred date</span>
                <input
                  type="date"
                  value={form.preferredDate}
                  onChange={(event) => updateField("preferredDate", event.target.value)}
                  required
                  className="w-full rounded-xl border border-white/10 bg-[#0b1324] px-4 py-3 text-white outline-none transition focus:border-blue-500/60"
                />
              </label>

              <label className="block md:col-span-1">
                <span className="mb-2 block text-sm font-medium text-white/70">Preferred time</span>
                <input
                  type="time"
                  value={form.preferredTime}
                  onChange={(event) => updateField("preferredTime", event.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#0b1324] px-4 py-3 text-white outline-none transition focus:border-blue-500/60"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="mb-2 block text-sm font-medium text-white/70">Vehicle details</span>
                <textarea
                  value={form.notes}
                  onChange={(event) => updateField("notes", event.target.value)}
                  rows={5}
                  className="w-full rounded-xl border border-white/10 bg-[#0b1324] px-4 py-3 text-white outline-none transition focus:border-blue-500/60"
                  placeholder="Year, make, model, symptoms, check engine light, or anything else helpful."
                />
              </label>

              <label className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden" aria-hidden="true">
                <span>Website</span>
                <input
                  name="website"
                  value={form.website}
                  onChange={(event) => updateField("website", event.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </label>
            </div>

            <div className="mt-6">
              <button
                type="submit"
                disabled={submitting}
                className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {submitting ? "Submitting..." : "Request appointment"}
              </button>
            </div>

            {status && (
              <div
                className={`mt-6 rounded-2xl border p-4 text-sm ${
                  status.type === "success"
                    ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-100"
                    : "border-red-500/40 bg-red-500/10 text-red-100"
                }`}
                aria-live="polite"
              >
                <p>{status.message}</p>
              </div>
            )}
          </form>
        </div>
      </section>
    </main>
  );
}
