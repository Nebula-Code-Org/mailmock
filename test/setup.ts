import { beforeAll, afterAll } from "vitest";
import { startServer, stopServer } from "@/server";

beforeAll(async () => {
  await startServer(8910);
});

afterAll(async () => {
  await stopServer();
});
