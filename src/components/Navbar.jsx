import "../styles/navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">MyPortfolio</h2>

      <ul className="nav-links">
  <li>
    <a href="#home">Home</a>
  </li>

  <li>
    <a href="#about">About</a>
  </li>

  <li>
    <a href="#projects">Projects</a>
  </li>
</ul>
    </nav>
  );
}

export default Navbar;