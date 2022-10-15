#!/bin/sh
git checkout develop
git pull origin develop
git add .
git commit -m "deploy"
yarn build
git push origin develop
git checkout master
git fetch --all
git checkout origin/develop -- build/
git mv (gci build/*) .
git rm build/
git add .
git commit -m "deploy"
git push origin master
git checkout develop