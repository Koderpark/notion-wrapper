import {
  PartialUserObjectResponse,
  RichTextItemResponse,
  UserObjectResponse,
} from "@notionhq/client/build/src/api-endpoints";

export interface prop {
  id: string;
  type: string;
}

export interface title extends prop {
  title: Array<RichTextItemResponse>;
}

export interface rich_text extends prop {
  rich_text: Array<RichTextItemResponse>;
}

export interface checkbox extends prop {
  checkbox: boolean;
}

export interface created_by extends prop {
  created_by: PartialUserObjectResponse | UserObjectResponse;
}

export interface created_time extends prop {
  created_time: string;
}

export interface date extends prop {
  date: {
    start?: string;
    end?: string;
  };
}

export interface email extends prop {
  email: string;
}
