import {
  PartialUserObjectResponse,
  RichTextItemResponse,
  UserObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";
import { SubSelect, SubFile, SubDate } from "./subprop";

export interface Prop {
  id: string;
  type: string;
}

export interface Checkbox extends Prop {
  checkbox: boolean;
}

export interface CreatedBy extends Prop {
  created_by: PartialUserObjectResponse | UserObjectResponse;
}

export interface CreatedTime extends Prop {
  created_time: string;
}

export interface Date extends Prop {
  date: SubDate;
}

export interface Email extends Prop {
  email: string;
}

export interface Files extends Prop {
  files: Array<SubFile>;
}

export interface Formula extends Prop {
  formula: {
    type: "boolean" | "date" | "number" | "string";
    number?: number;
    string?: string;
    boolean?: boolean;
    date?: SubDate;
  };
}

export interface Icon extends Prop {
  icon: {
    type: "emoji" | "file";
    emoji?: string;
    file?: SubFile;
  };
}

export interface LastEditedBy extends Prop {
  last_edited_by: PartialUserObjectResponse | UserObjectResponse;
}

export interface LastEditedTime extends Prop {
  last_edited_time: string;
}

export interface MultiSelect extends Prop {
  multi_select: Array<SubSelect>;
}

export interface Number extends Prop {
  number: number;
}

export interface People extends Prop {
  people: Array<PartialUserObjectResponse | UserObjectResponse>;
}

export interface PhoneNumber extends Prop {
  phone_number: string;
}

// Todo: Relation extends Prop {

// Todo Rollup extends Prop {

export interface RichText extends Prop {
  rich_text: Array<RichTextItemResponse>;
}

export interface Select extends Prop {
  select: SubSelect;
}

export interface Status extends Prop {
  status: SubSelect;
}

export interface Title extends Prop {
  title: Array<RichTextItemResponse>;
}

export interface Url extends Prop {
  url: string;
}

export interface UniqueId extends Prop {
  unique_id: string;
}

export interface Verification extends Prop {
  verification: {
    state: "verified" | "unverified";
    verified_by: PartialUserObjectResponse | UserObjectResponse;
    date: SubDate;
  };
}
