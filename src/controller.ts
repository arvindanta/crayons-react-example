import { MFEController } from "@freshworksinc/platform-application";

let MFEEventInstance: any = null;

export function createMFEInstance(namespace:string) {
    MFEEventInstance = MFEController.init(namespace);
}


export { MFEController, MFEEventInstance  }
