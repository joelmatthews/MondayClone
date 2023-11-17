import React from "react";
import { Outlet, Link } from "react-router-dom";
import sprite from "../../assets/symbol-defs.svg";
import ProjectListItem from "../components/ProjectListItem";

export default function root() {
  return (
    <div className="root__container">
      <nav className="action-bar">
        <button className="action-bar__btn action-bar__btn--login-btn"><Link to={"login"} className="action-bar__btn--login-btn-link">Login</Link></button>
        <button className="action-bar__btn action-bar__btn--register-btn"><Link to={"register"} className="action-bar__btn--register-btn-link">Register</Link></button>
      </nav>
      <div className="sidebar">
        <h1 className="heading-1"><Link to="/" style={{"textDecoration": "none", "color": "inherit"}}>MondayClone</Link></h1>
        <div className="search">
          <form className="search__form">
            <input
              name="search"
              type="search"
              placeholder="Search Tasks"
              className="search__input"
            />
            <button className="btn search__btn">
              <span>
              <svg className="search__icon">
                <use xlinkHref={`${sprite}#icon-magnifying-glass`} />
              </svg>
              </span>
            </button>
          </form>
        </div>
        <nav className="tasks">
          <ul className="tasks__list">
            <ProjectListItem projectInfo={{ title: "Project One" }} />
            <ProjectListItem projectInfo={{ title: "Project Two" }} />
          </ul>
        </nav>
      </div>
      <main className="main-content"><Outlet /></main>
    </div>
  );
}
