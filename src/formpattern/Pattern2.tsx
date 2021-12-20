import {
  FwInput,
  FwTextarea,
  FwDatepicker,
  FwTimepicker,
  FwRadioGroup,
  FwRadio,
  FwCheckbox,
  FwSelect,
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
  age: "",
  is_indian_citizen: true,
  abc: "",
  abc1: "",
  abc2:'',
};

const staticValidationSchema = Yup.object().shape({
  age: Yup.number().max(20, "max 20").required("Age is req"),
  abc: Yup.string().required("custom abc is req"),
  abc1: Yup.string().required("custom React abc1 is req"),
  abc2: Yup.string().required("native abc2 is req"),
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
    validator = validator["oneOf"]([true], `Select the value`);

  if (inputType === "select" && required)
    validator = validator.min(1, `${name} is required`);

  if (inputType === "MULTI_SELECT" && required)
    validator = validator.min(1, `Select atleast 1 option`);

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

function Pattern2() {

  return (
    <div className="App">
      <FwForm
        initialValues={formInitialValues}
        validationSchema={formValidationSchema}
        initialErrors={formInitialErrors}
        renderer={(props: any) => {
          const {
            errors,
            formProps,
            labelProps,
            inputProps,
            checkboxProps,
            selectProps,
            touched,
          } = props;
          const nativeInputProps = {...inputProps("abc2", "text")};
          return (
            <div>
              <form {...formProps} noValidate>
                {formSchema.fields.map((field) => {
                  let cmp;
                  switch (field.type) {
                    case "input":
                      cmp = (
                        <>
                          <FwInput
                            {...inputProps(field.name, field.inputType)}
                            type={field.inputType}
                            label={field.label}
                            name={field.name}
                            placeholder={field.placeholder}
                            required={field.required}
                          ></FwInput>
                          {touched[field.name] && errors[field.name] && (
                            <label class="error" {...labelProps(field.name)}>
                              {" "}
                              {errors[field.name]}{" "}
                            </label>
                          )}
                        </>
                      );
                      break;

                    case "textarea":
                      cmp = (
                        <>
                          <FwTextarea
                            {...inputProps(field.name, field.inputType)}
                            label={field.label}
                            placeholder={field.placeholder}
                            name={field.name}
                            required={field.required}
                          ></FwTextarea>
                          {touched[field.name] && errors[field.name] && (
                            <label class="error" {...labelProps(field.name)}>
                              {" "}
                              {errors[field.name]}{" "}
                            </label>
                          )}
                        </>
                      );
                      break;

                    case "date":
                      cmp = (
                        <>
                          <FwDatepicker
                            {...inputProps(field.name, field.inputType)}
                            label={field.label}
                            placeholder={field.placeholder}
                            name={field.name}
                            required={field.required}
                          ></FwDatepicker>
                          {touched[field.name] && errors[field.name] && (
                            <label class="error" {...labelProps(field.name)}>
                              {" "}
                              {errors[field.name]}{" "}
                            </label>
                          )}
                        </>
                      );
                      break;

                    case "checkbox":
                      cmp = (
                        <div>
                          <FwCheckbox
                            {...checkboxProps(field.name)}
                            placeholder={field.placeholder}
                            name={field.name}
                            required={field.required}
                          >
                            {field.label}
                          </FwCheckbox>
                          <div>
                            {touched[field.name] && errors[field.name] && (
                              <label class="error" {...labelProps(field.name)}>
                                {" "}
                                {errors[field.name]}{" "}
                              </label>
                            )}
                          </div>
                        </div>
                      );
                      break;

                    case "radio":
                      cmp = (
                        <>
                          <div>
                            <FwRadioGroup
                              allow-empty
                              {...inputProps(field.name, field.inputType)}
                              label={field.label}
                              placeholder={field.placeholder}
                              name={field.name}
                              required={field.required}
                            >
                              {" "}
                              {field.choices?.map((ch) => {
                                return (
                                  <FwRadio value={ch.value}>{ch.value}</FwRadio>
                                );
                              })}
                            </FwRadioGroup>
                            <div>
                              {touched[field.name] && errors[field.name] && (
                                <label
                                  class="error"
                                  {...labelProps(field.name)}
                                >
                                  {" "}
                                  {errors[field.name]}{" "}
                                </label>
                              )}
                            </div>
                          </div>
                        </>
                      );
                      break;

                    case "select":
                      cmp = (
                        <>
                          <div>
                            <FwSelect
                              {...selectProps(field.name)}
                              label={field.label}
                              placeholder={field.placeholder}
                              name={field.name}
                              required={field.required}
                              options={field.choices?.map((f) => ({
                                ...f,
                                text: f.value,
                              }))}
                              multiple={field.inputType === "MULTI_SELECT"}
                            ></FwSelect>
                            <div>
                              {touched[field.name] && errors[field.name] && (
                                <label
                                  class="error"
                                  {...labelProps(field.name)}
                                >
                                  {" "}
                                  {errors[field.name]}{" "}
                                </label>
                              )}
                            </div>
                          </div>
                        </>
                      );
                      break;

                    case "time":
                      cmp = (
                        <>
                          <FwTimepicker
                            {...inputProps(field.name, field.inputType)}
                            label={field.label}
                            placeholder={field.placeholder}
                            name={field.name}
                            required={field.required}
                          ></FwTimepicker>
                          {touched[field.name] && errors[field.name] && (
                            <label class="error" {...labelProps(field.name)}>
                              {" "}
                              {errors[field.name]}{" "}
                            </label>
                          )}
                        </>
                      );
                      break;
                  }
                  return cmp;
                })}
                <br />
                <br />
                <h3> This is rendered apart from the json schema</h3>
                <FwInput
                  name="abc"
                  type="text"
                  label="custom layoyt"
                  placeholder={"custom layout in"}
                  {...inputProps("abc", "text")}
                  required
                ></FwInput>
                {touched["abc"] && errors["abc"] && (
                  <label class="error" {...labelProps("abc")}>
                    {" "}
                    {errors["abc"]}{" "}
                  </label>
                )}
                <br />
                <br />

                  <label>native layoyt2</label>
                <input
                  name="abc2"
                  type="text"
                  placeholder={"custom layout in2"}
                  required
                  onInput={ e => { nativeInputProps.handleInput(e, {value: (e.target as any).value})}}
                  onBlur={ e => { nativeInputProps.handleBlur(e, {value: (e.target as any).value})}}
                  onFocus={e =>{ nativeInputProps.handleFocus(e)}}
                ></input>
                {touched["abc2"] && errors["abc2"] && (
                  <label class="error" {...labelProps("abc2")}>
                    {" "}
                    {errors["abc2"]}{" "}
                  </label>
                )}
                <br />
                <br />

                <h3> CustomReact input</h3>
                <CustomInput touched={touched["abc1"]}
                error={errors["abc1"]} 
                {...inputProps("abc1", "text")}
                />
                <br/><br/><br/><br/>


                <button type="submit">Submit</button>
              </form>
            </div>
          );
        }}
      />
    </div>
  );
}

export default Pattern2;