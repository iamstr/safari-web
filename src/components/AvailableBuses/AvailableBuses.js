import PropTypes from "prop-types";
import React from "react";
import CardInfo from "./CardInfo";
import styles from "./_.module.css";
const BusesCard = ({ name, img }) => {
  return (
    <div className={styles.card}>
      <div className={styles.row}>
        <img src={img} alt="" className={styles.cardImg} />
        <div className={styles.mainCard}>
          <div className={styles.column}>
            <h4 className={styles.cardHeader}>{name} </h4>
            <div className={styles.row}>
              <CardInfo header="Mombasa" para="From" />
              <CardInfo header="Nairobi" para="To" />

              <div className={styles.column}>
                <p className={styles.cardPara}>Price</p>
                <h6 className={[styles.columnHeader, styles.price].join(" ")}>
                  kes 1,000
                </h6>
              </div>
            </div>
            <div className={[styles.row, styles.rowChange].join(" ")}>
              <CardInfo header="9.00PM" para="Departure" />
              <CardInfo header="14 Seater" para="Bus Type" />

              <div className={styles.column}>
                <div className={styles.formControl}>
                  <button className={`${styles.formButton}, ${styles.button}`}>
                    <span className={styles.text}>Pick Bus</span>
                    <img
                      src={require("../../assets/img/chevron-right.svg")}
                      alt="book "
                      srcSet=""
                      className={styles.formImg}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BusesCard.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
};

export default BusesCard;
