import { it, expect } from "vitest";
import { NotionWrapper } from "../notion";
import { makePlain } from "./plain";

const notion = new NotionWrapper(
  { auth: import.meta.env.VITE_NOTION },
  { returnType: "Raw" }
);
const ret = await notion.queryDB(import.meta.env.VITE_TESTDB);
const propList = await makePlain(ret);

it("chk makePlain", async () => {
  console.log(propList);
  expect(propList).instanceOf(Array);
});
