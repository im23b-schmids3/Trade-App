import "./styles/global.css";
import "./styles/layout.css";

import { TopBar } from "./components/TopBar";
import { MarketTickerMarquee } from "./components/MarketTickerMarquee";
import { MarketOverview } from "./components/MarketOverview";
import { DepthChartPlaceholder } from "./components/DepthChartPlaceholder";
import { OrderBook } from "./components/OrderBook";
import { TradeForm } from "./components/TradeForm";
import { RecentTrades } from "./components/RecentTrades";
import { StatsPanel } from "./components/StatsPanel";
import { MarketHeatmap } from "./components/MarketHeatmap";

function App() {
  return (
    <div className="app-shell">
      <TopBar />
      <MarketTickerMarquee />
      <main>
        <section className="section-card" style={{ marginBottom: "1.25rem" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <div>
              <p style={{ color: "var(--fg-muted)", margin: 0 }}>Perpetual Futures · BTCUSDT</p>
              <h1 style={{ margin: "0.3rem 0", fontSize: "2.4rem" }}>67,131.02</h1>
              <div style={{ display: "flex", gap: "0.75rem", fontSize: "0.9rem" }}>
                <span className="badge" style={{ color: "var(--success)" }}>+2.15%</span>
                <span className="badge">24h High 67,910</span>
                <span className="badge">24h Low 65,220</span>
              </div>
            </div>
            <div style={{ textAlign: "right" }}>
              <p style={{ margin: 0, color: "var(--fg-muted)" }}>Assets</p>
              <h2 style={{ margin: 0 }}>$128,420.34</h2>
              <p style={{ margin: 0, color: "var(--success)" }}>+12.4% vs last week</p>
            </div>
          </div>
        </section>
        <div className="grid-layout">
          <MarketOverview />
          <DepthChartPlaceholder />
          <OrderBook />
          <TradeForm />
          <RecentTrades />
          <StatsPanel />
          <MarketHeatmap />
        </div>
      </main>
    </div>
  );
}

export default App;
