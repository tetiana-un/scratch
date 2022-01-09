let calculator = {
  read() {
    this.operand1 = +prompt('operand1')
    this.operand2 = +promt('operand2')},
  sum() {
    return this.operand1 + this.operand2},
  mul() {
    return this.operand1 * this.operand2}
};

calculator.read();
alert( calculator.sum());
alert( calculator.mul() );