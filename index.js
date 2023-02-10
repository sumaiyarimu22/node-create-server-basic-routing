require("dotenv").config();
// import http module
const http = require("http");
const fs = require("fs");
//create server
//The server will take the callback function as an argument
// The function will be called as many times as we make a request to the frontend
// 2 parameters should be taken in request or response
const server = http.createServer((req, res) => {
  // console.log(req.url, req.method);

  //set header
  //kon dhoroner response = Content type
  res.setHeader("Content-Type", "text/html");

  //response write
  // res.write("<h1>hello from the server</h1>");

  //routes
  let path = "./html/";
  switch (req.url) {
    case "/":
      path += "index.html";
      res.statusCode = 200;
      break;

    case "/about":
      path += "about.html";
      res.statusCode = 200;
      break;

    case "/about-us":
      res.statusCode = 301;
      res.setHeader("Location", "/about");
      break;

    default:
      path += "not-found.html";
      res.statusCode = 404;
      break;
  }

  //send html file to client
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      //If you don't want to write multiple line then
      res.end();
    }
  });

  //response end
  // res.end();
});
//create server get way
//listen = The frontend will listen to the requests it sends
// Now that should provide a port ,domain and call back function
// DNS=domain name service
//Port refers to an IP address or any Unique address
//ip address rape to domain name
// The names we give to the website are domains such as GitHub, YouTube
//localhost port = 127.0.0.1

var PORT = process.env.PORT || 7000;
server.listen(PORT, "localhost", () => {
  console.log(`listening for request on port ${PORT}`);
});
