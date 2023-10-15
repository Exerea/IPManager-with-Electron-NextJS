import { contextBridge, ipcRenderer } from "electron";
import { exampleChannel1, rebootChannel } from "./lib/channels";

contextBridge.exposeInMainWorld("electronAPI", {
    sendExample: (...args: readonly unknown[]): void => {
        ipcRenderer.send(exampleChannel1, ...args);
    },
    rebootTeams: (...args: readonly unknown[]): void => {
        console.log("rebootTeams");
        ipcRenderer.send(rebootChannel, ...args);
    },
});
