/* eslint-disable react/react-in-jsx-scope */
import React, { useEffect, useRef, useState } from "react";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Home/Cards/Card";
import style from "./home.module.css";
export default function Home() {
  const dateRef = useRef(0),
    listRef = useRef(0),
    secondInputRef = useRef(0),
    firstInputRef = useRef(0),
    secondListRef = useRef(0),
    [fullname, setFullname] = useState(0),
    [email, setEmail] = useState(0),
    [message, setMessage] = useState(0);
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

  const setFullnameContactHandler = e => {
    setFullname(e);
  };
  const setEmailContactHandler = e => {
    setEmail(e);
  };

  const setMessageContactHandler = e => {
    setMessage(e);
  };

  return (
    <>
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
        <h3 className={style.cardCopy}>How it works</h3>
        <div className={style.cards}>
          <Card
            header="Book"
            para="Select bus & seat on
safaripass.com"
            img={require("../../assets/img/card-img-1.svg")}
            properties={{
              width: " 100%",
              marginLeft: "0em",
              transform: "translateX(-27px)",
            }}
          />
          <Card
            header="Payment"
            para="M-pesa, credit card"
            img={require("../../assets/img/card-img-2.svg")}
            properties={{
              width: " 90%",

              transform: "translate(-5px,-48px)",
            }}
          />
          <Card
            header="Confirm"
            para="SMS or email ticket, Print if desired"
            img={require("../../assets/img/card-img-3.svg")}
            properties={{
              width: " 59%",

              transform: "translate(6px,-26px)",
            }}
          />
          <Card
            header="Travel"
            para="Present ticket to travel"
            img={require("../../assets/img/card-img-4.svg")}
            properties={{
              width: " 90%",

              transform: "translateY(-40px)",
            }}
          />
        </div>
      </div>
      <div className={style.info}>
        <h3 className={style.infoCopy}>Why choose us</h3>
        <div className={style.infoArticles}>
          <article className={style.articles}>
            <div
              className={style.articleInfo}
              style={{ marginLeft: "-6em", paddingRight: "3em" }}
            >
              <h5 className={style.articleHeader}>All major Bus companies</h5>
              <p className={style.articlePara}>
                Book you inter city bus tickets,real time from the best
                companies in Kenya
              </p>
            </div>

            <img
              className={style.articleImg}
              src={require("../../assets/img/article-img-1.svg")}
              alt="Book you inter city bus tickets,real time from the best companies in Kenya"
              style={{
                marginLeft: "-10em",
                ransform: " translate(-149px, -56px)",
              }}
            />
          </article>
          <article className={style.articles}>
            <div className={style.articleInfo} style={{ marginLeft: "-1em" }}>
              <h5 className={style.articleHeader}>
                Book from anywhere & anytime
              </h5>
              <p className={style.articlePara}>
                We are available on every platfrom
              </p>
            </div>

            <img
              className={style.articleImg}
              src={require("../../assets/img/article-img-2.svg")}
              alt="We are available on every platfrom"
            />
          </article>
          <article className={style.articles}>
            <div className={style.articleInfo} style={{ marginLeft: "2em" }}>
              <h5 className={style.articleHeader}>Great Customer Care</h5>
              <p className={style.articlePara}>
                Get excellent customer service available 8:00 AM to 10:00 PM,
                via phone, chat or email.
              </p>
            </div>

            <img
              className={style.articleImg}
              src={require("../../assets/img/article-img-3.svg")}
              alt="Get excellent customer service available 8:00 AM to 10:00 PM,
via phone, chat or email"
              style={{ order: 2, transform: "translate(0px,-143px)" }}
            />
          </article>
        </div>
      </div>
      <div className={style.download}>
        <div className={style.phone}>
          <img
            src={require("../../assets/img/iphone-1.svg")}
            alt="download"
            className={style.phoneImg}
          />
        </div>
        <div className={style.downloadInfo}>
          <h5 className={style.downloadHeader}>
            GET THE APP FROM YOUR FAVOURITE APP STORE
          </h5>
          <div className={style.store}>
            <a href="" className={style.storeUrl}>
              <img
                src={require("../../assets/img/google-play.svg")}
                alt=""
                className={style.storeImg}
              />
            </a>
            <a href="" className={style.storeUrl}>
              <img
                src={require("../../assets/img/appstore.svg")}
                alt=""
                className={style.storeImg}
              />
            </a>{" "}
          </div>
        </div>
      </div>
      <div className={style.contact}>
        <div className={style.contactLeft}>
          <h5 className={style.contactHeader}>
            Send us a message, we love to help
          </h5>
          <img
            src={require("../../assets/img/contact-image.svg")}
            alt="contact us"
            className={style.contactImg}
          />
        </div>
        <div className={style.contactRight}>
          <div className={style.formControl}>
            <label htmlFor="fullnames">Full Names</label>
            <input
              type="text"
              id="fullnames"
              className={style.travel}
              placeholder="John Doe"
              onChange={e => setFullnameContactHandler(e.target.value)}
            />
          </div>
          <div className={style.formControl}>
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              className={style.travel}
              placeholder="John@gmail.com"
              onChange={e => setEmailContactHandler(e.target.value)}
            />
          </div>
          <div className={style.formControl}>
            <label htmlFor="message">Message</label>
            <textarea
              type="text"
              id="message"
              className={style.travel}
              placeholder="Feel free to tell us whats on your mind"
              onChange={e => setMessageContactHandler(e.target.value)}
            ></textarea>
          </div>
          <div className={style.formControl}>
            <button
              className={`${style.formButton}, ${style.button}`}
              onClick={() =>
                console.log({
                  fullname,
                  email,
                  message,
                  check: !!typeof setEmail,
                })
              }
            >
              Send Us Your Thoughts
            </button>
          </div>
        </div>
      </div>

      <div className={style.partners}>
        <h5 className={style.partnersHeader}>Our partners</h5>
        <div className={style.row}>
          <div className={style.partner}>
            <img
              src={require("../../assets/img/tahmeed.svg")}
              alt=""
              className={style.partnerImg}
            />
          </div>
          <div className={style.partner}>
            <img
              src={require("../../assets/img/modern-coast.svg")}
              alt=""
              className={style.partnerImg}
            />
          </div>
          <div className={style.partner}>
            <img
              src={require("../../assets/img/easycoach.svg")}
              alt=""
              className={style.partnerImg}
            />
          </div>
          <div className={style.partner}>
            <img
              src={require("../../assets/img/palmers.svg")}
              alt=""
              className={style.partnerImg}
            />
          </div>
        </div>
        <div className={style.row}>
          <div className={style.partner}>
            <img
              src={require("../../assets/img/greenline.svg")}
              alt=""
              className={style.partnerImg}
            />
          </div>
          <div className={style.partner}>
            <img
              src={require("../../assets/img/dreamline.svg")}
              alt=""
              className={style.partnerImg}
            />
          </div>
          <div className={style.partner}>
            <img
              src={require("../../assets/img/crown.svg")}
              alt=""
              className={style.partnerImg}
            />
          </div>
          <div className={style.partner}>
            <img
              src={require("../../assets/img/palmers.svg")}
              alt=""
              className={style.partnerImg}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
