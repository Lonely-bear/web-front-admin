@echo off
echo Start push your code......
@echo on
git add .
@echo off
set d=%date:~8,2%
set m=%date:~5,2%
set y=%date:~0,4%
set t=%time:~0,-3%
,2%
set info=%y%-%m%-%d%-%t%
@echo on
git commit -m %info: =%
git push

@echo off
echo Push Success!
pause