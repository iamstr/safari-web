/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useRef } from "react";
import Card from "../../components/Home/Cards/Card";
import style from "./home.module.css";
export default function Home() {
  const dateRef = useRef(0),
    listRef = useRef(0),
    secondInputRef = useRef(0),
    firstInputRef = useRef(0),
    secondListRef = useRef(0);
  useEffect(() => {
    const list = listRef.current;
    const secondList = secondListRef.current;

    dateRef.current.setAttribute("data-date", new Date().toDateString());

    list.addEventListener("click", event => {
      // handle first  list click
      firstInputRef.current.value = event.target.innerText;
      // console.log(event.target.innerText);
    });

    secondList.addEventListener("click", event => {
      // handle  second list click
      secondInputRef.current.value = event.target.innerText;
      // console.log(event.target.innerText);
    });
  }, []);

  return (
    <div className={style.container}>
      <div className={style.hero}>
        <div className={style.headerCopy}>
          <h2 className={style.copyHeader}>Booking Made Easy</h2>
          <h4 className={style.copyPara}>
            Travel By Comfort Book Your Bus Ticket
          </h4>
        </div>
        <img
          src={require("../../assets/img/city.svg")}
          alt="city you are trying to go to "
          className={style.heroImg}
        />
      </div>
      <div className={style.booking}>
        <div className={style.formControl}>
          <label htmlFor="from">From</label>
          <input
            type="text"
            id="from"
            className={style.travel}
            placeholder="where are you departure from?"
            ref={firstInputRef}
          />
          <ul className={style.cities} ref={listRef}>
            <li className={style.citiesList}>Mombasa</li>
            <li className={style.citiesList}>Nairobi</li>
            <li className={style.citiesList}>Kisumu</li>
            <li className={style.citiesList}>Eldoret</li>
            <li className={style.citiesList}>Malindi</li>
            <li className={style.citiesList}>Baringo</li>
            <li className={style.citiesList}>Busia</li>
            <li className={style.citiesList}>Wajir</li>
          </ul>
        </div>

        <div className={style.formControl}>
          <label htmlFor="to">To</label>
          <input
            type="text"
            id="to"
            className={style.travel}
            placeholder="where are you going to?"
            ref={secondInputRef}
          />
          <ul className={style.cities} ref={secondListRef}>
            <li className={style.citiesList}>Mombasa</li>
            <li className={style.citiesList}>Nairobi</li>
            <li className={style.citiesList}>Kisumu</li>
            <li className={style.citiesList}>Eldoret</li>
            <li className={style.citiesList}>Malindi</li>
            <li className={style.citiesList}>Baringo</li>
            <li className={style.citiesList}>Busia</li>
            <li className={style.citiesList}>Wajir</li>
          </ul>
        </div>
        <div className={style.formControl}>
          <div
            id={style.select}
            className={style.date}
            data-date="new Date"
            ref={dateRef}
          >
            <span className={style.picker}>Pick date</span>
            <span className={style.chevron}> &lt;</span>
          </div>
        </div>
        <div className={style.formControl}>
          <button className={`${style.formButton}, ${style.button}`}>
            <span className={style.text}>Check for Buses</span>
            <img
              src={require("../../assets/img/chevron-right.svg")}
              alt=""
              srcSet=""
              className={style.formImg}
            />
          </button>
        </div>
      </div>

      <div className={style.cards}>
        <Card
          header="Book"
          para="Select bus & seat on
safaripass.com"
          img={require("../../assets/img/card-img-1.svg")}
        />
        <Card
          header="Book"
          para="Select bus & seat on
safaripass.com"
          img={require("../../assets/img/card-img-2.svg")}
        />
        <Card
          header="Book"
          para="Select bus & seat on
safaripass.com"
          img={require("../../assets/img/card-img-3.svg")}
        />
        <Card
          header="Book"
          para="Select bus & seat on
safaripass.com"
          img={require("../../assets/img/card-img-4.svg")}
        />
      </div>
    </div>
  );
}
