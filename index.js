'use strict';

const thingOne = require('./commands/thing-one');
const thingTwo = require('./commands/thing-two');

module.exports = function(vorpal, options) {
    thingOne(vorpal, options);
    thingTwo(vorpal, options);
}
