import React, {forwardRef} from "react";

import useWhyDidYouUpdate from "./why";
function CustomInput(props, ref) {
  const [state, setState] = React.useState("");
  useWhyDidYouUpdate("Fields", props);

  if(ref)
  ref.current.handleReset = () => {
    setState("");
  };
  return (
    <>
      <input
        type="text"
        name="abc1"
        required
        autoComplete="off"
        onChange={(e) => { setState(e.target.value);
          props.formRef.current.setFieldValue({ abc1: e.target.value});
        }}
        onBlur={(e) => { setState(e.target.value);
          props.formRef.current.setFieldValue({ abc1: e.target.value})
        }}
      ></input>
    </>
  );
}

export default React.memo(forwardRef(CustomInput));
