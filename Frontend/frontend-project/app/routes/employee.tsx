import { Link, Navigate, useParams } from "react-router";
import { employeeDetailsMocks } from "../mocks/employees";

import "./../styles/employee.css";

export default function Employee() {

  const { employeeId } = useParams();   // Эта штука нужна, чтобы получить id из ссылки страницы. см: routes.ts
  //? ЗАМЕНИТЬ КОГДА БУДЕТ БД и удалить /mocks
  const employee = employeeDetailsMocks.find(
    function (item) {
      return item.id === employeeId;
    }
  );

  // Если попытка перехода на несуществуещего юзера, выдаем ошибку
  if (!employee) {
    return <Navigate to="*" />
  }


  const { fullName, position, department, workplace } = employee;

  return (
    <div className="employee-page">

      <div className="employee-topbar">
        <Link to="/employees" className="employee-back-link">
        <img src="/icons/back.svg" alt="" />
        </Link>
      </div>
      {/* Первый блок */}
      <div className="empoyee-grid">
        <div className="employee-card">
          <h1 className="employee-title">{fullName}</h1>
          <div className="employee-info-list">

            <div className="employee-info-row">
              <span className="employee-info-label">Должность: </span>
              <span className="employee-info-value">{position}</span>
            </div>

            <div className="employee-info-row">
              <span className="employee-info-label">Подразделение: </span>
              <span className="employee-info-value">{department}</span>
            </div>

          </div>
        </div>
      </div>

      {/* Второй блок */}
      <div className="employee-card">

        <h2 className="employee-card__title">Рабочее место</h2>
        <div className="employee-info-list">
          <div className="employee-info-row">
            <span className="employee-info-label">Город: </span>
            <span className="employee-info-value">{workplace.city}</span>
          </div>

          <div className="employee-info-row">
            <span className="employee-info-label">Здание: </span>
            <span className="employee-info-value">{workplace.building}</span>
          </div>

          <div className="employee-info-row">
            <span className="employee-info-label">Помещение: </span>
            <span className="employee-info-value">{workplace.room}</span>
          </div>

          <div className="employee-info-row">
            <span className="employee-info-label">Этаж: </span>
            <span className="employee-info-value">{workplace.floor}</span>
          </div>

          <div className="employee-info-row">
            <span className="employee-info-label">Номер рабочего места: </span>
            <span className="employee-info-value">{workplace.workplaceNumber}</span>
          </div>
        </div>

      </div>

      {/* Картинки */}
      <div className="employee-grid employee-grid--media">
        <article className="employee-card">
          <h2 className="employee-card__title">Фото рабочего места</h2>

          {workplace.photoUrl ? (
            <div className="employee-media">
              <img src={workplace.photoUrl} alt="Рабочее место сотрудника" />
            </div>
          ) : (
            <div className="employee-empty-block">
              отсутсвует
            </div>
          )}
        </article>

        <article className="employee-card">
          <h2 className="employee-card__title">Рабочее место на карте</h2>

          {workplace.floorPlanUrl ? (
            <div className="employee-media">
              <img src={workplace.floorPlanUrl} alt="План этажа" />
            </div>
          ) : (
            <div className="employee-empty-block">отсутсвует</div>
          )}
        </article>
      </div>


    </div>
  )
}