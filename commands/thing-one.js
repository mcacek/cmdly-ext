module.exports = function(vorpal, config) {
    vorpal
        .command('thingOne', 'Thing one is the first')
        .action(function(args, callback) {
            this.log('I am thing one.');
            callback();
        });
};
