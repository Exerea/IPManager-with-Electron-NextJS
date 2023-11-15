@echo off
setlocal enabledelayedexpansion

REM Search Area
	set "base_ip=192.168.1."
	set "subnetmask=255.255.255.0"
	set "defaultNetWork=192.168.1.254"
	set "inter=%0"

REM Loop to find Available IP Adess for ping sweeping
	for /l %%i in (2, 1, 254) do (

	echo ***************************************************
	echo ***************************************************

    	set "current=%base_ip%%%i"
	echo		IP ADDRESS		:	!current! 

    	:: Ping check
	ping -n 1 !current! | find "TTL=" > nul
	echo 	ERROR LEVEL		: 	!errorlevel!
	
	::NOTE errorlevel=0:no reponses
	if !errorlevel! neq 0 (
	
	echo --------------------------------------------------
	echo 	Passed Ping Check
	echo 	Trying netsh ...

	netsh interface ip set address name="イーサネット" static !current! %subnetmask% %defaultNetWork%

	:: Get New Address
	for /f "tokens=2 delims=:" %%b in ('ipconfig ^| find "IPv4 アドレス"') do (
		set CURRENT_IP=%%b
	)

	:: Sanitize
	set CURRENT_IP=%CURRENT_IP:~1%


	::try to connect the address
	REM netsh interface ip set address "イーサネット" static !current! %subnetmask% %defaultNetWork% > output.txt 2>&1

        ::no error
        if !ERRORLEVEL! equ 0 (
		if "!current!" neq "%CURRENT_IP%" (
			echo 	Passed Connection
        		:: for Nodejs
        		echo !current! > result.txt
			goto :end
		)
        )
	
	echo --------------------------------------------------
	echo 	Couldnt connect		: %inter% , !current! , %subnetmask% , %defaultNetWork%

    	) else (
	
	echo --------------------------------------------------
	echo 	Already Used 		: %inter% , !current! , %subnetmask% , %defaultNetWork%
	)
)
echo Not found > result.txt

::fin
:end
endlocal