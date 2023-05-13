import React from 'react';
import Button from '../button/button.componet';
import { useForm } from '@/common/hooks/useForm';
import styles from './contactForm.module.css';

type FormErrors = {
  [key: string]: string;
};

const initialState = {
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

const onSubmit = async (
  event: React.FormEvent<HTMLFormElement>,
  values: any
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
      console.log('Email sent');
    } else {
      console.error('Something went wrong');
    }
  } catch (error) {
    console.error(error);
  }
};

export default function ContactForm() {
  const { values, isValid, errors, changeHandler, touched, submitHandler } =
    useForm(initialState, validations, onSubmit);
  return (
    <div className={styles.contactFormContainer}>
      <form className={styles.form} onSubmit={submitHandler}>
        <div className={styles.formControl}>
          <label className={styles.label} htmlFor="FirstName">
            first name
          </label>
          <input
            onChange={changeHandler}
            className={styles.input}
            type="text"
            name="FirstName"
            id="FirstName"
            placeholder="First Name"
            aria-placeholder="first name"
          />
          {touched.FirstName && errors.FirstName && (
            <p className={styles.validationWarning}>{errors.FirstName}</p>
          )}
        </div>
        <div className={styles.formControl}>
          <label className={styles.label} htmlFor="LastName">
            last Name
          </label>
          <input
            onChange={changeHandler}
            className={styles.input}
            type="text"
            name="LastName"
            id="LastName"
            placeholder="Last Name"
          />
          {touched.LastName && errors.LastName && (
            <p className={styles.validationWarning}>{errors.LastName}</p>
          )}
        </div>
        <div className={styles.formControl}>
          <label className={styles.label} htmlFor="Email">
            email
          </label>
          <input
            onChange={changeHandler}
            className={styles.input}
            type="email"
            name="Email"
            id="Email"
            placeholder="Email@mail.com"
          />
          {touched.Email && errors.Email && (
            <p className={styles.validationWarning}>{errors.Email}</p>
          )}
        </div>
        <div className={styles.formControl}>
          <label className={styles.label} htmlFor="comment">
            comment
          </label>
          <textarea
            onChange={changeHandler}
            className={styles.input}
            name="comment"
            id="comment"
            placeholder="Comment"
          ></textarea>
          {touched.comment && errors.comment && (
            <p className={styles.validationWarning}>{errors.comment}</p>
          )}
        </div>
        <Button type={'submit'} title={'Submit'} disabled={!isValid} />
      </form>
    </div>
  );
}
