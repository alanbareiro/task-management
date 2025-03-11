import React from 'react';
import {useThemeContext} from "../../../Context/ThemeContext" ;
import styles from './Navbar.module.css'; // Importa el CSS Module como un objeto

const Navbar = () => {
    const { darkMode, toggleDarkMode } = useThemeContext();
    const classname = darkMode ? 'dark' : 'light';

    return (
        <>
            <div className={styles[`navbar-${classname}`]}> {/* Usa styles para acceder a las clases */}
                <span className={styles[`logo-${classname}`]}>Pyme Calendar</span> {/* Usa styles para acceder a las clases */}
                <label className={styles.switch} htmlFor="chekswitchid"> {/* Usa htmlFor para asociar el label con el input */}
                    <input
                        type="checkbox"
                        name="chekswitchname"
                        id="chekswitchid"
                        onChange={toggleDarkMode}
                        checked={darkMode}
                    />
                    <span className={styles.slider}></span> {/* Slider */}
                </label>
            </div>
            <div className={styles.content}>
                {/* Contenido adicional */}
            </div>
        </>
    );
};

export default Navbar;