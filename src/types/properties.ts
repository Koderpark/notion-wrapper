import {
  PartialUserObjectResponse,
  RichTextItemResponse,
  UserObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export interface prop {
  id: string;
  type: string;
}

export interface file {
  name: string;
  type: "file" | "external";
  file?: {
    url: string;
    expiry_time: string;
  };
  external?: {
    url: string;
  };
}

type color =
  | "default"
  | "gray"
  | "brown"
  | "orange"
  | "yellow"
  | "green"
  | "blue"
  | "purple"
  | "pink"
  | "red";

export interface select {
  id: string;
  name: string;
  color: color;
}

export interface Checkbox extends prop {
  checkbox: boolean;
}

export interface CreatedBy extends prop {
  created_by: PartialUserObjectResponse | UserObjectResponse;
}

export interface CreatedTime extends prop {
  created_time: string;
}

export interface Date extends prop {
  date: {
    start?: string;
    end?: string;
  };
}

export interface Email extends prop {
  email: string;
}

export interface Files extends prop {
  files: Array<file>;
}

export interface Formula extends prop {
  formula: {
    type: "boolean" | "date" | "number" | "string";
    number?: number;
    string?: string;
    boolean?: boolean;
    date?: {
      start?: string;
      end?: string;
    };
  };
}

export interface Icon extends prop {
  icon: {
    type: "emoji" | "file";
    emoji?: string;
    file?: file;
  };
}

export interface LastEditedBy extends prop {
  last_edited_by: PartialUserObjectResponse | UserObjectResponse;
}

export interface LastEditedTime extends prop {
  last_edited_time: string;
}

export interface MultiSelect extends prop {
  multi_select: Array<select>;
}

export interface Number extends prop {
  number: number;
}

export interface People extends prop {
  people: Array<PartialUserObjectResponse | UserObjectResponse>;
}

export interface PhoneNumber extends prop {
  phone_number: string;
}

// export interface Relation extends prop {
//   relation: Array<{ id: string }>;
//   has_more: boolean;
// }

// export interface Rollup extends prop {
//   rollup: {
//     type: "array" | "date" | "incomplete" | "number" | "unsupported";
//     array?: Array<string>;
//     date?: {
//       start?: string;
//       end?: string;
//     };
//     number?: number;
//     select?: select;
//   };
// }

export interface RichText extends prop {
  rich_text: Array<RichTextItemResponse>;
}

export interface Select extends prop {
  select: select;
}

export interface Status extends prop {
  status: select;
}

export interface Title extends prop {
  title: Array<RichTextItemResponse>;
}

export interface Url extends prop {
  url: string;
}

export interface UniqueId extends prop {
  unique_id: string;
}

export interface Verification extends prop {
  verification: {
    state: "verified" | "unverified";
    verified_by: PartialUserObjectResponse | UserObjectResponse;
    // date: date;
  };
}
