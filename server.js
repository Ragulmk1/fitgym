var module = require("./dbmodule");
var url = require("url");
var querystring = require("querystring");
var http = require("http");

http
  .createServer(function (request, response) {
    var data1 = "";

    request.on("data", function (chunk) {
      data1 += chunk;
    });

    request.on("end", function () {
      var phno = querystring.parse(data1)["num"];
      console.log(phno);
      var fname = querystring.parse(data1)["name"];
      console.log(fname);
      var lname = querystring.parse(data1)["username"];
      console.log(lname);
      var email = querystring.parse(data1)["email"];
      console.log(email);
      var password = querystring.parse(data1)["password"];
      console.log(password);
      var password1 = querystring.parse(data1)["password2"];
      console.log(password1);

      if (request.url === "/login") {
        module.authenticateUser(email, password, response);
      } else if (request.url === "/save") {
        module.saveUser(phno, fname, lname ,email,password, password1, response);
      }
    });
  })
  .listen(8000);
console.log("Server started");

