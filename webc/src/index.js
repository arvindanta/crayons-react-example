import { MFEController, createMFEInstance } from "./export";
import "./component";

const APP_ID = "web12";

const webcmp = document.createElement("my-component");
const rootConfig = {
  mount: async (container, appProps) => {
    if (!container) {
      console.warn(`APP - ${APP_ID} container not found`);
      return;
    }

    console.log(`MOUNT: ${APP_ID}`, container, appProps);
    
    webcmp.appProps = appProps;

    createMFEInstance(appProps.instanceId || appProps.instanceId);

    container.appendChild(webcmp);
  },
  unmount: (container) => {
    console.log(`UNMOUNT: ${APP_ID}`);
    container.remove(webcmp);
  },
  async get(params) {
    console.log("params", APP_ID, params);
    return params;
  },
};

MFEController?.registerApplication?.(APP_ID, rootConfig);

window.onload = () => {
  const appProps = MFEController.getMFEQueryParams();
  rootConfig.mount(document.getElementById("webroot"), {
    title: "test",
    ...appProps
  });
};
