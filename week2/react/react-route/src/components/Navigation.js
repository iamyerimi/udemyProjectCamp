import React from "react";
import styles from "styles/Navigation.module.css";
import { Link } from "react-router-dom";

const Navigation = () => {
    return (
        <>
        <nav className={styles.navigation}>
            <ul>
                {/* a 태그가 아닌 Link를 사용해야함 */}
               <li> <Link to="/">Home</Link></li> 
               <li> <Link to="/about">About</Link></li>
            </ul>
        </nav>
        </>
    )
};

export default Navigation;