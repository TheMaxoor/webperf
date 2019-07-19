const express = require('express');
const app = express();
const fs = require('fs');
const compression = require('compression'); // A ENLEVER

app.use(compression());
app.use(express.static('build'));

const listener = app.listen(process.env.PORT || 1234, function() {
    console.log(`Listening on port ${listener.address().port}`);
});
