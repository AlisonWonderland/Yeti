import React, { Component } from 'react'
import styles from '../styles/home.module.css';

export class Homepage extends Component {
    render() {
        return (
            <div className={styles["website-wrapper"]}>
               <header>
                    <nav className={styles["navbar"]}>
                        <a href="/" className={styles["yeti-home"]}>                        
                            <img className={styles["logo-nav"]} src="assets/output-onlinepngtools.png" alt="Yeti logo"/>
                            {/* <span className={styles["nav-item"]}><a href="#">Yeti</a></span> */}
                            Yeti
                        </a>
                        <ul className={styles["nav-links"]}>
                            <li className={styles["nav-item"]}><a href="/browse">Browse</a></li>
                            <li className={styles["nav-item"]}><a href="/login">Sign in</a></li>
                        </ul>
                    </nav>
                </header>
                <main className={styles["main-container"]}>
                    {/* TODO: Have them be the top 4 most popular/liked photos of that day or previous */}
                    {/* Let alt be the description of the picture */}
                    <div className={styles["landingpage-image-grid"]}>
                        <img className={styles["grid-image"]} src="https://i.redd.it/6kjrolujkpmz.jpg" alt=""/>
                        <img className={styles["grid-image"]} src="https://i.redd.it/yc9ww7kzx2xz.jpg" alt=""/>
                        <img className={styles["grid-image"]} src="https://i.redd.it/yfe1nw1dke811.jpg" alt=""/>
                        <img className={styles["grid-image"]} src="https://i.imgur.com/2tJPHsp.jpg" alt=""/>
                    </div>
                </main>
            </div>
        )
    }
}

export default Homepage
