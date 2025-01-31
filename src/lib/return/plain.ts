import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { prop } from "../../types/properties";
import { isTitle, isRichText, isCheckbox } from "../narrowing";
import { getPageList } from "../common";
import { rangeProp } from "../common";

export async function makePlain(input: QueryDatabaseResponse) {
  const PageList = await getPageList(input);
  const ret: { [key: string]: any }[] = [];
  for (const page of PageList) {
    const obj: { [key: string]: any } = {};
    await rangeProp(page, async (key, value) => {
      const narrowed = await narrowing(value);
      obj[key] = narrowed;
    });
    ret.push(obj);
  }
  return ret;
}

export async function narrowing(input: prop) {
  if (isTitle(input)) {
    return mergeRichText(input.title);
  }
  if (isRichText(input)) {
    return mergeRichText(input.rich_text);
  }
  if (isCheckbox(input)) {
    return input.checkbox;
  }
}

function mergeRichText(input: RichTextItemResponse[]): string {
  return input.map((it) => it.plain_text).join("");
}
