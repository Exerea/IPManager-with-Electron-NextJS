import { NextResponse } from "next/server";
import { execSync } from "child_process";
import * as fs from "fs";

// YAMLファイルから名前を読み込む
// インターフェースを定義
interface Settings {
    "common-ip": {
        [key: string]: {
            ip1: string;
            ip2: string;
            ip3: string;
        };
    };
    "user-info": {
        ip: string;
        snm: string;
        dgw: string;
    };
}

export async function POST(request: Request) {
    console.log("hi");
    // バッチファイルを実行するコマンドを格納
    const command =
        "start cmd.exe /K " +
        '"echo hello && set INTERFACE=イーサネット && searchIP.bat"';

    execSync(command);

    //resultにどのIPか設定されている
    const result = fs.readFileSync("result.txt", "utf8");
    return NextResponse.json({ message: result });
}
