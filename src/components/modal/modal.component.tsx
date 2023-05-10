import { useEffect, useState } from 'react';
import styles from './modal.module.css';

export default function Modal({
  title,
  text,
  buttonText,
  onClose,
  isOpen = false,
  setIsOpen,
}: {
  title: string;
  text: string;
  buttonText: string;
  onClose: () => void;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}) {
  const handleClose = () => {
    setIsOpen(false);
    onClose();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  if (typeof window !== 'undefined') {
    if (!localStorage.getItem('cookiesAccepted')) {
      return (
        <>
          {isOpen && (
            <div className={styles.modalContainer}>
              <dialog className={styles.modal}>
                <div className={styles.modalContent}>
                  <h2>{title}</h2>
                  <p>{text}</p>
                  <button className={styles.modalButton} onClick={handleClose}>
                    {buttonText}
                  </button>
                </div>
              </dialog>
            </div>
          )}
        </>
      );
    }
  }

  return null;
}
