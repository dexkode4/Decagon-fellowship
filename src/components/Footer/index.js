import React from 'react'
import { DecagonLogoLightIcon } from '../../assets/svg';
import styles from './Footer.module.scss';
import {TwitterIcon, InstagramIcon, YoutubeIcon} from '../../assets/svg'

function Footer() {
    return (
        <div className={styles.footer}>
            <DecagonLogoLightIcon/>
            <div className={styles.socials}>
                <span>© 2021 Decagon Institute. All rights reserved</span>

                <div className={styles.socialsLinks}>
                    <TwitterIcon/>
                    <InstagramIcon/>
                    <YoutubeIcon/>
                </div>
            </div>
        </div>
    )
}

export default Footer
