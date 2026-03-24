import { marketSnapshots } from "../data/mockData";

export function MarketOverview() {
  return (
    <section className="section-card market-overview">
      {marketSnapshots.map((snapshot) => (
        <article className="market-card" key={snapshot.title}>
          <p className="ticker-price">{snapshot.title}</p>
          <strong>{snapshot.value}</strong>
          {snapshot.delta && (
            <span className="badge" aria-label="change">
              {snapshot.delta}
            </span>
          )}
        </article>
      ))}
    </section>
  );
}
