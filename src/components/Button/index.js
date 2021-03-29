import React from 'react'
import cx from 'classnames';
import { useHistory } from 'react-router-dom';
import styles from './Button.module.scss';

const buttonSize = {
    sm : 'buttonSmall',
    full : 'buttonFull'
}

const  buttonBg = {
    green: 'buttonGreen',
    white: 'buttonWhite'
}

function Button({title, size, background, link}) {
    const history = useHistory()
    const handleClick = () => {
       history.push(`/${link}`)
    }
    return (
        <button className={cx(styles.button,styles[`${buttonSize[size]}`],styles[`${buttonBg[background]}`] )}
        onClick={handleClick}>
            {title}
        </button>
    )
}

export default Button
