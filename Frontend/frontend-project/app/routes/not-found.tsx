import { Link } from 'react-router'

export default function NotFound() {
  return (
    <div className="page">
      <h1>404</h1>
      <p>Страница не найдена</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  )
}