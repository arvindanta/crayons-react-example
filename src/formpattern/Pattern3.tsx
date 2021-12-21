import { useRef } from "react";
import {
  FwInput,
  FwCheckbox,
  FwButton,
  FwModal,
  FwModalContent,
  FwModalFooter,
  FwModalTitle,
} from "@freshworks/crayons-1/react";

import * as Yup from "yup";
import FwForm from "../FwForm";
import CustomInput from "../CustomInput";

import "../App.css";

const initialValues = {
  isCitizen: true,
  abc: "123",
  abc1: "",
};

const staticValidationSchema = Yup.object().shape({
  isCitizen: Yup.boolean().required("required").oneOf([true], "Select a value"),
  abc: Yup.string().required("custom abc is req"),
  abc1: Yup.string().required("custom React abc1 is req"),
});

const initialErrors = {
  // email: 'ssss',
};
const formInitialErrors = initialErrors;
const formInitialValues = { ...initialValues };

function Pattern3() {
  const formRef = useRef<any>();
  const handleFormSubmit = (e: any) => {
    console.log("subitfosod");
    formRef.current.handleSubmit(e);
  };
  const handleFormReset = (e: any) => {
    console.log("rest");
    formRef.current.handleReset(e);
  };
  return (
    <div className="App">
      <FwModal isOpen slider>
        <FwModalTitle>
          <span>Header text</span>
        </FwModalTitle>
        <FwModalContent>
          <FwForm
            initialValues={formInitialValues}
            validationSchema={staticValidationSchema}
            initialErrors={formInitialErrors}
            innerRef={formRef}
            renderer={(props: any) => {
              const {
                errors,
                formProps,
                labelProps,
                inputProps,
                touched,
                checkboxProps,
                handleSubmit,
                handleReset,
              } = props;
              return (
                <div>
                  <form {...formProps} noValidate>
                    <h3> No Schema render formcontrols</h3>
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

                    <div>
                      <FwCheckbox
                        {...checkboxProps("isCitizen")}
                        placeholder={"Is ciziten"}
                        name={"isCitizen"}
                        required
                      >
                        Is Citizen
                      </FwCheckbox>
                      <div>
                        {touched["isCitizen"] && errors["isCitizen"] && (
                          <label class="error" {...labelProps("isCitizen")}>
                            {" "}
                            {errors["isCitizen"]}{" "}
                          </label>
                        )}
                      </div>
                    </div>

                    <h3> CustomReact input</h3>
                    <CustomInput
                      touched={touched["abc1"]}
                      error={errors["abc1"]}
                      {...inputProps("abc1", "text")}
                    />
                    <br />
                    <br />
                    <br />
                    <br />

                    {/* <button onClick={handleSubmit}>Submit</button>

                  <button onClick={handleReset}>Reset</button> */}
                  </form>
                </div>
              );
            }}
          />
        </FwModalContent>
        <FwModalFooter>
          <FwButton color="secondary" onClick={handleFormReset}>
            Custom Form Reset in modal
          </FwButton>
          <FwButton onClick={handleFormSubmit}>
            Custom Form Submit in modal
          </FwButton>


          {/* <FwButton>OK</FwButton> */}
        </FwModalFooter>
      </FwModal>
    </div>
  );
}

export default Pattern3;
