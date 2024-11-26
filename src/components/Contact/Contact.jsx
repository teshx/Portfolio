import React from 'react'
import { getImageUrl } from '../../utils';
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
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:teshie00001@gmail.com" target="_blank">
            teshie00001@gmail.com
          </a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/teshx" target="_blank">
            linkedin.com/in/teshx
          </a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/teshx" target="_blank">
            github.com/teshx
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Contact
