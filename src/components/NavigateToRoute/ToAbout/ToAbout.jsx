import React from "react";
import styles from "./ToAbout.module.css";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import AboutImg2 from "../../../assets/AboutImg2.png";
import StartImg from "../../../assets/Star.svg";
import ArrowRight from "../../../assets/arrow-right-solid.svg";

const ToAbout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className={styles.box}>
        <div className={styles.start}>
          <div>
            <p>About</p>
            <h2>I am Damien</h2>
          </div>
          <button
            onClick={() => navigate("/about")}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            Know More
          </button>
        </div>
        <div className={styles.end}>
          <div className={styles.left}>
            <img src={AboutImg2} alt="" />
          </div>
          <div className={styles.right}>
            <div className={styles.secStart}>
              <h3>
                <img src={StartImg} alt="" />
                Introduction
              </h3>
              <p>
                My journey as a photographer has been a lifelong quest to
                capture the extraordinary in the ordinary, to freeze fleeting
                moments in time, and to share the world's beauty as I see it.
                Based in the enchanting landscapes of the USA, I find
                inspiration in every corner of this diverse and vibrant country.
                Join me as we embark on a visual odyssey, where each photograph
                tells a story, and every frame is a piece of my heart.
              </p>
            </div>
            <div className={styles.secEnd}>
              <h3>
                <img src={StartImg} alt="" />
                Contact Information
              </h3>
              <div className={styles.content}>
                <div>
                  <p>Email</p>
                  <b>damienbraun@gmail.com</b>
                </div>
                <div>
                  <p>Phone Number</p>
                  <b>+00 000000000</b>
                </div>
              </div>
              <div className={styles.btnDiv}>
                <button>Let’s Work</button>
                <button>Download CV</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToAbout;
