const express = require('express')
const app = express()
const port = 3001
const headerData = require('./headerdata');


app.get('/', (req, res) => res.send(headerData()));

app.listen(port, () => console.log(`MAPPARIUM listening on port ${port}!`))