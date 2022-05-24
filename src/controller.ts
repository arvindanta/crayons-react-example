import { MFEController } from "@freshworksinc/platform-application";

let MFEInstance: any = null;

export function createMFEInstance(namespace: string) {
  MFEInstance = MFEController.initialiseInstance(namespace, {
    trigger: async (params: any) => {
      console.log(`Calling trigger in ${namespace} ${params}`);
    },
  });
}

export { MFEController, MFEInstance };
