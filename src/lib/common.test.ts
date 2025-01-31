import { it, expect } from "vitest";
import { NotionWrapper } from "./notion";
import { getPageList } from "./common";
import { rangeProp } from "./common";

const notion = new NotionWrapper(
  { auth: import.meta.env.VITE_NOTION },
  { returnType: "Raw" }
);
const ret = await notion.queryDB(import.meta.env.VITE_TESTDB);
const pageList = await getPageList(ret);
const propList = await rangeProp(
  pageList[0],
  async (key, value) => `${key}: ${value}`
);

it("chk getPageList", async () => {
  // console.log(pageList);
  expect(pageList).instanceOf(Array);
});

it("chk rangeProp", async () => {
  console.log(propList);
  expect(propList).instanceOf(Array);
});
