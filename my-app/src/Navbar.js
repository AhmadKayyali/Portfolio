// Navbar component

import "./Navbar.css";

function Navbar({ scrollToSection }) {
  return (
    <div className="navbar-container">
        
    <div className="inner-container">
      <ul className="option-buttons">
          <li>
            <button onClick={() => scrollToSection("aboutRef")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projectsRef")}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contactRef")}>Contact</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
