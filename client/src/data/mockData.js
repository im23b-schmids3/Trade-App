export const tickerItems = [
  { symbol: "BTC/USDT", price: "67,120.45", change: 2.15 },
  { symbol: "ETH/USDT", price: "3,210.12", change: -0.85 },
  { symbol: "BNB/USDT", price: "585.64", change: 1.32 },
  { symbol: "SOL/USDT", price: "148.77", change: 4.81 },
  { symbol: "XRP/USDT", price: "0.64", change: -1.28 },
  { symbol: "DOGE/USDT", price: "0.19", change: 8.52 }
];

export const marketSnapshots = [
  { title: "24h Volume", value: "$42.7B", delta: "+5.6%" },
  { title: "Open Interest", value: "$9.3B", delta: "+1.1%" },
  { title: "Funding Rate", value: "0.012%", delta: "?" },
  { title: "Greed & Fear", value: "72 (Greed)", delta: "" }
];

export const orderBook = {
  bids: [
    { price: "67,110.12", amount: "1.25", total: "84,000" },
    { price: "67,105.44", amount: "0.98", total: "150,000" },
    { price: "67,100.02", amount: "0.55", total: "187,000" },
    { price: "67,097.80", amount: "2.14", total: "330,000" }
  ],
  asks: [
    { price: "67,130.90", amount: "0.64", total: "43,000" },
    { price: "67,135.10", amount: "1.12", total: "118,000" },
    { price: "67,140.00", amount: "0.55", total: "155,000" },
    { price: "67,145.86", amount: "1.94", total: "285,000" }
  ]
};

export const trades = [
  { time: "12:30:12", price: "67,131.44", qty: "0.083", side: "buy" },
  { time: "12:30:08", price: "67,129.90", qty: "0.421", side: "sell" },
  { time: "12:30:02", price: "67,128.10", qty: "0.053", side: "sell" },
  { time: "12:29:55", price: "67,135.33", qty: "0.318", side: "buy" },
  { time: "12:29:39", price: "67,140.02", qty: "1.102", side: "buy" }
];

export const heatmapCoins = [
  { symbol: "BTC", change: 2.15, weight: 38 },
  { symbol: "ETH", change: -0.85, weight: 25 },
  { symbol: "SOL", change: 4.81, weight: 12 },
  { symbol: "BNB", change: 1.32, weight: 8 },
  { symbol: "XRP", change: -1.28, weight: 7 },
  { symbol: "DOGE", change: 8.52, weight: 5 },
  { symbol: "ADA", change: 0.92, weight: 4 },
  { symbol: "ARB", change: -2.44, weight: 3 }
];
