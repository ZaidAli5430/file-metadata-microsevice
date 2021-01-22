var express = require('express');
var cors = require('cors');
var multer  = require('multer')
require('dotenv').config()

var app = express();
var upload = multer({ dest: 'uploads/' })

const port = process.env.PORT || 3000;

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/fileanalyse', upload.single('upfile'),function (req, res) {
  console.log(req.file)
  res.json({name:req.file.originalname,size:req.file.size,type:req.file.mimetype})
});


app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
