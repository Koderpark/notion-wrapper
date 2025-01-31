import { prop, title, rich_text, checkbox } from "../types/properties";

function isTitle(input: prop): input is title {
  return input.type === "title";
}

function isRichText(input: prop): input is rich_text {
  return input.type === "rich_text";
}

function isCheckbox(input: prop): input is checkbox {
  return input.type === "checkbox";
}

export { isTitle, isRichText, isCheckbox };
