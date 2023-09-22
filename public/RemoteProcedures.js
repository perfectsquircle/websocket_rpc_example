import { RpcClient } from "../RpcClient.js";

export class RemoteProcedures extends RpcClient {
  async multiplyByOneThousand(number) {
    return this.callRemoteProcedure("multiplyByOneThousand", [...arguments]);
  }

  async doSquareRoot(number) {
    return this.callRemoteProcedure("doSquareRoot", [...arguments]);
  }
}
