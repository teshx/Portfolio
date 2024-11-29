import React, { useState } from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils.js";

import TextLoop from "react-text-loop";
import Typewriter from "typewriter-effect";
const Bio = {
  roles: ["a full-stack developer", " UI/UX Designer", "a Creator"],
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
          I am a motivated and versatile individual, always eager to take on new
          challenges. With a passion for learning I am dedicated to delivering
          high-quality results. With a positive attitude and a growth mindset, I
          am ready to make a meaningful contribution and achieve great things.
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
