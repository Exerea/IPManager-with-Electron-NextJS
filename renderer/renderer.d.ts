import type {
    RebootTeamsHandler,
    SendExampleHandler,
    ReadParamsHandler,
} from "@main/lib/handler";

export interface IElectronAPI {
    readonly sendExample: SendExampleHandler;
    readonly rebootTeams: RebootTeamsHandler;
    readonly readParams: ReadParamsHandler;
}

declare global {
    interface Window {
        readonly electronAPI: IElectronAPI;
    }
}
