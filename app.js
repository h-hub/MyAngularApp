var express = require('express');
var exphbs  = require('express-handlebars');
var pkg = require('./package.json');

var app = express();

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static('public'));

app.get('/', function (req, res) {
    res.render('index',{version:pkg.version});
});

app.listen(3000);

// app.register.attributes = {
//     name: pkg.plugin.name,
//     version: pkg.plugin.version
// };
