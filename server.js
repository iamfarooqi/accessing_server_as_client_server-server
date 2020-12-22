// let express = require("express")
// let app = express();

// app.use("/bulb", function middleWere(req, res, nex) {
//     console.log("URL is:", req.url())
//     console.log("URL is:", req.method())
//     res.send("some response")
// });

// app.get("/bulb", function middleWere(req, res, nex) {
//     console.log("URL is:", req.url())
//     console.log("URL is:", req.method())
//     res.send("some response")
// });

// app.post("/bulb", function middleWere(req, res, nex) {
//     console.log("URL is:", req.url())
//     console.log("URL is:", req.method())
//     res.send("some response")
// });

// app.put("/bulb", function middleWere(req, res, nex) {
//     console.log("URL is:", req.url())
//     console.log("URL is:", req.method())
//     res.send("some response")
// });

// app.delete("/bulb", function middleWere(req, res, nex) {
//     console.log("URL is:", req.url())
//     console.log("URL is:", req.method())
//     res.send("some response")
// });

// function middleWere(req, res, nex) {
//     console.log("URL is:", req.url())
//     console.log("URL is:", req.method())
//     res.send("some response")
// }


function get(){
const Http = new XMLHttpRequest();
const url='http://192.168.50.177:3000/bulb';
Http.open("GET", url);
Http.send("Response on GET");

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }


}
function post(){
const Http = new XMLHttpRequest();
const url='http://192.168.50.177:3000/bulb';
Http.open("GET", url);
Http.send("Response on GET");

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }



}
function put(){
const Http = new XMLHttpRequest();
const url='http://192.168.50.177:3000/bulb';
Http.open("GET", url);
Http.send("Response on GET");

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }



}
function dlt(){
const Http = new XMLHttpRequest();
const url='http://192.168.50.177:3000/bulb';
Http.open("GET", url);
Http.send("Response on GET");

Http.onreadystatechange = (e) => {
    console.log(Http.responseText)
  }

}
