import query from "../types/type-query";
import result from "../types/type-result";

const { Client } = require("@notionhq/client");

async function QueryDB(db: string, auth: string): Promise<query> {
  const notion = new Client({ auth: auth });
  return await notion.databases.query({
    database_id: db,
  });
}

async function GetResults(val: query): Promise<Array<result>> {
  return val.results;
}

export { QueryDB, GetResults };
