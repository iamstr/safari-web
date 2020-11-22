import React, { useEffect, useState } from "react";
import Seats from "../../components/AvailableSeats/Seats";
import Footer from "../../components/Footer/Footer";
import Popup from "../../components/Popup/Popup";
import SnackBar from "../../components/SnackBar/SnackBar";
import SeatContext from "../../contexts/SeatContext";
import styles from "./_.module.css";
function AvailableSeats(props) {
  const [selectedSeat, setSelectedSeat] = useState();
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const imgArray = [...document.getElementsByTagName("Img")]
      .filter(elem => elem.hasAttribute("data-seat"))
      .slice(3)
      .filter(elem => {
        return elem.getAttribute("src").includes("booked-seat") ? false : true;
      })
      .filter(elem => {
        return elem !== selectedSeat;
      });
    imgArray.map(elem =>
      elem.setAttribute("src", require("../../assets/img/available-seat.svg")),
    );
  }, [selectedSeat]);
  const newLocal = require("../../assets/img/selected-seat.svg");
  const popClose = data => setToggle(data);
  const _handle = e => {
    const { target } = e;

    const h6 = document.getElementsByTagName("H5")[1];
    if (e.currentTarget.contains(h6)) {
      let array = [...e.currentTarget.children];
      array = array.filter(elem => elem !== h6);
      if (target.src) {
        if (target.src.includes("available")) {
          setSelectedSeat(target);

          target.setAttribute("data-class", true);

          target.src = require("../../assets/img/selected-seat.svg");
          setToggle(!toggle);
        }
      }
    }
  };
  return (
    <>
      <main
        role="main"
        className={[styles.main, toggle ? styles["active"] : ""].join(" ")}
        id="blur"
      >
        <section
          className={styles.card}
          onClick={e => {
            _handle(e);
          }}
        >
          <article className="row">
            <img
              src={require("../../assets/img/tahmeed.svg")}
              alt="bus image"
              className="bus"
            />
            <h5 className={styles.busName}>Tahmeed Bus</h5>
          </article>
          <h5 className={styles.legend}>Legend</h5>
          <article className="row">
            <div className={styles.legendInfo}>
              <Seats
                name="available"
                img={require("../../assets/img/available-seat.svg")}
              />
              <p className={styles.info}>Available</p>
            </div>
            <div className={styles.legendInfo}>
              <Seats
                name="booked"
                img={require("../../assets/img/booked-seat.svg")}
              />
              <p className={styles.info}>Booked</p>
            </div>
            <div className={styles.legendInfo}>
              <Seats name="selected" img={newLocal} />
              <p className={styles.info}>Selected</p>
            </div>
          </article>
          <article className="row">
            <div className={styles.leftRow}>
              <Seats
                name="A1"
                img={require("../../assets/img/booked-seat.svg")}
              />
              <Seats
                name="A2"
                img={require("../../assets/img/booked-seat.svg")}
              />
            </div>
            <div className={styles.rightRow}>
              <Seats
                name="A3"
                img={require("../../assets/img/booked-seat.svg")}
              />
              <Seats
                name="A4"
                img={require("../../assets/img/booked-seat.svg")}
              />
            </div>
          </article>
          <article className="row">
            <div className={styles.leftRow}>
              <Seats
                name="B1"
                img={require("../../assets/img/booked-seat.svg")}
              />
              <Seats
                name="B2"
                img={require("../../assets/img/booked-seat.svg")}
              />
            </div>
            <div className={styles.rightRow}>
              <Seats
                name="B3"
                img={require("../../assets/img/booked-seat.svg")}
              />
              <Seats
                name="B4"
                img={require("../../assets/img/booked-seat.svg")}
              />
            </div>
          </article>
          <article className="row">
            <div className={styles.leftRow}>
              <Seats
                name="C1"
                img={require("../../assets/img/available-seat.svg")}
              />
              <Seats
                name="C2"
                img={require("../../assets/img/booked-seat.svg")}
              />
            </div>
            <div className={styles.rightRow}>
              <Seats
                name="C3"
                img={require("../../assets/img/available-seat.svg")}
              />
              <Seats
                name="C4"
                img={require("../../assets/img/booked-seat.svg")}
              />
            </div>
          </article>
          <article className="row">
            <div className={styles.leftRow}>
              <Seats
                name="D1"
                img={require("../../assets/img/available-seat.svg")}
              />
              <Seats
                name="D2"
                img={require("../../assets/img/booked-seat.svg")}
              />
            </div>
            <div className={styles.rightRow}>
              <Seats
                name="D3"
                img={require("../../assets/img/available-seat.svg")}
              />
              <Seats
                name="D4"
                img={require("../../assets/img/booked-seat.svg")}
              />
            </div>
          </article>
          <article className="row">
            <div className={styles.leftRow}>
              <Seats
                name="E1"
                img={require("../../assets/img/available-seat.svg")}
              />
              <Seats
                name="E2"
                img={require("../../assets/img/available-seat.svg")}
              />
            </div>
            <div className={styles.rightRow}>
              <Seats
                name="E3"
                img={require("../../assets/img/available-seat.svg")}
              />
              <Seats
                name="E4"
                img={require("../../assets/img/available-seat.svg")}
              />
            </div>
          </article>
          <article className="row">
            <div className={styles.leftRow}>
              <Seats
                name="F1"
                img={require("../../assets/img/available-seat.svg")}
              />
              <Seats
                name="F2"
                img={require("../../assets/img/available-seat.svg")}
              />
            </div>
            <div className={styles.rightRow}>
              <Seats
                name="F3"
                img={require("../../assets/img/available-seat.svg")}
              />
              <Seats
                name="F4"
                img={require("../../assets/img/available-seat.svg")}
              />
            </div>
          </article>
        </section>
        <article className="article"></article>
      </main>
      {selectedSeat && (
        <SnackBar
          message={`you have selected ${selectedSeat.alt}`}
          isOpen={!!selectedSeat}
        />
      )}
      {toggle && (
        <SeatContext.Provider value={selectedSeat}>
          <Popup toggle={toggle} onChange={popClose} />
        </SeatContext.Provider>
      )}
      <Footer />
    </>
  );
}

AvailableSeats.propTypes = {};

export default AvailableSeats;
