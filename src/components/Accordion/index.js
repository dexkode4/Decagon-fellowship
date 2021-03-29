import React, { useState } from "react";
import Button from '../Button';
import styles from './Accordion.module.scss'
import AccordionItem from "./components/AccordionItem";
import {questionsAnswers} from './questionAnswer'

const Accordion = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-description" : "";
    const fontWeightBold = index === activeIndex ? "font-weight-bold" : "";
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
        item={item}
        index={index}
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <div className={styles.faq}>
      <h1 className={styles.faq__title}>FAQ's</h1>
      <dl className={styles.faq__list}>{renderedQuestionsAnswers}</dl>

      <div className={styles.faq__info}>
          <p>
            Need some help with choosing the best tier for your team? Request a
            call and we’ll help you find your fit.
          </p>
          <Button title="Request a Call" background="green"  size="sm" link="call"/>
        </div>
    </div>
  );
};

export default Accordion;
