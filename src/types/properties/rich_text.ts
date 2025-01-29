import { prop, annotations } from "../prop";

interface rich_text extends prop {
  rich_text: {
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

export type { rich_text };
