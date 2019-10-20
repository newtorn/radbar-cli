#!/usr/bin/env node

const radbar = require('radbar');

for (let v of radbar.ProgressBar.iterator(Array(100))){}