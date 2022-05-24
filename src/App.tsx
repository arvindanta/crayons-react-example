/* eslint-disable react/style-prop-object */
//@ts-ignore
//@ts-nocheck
// import Pattern1 from "./formpattern/Pattern1";
// import Pattern2 from "./formpattern/Pattern2";
// import Pattern3 from "./formpattern/Pattern3";
// import Slot from "./Slot"

import React, { useEffect } from "react";
import { MFEInstance } from "./controller";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Pattern1 from "./formpattern/Pattern1";
import NotFound from "./NotFound";
import { useAppSubscribers } from "./util";
declare namespace JSX {
  interface IntrinsicElements {
    "mfe-application": any;
  }
}
function App(props) {
  const { addSubscribers } = useAppSubscribers();

  console.log("appProps", { props });

  //let navigate = useNavigate();
  useEffect(() => {
    addSubscribers();
  }, []);

  const triggerClick = () => {
    console.log("publishing event - from_child_react from react app");
    MFEInstance?.publish?.({
      eventName: "from_child_react",
      action: {
        type: "from_child reactForm",
        sender: "reactForm",
      },
      payload: "from child reactForm",
      targetOrigin: props.shellUrl,
    });
  };

  const broadCastMessage = () => {
    console.log("publishing event - from_child_react1 from react app");

    MFEInstance?.publish?.({
      eventName: eventNameSpace + ":from_child_react1",
      action: {
        type: "from_child reactForm",
        sender: "reactForm",
      },
      payload: "from child broadcast reactForm",
      targetOrigin: props.shellUrl,
    });
  };

  return (
    <div className="App">
      <h3>Rendering React app as a MFE here</h3>

      <button onClick={triggerClick}>test publiush</button>

      <button onClick={broadCastMessage}>test broadcast</button>

      <br />
      <Routes>
        <Route path="/" element={<Pattern1 {...props} />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <Pattern2/> */}
      {/* <Pattern3/> */}
      {/* <Slot/> */}
    </div>
  );
}

export default App;
