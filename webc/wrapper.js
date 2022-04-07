const APP_ID = "web12";

window[APP_ID] = window[APP_ID] || {};
window[APP_ID].mount = async (container, appProps) => {
  if (!container) {
    console.warn(`APP - ${APP_ID} container not found`);
    return;
  }

  console.log(`MOUNT: ${APP_ID}`, container, appProps);

  const webcmp = document.createElement('my-component');
  container.appendChild(webcmp)

  return async () => {
    console.log(`UNMOUNT: ${APP_ID}`);
    container.remove(webcmp)
  };
};

console.log("window appid ", window[APP_ID]);
