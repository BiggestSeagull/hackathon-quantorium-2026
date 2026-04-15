import { NavLink } from 'react-router'

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar__logo">Гринатом</div>

      <nav className="sidebar__nav">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/employees">Сотрудники</NavLink>
      </nav>
    </aside>
  )
}