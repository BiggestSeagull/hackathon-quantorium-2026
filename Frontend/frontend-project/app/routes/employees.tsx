import { Link } from "react-router";
import { employeesListMock } from "../mocks/employees";

import "./../styles/employees.css";

export default function Employees() {
  //? ЗАМЕНИТЬ КОГДА БУДЕТ БД и удалить /mocks
  const employees = employeesListMock.items;
  let counter = 0;


  return (
    <div className="employees-page">

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
                <th className="left">№</th>
                <th>ФИО</th>
                <th>Должность</th>
                <th>Подразделение</th>
                <th>Действия</th>
              </tr>
            </thead>

            <tbody>
              {employees.length > 0 ? (
                employees.map((employee) => (
                  <tr key={employee.id}>
                    <td className="left">{counter += 1}</td>
                    <td className="center">{employee.fullName}</td>
                    <td className="center">{employee.position}</td>
                    <td className="center">{employee.department}</td>
                    <td className="center">
                      <Link
                        to={`/employees/${employee.id}`}
                        className="employees-action-button"
                      >
                        <img src="/icons/info.svg" alt="" />
                      </Link>
                    </td>
                  </tr>
                ))
              ) : (
              <tr>
                <td colSpan={5} className="is-empty">
                  Сотрудники пока отсутствуют
                </td>
              </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}