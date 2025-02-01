import { Prop, Title, RichText, Checkbox } from "../types/properties";

function isTitle(input: Prop): input is Title {
  return input.type === "title";
}

function isRichText(input: Prop): input is RichText {
  return input.type === "rich_text";
}

function isCheckbox(input: Prop): input is Checkbox {
  return input.type === "checkbox";
}

export { isTitle, isRichText, isCheckbox };
