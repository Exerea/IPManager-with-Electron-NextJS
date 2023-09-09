@echo off
setlocal enabledelayedexpansion

:: ベースとなるIPアドレスの範囲を設定
set "base_ip=192.168.1."
set subnetmask = "10.62.31.1"
set defaultNetWork = "10.62.31.1"

:: 接続可能なIPアドレスが見つかるまでループ
for /l %%i in (2, 1, 254) do (
    set "current_ip=%base_ip%%%i"
    :: pingコマンドでIPアドレスが接続可能か確認
    ping -n 1 -w 100 !current_ip! > nul
    if !errorlevel! == 0 (
        netsh interface ip set address "%INTERFACE%" static !current_ip! %subnetmask% %defaultNetWork%  > output.txt 2>&1
        set /p OUTPUT=<output.txt
        del output.txt

        if "!OUTPUT!" == "" (
            :: for Nodejs
            echo !current_ip! > result.txt
        ) else (
            :: for Nodejs
            echo Couldn`t connect > result.txt
        )
        
       
        goto :end
    )
)
echo Not found > result.txt
:end
endlocal
