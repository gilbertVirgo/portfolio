#!/bin/bash

cd /var/www/portfolio/app
git pull
npm run build
node server