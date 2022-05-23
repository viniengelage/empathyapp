import { AxiosError } from 'axios';
import { ValidationError } from 'yup';

interface IResponse {
  [key: string]: string;
}

export const getValidationErrors = (error: any) => {
  const validationErrors: IResponse = {};
  if (error instanceof ValidationError) {
    error.inner.forEach(err => {
      if (err.path) {
        validationErrors[err.path] = err.message;
      }
    });

    return validationErrors;
  }

  if (error instanceof AxiosError) {
    const errors = error.response?.data.errors;

    if (errors) {
      Object.keys(errors).forEach(err => {
        validationErrors[err] = errors[err];
      });
    }

    return validationErrors;
  }

  return null;
};
