import classNames from "classnames";

function TickerValue({ value, diffVal, className }) {
  const valueClassName = classNames(className, {
    negative: diffVal[0] === "-",
  });
  return (
    <div className={valueClassName}>
      {value}
      {className.includes("percent") ? "%" : "$"}
      {diffVal !== null && <span>{diffVal}</span>}
    </div>
  );
}

export default TickerValue;
