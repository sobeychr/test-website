'use strict';

module.exports = http => {
    const server = http.listen(process.env.PORT, () => {
        let browserPath = process.env.URL + ':' + server.address().port;

        console.log('>> Listening to:'.yellow, browserPath.bgBlack.white);
        console.log('>> Press'.yellow, "ctrl+c".bgBlack.white, 'to stop process'.yellow);
        console.log('>> Type'.yellow,  "rs".bgBlack.white,     'to restart'.yellow);
    });

    return server;
};
