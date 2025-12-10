// src/app/pages/DashboardPage.tsx
import React, { useState } from "react";
import "./DashboardPage.css";
import Salechart from "../components/Salechart.js";
import { Paigraf } from "../components/Paigraf.js";

type Tab = "today" | "month" | "year";

export function DashboardPage() {
  const [activeTab, setActiveTab] = useState<Tab>("today");

  const statsData = {
    today: { visning: 25, handlekurv: 12, salg: 8 },
    month: { visning: 520, handlekurv: 240, salg: 150 },
    year: { visning: 6300, handlekurv: 2900, salg: 1700 },
  };

  const imageBase = import.meta.env.BASE_URL; // "/" locally, "/dashboard/" on GitHub Pages

  return (
    <div className="dashboard">
      <h2>Overview</h2>

      <div className="main-grid">
        <div className="left-section">
          <div className="tabs">
            <button
              className={activeTab === "today" ? "active" : ""}
              onClick={() => setActiveTab("today")}
            >
              I dag
            </button>
            <button
              className={activeTab === "month" ? "active" : ""}
              onClick={() => setActiveTab("month")}
            >
              Mnd
            </button>
            <button
              className={activeTab === "year" ? "active" : ""}
              onClick={() => setActiveTab("year")}
            >
              År
            </button>
          </div>

          <div className="stats">
            <div className="stat-card">
              <p>Visning</p>
              <h3>{statsData[activeTab].visning}</h3>
            </div>
            <div className="stat-card">
              <p>Handlekurv</p>
              <h3>{statsData[activeTab].handlekurv}</h3>
            </div>
            <div className="stat-card">
              <p>Salg</p>
              <h3>{statsData[activeTab].salg}</h3>
            </div>
          </div>
        </div>

        <div className="right-section">
          <div className="card">
            <h4>Top solgte produkter</h4>
            <div className="produkter">
              <div>
                <div className="tall">1</div>
                <img src="/dashboard/images/jakke.PNG" alt="jakke" />
              </div>

              <div>
                <div className="tall">2</div>
                <img src="/dashboard/images/genser.PNG" alt="genser" />
              </div>

              <div>
                <div className="tall">3</div>
                <img src="/dashboard/images/sko.PNG" alt="sko" />
              </div>
            </div>
          </div>

          <div className="card">
            <h4>Top ambassadører</h4>
            <ol>
              <li>Thomas B. Nyborg</li>
              <li>Kim Rønneberg</li>
              <li>Anne-Marie Hansen</li>
            </ol>
          </div>
        </div>
      </div>

      <div className="bottom-row">
        <div className="card">
          <h4>Konverteringsrate</h4>
          <div className="pai-row">
            <Paigraf
              salg={statsData[activeTab].salg}
              visning={statsData[activeTab].visning}
            />
            <p className="pai-p">{activeTab}</p>
          </div>
        </div>

        <div className="card">
          <Salechart />
        </div>
      </div>
    </div>
  );
}
