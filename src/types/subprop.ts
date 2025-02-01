export type SubColor =
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

export interface SubSelect {
  id: string;
  name: string;
  color: SubColor;
}

export interface SubFile {
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

export interface SubDate {
  start?: string;
  end?: string;
  time_zone?: string;
}
