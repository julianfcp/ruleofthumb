import React from "react";
import styles from "../../../styles/Banner.module.css";

const index = () => {
  return (
    <div>
      <aside
        className={`${styles["banner"]} ${styles["banner-bottom"]}`}
        role="doc-tip"
        aria-label="Submit a name"
      >
        <img
          srcSet="/img/bg-people.png 750w, /img/bg-people.@2x.png 1440w"
          sizes="(min-width: 750px) 1440px, 100vw"
          className={styles["banner__background"]}
          src="/img/bg-people.png"
          alt=""
          role="none"
        />
        <div className={styles["banner__left"]}>
          <h2 className={styles["banner__heading"]}>
            Is there anyone else you would want us to add?
          </h2>
        </div>
        <div className={styles["banner__right"]}>
          <button className={styles["banner__cta"]}>Submit a name</button>
        </div>
      </aside>
    </div>
  );
};

export default index;
