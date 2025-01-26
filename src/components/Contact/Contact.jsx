import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";
function Contact() {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" width="20px" height="20px" />
          <a href="mailto:teshie00001@gmail.com" target="_blank">
            teshie00001@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
            width="20px"
            height="20px"
          />
          <a href="https://www.linkedin.com/in/teshx" target="_blank">
            linkedin.com/in/teshx
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" width="20px" height="20px" />
          <a href="https://www.github.com/teshx" target="_blank">
            github.com/teshx
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/telegramIcon.png")} alt="Telegram icon" width="20px" height="20px" />
          <a href="https://t.me/teshx1" target="_blank">
            @teshx1
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact;
