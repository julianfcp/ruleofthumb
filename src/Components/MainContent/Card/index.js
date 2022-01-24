import React, { useState } from "react";
import styles from "../../../../styles/Card.module.css";

const index = (props) => {
  const { id, name, thumb, upPoints, description, image, positive, negative } =
    props;
  const [upThumb, setUpThumb] = useState(false);
  const [downThumb, setDownThumb] = useState(false);
  const [vote, setVote] = useState(false);

  const thumbUp = () => {
    setUpThumb(!upThumb);
    setDownThumb(false);
  };

  const thumbDown = () => {
    setUpThumb(false);
    setDownThumb(!downThumb);
  };

  const updateThumbs = async (id) => {
    let result;

    let pointsUp = {
      votes: {
        positive: upThumb ? positive + 1 : positive,
        negative: downThumb ? negative + 1 : negative,
      },
    };
    const requestOptions = {
      method: "PATCH",
      cache: "no-cache",
      body: JSON.stringify(pointsUp),
    };
    try {
      await fetch(
        "https://thumbs-f0442-default-rtdb.firebaseio.com/data/" + id + ".json",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => (result = data));

      props.getPeople();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles["card"]}>
      <img className={styles["card__background"]} src={image} />
      <p className={styles["card__name"]}>{name}</p>
      <p className={styles["card__description"]}>{description}</p>
      <p className={styles["card__timestamp"]}>1 month ago in Entertainment</p>

      {!vote ? (
        <div>
          {upThumb ? (
            <button
              className={styles["icon-button"]}
              aria-label="thumbs up"
              onClick={() => {
                thumbUp();
              }}
              style={{ border: "1px solid white" }}
            >
              <img
                src="img/thumbs-up.svg"
                alt="thumbs up"
                style={{
                  position: "absolute",
                  width: "16px",
                  height: "16px",
                  left: "6px",
                  top: "6px",
                }}
              />
            </button>
          ) : (
            <button
              className={styles["icon-button"]}
              aria-label="thumbs up"
              onClick={() => {
                thumbUp();
              }}
            >
              <img
                src="img/thumbs-up.svg"
                alt="thumbs up"
                style={{
                  position: "absolute",
                  width: "16px",
                  height: "16px",
                  left: "6px",
                  top: "6px",
                }}
              />
            </button>
          )}
          {downThumb ? (
            <button
              className={styles["icon-button"]}
              aria-label="thumbs down"
              onClick={() => {
                thumbDown();
              }}
              style={{ border: "1px solid white" }}
            >
              <img
                src="img/thumbs-down.svg"
                alt="thumbs down"
                style={{
                  position: "absolute",
                  width: "16px",
                  height: "16px",
                  left: "6px",
                  top: "6px",
                }}
              />
            </button>
          ) : (
            <button
              className={styles["icon-button"]}
              aria-label="thumbs down"
              onClick={() => {
                thumbDown();
              }}
            >
              <img
                src="img/thumbs-down.svg"
                alt="thumbs down"
                style={{
                  position: "absolute",
                  width: "16px",
                  height: "16px",
                  left: "6px",
                  top: "6px",
                }}
              />
            </button>
          )}
        </div>
      ) : (
        ""
      )}
      {thumb === "up" ? (
        <button
          className={styles["icon-button-featured"]}
          aria-label="thumbs up"
        >
          <img
            src="img/thumbs-up.svg"
            alt="thumbs up"
            style={{
              position: "absolute",
              width: "16px",
              height: "16px",
              left: "6px",
              bottom: "6px",
            }}
          />
        </button>
      ) : (
        <button
          className={styles["icon-button-featured"]}
          aria-label="thumbs down"
        >
          <img
            src="img/thumbs-down.svg"
            alt="thumbs down"
            style={{
              position: "absolute",
              width: "16px",
              height: "16px",
              left: "6px",
              bottom: "6px",
            }}
          />
        </button>
      )}
      {vote ? (
        <button
          className={styles["card__button"]}
          onClick={() => {
            setVote(false);
            setUpThumb(false);
            setDownThumb(false);
          }}
        >
          Vote Again
        </button>
      ) : (
        <button
          className={styles["card__button"]}
          onClick={() => {
            updateThumbs(id);
            setVote(true);
          }}
        >
          Vote Now!
        </button>
      )}

      <div className={styles["card__gauge"]}>
        <div
          className={styles["icon-button-gauge"]}
          aria-label="thumbs up"
          style={{ width: `${upPoints}%` }}
        >
          <img
            src="img/thumbs-up.svg"
            alt="thumbs up"
            style={{
              position: "absolute",
              width: "16px",
              height: "16px",
              top: "8px",
              left: "15px",
              float: "left",
            }}
          />
          <span className={styles["card__gauge-span"]} aria-label="thumbs up">
            {upPoints}%
          </span>
        </div>
        <div
          className={styles["icon-button-gauge"]}
          aria-label="thumbs down"
          style={{
            width: `${100 - upPoints}%`,
          }}
        >
          <img
            src="img/thumbs-down.svg"
            alt="thumbs down"
            style={{
              position: "absolute",
              width: "16px",
              height: "16px",
              top: "8px",
              right: "15px",
              float: "right",
            }}
          />
          <span className={styles["card__gauge-span"]} aria-label="thumbs down">
            {100 - upPoints}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default index;
