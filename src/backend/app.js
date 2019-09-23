const express = require('express');
const app = express();
const port = 3002;
const getShows = require('./shows');

app.get('/rest/shows', (req, res) => res.send(getShows()));

app.listen(port, () => {
console.log(`App listening on port ${port}!`);
});