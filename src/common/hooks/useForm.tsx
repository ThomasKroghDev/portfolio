import { useState } from 'react';

interface ValidationErrors<T> {
  [key: string]: T;
}

interface FormValues {
  [key: string]: string;
}

interface Touched {
  [key: string]: boolean;
}

type ValidationFunction = (
  values: Record<string, unknown>
) => void | ValidationErrors<string>;

export function useForm(
  initialState: FormValues = {},
  validations: ValidationFunction[] = [],
  onSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    values: Record<string, string>
  ) => Promise<void>
) {
  function validate(
    validations: ValidationFunction[],
    values: Record<string, unknown>
  ) {
    const errors: ValidationErrors<string> = {};

    validations.forEach((validation) => {
      const result = validation(values);
      if (typeof result === 'object') {
        Object.assign(errors, result);
      }
    });

    return {
      isValid: Object.keys(errors).length === 0,
      errors,
    };
  }

  const { isValid: initialIsValid, errors: initialErrors } = validate(
    validations,
    initialState
  );
  const [values, setValues] = useState<{ [x: string]: string }>(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const [isValid, setIsValid] = useState(initialIsValid);
  const [touched, setTouched] = useState<{ [x: string]: boolean }>(
    Object.keys(initialState).reduce((acc, key) => {
      acc[key] = false;
      return acc;
    }, {} as Touched)
  );

  const changeHandler = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    const newValues = { ...values, [name]: value };
    const newlyTouched = { ...touched, [name]: true };
    const { isValid, errors } = validate(validations, newValues);
    setIsValid(isValid);
    setValues(newValues);
    setErrors(errors);
    setTouched(newlyTouched);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!isValid) {
      return;
    }
    await onSubmit(event, values);
  };

  return { values, changeHandler, isValid, errors, touched, submitHandler };
}
