import { NextResponse } from "next/server";
import fs from "fs";
import { NextApiRequest } from "next";

export async function POST(req: any) {
    const errorMEssage = "値が未入力";

    //有効な値であるか確認する
    if (!req.url) {
        return NextResponse.json({ message: errorMEssage });
    }

    //未入力
    const requestUrl = new URL(req.url);
    const ipAddress = requestUrl.searchParams.get("IPAdress");
    const subnetMask = requestUrl.searchParams.get("Subnetmask");
    const defaultGateWay = requestUrl.searchParams.get("DefaultGateWay");
    if (!ipAddress || !subnetMask || !defaultGateWay) {
        return NextResponse.json({ message: errorMEssage });
    }

    // ファイルを読み込む
    const filePath = "./setting.yml";
    const fileContents = fs.readFileSync(filePath, "utf8");

    // YAMLをJavaScriptオブジェクトに変換
    const yaml = require("js-yaml");
    const settings = yaml.load(fileContents);

    // 設定ファイルを部分的に更新する。他の値はそのまま
    settings["user-info"]["ip"] = ipAddress;
    settings["user-info"]["snm"] = subnetMask;
    settings["user-info"]["dgw"] = defaultGateWay;

    // 更新された設定をYAML形式に変換
    const updatedYAML = yaml.dump(settings);

    // ファイルの書き込み
    fs.writeFileSync(filePath, updatedYAML, "utf8");

    return NextResponse.json({ message: "Now Regising ..." });
}
