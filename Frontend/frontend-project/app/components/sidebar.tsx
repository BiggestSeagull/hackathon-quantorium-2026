import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__top">
        <div className="logo">
          <img src="/logo.png" alt="Гринатом Росатом" />
          <div className="logo__text">
            <span className="logo__title">ГРИНАТОМ</span>
            <span className="logo__subtitle">РОСАТОМ</span>
          </div>
        </div>

        <nav className="menu">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive ? "menu__link menu__link--active" : "menu__link"
            }
          >
            <span>🏠</span>
            <span>Главная страница</span>
          </NavLink>

          <NavLink
            to="/employees"
            className={({ isActive }) =>
              isActive ? "menu__link menu__link--active" : "menu__link"
            }
          >
            <span>👤</span>
            <span>Сотрудники</span>
          </NavLink>
        </nav>
      </div>
    </aside>
  );
}