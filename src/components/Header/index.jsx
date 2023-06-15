function Header() {
  return (
    <header className="main-header">
      <h1>Product Builder</h1>
      <nav className="main-nav">
        <ul>
          <li className="active">
            <span>Models</span>
          </li>
          <li>
            <span>Colors</span>
          </li>
          <li>
            <span>Accessories</span>
          </li>
          <li>
            <span>Summary</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
