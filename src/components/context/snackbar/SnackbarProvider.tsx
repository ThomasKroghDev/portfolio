import React, { useState } from 'react';
import SnackbarContext from './SnackbarContext';
import styles from './SnackbarContext.module.css';

const SnackbarProvider = ({ children }: { children: React.ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [type, setType] = useState('');

  const openSnackbar = (
    message: React.SetStateAction<string>,
    type = 'default'
  ) => {
    setIsOpen(true);
    setMessage(message);
    setType(type);
  };

  const closeSnackbar = () => {
    setIsOpen(false);
  };
  const determineSnackbarType = (type: string) => {
    switch (type) {
      case 'success':
        return styles.success;
      case 'info':
        return styles.info;
      case 'error':
        return styles.error;
      case 'warning':
        return styles.warning;
      default:
        return styles.default;
    }
  };
  return (
    <SnackbarContext.Provider value={{ openSnackbar, closeSnackbar }}>
      {children}
      {isOpen && (
        <div className={`${styles.snackbar} ${determineSnackbarType(type)}`}>
          <div className={styles.content}>
            <div className={styles.message}>{message}</div>
            <button className={styles.closeBtn} onClick={closeSnackbar}>
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                width={12}
                height={12}
              >
                <line
                  x1="1"
                  y1="11"
                  x2="11"
                  y2="1"
                  stroke="black"
                  stroke-width="2"
                />
                <line
                  x1="1"
                  y1="1"
                  x2="11"
                  y2="11"
                  stroke="black"
                  stroke-width="2"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </SnackbarContext.Provider>
  );
};

export default SnackbarProvider;
