
@echo off
setlocal enabledelayedexpansion

set "INTERFACE=�C�[�T�l�b�g"
set "arg1=%1"
set "arg2=%2"
set "arg3=%3"
set "arg4=%4"
set "arg5=%5"
set "subnetmask=%6"
set "defaultNetWork=%7"


REM Loop to find Available IP Adess for ping sweeping
for %%i in (%arg1% %arg2% %arg3% %arg4% %arg5%) do (

	echo ******************************************************************************************************

    	set "current=%%i"
	echo		IP ADDRESS		:	!current! 

    	:: Ping check
	ping -n 1 !current! | find "TTL=" > nul
	echo 	ERROR LEVEL		: 	!errorlevel!

::NOTE errorlevel=0:no reponses
	if !errorlevel! neq 0 (
	
	echo ----------------------------------------------------------------------------------------------------
	echo 	Passed Ping Check
	echo 	Trying netsh ...

	netsh interface ip set address name=%INTERFACE% static !current! %subnetmask% %defaultNetWork%
	set NETSHERROR=!ERRORLEVEL!

	:: Get New Address
	for /f "tokens=2 delims=:" %%b in ('ipconfig ^| find "IPv4 �A�h���X"') do (
		set CURRENT_IP=%%b
	)

	:: Sanitize
	set CURRENT_IP=%CURRENT_IP:~1%

        ::no error
        if !NETSHERROR! equ 0 (
		if "!current!" neq "%CURRENT_IP%" (
			echo 	Passed Connection
        		:: for Nodejs
        		echo !current! > result.txt
			goto :end
		)
        )
	
	echo ----------------------------------------------------------------------------------------------------
	echo 	Couldnt connect		: %INTERFACE% , !current! , %subnetmask% , %defaultNetWork%

    	) else (
	
	echo ----------------------------------------------------------------------------------------------------
	echo 	Already Used 		: %INTERFACE% , !current! , %subnetmask% , %defaultNetWork%
	)
)
echo Pls search IP > result.txt

::fin
:end
endlocal
