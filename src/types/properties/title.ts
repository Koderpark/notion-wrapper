import { prop, annotations } from "../prop";

interface title extends prop {
  title: {
    type: string;
    text: {
      content: string;
      link: string | null;
    };
    annotations: annotations;
    plain_text: string;
    href: string | null;
  }[];
}

export type { title };
