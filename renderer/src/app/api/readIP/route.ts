import { NextResponse } from "next/server";
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
    const configFile = path.resolve("./setting.yml");
    var fileContents = fs.readFileSync(configFile, "utf8");
    const config: Settings = yaml.load(fileContents) as Settings;

    return NextResponse.json({
        ip: config["user-info"].ip,
        snm: config["user-info"].snm,
        dgw: config["user-info"].dgw,
    });
}
