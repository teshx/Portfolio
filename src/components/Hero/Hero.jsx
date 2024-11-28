import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";

import TextLoop from "react-text-loop";
import Typewriter from "typewriter-effect";
const Bio = {
  roles: ["Developer", "Designer", "Creator", "Engineer"],
};

function Hero() {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm teshager</h1>

        <h1 className={styles.Loops}>
          I am{" "}
          <TextLoop>
            <span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </TextLoop>{" "}
        </h1>

        <p className={styles.description}>
          I'm a full-stack developer with experience using React and NodeJS.
          Reach out if you'd like to learn more!
        </p>
        <a href="mailto:myemail@email.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
}

export default Hero;
