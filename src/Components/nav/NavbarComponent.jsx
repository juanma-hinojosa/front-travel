import { useState } from "react";
import { Icon } from "@iconify/react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar poppins-regular" >
      <div className="navbar-container">
        <h2 className="logo playwrite-at-title"  >Te amo Rafa</h2>

        {/* Desktop Menu */}
        <ul className="nav-links desktop">
          <li>Inicio</li>
          {/* <li>Entradas</li>
          <li>Contacto</li> */}
        </ul>

        {/* Hamburger Button */}
        <div
          className="menu-icon"
          onClick={() => setMenuOpen(true)}
        >
          <Icon icon="mdi:menu" width="30" />
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "active" : ""}`}>
        <div className="close-icon" onClick={() => setMenuOpen(false)}>
          <Icon icon="mdi:close" width="30" />
        </div>

        <ul>
          <li>
            <NavLink to='/' onClick={() => setMenuOpen(false)}>Inicio</NavLink>
          </li>
          {/* <li>
            <NavLink to='/entradas' onClick={() => setMenuOpen(false)}>Entradas</NavLink>
          </li> */}
          {/* <li>
            <NavLink to='/dates' onClick={() => setMenuOpen(false)}>Dates</NavLink>
          </li> */}
          <li>
            <NavLink to='/notinhas' onClick={() => setMenuOpen(false)}>Recados</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
