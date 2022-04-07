function inIframe() {
  try {
    return window.self !== window.top;
  } catch (e) {
    return true;
  }
}
class MyComponent extends HTMLElement {
  constructor() {
    // Setup a click listener on app itself.
    super();
    this.addEventListener("click", (e) => {
      this.handler();
    });
    if (!inIframe) {
      window.__mfe_subscribe?.("web12", (ev) => {
        console.log("receving message ", ev);
      });
    } else {
      window.addEventListener("message", (message) => {
        console.log("message received from parent for webcomponent", message);
      });
    }
  }
  handler() {
    console.log("jdjdhjso ");
    if (!inIframe) {
      window.__mfe_publish?.("root", {
        type: "from_child",
        name: "from child message",
      });
      setTimeout(() => {
        window.__mfe_broadcast?.("web12", {
          type: "from_child",
          name: "from child message",
        });
      }, 3000);
    } else {
      window.top?.postMessage("child sending message", "*");
    }
  }
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>
        <button>publish event</button>
      `;
  }
}
customElements.define("my-component", MyComponent);
