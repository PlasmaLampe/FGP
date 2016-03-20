#!/bin/bash
git clean -xdf
npm install
npm run tsc
npm start