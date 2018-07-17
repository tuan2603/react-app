const express = require('express');
const path = require('path');
const app = express();

app.set('view engine','ejs');
app.set('views','./views');
app.use(express.static('public'));
app.listen(3000, function () {
    console.log('server start port 3000');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
