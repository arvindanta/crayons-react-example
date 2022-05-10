import { MFEController } from "@freshworksinc/platform-application";

let MFEEventInstance = null;

export function createMFEInstance(namespace) {
    MFEEventInstance = MFEController.init(namespace);
}


export { MFEController, MFEEventInstance  }
