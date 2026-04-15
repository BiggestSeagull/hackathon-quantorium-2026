import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <aside className="sidebar">

      <div className="sidebar__top">
        <div className="logo">
          <img src="/logo.svg" alt="Гринатом Росатом" />
          <div className="logo__text">
            <span className="logo__title">ГРИНАТОМ</span>
            <span className="logo__subtitle">РОСАТОМ</span>
          </div>
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
          <img src="/icons/home.svg" alt="" />
          <span>Главная страница</span>
        </NavLink>

        <NavLink
          to="/employees"
          className={({ isActive }) =>
            isActive ? "menu__link menu__link--active" : "menu__link"
          }
        >
          <img src="/icons/employee.svg" alt="" />
          <span>Сотрудники</span>
        </NavLink>
      </nav>
    </aside>
  );
}