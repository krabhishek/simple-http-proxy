const http = require('http');
const request = require('request');

const PORT = process.env.PORT || 8080;

http.createServer(function (req, res) {
    const uri = req.url.substring(1);
    console.log('Requested URL : ' + uri);
   try {
    req.pipe(request(uri)).pipe(res);
   } catch (e) {
    res.write(e.toString());
   }
    
}
).listen(PORT);

