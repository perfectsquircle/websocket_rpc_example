module.exports = class Rpc {
  socket;

  constructor(socket) {
    this.socket = socket;
    socket.on("message", this.#onMessage.bind(this));
  }

  /**
   * Handle all incoming messages. Match client requests to local procedures.
   * @param {String} msg
   */
  #onMessage(msg) {
    console.log(`[message] Data received from client: ${msg}`);
    let request = JSON.parse(msg);
    let procedure = this[request.procedure];
    if (!procedure) {
      console.log(`No such procedure: ${request.procedure}`);
      return;
    }
    let result, error;
    try {
      result = procedure(...request.args);
    } catch (e) {
      error = e;
    }

    this.socket.send(
      JSON.stringify({
        id: request.id,
        payload: result,
        error: error,
      })
    );
  }
};
