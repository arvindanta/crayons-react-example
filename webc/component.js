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
    if (!inIframe()) {
      window.__mfe_publish?.({
        action: {
          type: "from_child",
          sender: "web12",
          receiver:"root",
        }, payload: "from child web12"});
      setTimeout(() => {
        window.__mfe_publish?.({
          action: {
          type: "from_child",
          sender: 'web12', 
        }, payload: "from child broadcast web12", broadcast: true});
      }, 3000);
    } else {
      window.top?.postMessage({
        action: {
          type: 'MESSAGE',
          sender: "web12",
          receiver: "react121",
        },
        payload: "child sending message from iframe web12",
      }, "*");
    }
  }
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>
        <button>publish event</button>
      `;
  }
}
customElements.define("my-component", MyComponent);
