/* eslint-disable react/style-prop-object */
//@ts-ignore
//@ts-nocheck
// import Pattern1 from "./formpattern/Pattern1";
// import Pattern2 from "./formpattern/Pattern2";
// import Pattern3 from "./formpattern/Pattern3";
// import Slot from "./Slot"

import React from "react";
import { MFEController } from "./controller";
import { Routes, Route } from "react-router-dom";
import About from "./About";
import Pattern1 from "./formpattern/Pattern1";
import NotFound from "./NotFound";

const APP_ID = "reactForm";
declare namespace JSX {
  interface IntrinsicElements {
    "mfe-application": any;
  }
}
function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
class App extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {
      x: "x",
    };
    this.triggerClick = this.triggerClick.bind(this);
    this.broadCastMessage = this.broadCastMessage.bind(this);
  }

  componentDidMount() {
    MFEController?.__mfe_subscribe?.(APP_ID, (msg: any) => {
      console.log(`msg from outside for ${APP_ID} is ${msg}`);
    });
  }

  triggerClick() {
    console.log("click");

    MFEController?.__mfe_publish?.({
      action: {
        type: "from_child reactForm",
        sender: "reactForm",
        receiver: "web12",
      },
      payload: "from child reactForm",
      senderOrigin: window.origin,
      targetOrigin: "http://localhost:3333",
    });
  }

  broadCastMessage() {
    console.log("broadcast");

    MFEController?.__mfe_publish?.({
      action: {
        type: "from_child reactForm",
        sender: "reactForm",
      },
      payload: "from child broadcast reactForm",
      broadcast: true,
      senderOrigin: window.origin,
      targetOrigin: "http://localhost:3333",
    });
  }

  render() {
    return (
      <div className="App">
        <h3>Rendering React app as a MFE here</h3>

        <button onClick={this.triggerClick}>test publiush</button>

        <button onClick={this.broadCastMessage}>test broadcast</button>

        {/* <mfe-application
          app-id="reactForm"
          app-name="react form"
        ></mfe-application> */}

        <br />
        <Routes>
          <Route path="/" element={<Pattern1 {...this.props} />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* <Pattern2/> */}
        {/* <Pattern3/> */}
        {/* <Slot/> */}
      </div>
    );
  }
}

export default App;
