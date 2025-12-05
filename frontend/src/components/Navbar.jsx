import { NavLink, Link } from 'react-router-dom';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    'site-nav__link' + (isActive ? ' site-nav__link--active' : '');

  return (
    <header className="site-header">
      <div className="site-header__logo">
        <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
          VIRTUELE KUNSTGALERIJ
        </Link>
      </div>
      <nav className="site-nav">
        <NavLink to="/collections" className={linkClass}>
          Collecties
        </NavLink>
        <NavLink to="/favorites" className={linkClass}>
          Favorieten
        </NavLink>
        <NavLink to="/admin" className={linkClass}>
          Beheer
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;


