interface prop {
  id: string;
  type: string;
}

interface annotations {
  bold: boolean;
  italic: boolean;
  strikethrough: boolean;
  underline: boolean;
  code: boolean;
  color: string;
}

export type { prop, annotations };
