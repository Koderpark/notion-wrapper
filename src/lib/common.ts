import {
  PageObjectResponse,
  QueryDatabaseResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { isFullPage } from "@notionhq/client";
import { prop } from "../types/properties";

export async function getPageList(
  input: QueryDatabaseResponse
): Promise<PageObjectResponse[]> {
  const ret: PageObjectResponse[] = [];
  for (const it of input.results) {
    if (isFullPage(it)) {
      ret.push(it);
    }
  }
  return ret;
}

export async function rangeProp<T>(
  input: PageObjectResponse,
  callback: (key: string, value: prop) => Promise<T>
): Promise<T[]> {
  const ret: T[] = [];
  for (const [key, value] of Object.entries(input.properties)) {
    ret.push(await callback(key, value));
  }
  return ret;
}
