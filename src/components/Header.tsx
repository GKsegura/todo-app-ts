import Rockeat from '../assets/rocket.svg';
import styles from './Header.module.css';

export const Header = () => {
    return (
        <header className={styles.header}>
            <img src={Rockeat} alt="Rocket" />
            <h1>to<span>do</span></h1>
        </header>
    );
};