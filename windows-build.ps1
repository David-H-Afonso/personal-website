git checkout develop
git pull origin develop
yarn
yarn build
git add .
git commit -m "deploy"
git push origin develop