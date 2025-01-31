import Client, { ClientOptions } from "@notionhq/client/build/src/Client";
import { makeRich } from "./return/rich";
import { makePlain } from "./return/plain";

export interface WrapperOptions {
  returnType: "Rich" | "Plain";
}

export class NotionWrapper {
  private client!: Client;
  private returnType!: WrapperOptions["returnType"];

  constructor(private auth: ClientOptions, opt: WrapperOptions) {
    this.client = new Client(auth);
    this.returnType = opt.returnType;
  }

  async queryDB(db: string): Promise<any> {
    if (!this.client) throw new Error("client is not initialized");
    if (!this.returnType) throw new Error("returnType is not initialized");

    const ret = await this.client.databases.query({
      database_id: db,
    });

    if (this.returnType === "Rich") return makeRich(ret);
    if (this.returnType === "Plain") return makePlain(ret);
  }
}
