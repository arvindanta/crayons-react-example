import React from "react";

import useWhyDidYouUpdate from "./why";
function CustomInput(props) {
  const [state, setState] = React.useState("");
  useWhyDidYouUpdate("Fields", props);

  console.log(props);

  if(props.cref)
  props.cref.current.handleReset = () => {
    setState("");
  };
  return (
    <>
      <input
        type="text"
        name="abc1"
        required
        value={state}
        autoComplete="off"
        onChange={(e) => { setState(e.target.value);
          props.onChange(e)}}
        onBlur={(e) => { setState(e.target.value);
          
          props.onBlur(e)}}
      ></input>
    </>
  );
}

export default React.memo(CustomInput);
