import Client, { ClientOptions } from "@notionhq/client/build/src/Client";
import { makeRich } from "./return/rich";
import { makePlain } from "./return/plain";

export interface WrapperOptions {
  returnType: "Raw" | "Rich" | "Plain";
}

export class NotionWrapper {
  private client!: Client;
  private option!: WrapperOptions;

  constructor(auth: ClientOptions, opt: WrapperOptions) {
    this.client = new Client(auth);
    this.option = opt;
  }

  async queryDB(db: string): Promise<any> {
    if (!this.client) throw new Error("client is not initialized");
    if (!this.option) throw new Error("option is not initialized");

    const ret = await this.client.databases.query({
      database_id: db,
    });

    if (this.option.returnType === "Raw") return ret;
    if (this.option.returnType === "Rich") return makeRich(ret);
    if (this.option.returnType === "Plain") return makePlain(ret);
    throw new Error("Invalid return type");
  }
}
