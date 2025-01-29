import { expect, it } from "vitest";
import { Query, Test } from "./query";

it("should response raw database", async () => {
  const result = await Query(process.env.MEMBERDB!, process.env.NOTION!);
  console.log(result);
  expect(result).toBeDefined();
});

it("test2", async () => {
  const result = await Query(process.env.MEMBERDB!, process.env.NOTION!);
  const tmp = await Test(result);
  console.log(tmp);
  expect(tmp).toBeDefined();
});
