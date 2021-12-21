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
        value={props.value || ""}
        onChange={(e) =>
          props.handleInput(e, { value: e.target.value, name: "abc1" })
        }
        onBlur={(e) =>
          props.handleBlur(e, { value: e.target.value, name: "abc1" })
        }
        onFocus={(e) =>
          props.handleFocus(e, { value: e.target.value, name: "abc1" })
        }
      ></input>

      {props.touched && <div style={{ color: "red" }}>{props.error}</div>}
    </>
  );
}

export default React.memo(CustomInput);
