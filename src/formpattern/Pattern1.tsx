import { useRef } from "react";
import {
  FwFormWrapper,
  FwModal,
  FwButton,
  FwModalFooter,
  FwModalContent,
} from "@freshworks/crayons-1/react";
import * as Yup from "yup";

import "../App.css";
const formSchema = {
  title: "Test Form",
  name: "Test Form",
  fields: [
    {
      id: "first_name_id",
      type: "input",
      label: "First Name",
      name: "first_name",
      position: 1,
      editable: true,
      custom: false,
      inputType: "text",
      placeholder: "Enter firstname ...",
      required: true,
      fieldOptions: {},
      fields: [],
    },

    {
      id: "last_name_id",
      type: "input",
      label: "Last Name",
      name: "last_name",
      position: 1,
      editable: true,
      custom: false,
      inputType: "text",
      placeholder: "Enter last name...",
      required: false,
      fieldOptions: {},
      fields: [],
    },

    {
      name: "languages_known",
      label: "Languages Known",
      type: "select",
      inputType: "MULTI_SELECT",
      field_options: {},
      filterable: true,
      searchable: true,
      required: true,
      link: "",
      choices: [
        {
          id: 111,
          value: "English",
          position: 1,
        },
        {
          id: 222,
          value: "Hindi",
          position: 2,
        },
        {
          id: 333,
          value: "Tamil",
          position: 3,
        },
      ],
    },

    {
      id: "email_id",
      type: "input",
      label: "Email",
      name: "email",
      position: 1,
      required: true,
      editable: true,
      custom: false,
      inputType: "email",
      placeholder: "Enter email...",
      fieldOptions: {},
      fields: [],
    },

    {
      id: "date_id",
      type: "date",
      label: "Date",
      name: "date",
      position: 1,
      required: true,
      editable: true,
      custom: false,
      inputType: "date",
      placeholder: "Enter date...",
      fieldOptions: {},
      fields: [],
    },

    {
      id: "description_id",
      type: "textarea",
      label: "Description",
      name: "description",
      position: 1,
      editable: true,
      custom: false,
      inputType: "textarea",
      placeholder: "Enter Description...",
      required: true,
      fieldOptions: {},
      fields: [],
    },

    {
      id: "is_indian_citizen_id",
      type: "checkbox",
      label: "Indian Citizen ?",
      name: "is_indian_citizen",
      position: 1,
      editable: true,
      custom: false,
      required: true,
      inputType: "checkbox",
      placeholder: "Enter...",
      fieldOptions: {},
      fields: [],
    },

    {
      id: "phone_number_id",
      type: "input",
      label: "Phone Number",
      name: "phone_number",
      position: 1,
      editable: true,
      custom: false,
      required: false,
      inputType: "tel",
      placeholder: "Enter...",
      fieldOptions: {},
      fields: [],
    },

    {
      id: "age_id",
      type: "input",
      label: "Age",
      name: "age",
      position: 1,
      editable: true,
      custom: false,
      required: false,
      inputType: "number",
      placeholder: "Enter...",
      fieldOptions: {},
      fields: [],
    },
    {
      id: "interested_id",
      type: "radio",
      label: "Interested",
      name: "interested",
      position: 1,
      editable: true,
      custom: false,
      required: true,
      inputType: "radio",
      placeholder: "Enter...",
      optionLabelPath: "value",
      optionValuePath: "value",
      choices: [
        {
          id: "yes_id",
          value: "Yes",
          position: 1,
        },
        {
          id: "no_id",
          value: "No",
          position: 2,
        },
      ],
      fields: [],
    },
    {
      id: "personal_page_link_id",
      type: "input",
      label: "Personal Page Link",
      name: "personal_page_link",
      position: 1,
      required: true,
      editable: true,
      custom: false,
      inputType: "url",
      placeholder: "Enter...",
      fieldOptions: {},
      fields: [],
    },

    {
      id: "time_id",
      type: "time",
      label: "Select Time",
      name: "time",
      position: 1,
      required: true,
      editable: true,
      custom: false,
      inputType: "time",
      placeholder: "Select Time...",
      fieldOptions: {},
      fields: [],
    },

    {
      id: "status",
      name: "status",
      label: "Status",
      type: "select",
      inputType: "select",
      position: 3,
      required: true,
      editable: true,
      visible: false,
      deleted: false,
      link: null,
      placeholder: null,
      hint: null,
      field_options: {},
      filterable: true,
      searchable: false,
      parent_id: null,
      choices: [
        {
          id: 1,
          value: "open",
          position: 1,
        },
        {
          id: 2,
          value: "pending",
          position: 2,
        },
        {
          id: 3,
          value: "closed",
          position: 3,
        },
      ],
    },
    {
      id: "income_id",
      parent: null,
      type: "input",
      label: "Income",
      name: "income",
      position: 1,
      editable: true,
      custom: false,
      required: true,
      inputType: "number",
      placeholder: "Enter...",
      fieldOptions: {},
      fields: [],
    },
  ],
};
const initialValues = {
  is_indian_citizen: true,
};

