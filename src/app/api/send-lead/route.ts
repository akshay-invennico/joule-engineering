import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullName, company, email, phone, inquiryType, message } = body;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Lead Form" <devinvennico@gmail.com>`,
      to: process.env.EMAIL,
      subject: `New Lead: ${inquiryType}`,
      text: `
        Full Name: ${fullName}
        Company: ${company}
        Email: ${email}
        Phone: ${phone || "Not provided"}
        Inquiry Type: ${inquiryType}
        Message: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Sending Error:", error);
    return NextResponse.json({ success: false, message: "Failed to send email" }, { status: 500 });
  }
}
