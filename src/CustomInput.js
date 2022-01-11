import React, {forwardRef} from "react";

import useWhyDidYouUpdate from "./why";
function CustomInput(props, ref) {
  const [state, setState] = React.useState("");
  useWhyDidYouUpdate("Fields", props);

  /*
   if(ref)
  ref.current.handleReset = () => {
    setState("");
  };
  */
  props.cref.current.handleReset = () => {
    setState("");
  };
  return (
    <>
    <p>input custom</p>
      <input
        type="text"
        name={props.name}
        required
        
        value={state}
        autoComplete="off"
        onChange={(e) => { setState(e.target.value);
          props.formRef.current.setFieldValue(props.name,e.target.value, false);
        }}
        onBlur={(e) => { setState(e.target.value);
          props.formRef.current.setFieldValue(props.name, e.target.value, true)
        }}
      ></input>
    </>
  );
}
//export default React.memo(forwardRef(CustomInput));

export default React.memo(CustomInput);
