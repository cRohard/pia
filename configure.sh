#!/bin/bash
echo "Starting configuration..."
npm install typescript@'>=2.1.0 <2.4.0'
npm install http
npm install http-auth
echo $ADMIN > users.htpasswd
cp node_modules/save-svg-as-png/lib/* node_modules/save-svg-as-png/
ng build --prod --build-optimizer --sourcemaps
mkdir app
mv dist app/
echo "Configuration ended successfully !"