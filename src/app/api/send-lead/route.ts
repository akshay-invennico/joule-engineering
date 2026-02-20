import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, email, phone, subject, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Lead Form" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `New Lead: ${subject || "No Subject"}`,
      text: `
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Subject: ${subject}
        Message: ${message}
      `,
      html: `
        <h3>New Lead Submission</h3>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || "Not provided"}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Sending Error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
