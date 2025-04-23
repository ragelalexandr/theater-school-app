import React from 'react';
import Navbar from './Navbar';
import styles from "./HeaderMain.module.css";

const HeaderMain = () => {
  return (
    <div className={styles.container}>
      {/* Блок навигации */}
      <header className={styles.headerMain}>
        <Navbar />
      </header>

      {/* Блок с фото */}
      <div className={styles.photoBlock}>
        <img src="images/image5.png" alt="Фото 1" className={styles.photo1} />
        <img src="images/image6.png" alt="Фото 2" className={styles.photo2} />
        <img src="images/image4.png" alt="Фото 3" className={styles.photo3} />
        <img src="images/image3.png" alt="Фото 4" className={styles.photo4} />
        <img src="images/image2_1.png" alt="Фото 5" className={styles.photo5} />
      </div>

      {/* Блок заголовка */}
      <div className={styles.titleBlock}>
        <h1 className={styles.mainTitle}>Школа театрального искусства</h1>
        <p className={styles.description}>Актера нельзя воспитать и обучить, если не воспитать в нем человека.</p>
      </div>
    </div>
  );
};

export default HeaderMain;
