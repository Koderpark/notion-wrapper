import {
  Prop,
  Checkbox,
  CreatedBy,
  CreatedTime,
  Date,
  Email,
  Files,
  Formula,
  Icon,
  LastEditedBy,
  LastEditedTime,
  MultiSelect,
  Number,
  People,
  PhoneNumber,
  RichText,
  Select,
  Status,
  Title,
  Url,
  UniqueId,
  Verification,
} from "../types/properties";

export function isCheckbox(input: Prop): input is Checkbox {
  return input.type === "checkbox";
}

export function isCreatedBy(input: Prop): input is CreatedBy {
  return input.type === "created_by";
}

export function isCreatedTime(input: Prop): input is CreatedTime {
  return input.type === "created_time";
}

export function isDate(input: Prop): input is Date {
  return input.type === "date";
}

export function isEmail(input: Prop): input is Email {
  return input.type === "email";
}

export function isFiles(input: Prop): input is Files {
  return input.type === "files";
}

export function isFormula(input: Prop): input is Formula {
  return input.type === "formula";
}

export function isIcon(input: Prop): input is Icon {
  return input.type === "icon";
}

export function isLastEditedBy(input: Prop): input is LastEditedBy {
  return input.type === "last_edited_by";
}

export function isLastEditedTime(input: Prop): input is LastEditedTime {
  return input.type === "last_edited_time";
}

export function isMultiSelect(input: Prop): input is MultiSelect {
  return input.type === "multi_select";
}

export function isNumber(input: Prop): input is Number {
  return input.type === "number";
}

export function isPeople(input: Prop): input is People {
  return input.type === "people";
}

export function isPhoneNumber(input: Prop): input is PhoneNumber {
  return input.type === "phone_number";
}

export function isRichText(input: Prop): input is RichText {
  return input.type === "rich_text";
}

export function isSelect(input: Prop): input is Select {
  return input.type === "select";
}

export function isStatus(input: Prop): input is Status {
  return input.type === "status";
}

export function isTitle(input: Prop): input is Title {
  return input.type === "title";
}

export function isUrl(input: Prop): input is Url {
  return input.type === "url";
}

export function isUniqueId(input: Prop): input is UniqueId {
  return input.type === "unique_id";
}

export function isVerification(input: Prop): input is Verification {
  return input.type === "verification";
}
