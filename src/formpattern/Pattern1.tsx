import { useRef } from "react";
import { MFEEventInstance } from "../controller";
// import {
//   FwForm,
//   FwModal,
//   FwModalFooter,
//   FwModalContent,
//   FwPagination,
//   FwModalTitle,
//   FwButton,
// } from "@freshworks/crayons-1/react";

import {
  FwForm,
  FwModal,
  FwModalFooter,
  FwModalContent,
  FwPagination,
  FwModalTitle,
  FwButton,
  FwButton as Fbtn,
} from "@freshworks/crayons/react";

import * as Yup from "yup";
import { Link } from "react-router-dom";
import "../App.css";

let formSchema: any = {
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
      placeholder: "Enter…",
      hint: "Please enter your date of birth",
      field_options: {},
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [],
      displayFormat: "dd MMM yyyy",
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
      placeholder: "Enter some text…",
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
      placeholder: "Enter…",
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
      required: true,
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
      placeholder: "Enter…",
      hint: "Please enter the amount paid",
      field_options: {},
      filterable: true,
      searchable: true,
      parent_id: null,
      choices: [],
    },

    {
      id: "42aecb8f-25cf-47ce-89c6-5410fe3d4315",
      name: "custom_relationship",
      label: "custom relationship",
      type: "RELATIONSHIP",
      position: -1,
      required: true,
      editable: true,
      visible: true,
      deleted: false,
      link: null,
      placeholder: "Enter…",
      hint: "",
      field_options: {},
      filterable: true,
      searchable: true,
      parent_id: null,
      search: async (searchText: any) => {
        console.log({ searchText });
        const choices = [
          {
            id: 10,
            value: "open",
            position: 1,
            dependent_ids: {},
          },
          {
            id: 20,
            value: "pending",
            position: 2,
            dependent_ids: {},
          },
          {
            id: 30,
            value: "closed",
            position: 3,
            dependent_ids: {},
          },
        ];

        return choices.map((x: any) => {
          return {
            text: x.value,
            subText: x.value,
            value: x.id,
          };
        });
      },
    },
  ],
};
const initialValues = {
  is_indian_citizen: true,
  email: "sss",
  order_status: 3,
  languages_known: [3, 1],
  first_name: "est igng dsn",
  custom_relationship: [
    {
      value: 30,
      text: "3000",
    },
  ],
};

const staticValidationSchema = Yup.object().shape({
  // first_name: Yup.string()
  //   .required("First name is required")
  //   .min(5, "min 5 char")
  //   .nullable(),
  // pincode: Yup.number().integer("must be integer").nullable().required("req"),
  amount_paid: Yup.number()
    .integer("must be integer")
    .nullable()
    .required("req"),
});

function Pattern1(props: any) {
  // const [show,setShow] = useState(true)

  // setTimeout(() =>{
  //   setShow(false)
  // },5000)

  const formRef = useRef<any>(null);
  //const formRef1 = useRef<any>(null);
  const handleFormSubmit = async (e: any) => {
    const { values, isValid, errors } = await formRef.current.doSubmit(e);
    console.log({ result: values, errors });

    // make ajax post end point with values
    // fetch("/post",values);

    // if error from backend , set Errors - passing key value pair
    // formRef.current.setErrors({

    // })
    if (isValid) {
      formRef.current.setFieldErrors({
        first_name: "First Name must be unique <<Server Error>>",
      });
      // reset the form if required if success
      // formRef.current.doReset(e);
    }
  };
  const handleFormReset = (e: any) => {
    formRef.current.doReset(e);
  };

  const fields = formSchema?.fields?.map((field: any) => {
    if (field.type === "DROPDOWN" || field.type === "MULTI_SELECT") {
      return {
        ...field,
        choices: field.choices?.map((f: any) => {
          return {
            ...f,
            text: f.value,
            value: f.id,
          };
        }),
      };
    } else return field;
  });

  const formSchema1 = {
    ...formSchema,
    fields: fields,
  };

  return (
    <div className="App">
      <FwPagination total={500}></FwPagination>
      <br />
      <Fbtn>btn </Fbtn>
      <br />
      <br />
      <FwButton>btn asdasd</FwButton>
      <br />
      Title - {props.title} <br />
      {JSON.stringify(props)}
      <FwForm
        ref={formRef}
        formSchema={formSchema1}
        validateOnInput={true}
        validateOnBlur={true}
        initialValues={initialValues}
        validationSchema={staticValidationSchema}
      />
      <FwButton color="secondary" onClick={handleFormReset}>
        Custom Form Reset in modal
      </FwButton>
      <FwButton onClick={handleFormSubmit}>Custom Submit</FwButton>
      <Link to="/about">About</Link>
      <br />
      <a
        href="accounts/wc"
        onClick={(e) => {
          e.preventDefault();

          MFEEventInstance?.__mfe_publish?.({
            eventName: props.instanceId + ":ROUTE_CHANGE",
            action: {
              type: "navigate",
              sender: "reactForm",
            },
            payload: {
              from: window.origin,
              to: "/accounts/wc",
            },
            targetOrigin: props.__props_shellUrl,
          });
        }}
      >
        Webcomponent MFE 2
      </a>
    </div>
  );
}

export default Pattern1;
