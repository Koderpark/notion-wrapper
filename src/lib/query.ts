const { Client } = require("@notionhq/client");

async function Query(db: string, auth: string): Promise<any> {
  const notion = new Client(auth);
  return await notion.databases.query({
    database_id: db,
  });
}

async function Test(val: any): Promise<any> {
  console.log(val["results"]);
  return val["results"];
}

export { Query, Test };
