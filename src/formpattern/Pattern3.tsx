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
            validate={async (val) =>{
              console.log({val})
              return {
               // abc1:"abc1 is errored"
              }
            }}
            formRef={formRef}
            renderer={(props) => {
              const { controlProps, touched, errors } = props;
              return (
                <React.Fragment>
                  <h3> This is rendered apart from the json schema</h3>
                  <FwFormControl
                    type="TEXT"
                    name={"abc"}
                    required
                    label="Custom Layout22"
                    controlProps={controlProps}
                    fieldProps={{ placeholder: "Custom placeholder" }}
                    touched={touched["abc"]}
                    error={errors["abc"]}
                  ></FwFormControl>

                  <h3> Form Control Slot native control</h3>

                  <FwFormControl
                    type="TEXT"
                    name={"sss"}
                    required={true}
                    label={"Custom Layout apart from json schema"}
                    touched={touched["sss"]}
                    error={errors["sss"]}
                  >
                    <input
                      placeholder="sss"
                      id="sss"
                      name="sss"
                      required
                      onChange={(e) =>
                        formRef.current.setFieldValue("sss", e.target.value)
                      }
                      onBlur={(e) =>
                        formRef.current.setFieldValue("sss",e.target.value)
                      }
                    ></input>
                  </FwFormControl>

                  <h3> Custom React input</h3>
                  <FwFormControl
                    type="TEXT"
                    name={"abc1"}
                    required={true}
                    label={"Custom React Input"}
                    fieldProps={{ placeholder: "Custom React Input" }}
                    touched={touched["abc1"]}
                    error={errors["abc1"]}
                  >
                    <CustomInput
                      formRef={formRef}
                      cref={customInputRef}
                    />
                  </FwFormControl>
                </React.Fragment>
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

export default Pattern3;
