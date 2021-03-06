/**
 * Created by Sven Stam on 30-05-14.
 */
var express = require('express'),
    Parser = require('./lib/parser.js'),
    path = require('path');

var PORT = 3000;

var app = express();
var router = express.Router();

router.get('/parse', Parser.parse);
router.get('/delete', Parser.delete);

app.use('/api', router);
app.use(express.static(path.join(__dirname, 'public')));

app.listen(PORT);
console.log("TTS-Parser running on port: "+PORT);