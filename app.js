var fs = require('fs');
var nodeStatic = require('node-static');

var file = new nodeStatic.Server('./public');

require('http').createServer(function (request, response) {
    request.addListener('end', function () {
        file.serve(request, response);
    }).resume();
}).listen(8080);
