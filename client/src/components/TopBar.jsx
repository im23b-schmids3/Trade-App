import { FiBell, FiGrid, FiUser } from "react-icons/fi";

const menuItems = ["Markets", "Trade", "Derivatives", "Earn", "NFT", "Institutional"];

export function TopBar() {
  return (
    <header className="top-bar">
      <div className="brand">
        <FiGrid size={18} color="var(--accent)" />
        <span>TRADEDESK</span>
      </div>
      <nav>
        {menuItems.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </nav>
      <div className="actions">
        <div className="action-pill">
          <span>USD?-M</span>
        </div>
        <div className="action-pill">
          <span>Futures +125x</span>
        </div>
        <button className="action-pill" aria-label="notifications">
          <FiBell size={16} />
        </button>
        <button className="action-pill" aria-label="profile">
          <FiUser size={16} />
        </button>
        <button className="primary-btn">Log In</button>
      </div>
    </header>
  );
}
