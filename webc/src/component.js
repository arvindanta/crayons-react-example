
import { MFEController } from "./export"
const APP_ID = "web12"
class MyComponent extends HTMLElement {
  constructor() {
    // Setup a click listener on app itself.
    super();
    this.addEventListener("click", (e) => {
      this.handler();
    });
    MFEController?.__mfe_subscribe?.("INIT", (msg) => {
      console.log(`msg from outside for ${APP_ID} is ${msg}`);
    });

    MFEController?.__mfe_subscribe?.("from_child_react1", (msg) => {
      console.log(`msg from outside for ${APP_ID} is ${msg}`);
    });
  }

  handler() {
    console.log('apprProps',this.appProps)
    MFEController?.__mfe_publish?.({
      eventName:'from_child_webc',
      action: {
        type: "from_child webc",
        sender: "web12",
      },
      payload: "from child webc",
      targetOrigin: this.appProps?.__props_shellUrl,
    });


    MFEController?.__mfe_publish?.({
      eventName:'ROUTE_CHANGE',
      action: {
        type: "navigate",
        sender: "wc1",
      },
      payload: {
        from: window.origin,
        to: "/about",
      },
      targetOrigin: this.appProps?.__props_shellUrl,
    });
  
  }
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>
        <button>publish event</button>
      `;
  }
}
if(!window.customElements.get("my-component"))
customElements.define("my-component", MyComponent);
