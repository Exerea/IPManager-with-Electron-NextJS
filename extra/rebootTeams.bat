@echo off
taskkill /IM Teams.exe /F
timeout /t 5
start "" "C:\Program Files (x86)\Microsoft\Teams\current\Teams.exe"
exit
