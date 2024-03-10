import React from 'react'
import styles from "./Home.module.css";
import ToAbout from '../../components/NavigateToRoute/ToAbout/ToAbout';


import btnImage from "../../assets/Button.svg";
import s2Image1 from "../../assets/Container.svg";
import s2Image2 from '../../assets/Container.png';

const Home = () => {
  return (
    <div>
      <section className={styles.section_1}>
        <div className={styles.left}>
          <p>Stunning Photography by</p>
          <h2>Damien Braun</h2>
        </div>
        <div className={styles.right}>
          <div className={styles.btnImage}>
            <h2>Let’s</h2>
            <img src={btnImage} alt="" width={100} />
          </div>
          <h2>Work Together</h2>
        </div>
      </section>
      <section className={styles.section_2}>
        <img src={s2Image1} alt="" />
        <img src={s2Image2} alt="" />
      </section>
      <section className={styles.section_3}>
        <ToAbout />
      </section>
    </div>
  );
}

export default Home
