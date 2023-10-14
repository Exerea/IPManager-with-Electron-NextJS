import { type IpcMainEvent } from "electron";
import fs from "fs";
import path from "path";

type HandlerWithEvent<
    F extends (...args: never[]) => unknown,
    Event extends IpcMainEvent
> = (event: Event, ...args: Parameters<F>) => ReturnType<F>;

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
    const filePath = path.resolve("./setting.yml");
    const fileContents = fs.readFileSync(filePath, "utf8");

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
    fs.writeFileSync(filePath, updatedYAML, "utf8");
};
