const express = require('express');
const path = require('path')
const app = express()
const port = 8085;


app.get('/', (req, res) => {
    res.sendFile(path.join('Place', '/index.html'))
})





app.listen(port, () => console.log(`Listening on port ${port}`));