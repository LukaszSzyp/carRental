import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const { t } = useTranslation();

  return (
    <nav className="navbar fixed-top  navbar-expand-sm bg-primary">
      <div className="container-fluid">
        <a className="navbar-brand text-white fw-bold px-3 h1" href="#">
          WypSam
        </a>
        <button
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          className="navbar-toggler"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse flex-row-reverse"
          id="navbarNav"
        >
          <ul className="navbar-nav ">
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-white fw-bold px-3 h4 active text-center"
              >
                {t('Cars')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-white fw-bold px-3 h4 active text-center"
              >
                {t('Rent car')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-white fw-bold px-3 h4 text-center"
              >
                {t('About us')}
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/"
                className="nav-link text-white fw-bold px-3 h4 text-center"
              >
                {t('Contact')}
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
