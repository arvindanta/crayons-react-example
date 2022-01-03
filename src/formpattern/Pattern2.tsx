import { useRef } from "react";

import {
  FwButton,
  FwModal,
  FwModalContent,
  FwModalFooter,
  FwForm,
} from "@freshworks/crayons-1/react";
import * as Yup from "yup";
import CustomInput from "../CustomInput";
import "../App.css";

function Pattern2() {
  const formRef = useRef<any>(null);
  const customInputRef = useRef<any>({});
  const inputRef = useRef<any>({});
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
        required: false,
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
        id: "9119f86f-1b6a-49cb-b4b6-cf487be94595",
        name: "abc1",
        label: "Custom React Input",
        type: "Text",
        position: 3,
        required: true,
        editable: true,
        visible: true,
        deleted: false,
        link: null,
        placeholder: "Enter…",
        hint: "Custom React Input",
        field_options: {},
        filterable: true,
        searchable: true,
        parent_id: null,
        choices: [],
        component: <CustomInput formRef={formRef} cref={customInputRef} />,
      },
      {
        id: "83119f86f-1b6a-49cb-b4b6-cf487be94595",
        name: "pqq",
        label: "Native Input",
        type: "Text",
        position: 4,
        required: true,
        editable: true,
        visible: true,
        deleted: false,
        link: null,
        placeholder: "Enter…",
        hint: "Native Input",
        field_options: {},
        filterable: true,
        searchable: true,
        parent_id: null,
        choices: [],
        component: (
          <input
            type="text"
            onChange={(e) => {
              formRef.current.setFieldValue("pqq", e.target.value, true);
            }}
            onBlur={async (e) => {
              formRef.current.setFieldValue("pqq", e.target.value, true);
            }}
            ref={inputRef}
          />
        ),
      },
    ],
  };
  const initialValues = {
    is_indian_citizen: true,
  };

  const validationSchema = Yup.object().shape({
    abc1: Yup.string().required("custom abc is req"),
    pqq: Yup.string().required("native pqq is req"),
  });

  const handleFormSubmit = async (e: any) => {
    const { values, isValid } = await formRef.current.doSubmit(e);
    console.log({ values, isValid });

    if (isValid) {
      // make ajax post end point with values
      // fetch("/post",values);

      // if error from backend , set Errors - passing key value pair

      formRef.current.setFieldErrors({
        first_name: "First Name must be unique <<Server Error>>",
      });

      // reset the form if required if success
      // formRef.current.doReset(e);
    }
  };
  const handleFormReset = (e: any) => {
    customInputRef.current?.handleReset();
    inputRef.current.value = "";
    formRef.current.doReset(e);
  };

  return (
    <div className="App">
      <FwModal slider isOpen>
        <FwModalContent>
          <FwForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            validate={async (values) => {
              return {
                last_name: "last name is errored",
                pqq: "ss",
              };
            }}
            formSchema={formSchema}
            formRef={formRef}
            validateOnInput={true}
            validateOnBlur={true}
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
