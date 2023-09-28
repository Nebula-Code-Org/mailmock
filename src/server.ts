import { SMTPServer } from "smtp-server";
import { simpleParser } from "mailparser";

export const server = new SMTPServer({
  onAuth(auth, _session, callback) {
    if (auth.username !== "user" || auth.password !== "pass") {
      return callback(new Error("Invalid username or password"));
    }
    callback(null, { user: auth.username });
  },
  onData(stream, _session, callback) {
    simpleParser(stream, {}, (err, parsed) => {
      if (err) console.log("Error:", err);

      console.log(parsed);

      callback(null);
    });
  },
});

export async function startServer(port: number) {
  return new Promise<void>((resolve) => {
    server.listen(port, () => {
      console.log("SMTP server started!");
      resolve();
    });
  });
}

export async function stopServer() {
  return new Promise<void>((resolve) => {
    server.close(() => {
      console.log("SMTP server stopped!");
      resolve();
    });
  });
}
