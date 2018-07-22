const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');
/// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());
app.set('trust proxy', 1);
app.use(session({
    secret: 'jsdf7389isacuy28',
    resave: false,
    saveUninitialized: true,
    cookie: {maxAge: 1000*60*60*24}
}));
app.use(express.static('public'));



// POST /login gets urlencoded bodies
app.post('/api/login', function (req, res) {
    let {username, password} = req.body;
    if (username === 'khoapham' && password === '123') {
        let sessData = req.session;
        sessData.someAttribute = username;
        return res.json({value:'dang_nhap_thanh_cong'})
    }
    res.json({value: 'dang_nhap_that bai'})

})

// POST /api/users gets JSON bodies
app.get('/api/get-info', function (req, res) {
    let someAttribute = req.session.someAttribute;
    if (someAttribute) {
       return res.json({value:someAttribute})
    }
    res.json({value: 'chua_dang_nhap'});
});

// app.get('/', (req, res) => res.render('home'));
app.listen(3000, function () {
    console.log('server start port 3000');
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});









