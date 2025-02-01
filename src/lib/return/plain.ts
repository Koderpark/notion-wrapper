import { QueryDatabaseResponse } from "@notionhq/client/build/src/api-endpoints";
import { RichTextItemResponse } from "@notionhq/client/build/src/api-endpoints";
import { Prop } from "../../types/properties";
import {
  isTitle,
  isRichText,
  isCheckbox,
  isCreatedBy,
  isCreatedTime,
  isDate,
  isEmail,
  isFiles,
  isFormula,
  isIcon,
  isLastEditedBy,
  isLastEditedTime,
  isMultiSelect,
  isNumber,
  isPeople,
  isPhoneNumber,
  isSelect,
  isStatus,
  isUrl,
  isUniqueId,
  isVerification,
} from "../narrowing";
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

export async function narrowing(input: Prop) {
  if (isTitle(input)) return mergeText(input.title);
  if (isRichText(input)) return mergeText(input.rich_text);
  if (isCheckbox(input)) return input.checkbox;
  if (isCreatedBy(input)) return input.created_by;
  if (isCreatedTime(input)) return input.created_time;
  if (isDate(input)) return input.date;
  if (isEmail(input)) return input.email;
  if (isFiles(input)) return input.files;
  if (isFormula(input)) return input.formula;
  if (isIcon(input)) return input.icon;
  if (isLastEditedBy(input)) return input.last_edited_by;
  if (isLastEditedTime(input)) return input.last_edited_time;
  if (isMultiSelect(input)) return input.multi_select;
  if (isNumber(input)) return input.number;
  if (isPeople(input)) return input.people;
  if (isPhoneNumber(input)) return input.phone_number;
  if (isSelect(input)) return input.select;
  if (isStatus(input)) return input.status;
  if (isUrl(input)) return input.url;
  if (isUniqueId(input)) return input.unique_id;
  if (isVerification(input)) return input.verification;
}

function mergeText(input: RichTextItemResponse[]): string {
  return input.map((it) => it.plain_text).join("");
}
