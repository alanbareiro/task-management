import React from 'react';
import { useThemeContext } from "../../../Context/ThemeContext"; // Importa el contexto
import styles from './Footer.module.css'; // Importa el CSS Module para el Footer

const Footer = () => {
    const { darkMode } = useThemeContext(); // Obtén el estado del tema
    const classname = darkMode ? 'dark' : 'light'; // Define la clase según el tema

    return (
        <footer className={styles[`footer-${classname}`]}> {/* Aplica la clase dinámica */}
            <div className={styles.footerContent}>
                <p>© 2025 Task Management</p>
                <p>Desarrollado con ❤️</p>
            </div>
        </footer>
    );
};

export default Footer;