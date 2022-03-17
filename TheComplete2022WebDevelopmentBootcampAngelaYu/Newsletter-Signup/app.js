//jshint esversion: 6
// 설치한 npm 패키지 불러오기
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");
const { dirname } = require("path");

// app.js 에 express 적용?
const app = express();
// css요소들 공유 폴더로 설정시키는 과정? css를 클라이언트가 볼 수 있게끔함
app.use(express.static("public"));
//  bodyParser는 데이터를 디폴트값으로 undefined 되어있는것을 바꿔준다.
app.use(bodyParser.urlencoded({extended: true}))

// 클라이언트에 html 보내기
app.get("/", function(req, res){
    res.sendFile(__dirname + "/signup.html");
});
// 클라이언트의 데이터를 받아오는 과정
app.post("/", function(req, res)    {

    // html의 input의 해당 name에서 받아오는 값
    const firstName = req.body.fname
    const lastName = req.body.lname
    const email = req.body.email

    // 메일침에서 원하는 형태의 형식?(form?)
    const data = {
        members: [
        {
            email_address: email,
            status: "subscribed",
            merge_fields:{
                FNAME: firstName,
                LNAME: lastName
                }
            }
        ]
    };
    //  자바스크립트의 값이나 객체를 json 문자열로 변환하는 과정
    const jsonData = JSON.stringify(data);
    // https에서 요구하는 파라미터 값 -> 메일침의 api 사용(us14:해당 서버값, lists/뒤의 값 : 나의 아이디)
    const url = "https://us14.api.mailchimp.com/3.0/lists/2e7783d628"
    // https에서 요구하는 파라미터값 -> 메일침의 api키와 보낸다는 형식
    const options = {
        method:"POST",
        auth: "cho:09e9ef58f692a2c76b72b0f170e69bed-us14"
    }

    const request = https.request(url, options, function(response){
        if (response.statusCode === 200)    {
            res.sendFile(__dirname + "/success.html")
        } 
        else {
            res.sendFile(__dirname + "/failure.html")
        }
        response.on("data", function(data){
            console.log(JSON.parse(data))
        })
    })

    request.write(jsonData);
    request.end();
});

app.post("/failure", function(req, res){
    res.redirect("/")
})


app.listen(3000, function(){
    console.log("서버 포트 3000으로 동작중 !");
})




// 메일침 api키
// 09e9ef58f692a2c76b72b0f170e69bed-us14

// 메일침 리스트id
// 2e7783d628