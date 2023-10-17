@echo off
taskkill /IM Teams.exe /F
timeout /t 5
start "" "%USERPROFILE%\AppData\Local\Microsoft\Teams\current\Teams.exe"
exit
