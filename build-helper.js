#!/usr/bin/env node
'use strict'
const pug = require('pug');
const fs = require('fs');
const mkdirp = require('mkdirp');

const pugFile = process.argv[2]
const dest = pugFile.replace('./src', './build').replace('.pug', '.html');
const dir = dest.substring(0, dest.lastIndexOf("/"));
const html = pug.renderFile(pugFile);

mkdirp(dir, function(err) {
  console.log('Writing: ', dest);
  fs.writeFileSync(dest, html);
})