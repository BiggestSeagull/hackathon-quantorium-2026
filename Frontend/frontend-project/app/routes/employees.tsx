import { Link } from "react-router";
import "./../styles/employees.css";
import { useEffect, useMemo, useState } from "react";

type EmployeeListItem = {
  id: string;
  fullName: string;
  position: string;
  department: string;
};

type EmployeesResponse = {
  items: EmployeeListItem[];
};

const API_URL = "http://192.168.1.119/hack1/hs/api/employees";

export default function Employees() {
  const [employees, setEmployees] = useState<EmployeeListItem[]>([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  // 🔥 загрузка
  useEffect(() => {
    async function loadEmployees() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(API_URL);

        if (!response.ok) {
          throw new Error("Ошибка запроса");
        }

        const data: EmployeesResponse = await response.json();

        setEmployees(Array.isArray(data.items) ? data.items : []);
      } catch (e) {
        console.error(e);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadEmployees();
  }, []);

  // 🔍 поиск
  const filteredEmployees = useMemo(() => {
    const value = search.trim().toLowerCase();

    if (!value) return employees;

    return employees.filter((e) =>
      e.fullName.toLowerCase().includes(value)
    );
  }, [employees, search]);

  return (
    <div className="employees-page">
      <div className="employees-toolbar">
        <div className="employees-search">
          <div className="employees-search__field">
            <img src="/icons/search.svg" alt="" />
            <input
              type="text"
              placeholder="Поиск..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
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
              {isLoading ? (
                <tr>
                  <td colSpan={5} className="is-empty">
                    Загрузка...
                  </td>
                </tr>
              ) : isError ? (
                <tr>
                  <td colSpan={5} className="is-empty">
                    Ошибка загрузки данных
                  </td>
                </tr>
              ) : filteredEmployees.length > 0 ? (
                filteredEmployees.map((employee, index) => (
                  <tr key={employee.id}>
                    <td className="left">{index + 1}</td>
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
                    Сотрудники не найдены
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