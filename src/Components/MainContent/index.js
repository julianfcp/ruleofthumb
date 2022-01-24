import React, { useState, useEffect } from "react";
import styles from "../../../styles/MainContent.module.css";
import Slider from "react-slick";
import Card from "./Card";
import CardList from "./Card/CardList";
import Select from "react-select";

const options = [
  { value: "grid", label: "Grid" },
  { value: "list", label: "List" },
];

const index = () => {
  const [people, setPeople] = useState([]);
  const [gridOn, setGridOn] = useState(false);
  const [listOn, setListOn] = useState(true);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const handleSelectChange = (e) => {
    e.value === "grid" ? setGridOn(true) : setGridOn(false);
    e.value === "list" ? setListOn(true) : setListOn(false);
  };

  const getPeople = async () => {
    let result;
    const requestOptions = {
      method: "GET",
      cache: "no-cache",
    };
    try {
      await fetch(
        "https://thumbs-f0442-default-rtdb.firebaseio.com/data.json",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => (result = data));

      setPeople(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPeople();
  }, []);

  return (
    <div>
      <main role="main">
        <Select
          options={options}
          className={styles["main__select"]}
          onChange={handleSelectChange}
        />
        <Slider {...settings} className={styles["main__silder"]}>
          {people.length !== 0
            ? people.map((item, key) => {
                const { positive, negative } = item.votes;
                let points = ((positive / (positive + negative)) * 100).toFixed(
                  2
                );

                return (
                  <Card
                    key={key}
                    id={key}
                    thumb={positive > negative ? "up" : "down"}
                    upPoints={points}
                    positive={positive}
                    negative={negative}
                    name={item.name}
                    description={item.description}
                    image={item.picture}
                  />
                );
              })
            : ""}
        </Slider>
        {gridOn && (
          <div className={styles["main__grid"]}>
            {people.length !== 0
              ? people.map((item, key) => {
                  const { positive, negative } = item.votes;
                  let points = (
                    (positive / (positive + negative)) *
                    100
                  ).toFixed(2);

                  return (
                    <div key={key} className={styles["main__grid-item"]}>
                      <Card
                        id={key}
                        thumb={positive > negative ? "up" : "down"}
                        upPoints={points}
                        positive={positive}
                        negative={negative}
                        name={item.name}
                        description={item.description}
                        image={item.picture}
                        getPeople={getPeople}
                      />
                    </div>
                  );
                })
              : ""}
          </div>
        )}
        {listOn && (
          <div className={styles["main__list"]}>
            {people.length !== 0
              ? people.map((item, key) => {
                  const { positive, negative } = item.votes;
                  let points = (
                    (positive / (positive + negative)) *
                    100
                  ).toFixed(2);

                  return (
                    <div key={key} className={styles["main__flex-item"]}>
                      <CardList
                        id={key}
                        thumb={positive > negative ? "up" : "down"}
                        upPoints={points}
                        positive={positive}
                        negative={negative}
                        name={item.name}
                        description={item.description}
                        image={item.picture}
                      />
                    </div>
                  );
                })
              : ""}
          </div>
        )}
      </main>
    </div>
  );
};

export default index;
