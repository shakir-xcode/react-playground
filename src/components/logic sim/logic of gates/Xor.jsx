import { BinaryGate } from "./BinaryGate";

class XOR extends BinaryGate {
  constructor() {
    super(false, false, false);
  }

  calculateOutput() {
    if (this.inputOne === this.inputTwo) this.output = false;
    else this.output = true;
  }
}

export function createXOR() {
  return new XOR();
}
