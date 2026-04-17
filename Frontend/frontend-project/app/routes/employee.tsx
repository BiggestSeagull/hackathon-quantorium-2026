import { Link, Navigate, useParams } from "react-router";
import { useEffect, useState } from "react";

import "./../styles/employee.css";

type Workplace = {
  city: string;
  building: string;
  room: string;
  floor: number | string;
  workplaceNumber: string;
  photoUrl?: string;
  floorPlanUrl?: string;
  x?: number;
  y?: number;
};

type EmployeeResponse = {
  id: string;
  fullName: string;
  position: string;
  department: string;
  workplace: Workplace;
};

const API_BASE_URL = "http://192.168.1.119/hack1/hs/api";
const FILES_BASE_URL = "http://192.168.1.119/hack1/hs";

export default function Employee() {
  const { employeeId } = useParams();   // Эта штука нужна, чтобы получить id из ссылки страницы. см: routes.ts

  const [employee, setEmployee] = useState<EmployeeResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(function () {
    if (!employeeId) {
      setIsLoading(false);
      setIsError(true);
      return;
    }

    async function loadEmployee() {
      try {
        setIsLoading(true);
        setIsError(false);

        const response = await fetch(
          `${API_BASE_URL}/emloyees/${employeeId}`
        );

        if (!response.ok) {
          throw new Error("Ошибка загрузки сотрудника");
        }

        const data: EmployeeResponse = await response.json();
        setEmployee(data);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    }

    loadEmployee();
  }, [employeeId]);

  if (isLoading) {
    return (
      <div className="employee-page">
        <div className="employee-card employee-card--empty">
          <p className="employee-text">Загрузка...</p>
        </div>
      </div>
    );
  }

  // Если попытка перехода на несуществуещего юзера, выдаем ошибку
  if (isError || !employee) {
    return <Navigate to="/not-found" replace />;
  }

  const { fullName, position, department, workplace } = employee;

  const photoSrc = workplace.photoUrl
    ? `${FILES_BASE_URL}${workplace.photoUrl}`
    : "";

  const floorPlanSrc = workplace.floorPlanUrl
    ? `${FILES_BASE_URL}${workplace.floorPlanUrl}`
    : "";

  return (
    <div className="employee-page">
      <div className="employee-topbar">
        <Link to="/employees" className="employee-back-link">
          <img src="/icons/back.svg" alt="" />
        </Link>
      </div>

      {/* Первый блок */}
      <div className="employee-grid">
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
        <div className="employee-card">
          <h2 className="employee-card__title">Фото рабочего места</h2>

          {photoSrc ? (
            <div className="employee-media">
              <img
                src={photoSrc}
                alt="Картинка не загрузилась"
              />
            </div>
          ) : (
            <div className="employee-empty-block">Картинка отсутсвует</div>
          )}
        </div>

        <div className="employee-card">
          <h2 className="employee-card__title">Рабочее место на карте</h2>

          {/* {workplace.floorPlanUrl ? (
            <div className="employee-media">
              <img src={workplace.floorPlanUrl} alt="Карта не загрузилась :(" />
            </div>
          ) : (
            <div className="employee-empty-block">картинка отсутсвует</div>
          )} */}

          {floorPlanSrc ? (
            <div className="employee-floor-plan">
              <img src={floorPlanSrc} alt="Карта не загрузилась :(" />

              {typeof workplace.x === "number" && typeof workplace.y === "number" && (
                <span
                  className="employee-floor-plan__marker"
                  style={{
                    // Расчитываем процент, кажется это надежнее просто пикселей 
                    left: `${(workplace.x / 800) * 100}%`,
                    top: `${(workplace.y / 600) * 100}%`,
                  }}
                />
              )}
            </div>
          ) : (
            <div className="employee-empty-block">Картинка отсутсвует</div>
          )}
        </div>
      </div>
    </div>
  )
}