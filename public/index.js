import { RemoteProcedures } from "./RemoteProcedures.js";
const remoteProcedures = new RemoteProcedures();
await remoteProcedures.open("ws://localhost:3001");

const input = document.querySelector("#input");
const multiplyButton = document.querySelector("#multiply-button");
const sqrtButton = document.querySelector("#sqrt-button");

multiplyButton.onclick = async () => {
  const result = await remoteProcedures.multiplyByOneThousand(
    Number(input.value)
  );
  input.value = result;
};

sqrtButton.onclick = async () => {
  const result = await remoteProcedures.doSquareRoot(Number(input.value));
  input.value = result;
};
