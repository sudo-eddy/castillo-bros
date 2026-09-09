# Vercel Migration and Appointment Email Plan

## Goal

Deploy the Next.js application to Vercel so `/api/appointments` runs as a server-side route. Appointment requests will be emailed to the shop through Resend, and a staff member will reply from the shop's normal inbox to confirm the requested time or suggest an alternative.

## Intended Workflow

1. A customer completes the appointment request form.
2. The Vercel API validates the request.
3. Resend delivers the appointment details to the shop's real email address.
4. The message uses the customer's email address as `Reply-To`.
5. The website tells the customer that the request was sent and is not yet confirmed.
6. A staff member replies from the shop inbox to confirm, decline, or suggest another date and time.

This workflow does not require a database, an admin dashboard, or n8n.

## Phase 1: Prepare the Application for Vercel

- Remove `output: "export"` from `next.config.ts`. A static export cannot host the appointment `POST` route.
- Remove `images.unoptimized` unless another deployment requirement still needs it.
- Keep the appointment endpoint at `/api/appointments`.
- Confirm that the application builds in standard Next.js server mode.
- Confirm that all existing pages and images work in a Vercel preview deployment.

## Phase 2: Configure Resend

- Create a Resend account.
- Add and verify `castillosauto.com` in Resend.
- Add the DNS records supplied by Resend for SPF and DKIM verification.
- Choose a sender address on the verified domain, such as `appointments@castillosauto.com`.
- Decide which real shop inbox receives appointment requests.
- Create a restricted Resend API key for this application.

Use these server-only environment variables:

```env
RESEND_API_KEY=re_...
APPOINTMENTS_EMAIL=shop@example.com
APPOINTMENTS_FROM=Castillo's Auto Service <appointments@castillosauto.com>
```

Add separate values to Vercel Preview and Production environments where appropriate. Never commit real keys or addresses that should remain private.

## Phase 3: Update the Appointment API

- Install the official `resend` package.
- Validate and normalize all submitted fields on the server.
- Require the customer's name, email, service, and preferred date.
- Validate the email address and reject oversized or malformed input.
- Send a plain-text and HTML appointment summary to `APPOINTMENTS_EMAIL`.
- Set `replyTo` to the validated customer email address.
- Include the customer's phone, requested service, preferred date and time, and vehicle notes.
- Return success only after Resend accepts the message.
- Return a generic error to the browser while logging enough server-side detail to diagnose delivery failures.
- Do not expose the Resend API key or call Resend directly from client-side code.

Suggested subject format:

```text
Appointment request: <service> - <customer name> - <preferred date>
```

## Phase 4: Update the Customer Experience

- Make the email field required in the form.
- Explain that submitting the form requests an appointment but does not confirm it.
- Replace the success message with a clear notice that the shop will respond by email.
- Remove the Google Calendar link from the form and API response because the requested time has not been approved.
- Keep the submit button disabled while the request is being sent.
- Preserve clear retry behavior when delivery fails.

Suggested success message:

> Your appointment request was sent. A member of the shop will reply by email to confirm availability or suggest another time.

## Phase 5: Abuse Protection and Reliability

Before production launch:

- Add a hidden honeypot field to reject basic bot submissions.
- Apply a reasonable request size limit.
- Add rate limiting if spam appears in production.
- Consider Cloudflare Turnstile only if the honeypot and rate limiting are insufficient.
- Avoid placing sensitive customer details in general-purpose application logs.
- Use Vercel and Resend delivery logs to investigate failures.

## Phase 6: Deploy and Move the Domain

1. Import the GitHub repository into Vercel.
2. Use the repository's existing install and build settings detected by Vercel.
3. Add the Resend environment variables to the Vercel project.
4. Deploy and test using a Vercel preview URL.
5. Submit test requests and verify that Reply opens a message addressed to the customer.
6. Add `castillosauto.com` and `www.castillosauto.com` to the Vercel project.
7. Replace the current DNS records with the records shown by the Vercel dashboard.
8. Verify HTTPS, redirects, pages, images, and appointment delivery on the production domain.
9. Remove the repository `CNAME` file after the previous static host is no longer used.

Every push to the production branch will then deploy both page changes and API changes through Vercel. Pull requests can use Vercel preview deployments before production.

## Verification Checklist

- [ ] Standard Next.js production build passes.
- [ ] Vercel preview deployment loads every public page.
- [ ] Empty and malformed submissions return validation errors.
- [ ] A valid submission reaches the correct shop inbox.
- [ ] The email contains all submitted appointment details.
- [ ] Replying to the notification addresses the customer, not Resend.
- [ ] The browser never receives or exposes the Resend API key.
- [ ] The customer is told that the appointment is pending human confirmation.
- [ ] No Google Calendar link appears before confirmation.
- [ ] Delivery failure produces a useful customer-facing error.
- [ ] Production domain and HTTPS work after the DNS change.

## Launch Criteria

The migration is complete when the production domain is served by Vercel, the appointment API successfully sends requests to the shop inbox through Resend, staff can reply directly to customers, and the interface consistently describes submissions as unconfirmed requests.
