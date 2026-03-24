import { orderBook } from "../data/mockData";

function SideTable({ rows, type }) {
  return (
    <div style={{ flex: 1 }}>
      {rows.map((row) => (
        <div
          key={row.price}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            fontSize: "0.85rem",
            marginBottom: "0.35rem",
            color: type === "bid" ? "var(--success)" : "var(--danger)"
          }}
        >
          <span>{row.price}</span>
          <span style={{ color: "var(--fg-muted)" }}>{row.amount}</span>
          <span style={{ color: "var(--fg-muted)" }}>{row.total}</span>
        </div>
      ))}
    </div>
  );
}

export function OrderBook() {
  return (
    <section className="section-card order-book">
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "0.75rem" }}>
        <h3>Order Book</h3>
        <span className="badge">Grouped 0.1</span>
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        <SideTable rows={orderBook.asks} type="ask" />
        <SideTable rows={orderBook.bids} type="bid" />
      </div>
      <div style={{ marginTop: "0.75rem", textAlign: "center", color: "var(--fg-muted)", fontSize: "0.85rem" }}>
        Last Price&nbsp;
        <strong style={{ color: "var(--fg-primary)", fontSize: "1.1rem" }}>67,131.02</strong>
        &nbsp;USD
      </div>
    </section>
  );
}
