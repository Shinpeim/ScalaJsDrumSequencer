#!/bin/sh

set -e;

git checkout master;
git merge development -m 'Merge development';
cd scala;
sbt clean;
sbt fullOptJS;
cd ../web;
npm run build;
cd ..;
git add -f web/build;
git commit -m 'deploy';
git push origin master;
git co development;
