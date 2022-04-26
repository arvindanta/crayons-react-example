import React from "react";
import ReactDOM from "react-dom";

import { MFEController } from "@freshworksinc/platform-application";
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

    ReactDOM.render(<App {...appProps} />, container);
  },
  unmount: async (container: any) => {
    console.log(`UNMOUNT: ${APP_ID}`);
    ReactDOM.unmountComponentAtNode(container);
  },
};

MFEController?.registerApplication?.(APP_ID, rootConfig);

window.onload = () => {
  rootConfig.mount(document.getElementById("root"), {
    title: "test",
  });
};
