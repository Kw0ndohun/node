const express = require("express");
const app= express();

//앱세팅
app.get("/",(req,res)=>{
    console.log("연결");
});

app.listen(3000, function (){
    console.log("서버가동");
});