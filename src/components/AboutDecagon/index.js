import React from 'react'
import styles from './AboutDecagon.module.scss'
import decagonImage from '../../assets/images/lobby.png'
import Button from '../Button'

function AboutDecagon() {
  return (
    <div className={styles.decagon}>
      <div className={styles.container}>
        <div className={styles.container_Left}>
          <img src={decagonImage} alt="decagon lobby" />
        </div>

        <div className={styles.container_Right}>
          <h1>About Decagon</h1>
          <p>
            Decagon’s intensive Software Development Bootcamp transforms
            high-performing individuals into exceptional software engineering
            talent for the global market.
          </p>

          <p>
            Through our agile delivery methodology, mentor matching, and
            leadership modules, Decagon engineers are equipped with techniques
            and a leadership mindset that enables them to work competitively in
            any team.
          </p>

          <Button title="Learn About our Work" background="green" size="sm" link="learn"/>
        </div>
      </div>
    </div>
  )
}

export default AboutDecagon
