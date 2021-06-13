set ver=01
echo v:  %ver%

cd C:\GitHub\softplan-dev\deploy
xcopy /S /E "frontend\*.*" "C:\GitHub\softplan-dev\frontend"


xcopy /S /E "backend\*.*" "C:\GitHub\softplan-dev\backend"



call "C:\GitHub\softplan-dev\deploy\build-backend.bat"
call "C:\GitHub\softplan-dev\deploy\build-frontend.bat"

pause

cd C:\GitHub\softplan-dev\backend
docker build --pull --rm -f "Dockerfile" -t h4liss0n/dev.sotfplan.backend:%ver%  "."

cd C:\GitHub\softplan-dev\frontend
docker build --pull --rm -f "Dockerfile" -t h4liss0n/dev.sotfplan.frontend:%ver%  "."


pause

docker push h4liss0n/dev.sotfplan.backend:%ver%
docker push h4liss0n/dev.sotfplan.frontend:%ver%

pause