// Native
import { join } from "node:path";

// Packages
import { BrowserWindow, app, ipcMain, session, shell } from "electron";

// Own Libraries
import {
    changeConf01Channel,
    changeConf02Channel,
    changeConf03Channel,
    changeDesigendIPChannel1,
    changeYourIPChannel,
    exampleChannel1,
    readParamsChannnel,
    rebootChannel,
    searchIPChannel1,
} from "./lib/channels";
import {
    changeConf01Handler,
    changeConf02Handler,
    changeConf03Handler,
    changeDesigendIPHandler,
    changeYourIPHandler,
    readParamsHandler,
    rebootTeamsHandler,
    searchIPHandler,
    sendExampleHandler,
} from "./lib/handler";
import { registerProtocol, protocolInfo } from "./lib/custom-protocol";

//package.jsonからバージョン情報の取得
import {
    version as applicationVersion,
    name as applicationName,
} from "../package.json";

//アプリケーション情報
app.setAboutPanelOptions({
    applicationName,
    applicationVersion,
    authors: ["T.tat"], // EDIT
    copyright: "©2023 T.Tat", // EDIT
});

//Next.js開発環境
const devServerUrl = "http://localhost:3000";

//MPA IPC待ち受け
registerProtocol({
    directory: "renderer/out",
});

// Prepare the renderer once the app is ready
app.on("ready", async () => {
    // session
    session.defaultSession.webRequest.onHeadersReceived((details, callback) => {
        const cspContents = app.isPackaged
            ? ["default-src 'self' 'unsafe-inline'"]
            : ["default-src 'self' 'unsafe-inline' 'unsafe-eval'"];
        callback({
            responseHeaders: {
                ...details.responseHeaders,
                "Content-Security-Policy": cspContents,
            },
        });
    });

    //ElectronアプリケーションWindowの設定
    const mainWindow = new BrowserWindow({
        width: 1024,
        height: 768,
        titleBarStyle: "hidden",
        resizable: false,
        titleBarOverlay: {
            color: "#1A1A1C",
            symbolColor: "#7096F8",
        },
        webPreferences: {
            // nodeIntegration: true,
            // contextIsolation: false,
            preload: join(__dirname, "preload.js"),
            devTools: true,
        },
    });

    //開発者ツールの許可
    // mainWindow.webContents.openDevTools();

    //Window展開先
    if (app.isPackaged) {
        await mainWindow.loadURL(protocolInfo.origin);
    } else {
        // development
        await mainWindow.loadURL(devServerUrl);
    }
});

//Window閉じた時アプリを終了する
app.on("window-all-closed", app.quit);

// Open OS browser for external url
app.on("web-contents-created", (_event, contents) => {
    contents.setWindowOpenHandler(({ url }) => {
        // allow only specific origin
        const allowedOrigins = ["https://nextjs.org", "https://vercel.com"];

        const { origin } = new URL(url);
        if (allowedOrigins.includes(origin)) {
            setImmediate(() => {
                shell.openExternal(url);
            });
        }
        return { action: "deny" };
    });

    // disallow unnecessary navigation
    contents.on("will-navigate", (event, navigationUrl) => {
        const parsedUrl = new URL(navigationUrl);
        if (app.isPackaged) {
            const { protocol, hostname } = parsedUrl;
            if (
                protocol !== protocolInfo.protocol ||
                hostname !== protocolInfo.hostname
            ) {
                event.preventDefault();
            }
        } else {
            const { origin } = parsedUrl;
            const devServerOrigin = new URL(devServerUrl).origin;
            if (origin !== devServerOrigin) {
                event.preventDefault();
            }
        }
    });
});

// example of send from renderer
ipcMain.on(exampleChannel1, sendExampleHandler);
ipcMain.on(searchIPChannel1, searchIPHandler);
ipcMain.on(changeDesigendIPChannel1, changeDesigendIPHandler);
ipcMain.on(changeConf01Channel, changeConf01Handler);
ipcMain.on(changeConf02Channel, changeConf02Handler);
ipcMain.on(changeConf03Channel, changeConf03Handler);
ipcMain.on(changeYourIPChannel, changeYourIPHandler);
ipcMain.on(rebootChannel, rebootTeamsHandler);
ipcMain.handle(readParamsChannnel, readParamsHandler);
