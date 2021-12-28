import { useRef, useCallback } from "react";

import {
  FwButton,
  FwFormControl,
  FwModal,
  FwModalContent,
  FwModalFooter,
} from "@freshworks/crayons-1/react";
import * as Yup from "yup";
import FwForm from "../FwForm";
import CustomInput from "../CustomInput";
import "../App.css";
const formSchema = {
  title: "Test Form",
  name: "Test Form",
  fields: [
    {
      id: "2978f820-704b-46c7-9f88-110e14e34a8c",
      name: "first_name",
      label: "First Name",
      type: "TEXT",
      position: 3,
      required: true,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      placeholder: "Enter…",
      hint: "Please provide a text of at max 100 characters",
      field_options: { lego_unique_field: "true" },
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [],
    },

    {
      id: "3978f820-704b-46c7-9f88-110e14e34a8c",
      name: "last_name",
      label: "Last Name",
      type: "TEXT",
      position: 3,
      required: true,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      placeholder: "Enter…",
      hint: "Please provide a text of at max 100 characters",
      field_options: { lego_unique_field: "true" },
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [],
    },

    {
      id: "42aecb8f-25cf-47ce-89c6-5410fe3d4315",
      name: "languages_known",
      label: "Languages Known",
      type: "MULTI_SELECT",
      position: 13,
      required: true,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      placeholder: "Enter…",
      hint: "Select one or more values",
      field_options: {},
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [
        {
          id: 1,
          value: "English",
          position: 1,
          dependent_ids: {},
        },
        {
          id: 2,
          value: "Hindi",
          position: 2,
          dependent_ids: {},
        },
        {
          id: 3,
          value: "Tamil",
          position: 3,
          dependent_ids: {},
        },
      ],
    },

    {
      id: "6978f820-704b-46c7-9f88-110e14e34a8c",
      name: "email",
      label: "Email",
      type: "EMAIL",
      position: 3,
      required: true,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      placeholder: "Enter…",
      hint: "Please provide an email Id",
      field_options: {},
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [],
    },

    {
      id: "f319f86f-1b6a-49cb-b4b6-cf487be94595",
      name: "date_of_birth",
      label: "Date Of Birth",
      type: "DATE",
      position: 11,
      required: true,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      Placeholder: "Enter…",
      hint: "Please enter your date of birth",
      field_options: {},
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [],
    },

    {
      id: "f319f86f-1b6a-49cb-b4b6-cf487be94595",
      name: "landmark",
      label: "Landmark",
      type: "PARAGRAPH",
      position: 7,
      required: true,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      Placeholder: "Enter some text…",
      hint: "Please enter the nearest landmark",
      field_options: {},
      filterable: false,
      searchable: true,
      parent_id: null,
      choices: [],
    },

    {
      id: "f319f86f-1b6a-49cb-b4b6-cf487be94595",
      name: "is_indian_citizen",
      label: "Indian Citizen?",
      type: "CHECKBOX",
      position: 7,
      required: true,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      placeholder: null,
      hint: "Check or Uncheck the box",
      field_options: {},
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [],
    },

    {
      id: "8978f820-704b-46c7-9f88-110e14e34a8c",
      name: "phone_number",
      label: "Phone number",
      type: "TEXT",
      position: 3,
      required: true,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      placeholder: "Enter…",
      hint: "Please provide your phone number",
      field_options: {},
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [],
    },

    {
      id: "f319f86f-1b6a-49cb-b4b6-cf487be94595",
      name: "pincode",
      label: "Pincode",
      type: "NUMBER",
      position: 8,
      required: false,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      Placeholder: "Enter…",
      hint: "Please enter your Pincode",
      field_options: {},
      filterable: true,
      searchable: true, // For the field to be used as filter condition in search API, this needs to be set
      parent_id: null,
      choices: [],
    },

    {
      id: "ba53775e-2948-4065-8a59-d99d4494e845",
      name: "gender",
      label: "Gender",
      type: "RADIO",
      position: 5,
      required: false,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      placeholder: null,
      hint: "Please specify your gender",
      field_options: {},
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [
        {
          id: 1,
          value: "Female",
          position: 1,
          dependent_ids: {},
        },
        {
          id: 2,
          value: "Male",
          position: 2,
          dependent_ids: {},
        },
      ],
    },

    {
      id: "42aecb8f-25cf-47ce-89c6-5410fe3d4315",
      name: "order_status",
      label: "Order Status",
      type: "DROPDOWN",
      position: 4,
      required: true,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      placeholder: "Enter…",
      hint: "Select a value",
      field_options: {},
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [
        {
          id: 1,
          value: "open",
          position: 1,
          dependent_ids: {},
        },
        {
          id: 2,
          value: "pending",
          position: 2,
          dependent_ids: {},
        },
        {
          id: 3,
          value: "closed",
          position: 3,
          dependent_ids: {},
        },
      ],
    },

    {
      id: "f319f86f-1b6a-49cb-b4b6-cf487be94595",
      name: "amount_paid",
      label: "Amount Paid",
      type: "DECIMAL",
      position: 10,
      required: true,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      Placeholder: "Enter…",
      hint: "Please enter the amount paid",
      field_options: {},
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [],
    },
  ],
};
const initialValues = {
  age: "",
  is_indian_citizen: true,
  abc: "",
  abc1: "",
  abc2: "",
  sss: "",
};

