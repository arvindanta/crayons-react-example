import { MFEEventInstance } from "./export";
const APP_ID = "web12";
class MyComponent extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", (e) => {
      this.handler();
    });
    MFEEventInstance?.subscribe?.("INIT", (msg) => {
      console.log(`msg from outside for ${APP_ID} is ${msg}`);
    });

    MFEEventInstance?.subscribe?.("from_child_react1", (msg) => {
      console.log(`msg from outside for ${APP_ID} is ${msg}`);
    });
  }

  handler() {
    console.log("apprProps", this.appProps);

    console.log("publishing event 1 - from_child_webc from webc");
    MFEEventInstance?.publish?.({
      eventName: "from_child_webc",
      action: {
        type: "from_child webc",
        sender: "web12",
      },
      payload: "from child webc",
      targetOrigin: this.appProps?.shellUrl,
    });

    console.log("publishing event 2 - route change from webc");
    MFEEventInstance?.publish?.({
      eventName: "ROUTE_CHANGE",
      action: {
        type: "navigate",
        sender: "wc1",
      },
      payload: {
        from: window.origin,
        to: "/accounts/react1/about",
      },
      targetOrigin: this.appProps?.shellUrl,
    });
  }
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>
        <button>publish event</button>
      `;
  }
}
if (!window.customElements.get("my-component"))
  customElements.define("my-component", MyComponent);
