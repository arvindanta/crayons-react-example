
import { MFEController } from "./export"
const APP_ID = "web12"
class MyComponent extends HTMLElement {
  constructor() {
    // Setup a click listener on app itself.
    super();
    console.log('apprProps',this.getAttribute("appProps"))
    this.addEventListener("click", (e) => {
      this.handler();
    });
    MFEController?.__mfe_subscribe?.(APP_ID, (msg) => {
      console.log(`msg from outside for ${APP_ID} is ${msg}`);
    });
  }

  handler() {
    console.log("jdjdhjso ");
    MFEController?.__mfe_publish?.({
      action: {
        type: "from_child webc",
        sender: "web12",
        receiver: "root",
      },
      payload: "from child webc",
      senderOrigin: window.origin,
      targetOrigin: this.getAttribute("appProps")?.targetOrigin || "http://localhost:3333",
    });


    MFEController?.__mfe_publish?.({
      action: {
        type: "navigate",
        sender: "wc1",
        receiver: "reactForm",
      },
      payload: {
        from: window.origin,
        to: "/about",
      },
      senderOrigin: window.origin,
      targetOrigin: this.getAttribute("appProps")?.targetOrigin || "http://localhost:3333",
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
