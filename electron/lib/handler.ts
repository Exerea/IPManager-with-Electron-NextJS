import { IpcMainInvokeEvent, type IpcMainEvent } from "electron";
import fs from "fs";
import path from "path";
import { exec, execSync } from "child_process";

type HandlerWithEvent<
    F extends (...args: never[]) => unknown,
    Event extends IpcMainEvent | IpcMainInvokeEvent
> = (event: Event, ...args: Parameters<F>) => ReturnType<F>;

//-------------------------------------------------------------------------------------

export type RebootTeamsHandler = () => void;

type RebootTeamsHandlerWithEvent = HandlerWithEvent<
    RebootTeamsHandler,
    IpcMainEvent
>;

/**
 * ファイル書き込みイベント
 * @param _event マウスクリックイベント
 */
export const rebootTeamsHandler: RebootTeamsHandlerWithEvent = (_event) => {
    // ファイルを読み込む
    const asarRoot = path.resolve(__dirname);
    const rebootBat = path.join(
        asarRoot,
        "..",
        "..",
        "app.asar.unpacked",
        "extra",
        "rebootTeams.bat"
    );
    console.log(rebootBat);
    try {
        exec(rebootBat);
    } catch (error) {}
};

//-------------------------------------------------------------------------------------
export type SendExampleHandler = (
    ipAdress: string,
    subnetmask: string,
    defaultgateway: string
) => void;

type SendExampleHandlerWithEvent = HandlerWithEvent<
    SendExampleHandler,
    IpcMainEvent
>;

/**
 * ファイル書き込みイベント
 * @param _event マウスクリックイベント
 * @param ipAdress レンダラープロセスから受け取ったメッセージ
 * @param subnetmask レンダラープロセスから受け取ったサブネットマスク
 * @param defaultgateway レンダラープロセスから受け取ったデフォルトゲートウェイ
 */
export const sendExampleHandler: SendExampleHandlerWithEvent = (
    _event,
    _ipAdress,
    _defaultGateway,
    _subnetMask
) => {
    console.log(_ipAdress, _subnetMask, _defaultGateway);

    // ファイルを読み込む
    const asarRoot = path.resolve(__dirname);
    const settingPath = path.join(
        asarRoot,
        "..",
        "..",
        "app.asar.unpacked",
        "setting.yml"
    );
    const fileContents = fs.readFileSync(settingPath, "utf8");

    // YAMLをJavaScriptオブジェクトに変換
    const yaml = require("js-yaml");
    const settings = yaml.load(fileContents);

    // 設定ファイルを部分的に更新する。他の値はそのまま
    settings["user-info"]["ip"] = _ipAdress;
    settings["user-info"]["snm"] = _subnetMask;
    settings["user-info"]["dgw"] = _defaultGateway;

    // 更新された設定をYAML形式に変換
    const updatedYAML = yaml.dump(settings);

    // ファイルの書き込み
    fs.writeFileSync(settingPath, updatedYAML, "utf8");
};

//-------------------------------------------------------------------------------------

export type ChangeConf01Handler = () => void;

type ChangeConf01HandlerWithEvent = HandlerWithEvent<
    ChangeConf01Handler,
    IpcMainEvent
>;
// YAMLファイルから名前を読み込む
// インターフェースを定義
interface Settings1 {
    "common-ip": {
        [key: string]: {
            ip1: string;
            ip2: string;
            ip3: string;
            snm: string;
            dgw: string;
        };
    };
}
/**
 * ファイル書き込みイベント
 * @param _event マウスクリックイベント
 */
export const changeConf01Handler: ChangeConf01HandlerWithEvent = (_event) => {
    // ファイルを読み込む
    const asarRoot = path.resolve(__dirname);
    const settingPath = path.join(
        asarRoot,
        "..",
        "..",
        "app.asar.unpacked",
        "setting.yml"
    );

    // YAMLをJavaScriptオブジェクトに変換
    const yaml = require("js-yaml");
    var fileContents = fs.readFileSync(settingPath, "utf8");
    const config: Settings1 = yaml.load(fileContents) as Settings1;
    const data = config["common-ip"]["conference-room1"];

    // バッチファイルを実行するコマンドを格納
    const bat = path.join(
        asarRoot,
        "..",
        "..",
        "app.asar.unpacked",
        "extra",
        "changeIP.bat"
    );

    // バッチファイルを実行するコマンドを格納
    const command = `${bat} ${data.ip1} ${data.ip2} ${data.ip3} ${data.snm} ${data.dgw}`;
    execSync(command);

    //export changed IP
    // const result = fs.readFileSync("result.txt", "utf8");
};
//-------------------------------------------------------------------------------------

export type ChangeConf02Handler = () => void;

type ChangeConf02HandlerWithEvent = HandlerWithEvent<
    ChangeConf02Handler,
    IpcMainEvent
>;
// YAMLファイルから名前を読み込む
// インターフェースを定義
interface Settings2 {
    "common-ip": {
        [key: string]: {
            ip1: string;
            ip2: string;
            ip3: string;
            snm: string;
            dgw: string;
        };
    };
}
/**
 * ファイル書き込みイベント
 * @param _event マウスクリックイベント
 */
