import { h } from 'preact';
import Counter from '../Counter/Counter';

import styles from './Hero.module.scss';

const Hero = () => {

    const FINAL_DATE = new Date(2022, 7, 6);

    return (
        <div className={styles['wrapper-hero']}>
            <img src="hearts.jpg" alt="hearts background" className={styles['bg-img']} />
            <div className={styles.gradient}></div>
            <div className={styles.gradient2}></div>
            <div className={styles.overlay}>
                <div className={styles.content}>
                <h1>Cuenta atrás:</h1>
                <Counter finalDate={FINAL_DATE} />
                </div>
            </div>
        </div>
    )
}

export default Hero;