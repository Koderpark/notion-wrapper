import { rich_text } from "./properties/rich_text";
import { title } from "./properties/Title";

export default interface result {
  object: string;
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: created_by;
  last_edited_by: last_edited_by;
  cover: any;
  icon: any;
  parent: parent;
  archived: boolean;
  in_trash: boolean;
  properties: Map<string, title | rich_text>;
  url: string;
  public_url: string | null;
}

interface created_by {
  object: string;
  id: string;
}

interface last_edited_by {
  object: string;
  id: string;
}

interface parent {
  type: string;
  database_id: string;
}
