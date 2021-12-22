import React from "react";

import useWhyDidYouUpdate from "./why";
function CustomInput(props) {
  useWhyDidYouUpdate("Fields", props);
  return (
    <>
      <input
        type="text"
        name="abc1"
        required
        autoComplete="off"
        onChange={(e) =>
          props.onChange(e)
        }
        onBlur={(e) =>
          props.onBlur(e)
        }
      ></input>

    </>
  );
}

export default React.memo(CustomInput);