const staticValidationSchema = Yup.object().shape({
  age: Yup.number().max(20, "max 20").required("Age is req"),
  abc: Yup.string().required("custom abc is req"),
  abc1: Yup.string().required("custom React abc1 is req"),
});

function mergeSchema(...schemas: any) {
  const [first, ...rest] = schemas;

  const merged = rest.reduce(
    (mergedSchemas: string | any[], schema: any) =>
      mergedSchemas.concat(schema),
    first
  );

  return merged;
}

function createYupSchema(schema: any, config: any) {
  const { inputType, required, name } = config;
  let yupType;
  switch (inputType) {
    case "text":
    case "textarea":
    case "date":
    case "time":
    case "radio":
      yupType = "string";
      break;

    case "select":
    case "MULTI_SELECT":
      yupType = "array";
      break;
    case "url":
      yupType = "string";
      break;
    case "number":
      yupType = "number";
      break;
    case "tel":
      yupType = "string";
      break;
    case "checkbox":
      yupType = "boolean";
      break;
    default:
      yupType = "string";
  }
  if (!Yup[yupType as keyof typeof Yup]) {
    return schema;
  }
  let yupMethod = yupType as keyof typeof Yup;
  let validator = Yup[yupMethod] as any;
  validator = validator();
  if (required) validator = validator["required"](...[`${name} is required`]);
  else validator = validator["notRequired"]();

  if (inputType === "url")
    validator = validator["url"](...[`Enter a valid url`]);

  if (inputType === "email")
    validator = validator["email"](...[`Enter a valid Email`]);

  if (inputType === "checkbox" && required)
    validator = validator["oneOf"]([true], `${name} is required`);

  if (inputType === "select" && required)
    validator = validator.min(1, `${name} is required`);

  if (inputType === "MULTI_SELECT" && required)
    validator = validator.min(1, `${name} is required`);

  schema[name] = validator;
  return schema;
}

const initialErrors = {
  // email: 'ssss',
};

const yupSchema = formSchema.fields.reduce(createYupSchema, {});

const dynamicValidationSchema = Yup.object().shape(yupSchema as any);

const formValidationSchema = mergeSchema(
  dynamicValidationSchema,
  staticValidationSchema
);

const dynamicInitialValues = formSchema.fields.reduce((acc, field) => {
  return {
    ...acc,
    [field.name]: field.type === "checkbox" ? false : undefined,
  };
}, {});

const formInitialErrors = initialErrors;
const formInitialValues = { ...dynamicInitialValues, ...initialValues };

function Pattern1() {
  const formRef = useRef<any>(null);
  const handleFormSubmit = (e: any) => {
    const values = formRef.current.doSubmit(e);
    console.log({ result: values });

    // make ajax post end point with values
    // fetch("/post",values);

    // if error from backend , set Errors - passing key value pair
    // formRef.current.setErrors({

    // })

    // reset the form if required if success
    // formRef.current.doReset(e);
  };
  const handleFormReset = (e: any) => {
    formRef.current.doReset(e);
  };
  return (
    <div className="App">
      <FwModal slider isOpen>
        <FwModalContent>
          <FwFormWrapper
            initialValues={formInitialValues}
            validationSchema={formValidationSchema}
            initialErrors={formInitialErrors}
            formSchema={formSchema}
            ref={formRef}
          />
        </FwModalContent>
        <FwModalFooter>
          <FwButton color="secondary" onClick={handleFormReset}>
            Custom Form Reset in modal
          </FwButton>
          <FwButton onClick={handleFormSubmit}>Custom Submit</FwButton>
        </FwModalFooter>
      </FwModal>
    </div>
  );
}

export default Pattern1;
