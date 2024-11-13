import React from 'react'
import About from './components/About/About'
import Navbar from './components/Navbar/Navbar'
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <About />
    </div>
  );
}

export default App
