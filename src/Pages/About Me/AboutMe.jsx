import React from "react";
import styles from "./About.module.css";

import Abouts1Img from "../../assets/Abouts1Img.svg";

const AboutMe = () => {
  return (
    <div>
      <section className={styles.section_1}>
        <img src={Abouts1Img} alt="" height={580} />
        <div className={styles.content}>
          <h2>My Biography</h2>
          <p>
            Damien Braun's love affair with photography began at a young age,
            nurtured by the captivating landscapes and vibrant cultures
            surrounding her in the heart of the USA. Her passion for
            storytelling through imagery led her to embark on a photography
            journey that has spanned over 15 years. Driven by an insatiable
            curiosity to explore the beauty in everyday moments, Damien has
            honed her craft meticulously. Her background in digital media
            provided her with a solid foundation, but it's her keen eye for
            detail and an innate ability to capture raw emotions that truly set
            her apart. Damien's journey is more than just taking pictures; it's
            about capturing the essence of the human spirit, the fleeting magic
            of nature, and the emotions that define our lives. With each click
            of her camera, she weaves stories that transcend time and space.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
