#!/bin/sh
git checkout develop
git pull origin develop
yarn build
git push origin develop
git checkout master
git fetch --all
git checkout origin/develop -- src/build
git checkout develop