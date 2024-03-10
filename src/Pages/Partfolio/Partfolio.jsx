import React from 'react'
import styles from './Partfolio.module.css'

import Image_1 from "./Partfolio Images/Sub Container.svg";
import Image_2 from "./Partfolio Images/Container (1).svg";

const Partfolio = () => {
  return (
    <div>
      <section className={styles.section_1}>
        <img src={Image_1} alt="" />
        <div>
          <p>bRANDS i hAVE wORKED wITH</p>
          <img src={Image_2} alt="" />
        </div>
      </section>
    </div>
  );
}

export default Partfolio
