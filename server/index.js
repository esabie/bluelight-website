import "dotenv/config";
import express from "express";
import cors from "cors";
// import dotenv from "dotenv";
import { resend } from "./resend.js";

dotenv.config({ path: "../.env.server" });

const app = express();

app.use(cors());
app.use(express.json());

app.post("/api/send-join-email", async (req, res) => {
  const { name, email, phone, job, message } = req.body;

  if (!name || !email || !phone || !job) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      from: "Bluelight Healthcare <tech@bluelighthealthcare.com>",
      to: ["sabieeugeneosei177@gmail.com"],
      subject: `Registration from website – ${name}`,
      html: `
        <h2>New Candidate Registration</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Job Title:</strong> ${job}</p>
        <p><strong>Message:</strong></p>
        <p>${message || "—"}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    res.status(500).json({ error: "Email failed to send" });
  }
});

app.listen(5000, () => {
  console.log("🚀 Server running on http://localhost:5000");
});
