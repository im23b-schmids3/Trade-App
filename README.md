# Trade-App

Binance-inspired trading dashboard built with React + Vite. The UI mirrors a pro crypto exchange desk (top bar, live tickers, order book, trade form, stats, heatmap) but does not include backend wiring yet.

## Structure

- `client/` – Vite React SPA with modular components and mock data
  - `src/components` – UI building blocks such as `TopBar`, `OrderBook`, `TradeForm`, etc.
  - `src/data` – static fixtures for tickers, order book levels, trades, heatmap
  - `src/styles` – global theme tokens + layout/Grid rules

## Getting Started

```bash
cd client
npm install
npm run dev   # http://localhost:5173
```

## Production Build

```bash
cd client
npm run build
npm run preview
```

Feel free to plug in real-time data sources or WebSocket feeds later—the layout is ready for it.
