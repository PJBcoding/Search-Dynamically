import React from 'react';
import styles from './MainMenu.module.css';
import Items from './Items';

const MainMenu = () => {
    return (

        <div className={styles.mainmenu}>
            <Items />
        </div>
    )
}

export default MainMenu;