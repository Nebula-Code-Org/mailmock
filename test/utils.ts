import nodemailer from "nodemailer";

export function createTransporter() {
  return nodemailer.createTransport({
    host: "127.0.0.1",
    port: 8910,
    secure: false,
    auth: {
      user: "user",
      pass: "pass",
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
}
