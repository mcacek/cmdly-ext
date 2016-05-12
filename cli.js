'use strict';

const vorpal = require('vorpal');
const cmdlyExt = require('./index');

const app = vorpal();

app.use(cmdlyExt);

app
  // .show()
  .parse(process.argv);
