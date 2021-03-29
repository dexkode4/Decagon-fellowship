import React from 'react'
import cx from 'classnames';
import styles from './Pricing.module.scss'
import { BulletPointIcon } from '../../assets/svg'
import Button from '../Button'

const pricingData = [
  {
    price: '1,000,000',
    description: [
      'Ideal for small and medium teams.',
      'Hire up to 4 developers within a year.',
      'Enjoy dedicated performance management and evaluation support.',
    ],
  },
  {
    price: '2,000,000',
    description: [
      'Ideal for large teams and enterprise-level organizations.',
      'Hire up to 10 engineers in a year.',
      'Enjoy dedicated performance management and evaluation support.',
    ],
  },
]

function PricingCard({ price, descriptions }) {
  return (
    <div className={styles.pricingCard}>
      <div className={styles.pricingCard__plan}>Tier 1 Plan</div>
      <div className={styles.pricingCard__price}>₦{price}</div>

      {descriptions?.map((description, index) => (
        <div className={cx(styles.pricingCard__description, index === descriptions.length - 1 && styles.pricingCard__descriptionNoborder )} key={index}>
          <BulletPointIcon />
          <span>{description}</span>
        </div>
      ))}
    </div>
  )
}

function Pricing() {
  return (
    <div className={styles.pricing}>
      <div className={styles.pricingMain}>
        <h3>Our Pricing</h3>
        <h1>Choose from our Subscripton Plan</h1>
        <p>
          Choose any of our annual subscription packages; specially designed for
          you.<br/> Your preferred subscription tier gives you exclusive access to
          Decagon’s exceptional <br/> software engineering talent pool.
        </p>

        <div className={styles.pricingPlans}>
          {pricingData.map(({ price, description }) => (
            <PricingCard price={price} descriptions={description} />
          ))}
        </div>
      </div>

      <div className={styles.pricingMain__info}>
          <p>
            Need some help with choosing the best tier for your team? Request a
            call and we’ll help you find your fit.
          </p>

          <Button title="Request a Call" background="green"  size="sm" link="call"/>
        </div>
    </div>
  )
}

export default Pricing
