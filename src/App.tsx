// import Pattern1 from "./formpattern/Pattern1";
// import Pattern2 from "./formpattern/Pattern2";
// import Pattern3 from "./formpattern/Pattern3";
// import Slot from "./Slot"
import React from "react";
const APP_ID = "react121";
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
    (window as any).__mfe_subscribe?.(APP_ID, (msg: any) => {
      console.log(`msg from outside for ${APP_ID} is ${msg}`);
    });

    window.addEventListener("message", (message: any) => {
      console.log("message received from parent", message);
      this.setState({ x: message.data.appId });
    });
  }

  triggerClick() {
    console.log("click");
    if (!inIframe()) {
      (window as any).__mfe_publish?.("root", {
        type: "from_child",
        name: "from child message",
      });
    } else {
      window.top?.postMessage("child sending message", "*");
    }
  }

  broadCastMessage() {
    console.log("broadcast");
    if (!inIframe()) {
      (window as any).__mfe_broadcast?.(APP_ID, {
        type: "broadcast",
        name: "broadcast message",
      });
    }
  }

  render() {
    return (
      <div className="App">
        <h1>hello : {JSON.stringify(this.state)}</h1>
        <button onClick={this.triggerClick}> Trigger pubsub publish</button>

        <button onClick={this.broadCastMessage}> Trigger Broadcast</button>
        {/* <Pattern2/> */}
        {/* <Pattern3/> */}
        {/* <Slot/> */}
      </div>
    );
  }
}

export default App;
