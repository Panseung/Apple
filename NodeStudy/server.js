const express = require('express')
const path = require('path');
const app = express()
app.use(express.urlencoded({ extended: true }))  //body-parser
const MongoClient = require('mongodb').MongoClient  //몽고 디비 연결
app.set('view engine', 'ejs') // ejs등록 (ejs: html과 같은데 서버데이터 삽입 가능하다는데 vue나react 알아서 해주지 않으려나??) ejs파일들은 반드시 views폴더 안에 넣으래
var db //어떤 데이터 베이스에 저장할지를 담을 변수
// res.json()
app.use(express.json())
var cors = require('cors')
app.use(cors())
// socket  소켓 쓰려면 프론트에도 서버와 같은 버전의 socket.io가 설치되어야 함
const http = require('http').createServer(app)
const { Server } = require("socket.io");
const { Socket } = require('dgram');
const io = new Server(http)


MongoClient.connect('mongodb+srv://admin:ssafy1234@cluster0.d2zbllw.mongodb.net/?retryWrites=true&w=majority', function(err, client){  //db id & password
  if (err) return console.log(err)
  
  db = client.db('DS_project') //DS_project : db명

  app.listen('8080', function(){
  // http.listen('8080', function(){  // http.listen이나 app.listen이나 같음. app.listen은 express라이브러리를 쓰기 때문에 가능, 사실 같음. socket을 쓰려면 http를 써야함
    console.log('listening on 8080')
  })
})

// socket
io.on('connection', function(){
  console.log('socket뚫림')
  
  Socket.on('user-send', function(data) {
    console.log(data)
  })
})

app.get('/', function(req, res) { 
  res.sendFile(__dirname +'/index.html')
}) 

app.post('/add', function(req,res) {
  db.collection('post').insertOne( { 제목: req.body.title, 날짜: req.body.date }, function (err, res){  //api 코드
  })
  console.log('success')
  res.json({title:req.body.title})
})

app.get('/list', function(req, res) {
  db.collection('post').find().toArray(function(err, res) {
    res.render('list.ejs')
  })
})

app.get('/socket', function(req, res) {
  res.render('socket.ejs')
})
