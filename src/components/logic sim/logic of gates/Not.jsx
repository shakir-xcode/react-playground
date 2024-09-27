import { BinaryGate } from "./BinaryGate";

class NOT {
  constructor(i, o) {
    this.input = i || true;
    this.output = o || false;
  }

  toggleInput() {
    this.input = !this.input;
  }

  calculateOutput() {
    this.output = !this.input;
  }

  getAllState() {
    return {
      input: this.input,
      output: this.output,
    };
  }

  getOutput() {
    return this.output;
  }
}

export function createNOT() {
  return new NOT();
}
