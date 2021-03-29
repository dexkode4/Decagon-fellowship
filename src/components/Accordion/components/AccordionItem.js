import React from "react";
import cx from 'classnames';
import styles from '../Accordion.module.scss';

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div className={styles.faq__question} key={item.question}>
    <dt>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faq${index + 1}_desc`}
        data-qa="faq__question-button"
        className={cx(styles.faq__question_button, styles[fontWeightBold])}
        onClick={onClick}
      >
        {item.question}
      </button>
    </dt>
    <dd>
      <p
        id={`faq${index + 1}_desc`}
        data-qa="faq__desc"
        className={cx(styles.faq__desc, styles[showDescription])}
      >
        {item.answer}
      </p>
    </dd>
  </div>
);

export default AccordionItem;