import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createMFEInstance, MFEController } from "./controller";
import "./index.css";
import App from "./App";

const APP_ID = "reactForm";

const rootConfig = {
  mount: async (container: any, appProps: any) => {
    if (!container) {
      console.warn(`APP - ${APP_ID} container not found`);
      return;
    }

    createMFEInstance(appProps.instanceId);

    console.log(
      `MOUNTING: instance ${appProps.instanceId} of app group ${APP_ID}, `,
      container,
      appProps
    );

    ReactDOM.render(
      <BrowserRouter basename={appProps.routerBasePath}>
        <App {...appProps} />
      </BrowserRouter>,
      container
    );
  },
  unmount: async (container: any, appProps: any) => {
    console.log(
      `UNMOUNTING: instance ${appProps.instanceId} of app group ${APP_ID}`
    );
    ReactDOM.unmountComponentAtNode(container);
  },
};

MFEController?.registerApplication?.(APP_ID, rootConfig);

window.onload = () => {
  const appProps = MFEController.getMFEQueryParams();

  rootConfig.mount(document.getElementById("root"), {
    ...appProps,
    title: "test",
  });
};
