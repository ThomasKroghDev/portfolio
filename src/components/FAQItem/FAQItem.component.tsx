// components/FAQItem.js
import { useState } from 'react';
import styles from './FAQItem.module.css';
import { BsChevronRight, BsChevronDown } from 'react-icons/bs';

const FAQItem = ({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <li className={styles.listItem}>
      <div onClick={toggleOpen} className={styles.container}>
        <strong className={`${styles.question} ${isOpen ? styles.active : ''}`}>
          Q: {question}
        </strong>
        {isOpen ? (
          <BsChevronDown className={styles.active} />
        ) : (
          <BsChevronRight />
        )}
      </div>

      {isOpen && <p className={styles.answer}>{answer}</p>}
    </li>
  );
};

export default FAQItem;