export const changeConf02Handler: ChangeConf02HandlerWithEvent = (_event) => {
    // ファイルを読み込む
    const asarRoot = path.resolve(__dirname);
    const settingPath = path.join(
        asarRoot,
        "..",
        "..",
        "app.asar.unpacked",
        "setting.yml"
    );

    // YAMLをJavaScriptオブジェクトに変換
    const yaml = require("js-yaml");
    var fileContents = fs.readFileSync(settingPath, "utf8");
    const config: Settings2 = yaml.load(fileContents) as Settings2;
    const data = config["common-ip"]["conference-room2"];

    // バッチファイルを実行するコマンドを格納
    const bat = path.join(
        asarRoot,
        "..",
        "..",
        "app.asar.unpacked",
        "extra",
        "changeIP.bat"
    );

    // バッチファイルを実行するコマンドを格納
    const command = `${bat} ${data.ip1} ${data.ip2} ${data.ip3} ${data.snm} ${data.dgw}`;
    execSync(command);

    //export changed IP
    // const result = fs.readFileSync("result.txt", "utf8");
};
//-------------------------------------------------------------------------------------

export type ChangeConf03Handler = () => void;

type ChangeConf03HandlerWithEvent = HandlerWithEvent<
    ChangeConf03Handler,
    IpcMainEvent
>;
// YAMLファイルから名前を読み込む
// インターフェースを定義
interface Settings3 {
    "common-ip": {
        [key: string]: {
            ip1: string;
            ip2: string;
            ip3: string;
            snm: string;
            dgw: string;
        };
    };
}
/**
 * ファイル書き込みイベント
 * @param _event マウスクリックイベント
 */
export const changeConf03Handler: ChangeConf03HandlerWithEvent = (_event) => {
    // ファイルを読み込む
    const asarRoot = path.resolve(__dirname);
    const settingPath = path.join(
        asarRoot,
        "..",
        "..",
        "app.asar.unpacked",
        "setting.yml"
    );

    // YAMLをJavaScriptオブジェクトに変換
    const yaml = require("js-yaml");
    var fileContents = fs.readFileSync(settingPath, "utf8");
    const config: Settings3 = yaml.load(fileContents) as Settings3;
    const data = config["common-ip"]["conference-room3"];

    // バッチファイルを実行するコマンドを格納
    const bat = path.join(
        asarRoot,
        "..",
        "..",
        "app.asar.unpacked",
        "extra",
        "changeIP.bat"
    );

    // バッチファイルを実行するコマンドを格納
    const command = `${bat} ${data.ip1} ${data.ip2} ${data.ip3} ${data.snm} ${data.dgw}`;
    execSync(command);

    //export changed IP
    // const result = fs.readFileSync("result.txt", "utf8");
};
//-------------------------------------------------------------------------------------

export type ChangeYourIPHandler = () => void;

type ChangeYourIPHandlerWithEvent = HandlerWithEvent<
    ChangeYourIPHandler,
    IpcMainEvent
>;
// YAMLファイルから名前を読み込む
// インターフェースを定義
interface SettingsYourIP {
    "common-ip": {
        [key: string]: {
            ip1: string;
            ip2: string;
            ip3: string;
            snm: string;
            dgw: string;
        };
    };
}
/**
 * ファイル書き込みイベント
 * @param _event マウスクリックイベント
 */
export const changeYourIPHandler: ChangeYourIPHandlerWithEvent = (_event) => {
    // ファイルを読み込む
    const asarRoot = path.resolve(__dirname);
    const settingPath = path.join(
        asarRoot,
        "..",
        "..",
        "app.asar.unpacked",
        "setting.yml"
    );

    // YAMLをJavaScriptオブジェクトに変換
    const yaml = require("js-yaml");
    var fileContents = fs.readFileSync(settingPath, "utf8");
    const config: SettingsYourIP = yaml.load(fileContents) as SettingsYourIP;
    const data = config["common-ip"]["conference-room1"]; //TODO

    // バッチファイルを実行するコマンドを格納
    const bat = path.join(
        asarRoot,
        "..",
        "..",
        "app.asar.unpacked",
        "extra",
        "changeIP.bat"
    );

    // バッチファイルを実行するコマンドを格納
    const command = `${bat} ${data.ip1} ${data.ip2} ${data.ip3} ${data.snm} ${data.dgw}`;
    execSync(command);

    //export changed IP
    // const result = fs.readFileSync("result.txt", "utf8");
};

//-------------------------------------------------------------------------------------

type Data = {
    ipAdress: string;
    subnetMask: string;
    defaultGateWay: string;
};

export type ReadParamsHandler = (arg: {
    readonly message: string;
}) => Promise<Data>;

type ReadParamsHandlerWithEvent = HandlerWithEvent<
    ReadParamsHandler,
    IpcMainInvokeEvent
>;

export const readParamsHandler: ReadParamsHandlerWithEvent = async (
    _event,
    { message }
) => {
    console.log(`message from renderer invoke: ${message}`);
    const response: Data = {
        ipAdress: "test",
        subnetMask: "test",
        defaultGateWay: "test",
    };
    return response;
};
