import { Outlet } from "react-router";
import Sidebar from "./components/sidebar";
import AppHeader from "./components/app-header";
import "./styles/global.css";
import "./styles/layout.css";

export default function Root() {
  return (
    <div className="app-layout">
      <Sidebar />

      <div className="app-content">
        <AppHeader />

        <main className="page-content">
          <Outlet />
        </main>
      </div>
    </div>
  );
}