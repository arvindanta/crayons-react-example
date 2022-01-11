import React, { useRef, useCallback } from "react";

import {
  FwForm,
  FwButton,
  FwFormControl,
  FwModal,
  FwModalContent,
  FwModalFooter,
} from "@freshworks/crayons-1/react";
import * as Yup from "yup";
//import FwForm from "../FwForm";
import CustomInput from "../CustomInput";
import "../App.css";

function Pattern3() {
  const formRef = useRef<any>(null);
  const customInputRef = useRef<any>({});

  const initialValues = {
    // abc: "",
    // abc1: "",
    // sss: "",
  };

  const validationSchema = Yup.object().shape({
    abc: Yup.string().required("custom abc is req"),
    abc1: Yup.string().required("custom React abc1 is req"),
    sss: Yup.string().required("native sss is req"),
  });

  const handleFormSubmit = async (e: any) => {
    const { values, isValid } = await formRef.current.doSubmit(e);
    console.log({ values, isValid });

    if (isValid) {
      // make ajax post end point with values
      // fetch("/post",values);

      // if error from backend , set Errors - passing key value pair

      formRef.current.setFieldErrors({
        abc: "ABC must be unique <<Server Error>>",
      });

      // reset the form if required if success
      // formRef.current.doReset(e);
    }
  };
  const handleFormReset = (e: any) => {
    customInputRef.current?.handleReset();
    const customContrl = document?.querySelector("#sss") as HTMLInputElement;
    customContrl.value = "";
    formRef.current.doReset(e);
  };

  // const handleCustomInputChange = useCallback((e: any) => {
  //   formRef.current.setFieldValue(
  //     "abc1", (e.target as HTMLInputElement)?.value,
  //   );
  // }, []);
  return (
    <div className="App">
      <FwModal slider isOpen>
        <FwModalContent>
          <FwForm
            initialValues={initialValues}
            validationSchema={validationSchema}
            validate={async (val: any) => {
              return {
               // abc1: "abc1 is errored",
              };
            }}
            ref={formRef}
          >
            <React.Fragment>
              <h3> This is rendered apart from the json schema</h3>
              <FwFormControl
                type="TEXT"
                name={"abc"}
                required
                label="Custom Layout22"
                placeholder="Custom placeholder"
                fieldProps={{ maxlength: 2 }}
              ></FwFormControl>

              <h3> Form Control Slot native control</h3>

              <FwFormControl
                type="TEXT"
                name={"sss"}
                required={true}
                label={"Custom Layout apart from json schema"}
              >
                <input
                  placeholder="sss"
                  id="sss"
                  maxLength={5}
                  name="sss"
                  required
                  onChange={(e) =>
                    formRef.current.setFieldValue("sss", e.target.value, true)
                  }
                  onBlur={(e) =>
                    formRef.current.setFieldValue("sss", e.target.value, true)
                  }
                ></input>
              </FwFormControl>

              <h3> Custom React input</h3>
              <FwFormControl
                type="TEXT"
                name={"abc1"}
                required={true}
                label={"Custom React Input"}
              >
                <div>
                  <h1>hello world</h1>
                  <CustomInput name="abc1" formRef={formRef} cref={customInputRef} />
                </div>
              </FwFormControl>
            </React.Fragment>
          </FwForm>
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

export default Pattern3;
