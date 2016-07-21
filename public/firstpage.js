var http = require('http');
var options = {
   host: 'www.wunderground.com',
   path: '/weather-forecase/zmw:00000.1.59358'
};

callback = function(res){
   var str='';

   res.on('data', function(chunk){
       str += chunk;
   });
   res.on('end', function(){
      console.log(str);
   });
}
http.request(options, callback).end();
