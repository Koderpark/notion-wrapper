import { expect, it } from "vitest";
import { GetResults, QueryDB } from "./query";

const { VITE_NOTION, VITE_MEMBERDB } = import.meta.env;

it("chk QueryDB", async () => {
  const query = await QueryDB(VITE_MEMBERDB, VITE_NOTION);
  expect(query).toBeDefined();
});

it("chk GetResults", async () => {
  const query = await QueryDB(VITE_MEMBERDB, VITE_NOTION);
  const result = await GetResults(query);
  console.log(result);
  expect(result).toBeDefined();
});
