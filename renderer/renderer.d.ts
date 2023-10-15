import type {
    RebootTeamsHandler,
    ChangeConf01Handler,
    ChangeConf02Handler,
    ChangeConf03Handler,
    ChangeYourIPHandler,
    SendExampleHandler,
    ReadParamsHandler,
} from "@main/lib/handler";

export interface IElectronAPI {
    readonly sendExample: SendExampleHandler;
    readonly rebootTeams: RebootTeamsHandler;
    readonly changeConf01: ChangeConf01Handler;
    readonly changeConf02: ChangeConf02Handler;
    readonly changeConf03: ChangeConf03Handler;
    readonly changeYourIP: ChangeYourIPHandler;
    readonly readParams: ReadParamsHandler;
}

declare global {
    interface Window {
        readonly electronAPI: IElectronAPI;
    }
}
