import { NextResponse } from "next/server";
import { exec, execSync } from "child_process";
import * as path from "path";
import * as fs from "fs";
import * as yaml from "js-yaml";

// YAMLファイルから名前を読み込む
// インターフェースを定義
interface Settings {
    "user-info": {
        ip: string;
        snm: string;
        dgw: string;
    };
}

export async function POST(request: Request) {
    const configFile = path.resolve(
        __dirname,
        "..",
        "..",
        "..",
        "..",
        "..",
        "setting.yml"
    );
    var fileContents = fs.readFileSync(configFile, "utf8");
    const config: Settings = yaml.load(fileContents) as Settings;
    const ip1 = config["user-info"].ip;
    console.log(ip1);

    // バッチファイルを実行するコマンドを格納
    const command =
        `start cmd.exe /K ` +
        ` set INTERFACE=イーサネット &&` +
        ` set availableIP=none &&` +
        ` changeIP.bat ${ip1} ${ip1} ${ip1}`;
    console.log(command);
    execSync(command);

    //resultにどのIPか設定されている
    const result = fs.readFileSync("result.txt", "utf8");
    return NextResponse.json(result);
}
