import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { MFEController } from "./controller";
import "./index.css";
import App from "./App";

const APP_ID = "reactForm";

const rootConfig = {
  mount: async (container: any, appProps: any) => {
    if (!container) {
      console.warn(`APP - ${APP_ID} container not found`);
      return;
    }

    console.log(`MOUNT: ${APP_ID}`, container, appProps);

    ReactDOM.render(
      <BrowserRouter basename={appProps.routerBasePath}>
        <App {...appProps} />
      </BrowserRouter>,
      container
    );
  },
  unmount: async (container: any) => {
    console.log(`UNMOUNT: ${APP_ID}`);
    ReactDOM.unmountComponentAtNode(container);
  },
};

MFEController?.setRootConfig?.(APP_ID, rootConfig);

window.onload = () => {
  rootConfig.mount(document.getElementById("root"), {
    title: "test",
  });
};
