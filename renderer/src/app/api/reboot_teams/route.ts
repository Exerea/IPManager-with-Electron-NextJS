import { NextResponse } from "next/server";
import { exec, execSync } from "child_process";

export async function POST(req: any) {
    // バッチファイルを実行するコマンドを格納
    const command = `rebootTeams.bat"`;
    console.log(command);

    try {
        exec(command);
    } catch (error) {
        //XXX:Care
        return NextResponse.json({ message: "Now Rebooting..." });
    }

    return NextResponse.json({ message: "Now Rebooting..." });
}
