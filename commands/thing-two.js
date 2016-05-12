module.exports = function(vorpal, config) {
    vorpal
        .command('thingTwo', 'Thing two is the second')
        .action(function(args, callback) {
            this.log('I am thing two.');
            callback();
        });
};
