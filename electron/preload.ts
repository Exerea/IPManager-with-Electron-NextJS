import { contextBridge, ipcRenderer } from "electron";
import {
    exampleChannel1,
    changeConf01Channel,
    changeConf02Channel,
    changeConf03Channel,
    changeYourIPChannel,
    rebootChannel,
    searchIPChannel1,
    changeDesigendIPChannel1,
} from "./lib/channels";

contextBridge.exposeInMainWorld("electronAPI", {
    sendExample: (...args: readonly unknown[]): void => {
        ipcRenderer.send(exampleChannel1, ...args);
    },
    searchIP: (...args: readonly unknown[]): void => {
        ipcRenderer.send(searchIPChannel1, ...args);
    },
    changeDesignedIP: (...args: readonly unknown[]): void => {
        ipcRenderer.send(changeDesigendIPChannel1, ...args);
    },
    changeConf01: (...args: readonly unknown[]): void => {
        ipcRenderer.send(changeConf01Channel, ...args);
    },
    changeConf02: (...args: readonly unknown[]): void => {
        ipcRenderer.send(changeConf02Channel, ...args);
    },
    changeConf03: (...args: readonly unknown[]): void => {
        ipcRenderer.send(changeConf03Channel, ...args);
    },
    changeYourIP: (...args: readonly unknown[]): void => {
        ipcRenderer.send(changeYourIPChannel, ...args);
    },

    rebootTeams: (...args: readonly unknown[]): void => {
        ipcRenderer.send(rebootChannel, ...args);
    },
});
