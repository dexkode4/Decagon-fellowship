import React from 'react'
import Button from '../Button';
import styles from './Jumbotron.module.scss';

function Jumbotron() {
    return (
        <div className={styles.jumbotron}>
            <div className={styles.jumbotronLeft}>
                <h1>
                Hire Well Trained Software Engineers. Enjoy a 2-year Talent Commitment
                </h1>
                <p>
                With a 0.5% acceptance rate, the Decagon Fellowship contracts <br/> well-trained engineers to you for 2 years after a free 2-month <br/> internship.
                </p>
                <Button background="green" link="signup" size="sm" title="Get Started"/>
            </div>
            <div className={styles.jumbotronRight}/>
        </div>
    )
}

export default Jumbotron
