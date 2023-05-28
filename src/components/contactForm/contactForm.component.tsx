import React from 'react';
import Button from '../button/button.componet';
import { FormValues, useForm } from '@/common/hooks/useForm';
import styles from './contactForm.module.css';
import SnackbarContext from '../context/snackbar/SnackbarContext';

type FormErrors = {
  [key: string]: string;
};

let initialState = {
  FirstName: '',
  LastName: '',
  Email: '',
  comment: '',
};

type ValidationFunction = (
  values: Record<string, unknown>
) => Record<string, string> | void;

const validations: ValidationFunction[] = [
  (values) => {
    const errors: FormErrors = {};

    if (!values.FirstName) {
      errors.FirstName = 'First name is required';
    }

    if (!values.LastName) {
      errors.LastName = 'Last name is required';
    }

    if (!values.Email) {
      errors.Email = 'Email is required';
    } else if (
      typeof values.Email !== 'string' ||
      !/\S+@\S+\.\S+/.test(values.Email)
    ) {
      errors.Email = 'Invalid email address';
    }

    if (!values.comment) {
      errors.comment = 'Comment is required';
    }

    return errors;
  },
];

export default function ContactForm() {
  const { openSnackbar } = React.useContext(SnackbarContext);

  const onSubmit = async (
    event: React.FormEvent<HTMLFormElement>,
    values: FormValues,
    resetForm: () => void // Added resetForm function
  ) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (response.ok) {
        // Reset the form values to empty strings
        resetForm();
        openSnackbar('Message sent successfully', 'success');
      }
    } catch (error) {
      console.error(error);
    }
  };

  const {
    values,
    isValid,
    errors,
    changeHandler,
    touched,
    submitHandler,
    resetForm,
  } = useForm(initialState, validations, onSubmit);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <h2 className={styles.title}>Contact me for a quote today</h2>
      <div className={styles.contactFormContainer}>
        <form className={styles.form} onSubmit={submitHandler}>
          <div className={styles.formControl}>
            <label className={styles.label} htmlFor="FirstName">
              first name
            </label>
            <input
              onChange={changeHandler}
              className={styles.input}
              value={values.FirstName}
              type="text"
              name="FirstName"
              id="FirstName"
              placeholder="First Name"
              aria-placeholder="first name"
            />
            {touched.FirstName && errors.FirstName ? (
              <p className={styles.validationWarning}>{errors.FirstName}</p>
            ) : (
              <div className={styles.validationWarningEmpty}></div>
            )}
          </div>
          <div className={styles.formControl}>
            <label className={styles.label} htmlFor="LastName">
              last Name
            </label>
            <input
              onChange={changeHandler}
              className={styles.input}
              value={values.LastName}
              type="text"
              name="LastName"
              id="LastName"
              placeholder="Last Name"
            />
            {touched.LastName && errors.LastName ? (
              <p className={styles.validationWarning}>{errors.LastName}</p>
            ) : (
              <div className={styles.validationWarningEmpty}></div>
            )}
          </div>
          <div className={styles.formControl}>
            <label className={styles.label} htmlFor="Email">
              email
            </label>
            <input
              onChange={changeHandler}
              className={styles.input}
              value={values.Email}
              type="email"
              name="Email"
              id="Email"
              placeholder="Email@mail.com"
            />
            {touched.Email && errors.Email ? (
              <p className={styles.validationWarning}>{errors.Email}</p>
            ) : (
              <div className={styles.validationWarningEmpty}></div>
            )}
          </div>
          <div className={styles.formControl}>
            <label className={styles.label} htmlFor="comment">
              comment
            </label>
            <textarea
              onChange={changeHandler}
              className={styles.input}
              value={values.comment}
              name="comment"
              id="comment"
              placeholder="Comment"
            ></textarea>
            {touched.comment && errors.comment ? (
              <p className={styles.validationWarning}>{errors.comment}</p>
            ) : (
              <div className={styles.validationWarningEmpty}></div>
            )}
          </div>
          <Button type={'submit'} title={'Submit'} disabled={!isValid} />
        </form>
      </div>
    </div>
  );
}
