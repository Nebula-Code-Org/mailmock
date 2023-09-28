import { createTransporter } from "@test/utils";
import { describe, it } from "vitest";

const transporter = createTransporter();

describe("Server", () => {
  it("send e-mail", async () => {
    const info = await transporter.sendMail({
      from: '"Fred Foo 👻" <foo@example.com>', // sender address
      to: "bar@example.com, baz@example.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
  });
});
