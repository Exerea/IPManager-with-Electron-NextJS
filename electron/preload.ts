import { contextBridge, ipcRenderer } from "electron";
import { exampleChannel1 } from "./lib/channels";

contextBridge.exposeInMainWorld("electronAPI", {
    sendExample: (...args: readonly unknown[]): void => {
        ipcRenderer.send(exampleChannel1, ...args);
    },
});
