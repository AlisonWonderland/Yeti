import React, { Component } from 'react'
import styles from '../styles/browse.module.css';

export class Browse extends Component {
    render() {
        console.log(styles);
        return (
            <div className={styles["main-container"]}>
                <header>
                    <nav className={styles["navbar"]}>
                        <a href="/" className={styles["yeti-home"]}>                        
                            <img className={styles["logo-nav"]} src="assets/output-onlinepngtools.png" alt="Yeti logo"/>
                            Yeti
                        </a>
                        <ul className={styles["nav-links"]}>
                            <li className={styles["nav-item"]}><a href="/browse">Browse</a></li>
                            <li className={styles["nav-item"]}><a href="/login">Sign in</a></li>
                        </ul>
                    </nav>
                </header>
                <main id={styles["browse-main"]}>
                    <section id={styles["browse-purpose"]}>
                        <div className={styles["purpose-statement"]}>
                            <h1>Browse around Yeti</h1>
                            <p>From garage builds to starry nights, look around Yeti and see what # users are posting</p>
                        </div>
                    </section>
                    <section id={styles["browse-gallery"]}>
                        {/* Might remove this div */}
                        {/* Make photos shrink */}
                        <div className={styles["gallery"]}>
                            <div className={styles["image-row"]}>
                                {/* <div className={styles["col-sm"]}> */}
                                    <img src="https://i.pinimg.com/originals/df/a6/65/dfa6659788006be4fcfe2ad10a5083d9.jpg"/>
                                {/* </div>   */}
                                {/* <div className={styles["col-sm"]}> */}
                                    <img src="https://images.unsplash.com/photo-1526512340740-9217d0159da9?ixlib=rb-1.2."/> 
                                {/* </div> */}
                                {/* <div className={styles["col-sm"]}> */}
                                    <img src="https://www.kcet.org/sites/kl/files/styles/kl_image_article_hero/public/thumbnails/image/third_l.a._web_banner_plain.png?itok=TB_UliSH"/>

                                    <img src="https://upload.wikimedia.org/wikipedia/commons/0/03/Mont-Blanc_from_Planpraz_station.jpg"/>
                                {/* </div> */}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        )
    }
}

export default Browse
