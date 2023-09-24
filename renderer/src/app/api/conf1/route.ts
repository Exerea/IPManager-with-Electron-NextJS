import { NextResponse } from "next/server";
import { execSync } from "child_process";
import * as fs from "fs";
import * as yaml from "js-yaml";

// YAMLファイルから名前を読み込む
// インターフェースを定義
interface Settings {
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

export async function POST(request: Request) {
    const path = require("path");

    const configFile = path.resolve("./setting.yml");
    var fileContents = fs.readFileSync(configFile, "utf8");
    const config: Settings = yaml.load(fileContents) as Settings;
    const data = config["common-ip"]["conference-room1"];

    // バッチファイルを実行するコマンドを格納
    const command = `${path.resolve("./src/changeIP.bat")} ${data.ip1} ${
        data.ip2
    } ${data.ip3} ${data.snm} ${data.dgw}`;
    execSync(command);

    //export changed IP
    const result = fs.readFileSync("result.txt", "utf8");
    return NextResponse.json(result);
}
