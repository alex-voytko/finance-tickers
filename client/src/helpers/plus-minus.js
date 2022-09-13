const plus_minus = (val0, val1) => {
  if (val1 === undefined) val1 = val0;
  return val0 - val1 > 0
    ? "+" + (val0 - val1).toFixed(2)
    : (val0 - val1).toFixed(2);
};

export default plus_minus;
