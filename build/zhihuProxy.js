var httpProxy = require('http-proxy');

var proxy = httpProxy.createProxyServer({
  changeOrigin: true,
  secure: false
});

module.exports = function (req, res) {
  var url = req.url.slice(6);
  var s = url;
  var index = 0;
  for (var i = 0; i < 3; i++) {
    var tmp = 1 + s.indexOf('/') 
    index = index + tmp;
    s = s.slice(tmp);
  }
  var target = url.slice(0, index);
  var path = url.slice(index);
  req.url = path;
  proxy.web(req, res, {
    target: target,
    headers: {
      referer: target
    }
  });
}
