import { useState } from "react";

const tabs = ["Limit", "Market", "Stop"];

export function TradeForm() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [side, setSide] = useState("buy");

  return (
    <section className="section-card trade-form">
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "0.5rem" }}>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? "var(--accent-soft)" : "transparent",
                border: "none",
                color: activeTab === tab ? "var(--accent)" : "var(--fg-muted)",
                padding: "0.35rem 0.65rem",
                borderRadius: "8px",
                cursor: "pointer"
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="badge">Cross 10x</div>
      </div>

      <div style={{ display: "flex", gap: "0.5rem", margin: "1rem 0" }}>
        {[
          { label: "Buy", value: "buy", color: "var(--success)" },
          { label: "Sell", value: "sell", color: "var(--danger)" }
        ].map((option) => (
          <button
            key={option.value}
            onClick={() => setSide(option.value)}
            style={{
              flex: 1,
              background: side === option.value ? option.color : "rgba(255,255,255,0.02)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: side === option.value ? "#050c17" : "var(--fg-muted)",
              borderRadius: "12px",
              padding: "0.6rem 0",
              cursor: "pointer",
              fontWeight: 600
            }}
          >
            {option.label}
          </button>
        ))}
      </div>

      <label style={{ fontSize: "0.85rem", color: "var(--fg-muted)" }}>
        Price (USDT)
        <input
          type="number"
          defaultValue="67131"
          style={{
            width: "100%",
            marginTop: "0.3rem",
            marginBottom: "0.8rem",
            padding: "0.7rem 0.8rem",
            background: "rgba(0,0,0,0.25)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            color: "var(--fg-primary)"
          }}
        />
      </label>

      <label style={{ fontSize: "0.85rem", color: "var(--fg-muted)" }}>
        Amount (BTC)
        <input
          type="number"
          defaultValue="0.5"
          style={{
            width: "100%",
            marginTop: "0.3rem",
            marginBottom: "0.8rem",
            padding: "0.7rem 0.8rem",
            background: "rgba(0,0,0,0.25)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "12px",
            color: "var(--fg-primary)"
          }}
        />
      </label>

      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.85rem", color: "var(--fg-muted)", marginBottom: "0.9rem" }}>
        <span>Total</span>
        <strong style={{ color: "var(--fg-primary)" }}>$33,565.50</strong>
      </div>

      <button
        className="primary-btn"
        style={{ width: "100%", textTransform: "uppercase" }}
      >
        {side === "buy" ? "Buy BTC" : "Sell BTC"}
      </button>
    </section>
  );
}
