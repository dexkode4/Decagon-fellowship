import React from 'react'
import { OneIcon, ThreeIcon, TwoIcon } from '../../assets/svg';
import image from '../../assets/images/businessman.png';

import styles from './Walkthrough.module.scss';

function Walkthrough() {
    return (
        <div className={styles.walkthrough}>
            <div className={styles.walkthroughLeft}>
                <header className={styles.walkthroughLeft_header}>
                    Understanding How it works
                </header>

                <div className={styles.walkthroughBox}>
                    <OneIcon/>
                    <div>
                        <h4>Company Onboarding</h4>
                        <p>Based on your requirements, we will confirm talent availability, process subscription payments, and contracts, and assign software engineers to your organization. </p>
                    </div>
                </div>
                <div className={styles.walkthroughBox}>
                    <TwoIcon/>
                    <div>
                        <h4>Internship and Training</h4>
                        <p>The developers will kickstart the free 2-month internship program where they'll get familiar with your organization's processes, tools, and frameworks.</p>
                    </div>
                </div>
                <div className={styles.walkthroughBox}>
                    <ThreeIcon/>
                    <div>
                        <h4>Full-time Contract-Offer</h4>
                        <p>During this 2-year period, your company will pay monthly salaries of 250,000 Naira (Net) in Year 1, and 300,000 Naira (Net) in Year 2, to each engineer, for their services.</p>
                    </div>
                </div>
            </div>
            <div className={styles.walkthroughRight}>
                {/* <img src={image} alt="businessman" /> */}
            </div>
            
        </div>
    )
}

export default Walkthrough
