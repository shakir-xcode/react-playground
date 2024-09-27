import { BinaryGate } from "./BinaryGate";

class NOR extends BinaryGate {
  constructor() {
    super(false, false, true);
  }

  calculateOutput() {
    if (!(this.inputOne || this.inputTwo)) this.output = true;
    else this.output = false;
  }
}

export function createNOR() {
  return new NOR();
}
