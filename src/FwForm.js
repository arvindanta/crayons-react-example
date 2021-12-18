import { useState, useEffect } from "react";
import {
  getElementValue,
  validateYupSchema,
  prepareDataForValidation,
  yupToFormErrors,
  setNestedObjectValues,
} from "./form/form-util";

let formIds = 0;

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
  const formId = `crayons-form-${formIds++}`;
  let dirty = false;
  let formRef;

  const [isValid, setIsValid] = useState(false);
  const [isValidating, setIsValidating] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitCount, setSubmitCount] = useState(0);
  const [focused, setFocused] = useState(null);
  const [values, setValues] = useState({});
  const [touched, setTouched] = useState({});
  const [validity, setValidity] = useState({});
  const [errors, setErrors] = useState({});

  function getFormControls() {
    const children = formRef.children;

    const reportValidChild = [...children].filter(
      (c) => c.tagName === "FW-INPUT"
    );

    return reportValidChild;
  }

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

  const handleValidation = async (field, _target) => {
    setIsValidating(true);
    console.log(`validating ${field}`);

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
  };

  const handleInput = (field, inputType) => async (event, ref) => {
    const target = event?.target;
    const value = getElementValue(inputType, ref);

    setValues((values) => ({ ...values, [field]: value }));

    /** Validate, if user wants to validateOnInput */
    if (validateOnInput) handleValidation(field, target);
  };

  const handleBlur = (field, inputType) => (_event, ref) => {
    if (focused) setFocused(null);
    if (!touched[field])
      setTouched((touched) => ({ ...touched, [field]: true }));
    const value = getElementValue(inputType, ref);

    setValues((values) => ({ ...values, [field]: value }));
    /** Validate, if user wants to validateOnInput */
    if (validateOnBlur) handleValidation(field);
  };

  const handleFocus = (field, _inputType) => (_event, _ref) => {
    setFocused(field);
    // if (!this.touched[field])
    //   this.touched = { ...this.touched, [field]: true };
  };

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
      id: `${formId}-input-${field}`,
      value: values[field],
    });

    const radioProps = (field, value) => ({
      ...inputProps(field, "radio"),
      type: "radio",
      id: `${formId}-input-${field}--radio-${value}`,
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
      id: `${formId}-input-${field}`,
      handleChange: handleInput(field, "select"),
      handleBlur: handleBlur(field, "select"),
      handleFocus: handleFocus(field, "select"),
    });

    const labelProps = (field, value) => ({
      htmlFor: !value
        ? `${formId}-input-${field}`
        : `${formId}-input-${field}--radio-${value}`,
    });

    const formProps = {
      onSubmit: handleSubmit,
      ref: async (el) => (formRef = el),
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
