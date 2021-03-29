import React from 'react'
import { useHistory } from 'react-router-dom'
import { DecagonLogoLightIcon } from '../../assets/svg';
import Button from '../Button';
import styles from './Header.module.scss';

function Header() {
    const history = useHistory()
    const handleClick = () => {
       history.push(`/`)
    }
    return (
        <div className={styles.header}>
            <DecagonLogoLightIcon onClick={handleClick}  className={styles.header_homeBtn}/>
            <Button background="white" size="sm" title="Get Started" link="signup"/>
        </div>
    )
}

export default Header
