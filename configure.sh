#!/bin/bash
echo "Starting configuration..."
cp node_modules/save-svg-as-png/lib/* node_modules/save-svg-as-png/
ng build --prod
mkdir app
mv dist app/
echo "Configuration ended successfully !"