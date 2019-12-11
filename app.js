const express = require('express');
const app = express();

const notifier = require('node-notifier');

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

const args = process.argv;
const port = 2 in args ? args[2] : 3000;

app.post('/', jsonParser, (req, res) => {
    console.log(req.body);

    notifier.notify({
        'title': req.body.title,
        'message': req.body.text,
        'appID':req.body.label,
        'icon': 'icon.png',
        'wait': true
    });
    return 200;
});

app.listen(port, () => console.log(`NotifyServer is listening on port ${port}!`));