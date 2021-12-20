import { useState, useEffect, useCallback, useMemo, useRef } from "react";
import {
  getElementValue,
  validateYupSchema,
  prepareDataForValidation,
  yupToFormErrors,
  setNestedObjectValues,
} from "./form/form-util";

export default function FwForm({
  initialValues = {},
  renderer,
  initialErrors = {},
  validate = () => {},
  validationSchema = {},
  validateOnInput = true,
  validateOnBlur = true,
}) {
  const groups = {};
  let dirty = false;
  
  const [isValid, setIsValid] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [focused, setFocused] = useState(null);
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [validity, setValidity] = useState({});
  const [errors, setErrors] = useState({});
  const isMounted = useRef(false);

  useEffect(() => {
    setValues(initialValues);

    for (const field of Object.keys(values)) {
      setTouched((touched) => ({ ...touched, [field]: false }));
      setErrors((errors) => ({ ...errors, [field]: null }));
    }

    setErrors((errors) => ({ ...errors, ...initialErrors }));

    Object.keys(initialErrors).forEach((f) =>
      setTouched((touched) => ({ ...touched, [f]: false }))
    );

    console.log({ errros: errors });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    event.stopPropagation();

    const isValid = true;
    // on clicking submit, mark all fields as touched
    setTouched(setNestedObjectValues(values, true));

    handleValidation();

    console.log({ errros: errors });

    console.log("is Valid ", isValid);

    setIsSubmitting(true);
    setSubmitCount((c) => c++);

    console.log({ values: values });
    // onFormSubmit.emit({ values: values, actions: { setSubmitting } });
  };

  const handleReset = () => {
    setIsSubmitting(false);
    setSubmitCount(0);
  };
  const handleValidation = useCallback(async () => {
    setIsValidating(true);
    const pr = validateYupSchema(
      prepareDataForValidation(values),
      validationSchema
    );

    try {
      const resultV = await pr;
      console.log({ resultV });
      setErrors({}); // reset errors if no errors from validation
    } catch (err) {
      console.log("validation error ", err);
      setErrors(yupToFormErrors(err));
    }
    setIsValidating(false);
  }, [values, validationSchema]);

  useEffect(() => {
    if (validateOnInput || validateOnBlur) {
      if(isMounted.current)
      handleValidation();
      else isMounted.current = true
    }
  }, [values, handleValidation, validateOnBlur, validateOnInput]);

  const memoizedHandleInput = useMemo(() => {
    return {};
  }, []);
  
  const handleInput = useCallback((field, inputType) => {
    if (!memoizedHandleInput[field]) {
      memoizedHandleInput[field] = (event, ref) => {
        const value = getElementValue(inputType, event, ref);
        setValues((val) => {
          console.log("val ", val);
          return { ...val, [field]: value };
        });
      };
    }
    return memoizedHandleInput[field];
  }, []);

  const memoizedHandleBlur = useMemo(() => {
    return {};
  }, []);

  const handleBlur = useCallback((field, inputType) => {
    if (!memoizedHandleBlur[field]) {
      memoizedHandleBlur[field] = (event, ref) => {
        const value = getElementValue(inputType, event, ref);

        if (focused) setFocused(null);
        if (!touched[field]) setTouched((touch) => ({ ...touch, [field]: true }));
        setValues((val) => ({ ...val, [field]: value }));
      };
    }
    return memoizedHandleBlur[field];
  }, []);

  const memoizedHandleFocus = useMemo(() => {
    return {};
  }, []);
  
  const handleFocus = useCallback((field, inputType) => {
    if (!memoizedHandleFocus[field]) {
      memoizedHandleFocus[field] = (event, ref) => {
        setFocused(field);
      };
    }
    return memoizedHandleFocus[field];
  }, []);

  const composedState = () => {
    return {
      focused,
      values,
      errors,
      validity,
      touched,
      isValidating,
      isSubmitting,
      submitCount,
    };
  };

  const composedHandlers = () => {
    return { handleSubmit, handleReset, handleInput, handleFocus, handleBlur };
  };

  const computeProps = () => {
    dirty = !Object.values(touched).every((x) => !x);
  };

  const composedComputedProps = () => {
    computeProps();
    return { dirty, isValid, initialValues };
  };

  const composedUtils = () => {
    const groupProps = (field) => ({
      "data-for": field,
      class: {
        "input-group": true,
        "was-touched": touched[field],
        "has-focus": focused === field,
        "has-value":
          typeof values[field] === "string"
            ? !!values[field]
            : typeof values[field] === "number"
            ? typeof values[field] !== null
            : false,
        "has-error":
          !validity[field] || (validity[field] && !validity[field].valid),
      },
      ref: (el) => (groups = { ...groups, [field]: el }),
    });

    const inputProps = (field, inputType) => ({
      name: field,
      type: inputType,
      handleInput: handleInput(field, inputType),
      handleChange: handleInput(field, inputType),
      handleBlur: handleBlur(field, inputType),
      handleFocus: handleFocus(field, inputType),
      id: `input-${field}`,
      value: values[field],
    });

    const radioProps = (field, value) => ({
      ...inputProps(field, "radio"),
      type: "radio",
      id: `input-${field}--radio-${value}`,
      value: value,
      checked: values[field] === value,
    });

    const checkboxProps = (field) => ({
      ...inputProps(field, "checkbox"),
      type: "checkbox",
      checked: !!values[field],
    });

    const selectProps = (field) => ({
      type: "select",
      name: field,
      id: `input-${field}`,
      handleChange: handleInput(field, "select"),
      handleBlur: handleBlur(field, "select"),
      handleFocus: handleFocus(field, "select"),
    });

    const labelProps = (field, value) => ({
      htmlFor: !value ? `input-${field}` : `input-${field}--radio-${value}`,
    });

    const formProps = {
      onSubmit: handleSubmit,
    };

    return {
      groupProps,
      inputProps,
      selectProps,
      checkboxProps,
      radioProps,
      labelProps,
      formProps,
    };
  };

  const state = composedState();
  const handlers = composedHandlers();
  const computedProps = composedComputedProps();
  const utils = composedUtils();

  const renderProps = {
    ...state,
    ...handlers,
    ...computedProps,
    ...utils,
  };
  return renderer(renderProps);
}
