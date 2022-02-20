const express = require('express');
const path = require('path');
const app = express();

const appName = 'my-links';

const PORT = process.env.PORT || 8080;

app.use(express.static(__dirname + `/dist/angular/${appName}`));

app.get('*', (req, res) => {
    res.sendFile(__dirname, `dist/angular/${appName}/index.html`)
});

app.listen(PORT, () => {
    console.log(`Servidor iniciado  na porta ${PORT}`);
})
