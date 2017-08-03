var Bandwidth = require("node-bandwidth");
var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var http = require("http").Server(app);

//Bandwidth Credentials
var client = new Bandwidth({
    userId    : "u-",
    apiToken  : "t-",
    apiSecret : "u"
});

app.use(bodyParser.json());
app.set('port', (process.env.PORT || 3000));

/*********** Make a Call ***********/
var numbers = {
    to: "+1##########",         //number to send to
    from: "+1##########" //Bandwidth number
};

var createCall = function(params){
  console.log("to: " + params.to);
  console.log("from: " + params.from);
  return client.Call.create({
    from: params.from,
    to  : params.to,
    callbackHttpMethod: "GET",
    callbackUrl: "https://s3.amazonaws.com/bwdemos/helloFromBandwidth.xml"
  })
};

createCall(numbers);



