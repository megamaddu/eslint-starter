'use strict'

const express = require('express')
const app = express()

const hello = (req, res) => res.end(`Hello ${req.params.name || 'world'}!\n`)

app.get('/', hello)
app.get('/:name', hello)

const port = process.env.PORT || 2121
app.listen(port, () => console.log(`** listening on port ${port} **`))
