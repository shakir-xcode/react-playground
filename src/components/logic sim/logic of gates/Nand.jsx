import { BinaryGate } from "./BinaryGate";

class NAND extends BinaryGate {
  constructor() {
    super(false, false, true);
  }

  calculateOutput() {
    if (!(this.inputOne && this.inputTwo)) this.output = true;
    else this.output = false;
  }
}

export function createNAND() {
  return new NAND();
}
