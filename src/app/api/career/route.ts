import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const fullName = formData.get("fullName") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const country = formData.get("country") as string;
    const department = formData.get("department") as string;
    const resume = formData.get("resume") as File;

    if (!resume) {
      return NextResponse.json({ success: false, message: "Resume missing" }, { status: 400 });
    }

    const resumeBuffer = Buffer.from(await resume.arrayBuffer());

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    const mailOptions = {
      from: `"Career Form" <${process.env.EMAIL}>`,
      to: process.env.EMAIL,
      subject: `New Career Application: ${department}`,
      text: `
        Full Name: ${fullName}
        Email: ${email}
        Phone: ${phone}
        Country: ${country}
        Department: ${department}
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Application sent successfully!" });
  } catch (error) {
    console.error("Career Application Email Error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send application" },
      { status: 500 }
    );
  }
}
