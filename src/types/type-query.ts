import result from "./type-result";

export default interface query {
  object: string;
  results: Array<result>;
  next_cursor: null;
  has_more: boolean;
  type: string;
  page_or_database: any;
}
