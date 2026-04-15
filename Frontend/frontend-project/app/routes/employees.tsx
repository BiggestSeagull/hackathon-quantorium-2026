import "./../styles/employees.css";

export default function Employees() {
  return (
    <section className="employees-page">
      <div className="employees-toolbar">

        <div className="employees-search">
          <div className="employees-search__field">
            <span>🔍</span>
            <input type="text" placeholder="Поиск..." />
          </div>

          <button className="employees-search__button" type="button">
            ⏳
          </button>
        </div>
      </div>

      <div className="employees-card">
        <h2 className="employees-card__title">Список сотрудников</h2>

        <div className="employees-table-wrap">
          <table className="employees-table">
            <thead>
              <tr>
                <th>№</th>
                <th>ФИО</th>
                <th>Должность</th>
                <th>Роль доступа</th>
                <th>Кабинет</th>
                <th>Действия</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td colSpan={6} className="is-empty">
                  Сотрудники пока отсутствуют
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}