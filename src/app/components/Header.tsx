import React from "react";
import "./Header.css";
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <header
      className="header"
      role="button"
      tabIndex={0}
      onClick={() => navigate("/")}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          navigate("/");
        }
      }}
    >
      <h1>Kleda</h1>
      <h1>Nike</h1>
    </header>
  );
}
