import { Annotations, Column } from "./Column";

interface Title extends Column {
  title: {
    type: string;
    text: {
      content: string;
      link: string | null;
    };
    annotations: Annotations;
    plain_text: string;
    href: string;
  }[];
}

export type { Title };
