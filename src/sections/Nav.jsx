import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Nav() {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="nav">
        <div className="left_nav">
          <Link to="/">
            <img src="./public/assets/logo.png" alt="" />
          </Link>
        </div>
        <div className={`mid_nav ${expanded ? "cus-nav-mobile" : ""}`}>
          <div className="search-box">
            <input type="text" placeholder="" />
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </div>
          <div className="nav_menu">
            <div className="mobile-cross-button" onClick={() => setExpanded((curr) => !curr)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className = "bi bi-x-lg"
                viewBox="0 0 16 16"
              >
                <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
              </svg>
            </div>
            <span>
              <NavLink
                to="/countries"
                style={({ isActive }) => ({
                  color: isActive ? "#f59e0d" : "#1f4282",
                  textDecoration: "none",
                })}
              >
                Countries
              </NavLink>
            </span>
            <span>
              <NavLink
                to="/exams"
                style={({ isActive }) => ({
                  color: isActive ? "#f59e0d" : "#1f4282",
                  textDecoration: "none",
                })}
              >
                Exams
              </NavLink>
            </span>
            <span>
              <NavLink
                to="/resources"
                style={({ isActive }) => ({
                  color: isActive ? "#f59e0d" : "#1f4282",
                  textDecoration: "none",
                })}
              >
                Resources
              </NavLink>
            </span>
          </div>
        </div>
        <div className="hamburger-menu" onClick={() => setExpanded((curr) => !curr)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </div>
        <div className="right_nav">
          <i className="nav_icon fa-solid fa-address-card fa-2xl"></i>
          <div className="nav_guidance">
            <i className="nav_icon fa-solid fa-phone fa-lg"></i>
            <p>Guidance</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
