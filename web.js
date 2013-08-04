var express = require('express');
var app = express();
app.use(express.logger());

var infile = "index.html";
var textBuffer = fs.readFileSync(infile);

app.get('/', function(request, response) {
  response.send(textBuffer.toString());
});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
