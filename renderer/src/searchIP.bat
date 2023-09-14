@REM @echo off
setlocal enabledelayedexpansion

:: Search IP Area
set "base_ip=192.168.11."
set "subnetmask=255.255.255.0"
set "defaultNetWork=192.168.11.1"
set "INTERFACE=イーサネット 2"

::Loop to find Available IP Adess for ping sweeping
for /l %%i in (9, 1, 11) do (
	echo ***************************************************

    	set "current_ip=%base_ip%%%i"
echo gu
	echo 	IP ADDRESS		: !current_ip! 
	set nowip=!current_ip!
    
    	:: Ping check
	ping -n 1 !current_ip! | find "TTL=" > nul
	echo 	ERROR LEVEL		: !errorlevel!

    ::NOTE errorlevel=0:no reponses
   if !errorlevel! neq 0 (
	
	echo --------------------------------------------------
	echo Passed Ping Check
	echo Trying netsh ...
       ::try to connect the address
        netsh interface ip set address %INTERFACE% static !nowip! %subnetmask% %defaultNetWork%  > output.txt 2>&1

        ::no error
        if !ERRORLEVEL! neq 0 (
	echo Passed Connection
        :: for Nodejs
        echo !current_ip! > result.txt
	goto :end
        )
	
	echo --------------------------------------------------
	echo Couldnt connect		: %INTERFACE% , !current_ip! , %subnetmask% , %defaultNetWork%
    	) else (
	echo --------------------------------------------------
	echo Already Used 		: %INTERFACE% , !current_ip! , %subnetmask% , %defaultNetWork%
	)
)
echo Not found > result.txt

::fin
:end
endlocal
