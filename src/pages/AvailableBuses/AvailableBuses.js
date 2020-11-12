import React from "react";
import BusesCard from "../../components/AvailableBuses/AvailableBuses";
import styles from "./_.module.css";
const AvailableBuses = props => {
  return (
    <div className={styles.available}>
      <aside className={styles.aside}></aside>
      <main className={[styles.main, styles.column].join(" ")}>
        <div className="row justify-center">
          <h4 className={styles.availableHeader}>Showing Available Buses </h4>
        </div>
        <BusesCard
          name="Tahmeed"
          img={require("../../assets/img/tahmeed.svg")}
        />
        <BusesCard
          name="Dreamline"
          img={require("../../assets/img/dreamline.svg")}
        />
        <BusesCard
          name="Palmers"
          img={require("../../assets/img/palmers.svg")}
        />
        <BusesCard
          name="greenline"
          img={require("../../assets/img/greenline.svg")}
        />
        <BusesCard
          name="Easycoach"
          img={require("../../assets/img/easycoach.svg")}
        />
      </main>
    </div>
  );
};

AvailableBuses.propTypes = {};

export default AvailableBuses;
