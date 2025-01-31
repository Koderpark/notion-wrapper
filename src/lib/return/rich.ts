import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";

export async function makeRich(input: QueryDatabaseResponse) {
  // TODO: implement makeRich
  return input.results;
}
