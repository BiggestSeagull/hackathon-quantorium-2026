import "./../styles/employees.css";

export default function Employees() {
  return (
    <section className="employees-page">

      <div className="employees-toolbar">
        <div className="employees-search">
          <div className="employees-search__field">
            <img src="/icons/search.svg" alt="" />
            <input type="text" placeholder="Поиск..." />
          </div>

          <button className="employees-search__button" type="button">
            <img src="/icons/filter.svg" alt="" />
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
                <th>Город</th>
                <th>Должность</th>
                <th>Подразделение</th>
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