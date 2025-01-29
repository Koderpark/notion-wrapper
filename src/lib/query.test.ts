import { expect, it } from "vitest";
import { GetResults, QueryDB, GetProps } from "./query";

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

it("chk GetProps", async () => {
  const query = await QueryDB(VITE_MEMBERDB, VITE_NOTION);
  const result = await GetResults(query);
  const prop = await result.map((it) => GetProps(it));
  expect(prop).toBeDefined();
});
