export default function Header() {
  return (
    <header className="site-header">
      <nav className="nav">
        <div className="brand">
          <div className="logo" aria-hidden>
            🟣
          </div>
          <span className="gradient-text">PDF Tools</span>
        </div>
        <ul className="nav-links">
          <li>
            <a href="#features">Tính năng</a>
          </li>
          <li>
            <a href="#how">Hướng dẫn</a>
          </li>
          <li>
            <a href="#pricing">Giá cả</a>
          </li>
          <li>
            <a href="#auth">Đăng nhập</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
