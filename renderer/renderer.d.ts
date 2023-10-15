import type { RebootTeamsHandler, SendExampleHandler } from "@main/lib/handler";

export interface IElectronAPI {
    readonly sendExample: SendExampleHandler;
    readonly rebootTeams: RebootTeamsHandler;
}

declare global {
    interface Window {
        readonly electronAPI: IElectronAPI;
    }
}
