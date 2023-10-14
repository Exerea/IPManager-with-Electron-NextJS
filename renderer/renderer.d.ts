import type { SendExampleHandler } from "@main/lib/handler";

export interface IElectronAPI {
    readonly sendExample: SendExampleHandler;
}

declare global {
    interface Window {
        readonly electronAPI: IElectronAPI;
    }
}
