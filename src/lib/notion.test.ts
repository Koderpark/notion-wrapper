import { it, expect } from "vitest";
import { NotionWrapper } from "./notion";

const notion = new NotionWrapper(
  { auth: import.meta.env.VITE_NOTION },
  { returnType: "Raw" }
);

const ret = await notion.queryDB(import.meta.env.VITE_TESTDB);

it("should be able to create NotionWrapper", async () => {
  expect(notion).instanceOf(NotionWrapper);
});

it("chk queryDB", async () => {
  console.log(ret);
  expect(ret).toBeDefined();
});
