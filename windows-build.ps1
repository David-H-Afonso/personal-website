git checkout develop
git pull origin develop
yarn
yarn build
git add .
git commit -m "deploy"
git push origin develop
Set-Location ".."
Set-Location "deploy-personal-website\"
git pull origin master
git stash
git rm -r *
git fetch --all
git checkout origin/develop -- build/
git mv (Get-ChildItem build/*) .
git add .
git commit -m "deploy"
git push origin master
Set-Location ".."
Set-Location "C:\Programacion\personal-website\personal-website\"
git checkout develop