const staticValidationSchema = Yup.object().shape({
  age: Yup.number().max(20, "max 20").required("Age is req"),
  abc: Yup.string().required("custom abc is req"),
  abc1: Yup.string().required("custom React abc1 is req"),
  abc2: Yup.string().required("native abc2 is req"),
  sss: Yup.string().required("native sss is req"),
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
  const { type, required, name } = config;
  let yupType;
  switch (type) {
    case "TEXT":
    case "PARAGRAPH":
    case "DATE":
    case "TIME":
    case "RADIO":
      yupType = "string";
      break;

    case "DROPDOWN":
    case "MULTI_SELECT":
      yupType = "array";
      break;
    case "url":
      yupType = "string";
      break;
    case "NUMBER":
      yupType = "number";
      break;
    case "TEL":
      yupType = "string";
      break;
    case "CHECKBOX":
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

  if (type === "URL") validator = validator["url"](...[`Enter a valid url`]);

  if (type === "EMAIL")
    validator = validator["email"](...[`Enter a valid Email`]);

  if (type === "CHECKBOX" && required)
    validator = validator["oneOf"]([true], `${name} is required`);

  if ((type === "DROPDOWN" || type === "MULTI_SELECT") && required)
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

const dynamicInitialValues = formSchema.fields.reduce(
  (acc: any, field: any) => {
    return {
      ...acc,
      [field.name]: field.type === "checkbox" ? false : undefined,
    };
  },
  {}
);

const formInitialErrors = initialErrors;
const formInitialValues = { ...dynamicInitialValues, ...initialValues };

function Pattern2() {
  const formRef = useRef<any>(null);
  const customInputRef = useRef<any>({});
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
    const elem = document.querySelector("#sss");
    (elem as HTMLInputElement).value = "";
    customInputRef.current.handleReset();
    formRef.current.doReset(e);
  };

  const handleCustomInputChange = useCallback((e: any) => {
    formRef.current.setFieldValue({
      abc1: (e.target as HTMLInputElement)?.value,
    });
  }, []);
  return (
    <div className="App">
      <FwModal slider isOpen>
        <FwModalContent>
          <FwForm
            initialValues={formInitialValues}
            validationSchema={formValidationSchema}
            // validate={(val) =>{
            //   console.log({val})
            //   return {
            //     first_name:'first_name is errored',
            //     abc1:"abc1 is errored"
            //   }
            // }}
            initialErrors={formInitialErrors}
            formRef={formRef}
            renderer={(props: any) => {
              const { controlProps, touched, errors } = props;
              console.log({ errors });
              return (
                <div>
                  {formSchema.fields.map((field: any) => {
                    return (
                      <FwFormControl
                        key={field.name}
                        type={field.type}
                        name={field.name}
                        placeholder={field.placeholder}
                        required={field.required}
                        label={field.label}
                        choices={field.choices}
                        controlProps={controlProps}
                        touched={touched[field.name]}
                        error={errors[field.name]}
                      ></FwFormControl>
                    );
                  })}
                  <br />
                  <br />
                  <h3> This is rendered apart from the json schema</h3>
                  <FwFormControl
                    type="TEXT"
                    name={"abc"}
                    placeholder={"Custom Layout"}
                    required
                    label={"Custom Layout"}
                    controlProps={controlProps}
                    touched={touched["abc"]}
                    error={errors["abc"]}
                  ></FwFormControl>

                  <h3> Form Control Slot native control</h3>

                  <FwFormControl
                    type="TEXT"
                    name={"sss"}
                    placeholder={"Custom layout"}
                    required={true}
                    label={"Custom Layout apart from json schema"}
                    controlProps={controlProps}
                    touched={touched["sss"]}
                    error={errors["sss"]}
                  >
                    <input
                      placeholder="sss"
                      id="sss"
                      name="sss"
                      required
                      onChange={(e) =>
                        formRef.current.setFieldValue({ sss: e.target.value })
                      }
                      onBlur={(e) =>
                        formRef.current.setFieldValue({ sss: e.target.value })
                      }
                    ></input>
                  </FwFormControl>

                  <h3> Custom React input</h3>
                  <FwFormControl
                    type="TEXT"
                    name={"abc1"}
                    placeholder={"Custom React"}
                    required={true}
                    label={"Custom React Input"}
                    controlProps={controlProps}
                    touched={touched["abc1"]}
                    error={errors["abc1"]}
                  >
                    <CustomInput
                      onChange={handleCustomInputChange}
                      onBlur={handleCustomInputChange}
                      cref={customInputRef}
                    />
                  </FwFormControl>
                </div>
              );
            }}
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

export default Pattern2;
