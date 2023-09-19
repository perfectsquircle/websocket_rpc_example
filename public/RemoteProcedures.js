import { RpcClient } from "../RpcClient.js";

export class RemoteProcedures extends RpcClient {
  async multiplyByOneThousand(number) {
    return this.call("multiplyByOneThousand", [...arguments]);
  }

  async doSquareRoot(number) {
    return this.call("doSquareRoot", [...arguments]);
  }
}
