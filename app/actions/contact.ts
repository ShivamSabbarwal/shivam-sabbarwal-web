"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ContactEmail } from "@/emails/ContactEmail";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  intent: string;
  message: string;
}

const INTENT_LABELS: Record<string, string> = {
  "senior-engineering": "Senior engineering role",
  "engineering-leadership": "Engineering leadership role",
  "founder-product": "Founder / product conversation",
  "something-else": "Something else",
};

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  const fullName = `${data.firstName} ${data.lastName}`;
  const intentLabel = INTENT_LABELS[data.intent] ?? data.intent;
  const html = await render(
    ContactEmail({
      name: fullName,
      email: data.email,
      phone: data.phone,
      intent: intentLabel,
      message: data.message,
    }),
  );

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: data.email,
    subject: `${intentLabel}: ${fullName}`,
    html,
  });
}
