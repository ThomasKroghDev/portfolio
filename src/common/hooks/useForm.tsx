import { useState, useReducer, useEffect } from 'react';

interface ValidationErrors<T> {
  [key: string]: T;
}

export interface FormValues {
  [key: string]: string;
}

interface Touched {
  [key: string]: boolean;
}

type ValidationFunction = (
  values: Record<string, unknown>
) => void | ValidationErrors<string>;

interface FormState {
  values: FormValues;
  errors: ValidationErrors<string>;
  isValid: boolean;
  touched: Touched;
}

interface UseFormReturn {
  values: FormValues;
  errors: ValidationErrors<string>;
  isValid: boolean;
  touched: Touched;
  changeHandler: (event: any) => void;
  submitHandler: (event: React.FormEvent<HTMLFormElement>) => void;
  resetForm: () => void;
}

type FormAction =
  | { type: 'SET_VALUES'; payload: FormValues }
  | { type: 'SET_ERRORS'; payload: ValidationErrors<string> }
  | { type: 'SET_IS_VALID'; payload: boolean }
  | { type: 'SET_TOUCHED'; payload: Touched };

function formReducer(state: FormState, action: FormAction): FormState {
  switch (action.type) {
    case 'SET_VALUES':
      return { ...state, values: action.payload };
    case 'SET_ERRORS':
      return { ...state, errors: action.payload };
    case 'SET_IS_VALID':
      return { ...state, isValid: action.payload };
    case 'SET_TOUCHED':
      return { ...state, touched: action.payload };
    default:
      return state;
  }
}

export function useForm(
  initialState: FormValues = {},
  validations: ValidationFunction[] = [],
  onSubmit: (
    event: React.FormEvent<HTMLFormElement>,
    values: Record<string, string>,
    resetForm: () => void
  ) => Promise<void>
): UseFormReturn {
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
  const [state, dispatch] = useReducer(formReducer, {
    values: initialState,
    errors: initialErrors,
    isValid: initialIsValid,
    touched: Object.keys(initialState).reduce(
      (acc, key) => ({ ...acc, [key]: false }),
      {}
    ) as Touched,
  });

  const resetForm = (): void => {
    dispatch({ type: 'SET_VALUES', payload: initialState });
    dispatch({ type: 'SET_ERRORS', payload: {} });
    dispatch({ type: 'SET_IS_VALID', payload: false });
    dispatch({
      type: 'SET_TOUCHED',
      payload: Object.keys(initialState).reduce(
        (acc, key) => ({ ...acc, [key]: false }),
        {}
      ) as Touched,
    });
  };

  const initialValues = { ...initialState };
  const [hasInitialized, setHasInitialized] = useState(false);

  const changeHandler = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    const newValues = { ...state.values, [name]: value };
    const newlyTouched = { ...state.touched, [name]: true };
    const { isValid, errors } = validate(validations, newValues);
    dispatch({ type: 'SET_VALUES', payload: newValues });
    dispatch({ type: 'SET_ERRORS', payload: errors });
    dispatch({ type: 'SET_IS_VALID', payload: isValid });
    dispatch({ type: 'SET_TOUCHED', payload: newlyTouched });
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!state.isValid) {
      return;
    }
    await onSubmit(event, state.values, resetForm);
  };

  useEffect(() => {
    if (!hasInitialized) {
      const { isValid, errors } = validate(validations, initialState);
      dispatch({ type: 'SET_ERRORS', payload: errors });
      dispatch({ type: 'SET_IS_VALID', payload: isValid });
      setHasInitialized(true);
    }
  }, [hasInitialized, initialState, validations]);

  return {
    values: state.values,
    changeHandler,
    isValid: state.isValid,
    errors: state.errors,
    touched: state.touched,
    submitHandler,
    resetForm,
  };
}
