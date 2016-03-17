#!/bin/env node
var http = require('http');
var util = require('util');
var fs = require('fs');

//Get the environment variables we need.

var port = process.env.PORT || 8080;

// TODO: remove! this currently stores all out msgs as log msgs and it'll grow!!!
var all = '';

var requests = 0;

function has(o, k) {
  return Object.prototype.hasOwnProperty.call(o, k);
}

var out = function(s) {
//  s = '' + requests + ':' + s;
//  all = all + s + "</br>\n";
  console.log(s);
}

var pending = '';

var server = http.createServer
  (function (req, res) {
    requests = requests + 1;
    var u = req.url;
    out("========= got http request: " + u);

    res.writeHead(200, {'Content-Type': 'text/javascript'});
    pending = pending.replace(/'/g, '\\');
    res.write("w('" + pending + "');\n");
    pending = '';
    // TODO: keep around as it may have not been received, keep count of u request number!
    res.end("");
  }).listen(port);

out("Server running at port " + port);


var stdin = process.stdin;

// without this, we would only get streams once enter is pressed
stdin.setRawMode( true );

// resume stdin in the parent process (node app won't quit all by itself
// unless an error or process.exit() happens)
//stdin.resume();

// i don't want binary, do you?
stdin.setEncoding( 'utf8' );

// on any data into stdin
stdin.on( 'data', function( key ){
  if ( key === '\u0003' ) { // ctrl-c
    process.exit();
  }
  pending += key;
});
