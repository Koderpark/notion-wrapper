import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { prop } from "../../types/properties";
import { isTitle, isRichText } from "../narrowing";

export async function makePlain(input: QueryDatabaseResponse) {
  return input.results;
}

export async function narrowing(input: prop) {
  if (isTitle(input)) {
    // return input.title;
    console.log(mergeRichText(input.title));
  }
  if (isRichText(input)) {
    // return input.rich_text;
    console.log(mergeRichText(input.rich_text));
  }
}

function mergeRichText(input: RichTextItemResponse[]): string {
  return input.map((it) => it.plain_text).join("");
}
