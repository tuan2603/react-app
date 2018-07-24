const express = require('express');
const path = require('path');
const app = express();
const session = require('express-session');
const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
app.set('views', './views');
app.use(session({secret: 'ssshhhhh', resave:true, saveUninitialized:true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static('build'));


// POST /login gets urlencoded bodies
app.post('/api/login', function (req, res) {
    let {username, password} = req.body;
    if (username === 'khoapham' && password === '123') {
      let  sess = req.session;
        sess.username = username;
        return res.json({value:'dang_nhap_thanh_cong'})
    }
    res.json({value: 'dang_nhap_that bai'})

})

// POST /api/users gets JSON bodies
app.get('/api/get-info', function (req, res) {
   let  sess = req.session;
    if (sess.username) {
       return res.json({value:sess.username})
    } else {
        return  res.json({value: 'chua_dang_nhap'});
    }

});


app.listen(3000, function () {
    console.log('server start port 3000');
});



app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});









