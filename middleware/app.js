const express = require("express");
var cors = require('cors')

const app = express();
app.use(cors());

const { createProxyMiddleware } = require('http-proxy-middleware');
app.use('/api', createProxyMiddleware({ 
    target: 'https://www.fruityvice.com', //original url http://127.0.0.1:5173/
    changeOrigin: true, 
    //secure: false,
    onProxyRes: function (proxyRes, req, res) {
       proxyRes.headers['Access-Control-Allow-Origin'] = '*';
    }
}));
app.listen(5000);
