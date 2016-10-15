var httpProxy = require('http-proxy');
var wurl = require('wurl');

var proxy = httpProxy.createProxyServer({
  changeOrigin: true
});

module.exports = function (req, res) {
  var url = req.url.slice(6);
  var path = wurl('path', url);
  var target = url.slice(0, -path.length);
  req.url = path;
  proxy.web(req, res, {
    target: target,
    headers: {
      referer: target
    }
  });
}
