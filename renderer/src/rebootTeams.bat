@echo off
@REM taskkill /IM Teams.exe /F
taskkill /IM steam.exe /F
timeout /t 5
@REM start "" "C:\Program Files (x86)\Microsoft\Teams\current\Teams.exe"
start "" "C:\Program Files (x86)\Steam\steam.exe"
exit
