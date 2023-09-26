import { useState, useCallback, ChangeEvent } from "react";

interface FormInput {
  [name: string]: number | string;
}

interface FormInputError {
  [name: string]: string;
}

interface FormInputOptions {
  [name: string]: {
    errorMessage: string;
    validate: (
      newValue: string | number,
      currentValue: string | number
    ) => boolean;
  };
}

type FormInpuChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;

interface FormReturnValue {
  formValue: FormInput;
  errors: FormInputError;
  handleFormInputChange: (e: FormInpuChangeEvent) => void;
}

export const useForm = <T extends FormInput>(
  initialValue: T,
  options: FormInputOptions
): FormReturnValue => {
  const [formValue, setFormValue] = useState<FormInput>(initialValue);
  const [errors, setErrors] = useState<FormInputError>(() => {
    const errorsObj: FormInputError = {};

    Object.keys(initialValue).forEach((key: string) => {
      errorsObj[key] = "";
    });

    return errorsObj;
  });

  function assertFunction(t: unknown): asserts t is Function {
    if (typeof t !== "function") {
      throw new Error(`The ${t} is not a function`);
    }
  }

  const handleFormInputChange = useCallback(
    (e: FormInpuChangeEvent) => {
      const { name, value } = e.target;

      assertFunction(options[name].validate);

      const shouldUpdate = (() => {
        return options[name].validate(value, formValue[name]);
      })();

      if (shouldUpdate) {
        setFormValue((prev: FormInput) => {
          return {
            ...prev,
            [name]: value,
          };
        });

        setErrors((prev: FormInputError) => {
          return {
            ...prev,
            [name]: "",
          };
        });
      } else {
        setErrors((prev: FormInputError) => {
          return {
            ...prev,
            [name]: options[name].errorMessage,
          };
        });
      }
    },
    [formValue, options]
  );

  return {
    formValue,
    errors,
    handleFormInputChange,
  };
};
