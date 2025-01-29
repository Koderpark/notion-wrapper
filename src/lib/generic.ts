import result from "../types/type-result";
import { rich_text } from "../types/properties/rich_text";
import { title } from "../types/properties/Title";

type prop = title | rich_text;

async function RangeProp(val: result): Promise<any> {
  const ret = Object.entries(val.properties).map(
    ([key, value]: [string, prop]) => {
      ParseProp(key, value);
    }
  );
}

function isRichText(input: prop): input is rich_text {
  return input.type === "rich_text";
}

function isTitle(input: prop): input is title {
  return input.type === "title";
}

function ParseProp<T extends prop>(key: string, value: T): T {
  // console.log(value);

  if (isTitle(value)) console.log(value.title);
  if (isRichText(value)) console.log(value.rich_text);

  return value;
}

export { RangeProp, ParseProp };
