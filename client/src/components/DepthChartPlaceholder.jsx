export function DepthChartPlaceholder() {
  return (
    <section className="section-card depth-chart">
      <h3>Depth</h3>
      <div
        style={{
          height: "220px",
          background: "linear-gradient(90deg, rgba(14,203,129,0.3), rgba(240,185,11,0.25))",
          borderRadius: "16px",
          position: "relative",
          overflow: "hidden"
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "repeating-linear-gradient(0deg, rgba(255,255,255,0.05) 0, rgba(255,255,255,0.05) 1px, transparent 1px, transparent 32px)",
            opacity: 0.4
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "auto 0 30px 0",
            display: "flex",
            justifyContent: "space-between",
            padding: "0 1rem",
            color: "var(--fg-muted)",
            fontSize: "0.85rem"
          }}
        >
          <span>67,090</span>
          <span>67,130</span>
          <span>67,170</span>
        </div>
      </div>
    </section>
  );
}
