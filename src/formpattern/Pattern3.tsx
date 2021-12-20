import {
  FwInput,
  FwCheckbox,
} from "@freshworks/crayons-1/react";
import * as Yup from "yup";
import FwForm from "../FwForm";
import CustomInput from "../CustomInput"

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
  return (
    <div className="App">
      <FwForm
        initialValues={formInitialValues}
        validationSchema={staticValidationSchema}
        initialErrors={formInitialErrors}
        renderer={(props: any) => {
          const {
            errors,
            formProps,
            labelProps,
            inputProps,
            touched,
            checkboxProps,
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

                {/* <div>
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
                </div> */}

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

export default Pattern3;
