import { NextResponse } from "next/server";
import { exec, execSync } from "child_process";
import path from "path";

export async function POST(req: any) {
    // バッチファイルを実行するコマンドを格納
    const command = `rebootTeams.bat"`;
    console.log(command);
    console.log(path.resolve("./extra"));
    console.log(path.resolve(__dirname));
    console.log(path.resolve(__filename));
    const pathes = path.resolve("./extra/rebootTeams.bat");
    try {
        exec(pathes);
    } catch (error) {
        //XXX:Care
        return NextResponse.json({ message: "Now Rebooting..." });
    }

    return NextResponse.json({ message: "Now Rebooting..." });
}
