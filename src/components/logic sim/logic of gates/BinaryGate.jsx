export class BinaryGate {
  constructor(i1, i2, o) {
    this.inputOne = i1 || false;
    this.inputTwo = i2 || false;
    this.output = o || false;
  }

  toggleInputOne() {
    this.inputOne = !this.inputOne;
  }

  toggleInputTwo() {
    this.inputTwo = !this.inputTwo;
  }

  getOutput() {
    return this.output;
  }

  getAllState() {
    return {
      inputOne: this.inputOne,
      inputTwo: this.inputTwo,
      output: this.output,
    };
  }
}
