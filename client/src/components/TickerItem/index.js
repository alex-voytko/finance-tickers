import { memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import plus_minus from "../../helpers/plus-minus";
import classNames from "classnames";
import TickerValue from "../TickerValue";
import { setMarkedItems } from "../../redux/slice/tickers-slice";

function TickerItem({ price, i, tickersLast, ticker, change, change_percent }) {
  const dispatch = useDispatch();
  const showSelecting = useSelector((state) => state.tickers.showSelecting);
  const markedItems = useSelector((state) => state.tickers.markedItems);

  const styles = {
    checkbox: classNames(
      "ticker-select",
      {
        "is-visible": showSelecting,
      },
      { "is-marked": markedItems.includes(i) }
    ),
    item: classNames("ticker-item", {
      "is-pointing": showSelecting,
    }),
    ticker: classNames("ticker-acronym", ticker, {
      "is-pointing": showSelecting,
    }),
    price: classNames("ticker-price", { "is-pointing": showSelecting }),
    change: classNames("ticker-change", { "is-pointing": showSelecting }),
    change_percent: classNames("ticker-change_percent", {
      "is-pointing": showSelecting,
    }),
  };

  return (
    <li
      className={styles.item}
      onClick={(e) => {
        const { index } = e.currentTarget.dataset;
        dispatch(setMarkedItems(Number(index)));
      }}
      data-index={i}
    >
      <div className={styles.checkbox}></div>
      <div className={styles.ticker}>{ticker}</div>
      <TickerValue
        value={price}
        diffVal={tickersLast[i] ? plus_minus(price, tickersLast[i].price) : ""}
        className={styles.price}
      />
      <TickerValue
        value={change}
        diffVal={
          tickersLast[i] ? plus_minus(change, tickersLast[i].change) : ""
        }
        className={styles.change}
      />
      <TickerValue
        value={change_percent}
        diffVal={
          tickersLast[i]
            ? plus_minus(change_percent, tickersLast[i].change_percent)
            : ""
        }
        className={styles.change_percent}
      />
    </li>
  );
}

export default memo(TickerItem);
