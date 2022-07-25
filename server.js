const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(__dirname + '/dist/servilist'));

app.get('/*', (_, res) => {
    res.sendFile(__dirname + '/dist/servilist/index.html');
});

const main = () => {
    // Starting the server
    app.listen(process.env.PORT || 8080, () => {
        console.log('Server on port', process.env.PORT || 8080);
    });
};
main();