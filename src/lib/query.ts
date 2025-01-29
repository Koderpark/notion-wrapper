import {
  DatabaseObjectResponse,
  ListDatabasesResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import query from "../types/type-query";
import result from "../types/type-result";

const { Client } = require("@notionhq/client");

async function QueryDB(
  db: string,
  auth: string
): Promise<QueryDatabaseResponse> {
  const notion = new Client({ auth: auth });
  const val = await notion.databases.query({
    database_id: db,
  });

  return val;
}

async function GetResults(
  val: QueryDatabaseResponse
): Promise<DatabaseObjectResponse[]> {
  return val.results;
}

export { QueryDB, GetResults };
