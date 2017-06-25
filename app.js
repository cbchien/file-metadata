var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var multer = require('multer');
var app = module.exports = express();
var upload = multer({ dest: 'uploads/' })

app.use(bodyParser.json());
app.use(cors());
app.use(express.static((__dirname) + '/public'));

app.post('/get-file-size', upload.single('file'), function (req, res, next) {
  var size = req.file.size
  res.json({'size': size});
});

// mongoose.Promise = global.Promise;
// mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/searchTerms');


app.listen(process.env.PORT || 3000, ()=> {
  console.log('server is running');
})