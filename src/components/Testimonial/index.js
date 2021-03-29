import React from 'react'
import styles from './Testimonial.module.scss'
import image from '../../assets/images/CHIJIOKE.png'
import { MastercardLogoIcon, OpayLogoIcon, RenMoneyLogoIcon } from '../../assets/svg'
function Testimonial() {
  return (
    <div className={styles.testimonial}>
      <header className={styles.testimonial_header}>
        Testimonials from Our Clients
      </header>
      <div className={styles.container}>
        <div className={styles.container_Left}>
          <img src={image} alt="carbon ceo" />
        </div>

        <div className={styles.container_Right}>
          <p>
            We are a Fintech company, with a large team. As with similar
            companies in Nigeria acquiring well-trained software engineers was a
            challenge. When we heard about the Decagon Fellowship Program, we
            decided to subscribe to it to bridge this gap. The engineers from
            the fellowship settled in quickly and were able to contribute to the
            team right away. More importantly, we now have a core of engineers
            that can grow with us with more predictability and stability thereby
            preventing disruptions associated with unplanned engineering talent
            exits.
          </p>

          <div className={styles.container_Right__name}>
            <h2>Chijioke Dozie</h2>
            <p>CEO of Carbon</p>
          </div>
        </div>
      </div>
      <div className={styles.testimonial_bottom}>
        <h1>Building for Top Companies around the World.</h1>
        <p>
          We have a fast-growing alumni network executing projects for <br/> amazing
          companies
        </p>

        <div className={styles.testimonial_companies}>
                <div className={styles.testimonial_company}>
                    <RenMoneyLogoIcon/>
                </div>
                <div className={styles.testimonial_company}>
                    <OpayLogoIcon/>
                </div >
                <div className={styles.testimonial_company}>
                    <MastercardLogoIcon/>
                </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
