const stats = [
  { label: "Funding Settlement", value: "04:16:32" },
  { label: "Insurance Fund", value: "$1.4B" },
  { label: "Index Price", value: "67,098.22" },
  { label: "Mark Price", value: "67,126.02" }
];

export function StatsPanel() {
  return (
    <section className="section-card stats-panel">
      <h3>Market Stats</h3>
      <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.75rem" }}>
        {stats.map((stat) => (
          <li key={stat.label} style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9rem" }}>
            <span style={{ color: "var(--fg-muted)" }}>{stat.label}</span>
            <strong>{stat.value}</strong>
          </li>
        ))}
      </ul>
    </section>
  );
}
