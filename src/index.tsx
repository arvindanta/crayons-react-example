import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
const APP_ID = "react121";

declare global {
  interface Window {
    mount: (container: any, appProps: any) => void;
  }
}
window[APP_ID as any] = window[APP_ID as any] || {};
window[APP_ID as any].mount = async (container: any, appProps: any) => {
  if (!container) {
    console.warn(`APP - ${APP_ID} container not found`);
    return;
  }

  console.log(`MOUNT: ${APP_ID}`, container, appProps);

  ReactDOM.render(<App {...appProps} />, container);

  return async () => {
    console.log(`UNMOUNT: ${APP_ID}`);
    ReactDOM.unmountComponentAtNode(container);
  };
};

console.log("window appid ", window[APP_ID as any]);

window.onload = () => {
  window[APP_ID as any].mount(document.getElementById("root"), {});
};

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById("root")
// )
