var request = require("request");
var cheerio = require("cheerio");
var $ =require('jQuery');
// 台南市的氣溫

var tem;
var hum;
var url = "http://www.wunderground.com/weather-forecast/zmw:00000.1.59358";

$(document).ready(function(){
   $('#a').click(function(){
      alert(tem+hum); 
   });
});


 // 取得網頁資料
 request(url, function (error, response, body) {
   if (!error) {

       // 用 cheerio 解析 html 資料
           var $ = cheerio.load(body);

               // 篩選有興趣的資料
                    tem = $("[data-variable='temperature'] .wx-value").html();
                        hum = $("[data-variable='humidity'] .wx-value").html();

                           // 輸出
                               console.log("氣溫：攝氏 " + temperature + " 度");
                                 //  console.log("濕度：" + humidity + "%");

                                     } else {
                                   //      console.log("擷取錯誤：" + error);
                                           }
                                           });
