const path = require('path');
const express = require('express');
const app = express();

const publicPath = path.join(__dirname, '..', 'public');

const PORT = process.env.PORT
app.use(express.static(publicPath));


/* This will enable hot-linking so that router works properly (requests to sub-pages)...*/
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
})

const Local_PORT = 3000;

app.listen(PORT, () => {
    console.log(`Express Server is up @ PORT ${PORT}`)
})

