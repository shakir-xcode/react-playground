import { BinaryGate } from "./BinaryGate";

class AND extends BinaryGate {
  constructor() {
    super(false, false, false);
  }

  calculateOutput() {
    if (this.inputOne && this.inputTwo) this.output = true;
    else this.output = false;
  }
}

export function createAND() {
  return new AND();
}
