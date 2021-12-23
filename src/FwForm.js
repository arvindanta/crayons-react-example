import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
} from "react";
import {
  getElementValue,
  validateYupSchema,
  prepareDataForValidation,
  yupToFormErrors,
} from "./form/form-util";

function FwForm({
  initialValues = {},
  renderer,
  initialErrors = {},
  validate = () => {},
  validationSchema = {},
  validateOnInput = true,
  validateOnBlur = true,
  innerRef,
}) {
  let dirty = false;

  let isValid = false;

  const [isValidating, setIsValidating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focused, setFocused] = useState(null);
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
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
    event?.preventDefault();
    event?.stopPropagation();

    let isValid = false;
    // on clicking submit, mark all fields as touched

    await handleValidation();

    console.log({ errors: errors });

    const keys = [...Object.keys(values), ...Object.keys(errors)];

    keys.forEach((k) => setTouched((touched) => ({ ...touched, [k]: true })));

    isValid = !errors || Object.keys(errors).length === 0;

    console.log({ values: values });

    console.log("is Valid Form", isValid);

    if (!isValid) {
      return;
    }
    setIsSubmitting(true);

    return values;
  };

  const handleReset = (event) => {
    event?.preventDefault();
    event?.stopPropagation();
    setIsSubmitting(false);
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setFocused(null);
  };

  const setFieldValue = (fieldObj) => {
    setValues((values) => ({ ...values, ...fieldObj }));
    Object.keys(fieldObj).forEach((k) =>
      setTouched((touched) => ({ ...touched, [k]: true }))
    );
  };

  const setFieldErrors = (errorObj) => {
    setErrors((errors) => ({ ...errors, ...errorObj }));
    Object.keys(errorObj).forEach((k) =>
      setTouched((touched) => ({ ...touched, [k]: true }))
    );
  };

  let formRef = React.useRef();
  if (!innerRef) {
    innerRef = formRef;
  }
  useImperativeHandle(innerRef, () => ({
    doSubmit: handleSubmit,
    doReset: handleReset,
    setFieldErrors,
    setFieldValue,
  }));

  const handleValidation = useCallback(async () => {
    setIsValidating(true);

    if (validationSchema && Object.keys(validationSchema).length) {
      const pr = validateYupSchema(
        prepareDataForValidation(values),
        validationSchema
      );

      try {
        const resultV = await pr;
        console.log({ resultV });
        setErrors({}); // reset errors if no errors from validation
      } catch (err) {
        setErrors(yupToFormErrors(err));
      }
    } else if (validate && typeof validate === "function") {
      try {
        const errors = await validate(values);
        setErrors(errors || {});
      } catch (err) {
        console.error(`Error in calling validate function ${err.message}`);
      }
    }
    setIsValidating(false);
  }, [values, validationSchema]);

  useEffect(() => {
    if (validateOnInput || validateOnBlur) {
      if (isMounted.current) handleValidation();
      else isMounted.current = true;
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
        if (!touched[field])
          setTouched((touch) => ({ ...touch, [field]: true }));
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
      touched,
      isValidating,
      isSubmitting,
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
      value: values[field],
      checked: values[field] === value,
    });

    const checkboxProps = (field) => ({
      ...inputProps(field, "checkbox"),
      type: "checkbox",
      checked: !!values[field],
    });

    const selectProps = (field, inputType) => ({
      type: "select",
      name: field,
      id: `input-${field}`,
      handleChange: handleInput(field, "select"),
      handleBlur: handleBlur(field, "select"),
      value:
        inputType === "MULTI_SELECT" // for multiselect pass Array
          ? values[field]?.map((v) => v.value || v) || []
          : Array.isArray(values[field]) // single select but the value is an array, pass 0th index
          ? values[field]?.map((v) => v.value || v)[0] || ""
          : values[field] || "",
    });

    const labelProps = (field, value) => ({
      htmlFor: !value ? `input-${field}` : `input-${field}--radio-${value}`,
    });

    const formProps = {
      onSubmit: handleSubmit,
      onReset: handleReset,
    };

    return {
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
    controlProps: utils,
  };
  return (
    <form id="fw_form_wrapper" {...utils.formProps} noValidate>
      {renderer(renderProps)}
    </form>
  );
}

export default React.memo(FwForm);
