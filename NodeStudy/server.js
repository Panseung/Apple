const express = require("express");
const app = express();

app.listen(8080, function() {
  console.log("lstening on 8080");
});

app.get('/pet', function(요청, 응답) {
  응답.send('펫쇼핑할 수 있는 사이트입니다.')
})