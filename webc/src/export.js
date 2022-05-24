import { MFEController } from "@freshworksinc/platform-application";

let MFEInstance = null;

export function createMFEInstance(namespace) {
    MFEInstance = MFEController.initialiseInstance(namespace, {
        trigger: async (params) => {
          console.log(`Calling trigger in ${namespace} ${params}`);
        },
      });
}


export { MFEController, MFEInstance }
