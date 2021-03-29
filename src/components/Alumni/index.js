import React from 'react'
import styles from './Alumni.module.scss'
import photo1 from '../../assets/images/tega.png'
import photo2 from '../../assets/images/grace.png'
import Button from '../Button'

function Alumni() {
  return (
    <div className={styles.alumni}>
      <header className={styles.alumni_header}>Hear from our Alumni</header>
      <div className={styles.carousel}>
        <div className={styles.alumni_testimonial}>
          <div >
            <div className={styles.alumni_testimonialContent}>
              Passing through the decagon program was a wonderful experience.
              For someone who had some level of experience with PHP, I was
              exposed to basic and advanced programming knowledge and Soft
              skills that sharpened my skills making the skilled full stack
              software engineer I am today. Because of this, I can boldly say
              ill be an exceptional addition to any team. It is a 6 months
              intense program so it would be challenging and requires a lot of
              sacrifice but "trust the process" and you'll end up appreciating
              yourself for taking this bold step.
            </div>
          </div>
          <div className={styles.alumniBio}>
            <div className={styles.alumni_image}>
              <img src={photo1} alt="alumni" />
            </div>
            <div>
              <h3>Tega Oke</h3>
              <p>
                Software Engineer and Technical Trainner <br />
                at Decagon
              </p>
            </div>
          </div>
        </div>
        <div  className={styles.alumni_testimonial}>
          <div >
            <div className={styles.alumni_testimonialContent}>
              Decagon Helped me Build skills that took my career to the next
              level. Before attending decagon, I applied to many Jobs, I barely
              even got any interview invites, But now, I have organizations
              reaching out to me to work for them.
            </div>
          </div>
          <div className={styles.alumniBio}>
            <div className={styles.alumni_image}>
              <img src={photo2} alt="alumni" />
            </div>
            <div>
              <h3>Grace Frank</h3>
              <p>
              Software Enigneer at Centricity
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Alumni
