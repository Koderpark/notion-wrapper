import { expect, it } from "vitest";
import { GetResults, QueryDB } from "./query";
import { RangeProp } from "./generic";

const { VITE_NOTION, VITE_MEMBERDB } = import.meta.env;

it("chk ParseProp", async () => {
  const query = await QueryDB(VITE_MEMBERDB, VITE_NOTION);
  const result = await GetResults(query);
  const prop = RangeProp(result[0]);
  expect(prop).toBeDefined();
});
