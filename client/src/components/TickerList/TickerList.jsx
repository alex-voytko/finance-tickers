import { v4 as uuidv4 } from "uuid";

import TickerItem from "../TickerItem";

function TickerList({ tickers }) {
  return (
    <ul className="ticker-list">
      {tickers[0].map((ticker, index) => (
        <TickerItem
          key={uuidv4()}
          {...ticker}
          i={index}
          tickersLast={tickers[1]}
        />
      ))}
    </ul>
  );
}

export default TickerList;
