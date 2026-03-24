import { tickerItems } from "../data/mockData";

export function MarketTickerMarquee() {
  const doubled = [...tickerItems, ...tickerItems];
  return (
    <div className="ticker-marquee">
      <div className="ticker-track">
        {doubled.map((item, idx) => (
          <div className="ticker-item" key={`${item.symbol}-${idx}`}>
            <span className="ticker-symbol">{item.symbol}</span>
            <span className="ticker-price">{item.price}</span>
            <span className={`ticker-change ${item.change >= 0 ? "pos" : "neg"}`}>
              {item.change >= 0 ? "+" : ""}
              {item.change.toFixed(2)}%
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
