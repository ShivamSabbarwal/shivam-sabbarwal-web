"use server";

import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import { ContactEmail } from "@/emails/ContactEmail";

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  message: string;
}

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function sendContactEmail(data: ContactFormData) {
  const fullName = `${data.firstName} ${data.lastName}`;
  const html = await render(
    ContactEmail({ name: fullName, email: data.email, phone: data.phone, message: data.message })
  );

  await transporter.sendMail({
    from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
    to: process.env.GMAIL_USER,
    replyTo: data.email,
    subject: `Portfolio inquiry from ${fullName}`,
    html,
  });
}
