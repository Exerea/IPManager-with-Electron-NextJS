@echo off
setlocal enabledelayedexpansion

set arg1=%1
set arg2=%2
set arg3=%3

for %%i in (%arg1% %arg2% %arg3%) do (
    arp -a %%i | find "%%i" > nul
    if !errorlevel! == 1 (
        set availableIP=%%i
        echo find: !availableIP!
        pause
        break
    ) else (
        echo %%i used
        pause
    )
)

pause

REM if find available IP change NET setting 
if not "!availableIP!"=="none" (
    netsh interface ip set address "%INTERFACE%" static !availableIP! %4 %5
    REM for Nodejs
    echo !availableIP! > result.txt
)else{
    REM for Nodejs
    echo 接続可能なアドレスがない > result.txt
}



endlocal
exit
