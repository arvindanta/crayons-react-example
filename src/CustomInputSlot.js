import React from "react";

import useWhyDidYouUpdate from "./why";
function CustomInputSlot(props) {
  useWhyDidYouUpdate("FieldsSlots", props);
  return (
    <>
      <input
        type="text"
        name="abc1"
        required
        autoComplete="off"
       
      ></input>
  </>
  );
}

export default React.memo(CustomInputSlot);
