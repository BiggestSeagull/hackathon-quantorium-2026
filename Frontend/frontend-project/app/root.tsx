import { Outlet, Scripts, ScrollRestoration } from "react-router";
import Sidebar from "./components/sidebar";
import "./styles/layout.css";

export default function Root() {
  return (
    <html lang="ru">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>

      <body>
        <div className="app-layout">
          <Sidebar />
          <div className="app-content">
            <main className="page-content">
              <Outlet />
            </main>
          </div>
        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}