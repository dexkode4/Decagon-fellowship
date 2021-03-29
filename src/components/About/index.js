import React from 'react'
import styles from './About.module.scss';

function About() {
    return (
        <div className={styles.about}>
            <header className={styles.about_header}>
            Why you should hire engineers through<br/> Decagon’s Fellowship Programme
            </header>
            <div className={styles.about_content}>
                <div className={styles.about_contentBox}>
                    <h3>Build Faster with Well-Trained Engineers</h3>
                    <p>Gain access to Nigeria's top 0.5% Talent - We run a rigorous 8 week process to pick top talent to be accepted into our program from across Nigeria then we train them intensively for 4 months.</p>
                </div>
                <div className={styles.about_contentBox}>
                    <h3>Eliminate Rapid Talent <br/> Turnover </h3>
                    <p>Eliminate Risk of Hiring Error 
During the 2 months free internship(we pay their stipend), you get the chance to evaluate them for fit for your company.</p>
                </div>
                <div className={styles.about_contentBox}>
                    <h3>Enjoy Access to Dedicated <br/>Support</h3>
                    <p>We provide exclusive talent management support, which includes: consistent performance management and evaluation for assigned engineers.</p>
                </div>
            </div>
        </div>
    )
}

export default About
