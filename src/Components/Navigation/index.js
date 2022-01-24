import React from "react";
import styles from "../../../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <nav className={styles["nav"]} role="navigation">
      <div className="max-centered">
        <h1 className={styles["nav__logo"]}>Rule of thumb.</h1>
        <button
          className={`${styles["nav__hamburger"]} ${styles["icon-button"]}`}
          alt="Open Menu"
        >
          <svg width="25" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 0h25v4H0V0zm0 8h25v4H0V8zm0 8h25v4H0v-4z"
              fill="#FFF"
              fillRule="nonzero"
            />
          </svg>
        </button>
        <ul className={styles["nav__links"]}>
          <li>
            <a href="#">Past Trials</a>
          </li>
          <li>
            <a href="#">How It Works</a>
          </li>
          <li>
            <a href="#">Login / Sign Up</a>
          </li>
          <li>
            <form action="">
              <input
                className={styles["nav__search-input"]}
                aria-label="search"
                type="text"
              />
              <button
                className={`${styles["nav__search"]} ${styles["icon-button"]}`}
                alt="Search"
                type="submit"
              >
                <img src="img/search.svg" alt="search" />
              </button>
            </form>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
