
var sys = require('util')
var exec = require('child_process').exec;
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Express' })
};

exports.save = function(req, res) {
  var sendData = function (error, stdout, stderr) { 
    sys.puts(stdout);
    sys.print('Callback');
    res.send('hello');
  };
  exec('cclive -t "/(.)/g" '+req.query.url, sendData);
  res.send('Processing');
};
