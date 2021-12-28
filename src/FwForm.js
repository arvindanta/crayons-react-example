import React, {
  useEffect,
  useCallback,
  useMemo,
  useRef,
  useImperativeHandle,
  useReducer,
} from "react";
import {
  getElementValue,
  validateYupSchema,
  prepareDataForValidation,
  yupToFormErrors,
  setIn,
} from "./form/form-util";

function FwForm({
  initialValues = {},
  renderer,
  initialErrors = {},
  validationSchema = {},
  validateOnInput = true,
  validateOnBlur = true,
  formRef,
  validate = (_val) => {},
}) {
  let dirty = false;

  let isValid = false;

  // const [isValidating, setIsValidating] = useState(false);
  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [focused, setFocused] = useState(null);
  // const [values, setValues] = useState(initialValues);
  // const [touched, setTouched] = useState({});
  // const [errors, setErrors] = useState({});

  const isMounted = useRef(false);

  const INITIAL_STATE = {
    isValidating: false,
    isSubmitting: false,
    focused: null,
    values: {},
    touched: {},
    errors: {},
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_VALUES":
        return { ...state, values: action.payload };
      case "SET_ERRORS":
        return { ...state, errors: action.payload };
      case "SET_TOUCHED":
        return { ...state, touched: action.payload };
      case "SET_FOCUSED":
        return { ...state, focused: action.payload };
      case "SET_IS_VALIDATING":
        return { ...state, isValidating: action.payload };
      case "SET_IS_SUBMITTING":
        return { ...state, isSubmitting: action.payload };
      case "SET_FIELD_VALUE":
        return {
          ...state,
          values: setIn(
            state.values,
            action.payload.field,
            action.payload.value
          ),
        };
      case "SET_FIELD_TOUCHED":
        return {
          ...state,
          touched: setIn(
            state.touched,
            action.payload.field,
            action.payload.value
          ),
        };
      case "SET_FIELD_ERROR":
        return {
          ...state,
          errors: setIn(
            state.errors,
            action.payload.field,
            action.payload.value
          ),
        };
      case "RESET_FORM":
        return {
          ...state,
          isSubmitting: false,
          values: initialValues,
          errors: {},
          touched: {},
          focused: null,
        };
      case "SET_VALIDATION_RESULT":
        return {
          ...state,
          isSubmitting: false,
          errors: action.payload.errors,
        };
      case "SET_BLUR_RESULT":
        return {
          ...state,
          focused: action.payload.focused,
          touched: setIn(state.touched, action.payload.field, true),
          values: setIn(
            state.values,
            action.payload.field,
            action.payload.value
          ),
        };
      case "SET_INITIAL_VALUES": {
        return {
          ...state,
          values: action.payload.values,
          errors: action.payload.errors,
          touched: action.payload.touched,
        };
      }
      default:
        return state;
    }
  };

  const [formState, setFormState] = useReducer(reducer, INITIAL_STATE);

  const { isValidating, isSubmitting, focused, values, touched, errors } =
    formState;

  useEffect(() => {
    console.log("initialize state");

    let touchedState = {};
    let errorState = {};
    for (const field of Object.keys(initialValues)) {
      errorState = { ...errorState, [field]: null };
      touchedState = { ...touchedState, [field]: false };
    }
    errorState = { ...errorState, ...initialErrors };

    for (const field of Object.keys({ ...initialErrors })) {
      touchedState = { ...touchedState, [field]: true };
    }

    setFormState({
      type: "SET_INITIAL_VALUES",
      payload: {
        errors: errorState,
        touched: touchedState,
        values: initialValues,
      },
    });

    console.log("Initialized values, touched and error state");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = async (event) => {
    event?.preventDefault();
    event?.stopPropagation();

    setFormState({
      type: "SET_IS_SUBMITTING",
      payload: true,
    });

    let isValid = false;

    await handleValidation();

    console.log({ errors: errors });

    const keys = [...Object.keys(values), ...Object.keys(errors)];

    let touchedState = {};

    keys.forEach((k) => (touchedState = { ...touchedState, [k]: true }));

    // on clicking submit, mark touched fields
    setFormState({
      type: "SET_TOUCHED",
      payload: touchedState,
    });

    isValid = !errors || Object.keys(errors).length === 0;

    console.log({ values: values });

    console.log("is Valid Form", isValid);

    setFormState({
      type: "SET_IS_SUBMITTING",
      payload: false,
    });

    if (!isValid) {
      return;
    }

    return values;
  };

  const handleReset = (event) => {
    event?.preventDefault();
    event?.stopPropagation();

    setFormState({
      type: "RESET_FORM",
    });
  };

  const setFieldValue = (fieldObj) => {
    Object.entries(fieldObj)?.forEach(([field, value]) => {
      setFormState({
        type: "SET_FIELD_VALUE",
        payload: {
          field,
          value,
        },
      });
      setFormState({
        type: "SET_FIELD_TOUCHED",
        payload: {
          field,
          value: true,
        },
      });
    });
  };

  const setFieldErrors = (errorObj) => {
    setFormState({
      type: "SET_ERRORS",
      payload: errorObj,
    });

    Object.keys(errorObj)?.forEach((k) =>
      setFormState({
        type: "SET_FIELD_TOUCHED",
        payload: {
          field: k,
          value: true,
        },
      })
    );
  };

  let ref = React.useRef();
  if (!formRef) {
    formRef = ref;
  }
  useImperativeHandle(formRef, () => ({
    doSubmit: handleSubmit,
    doReset: handleReset,
    setFieldErrors,
    setFieldValue,
  }));

  const handleValidation = useCallback(async () => {
    console.log("handle validation");

    setFormState({
      type: "SET_IS_VALIDATING",
      payload: true,
    });

    let validationErrors = {};
    if (validationSchema && Object.keys(validationSchema)?.length) {
      const pr = validateYupSchema(
        prepareDataForValidation(values),
        validationSchema
      );

      try {
        await pr;
        validationErrors = {}; // reset errors if no errors from validation
      } catch (err) {
        validationErrors = yupToFormErrors(err);
      }
    } else if (validate && typeof validate === "function") {
      try {
        validationErrors = (await validate(values)) || {};
      } catch (err) {
        console.error(`Error in calling validate function ${err.message}`);
        validationErrors = {};
      }
    }
    setFormState({
      type: "SET_VALIDATION_RESULT",
      payload: {
        errors: validationErrors,
        isValidating: false,
      },
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [values]);

  useEffect(() => {
    if (validateOnInput || validateOnBlur) {
      if (isMounted.current) handleValidation();
      else isMounted.current = true;
    }
  }, [values, handleValidation, validateOnBlur, validateOnInput]);

  const memoizedHandleInput = useMemo(() => {
    return {};
  }, []);

  const handleInput = useCallback(
    (field, inputType) => {
      if (!memoizedHandleInput[field]) {
        memoizedHandleInput[field] = (event, ref) => {
          const value = getElementValue(inputType, event, ref);

          setFormState({
            type: "SET_FIELD_VALUE",
            payload: {
              field: field,
              value: value,
            },
          });
        };
      }
      return memoizedHandleInput[field];
    },
    [memoizedHandleInput]
  );

  const memoizedHandleBlur = useMemo(() => {
    return {};
  }, []);

  const handleBlur = useCallback(
    (field, inputType) => {
      if (!memoizedHandleBlur[field]) {
        memoizedHandleBlur[field] = (event, ref) => {
          const value = getElementValue(inputType, event, ref);

          setFormState({
            type: "SET_BLUR_RESULT",
            payload: {
              field: field,
              value: value,
              touched: true,
              focused: null,
            },
          });
        };
      }
      return memoizedHandleBlur[field];
    },
    [memoizedHandleBlur]
  );

  const memoizedHandleFocus = useMemo(() => {
    return {};
  }, []);

  const handleFocus = useCallback(
    (field, inputType) => {
      if (!memoizedHandleFocus[field]) {
        memoizedHandleFocus[field] = (event, ref) => {
          setFormState({
            type: "SET_FOCUSED",
            payload: field,
          });
        };
      }
      return memoizedHandleFocus[field];
    },
    [memoizedHandleFocus]
  );

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

    const radioProps = (field, inputType) => ({
      ...inputProps(field, inputType),
      type: inputType,
      id: `input-${field}--radio-${values[field]}`,
      value: values[field],
    });

    const checkboxProps = (field,inputType) => ({
      ...inputProps(field, inputType),
      type: inputType,
      checked: !!values[field],
    });

    const selectProps = (field, inputType) => ({
      type: "text",
      name: field,
      id: `input-${field}`,
      handleChange: handleInput(field,inputType),
      handleBlur: handleBlur(field,inputType),
      value:
        inputType === "multi_select" // for multiselect pass Array
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
