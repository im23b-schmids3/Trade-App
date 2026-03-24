import { heatmapCoins } from "../data/mockData";

export function MarketHeatmap() {
  return (
    <section className="section-card heatmap">
      <h3>Market Heatmap</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))",
          gap: "0.75rem"
        }}
      >
        {heatmapCoins.map((coin) => (
          <div
            key={coin.symbol}
            style={{
              padding: "1rem",
              borderRadius: "14px",
              background: coin.change >= 0 ? "rgba(14,203,129,0.15)" : "rgba(255,91,91,0.15)",
              border: "1px solid rgba(255,255,255,0.05)",
              minHeight: "90px"
            }}
          >
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <strong>{coin.symbol}</strong>
              <span style={{ color: "var(--fg-muted)", fontSize: "0.8rem" }}>{coin.weight}%</span>
            </div>
            <div
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: coin.change >= 0 ? "var(--success)" : "var(--danger)",
                marginTop: "0.4rem"
              }}
            >
              {coin.change >= 0 ? "+" : ""}
              {coin.change}%
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
