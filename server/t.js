const plus_minus = (val0, val1) =>
  val0 - val1 > 0 ? "+" + (val0 - val1) : (val0 - val1).toString();

console.log(plus_minus(4, 1));
