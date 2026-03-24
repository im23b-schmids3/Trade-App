import { trades } from "../data/mockData";

export function RecentTrades() {
  return (
    <section className="section-card recent-trades">
      <h3>Recent Trades</h3>
      <div style={{ maxHeight: "220px", overflowY: "auto" }}>
        {trades.map((trade) => (
          <div
            key={trade.time + trade.price}
            style={{
              display: "grid",
              gridTemplateColumns: "80px 1fr 1fr",
              fontSize: "0.85rem",
              padding: "0.4rem 0",
              borderBottom: "1px solid rgba(255,255,255,0.03)"
            }}
          >
            <span style={{ color: "var(--fg-muted)" }}>{trade.time}</span>
            <span style={{ color: trade.side === "buy" ? "var(--success)" : "var(--danger)" }}>{trade.price}</span>
            <span style={{ textAlign: "right", color: "var(--fg-muted)" }}>{trade.qty}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
