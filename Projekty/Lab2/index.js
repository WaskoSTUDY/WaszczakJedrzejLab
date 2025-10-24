// // // // // const wait = 3000;
// // // // // console.log("Początek skryptu...");

// // // // setTimeout(function() {
// // // //     console.log("Upłynęły minimum 3 sek...");
// // // // }, wait);

// // // // console.log("Koniec skryptu...");

// // // const fs = require("fs");
// // // const data = fs.readFileSync('package.json');

// // // console.log("Początek skryptu.");
// // // console.log(data.toString());
// // // console.log("Koniec skryptu.");



// // const fs = require("fs"); 
// // console.log("Początek skryptu."); 
// // fs.readFile('package.json', function (err, data) { 
// // if (err) return console.error(err); 
// // console.log(data.toString()); 
// // }); 
// // console.log("Koniec skryptu."); 

// const http = require('http'); 
// const hostname = '127.0.0.1'; 
// const port = 8888; 
// const server = http.createServer(function(request, response) { 
// response.statusCode = 200; 
// response.setHeader('Content-Type', 'text/plain'); 
// response.end('Witaj, z serwera node.js !\n'); 
// }); 
// server.listen(port, hostname, () => { 
// console.log(`Server running at http://${hostname}:${port}/`); 
// }); 


const http = require('http');
const path = require('path');
const util = require('util');
const v8 = require('v8');

const hostname = '127.0.0.1';
const port = 8888;


function logWithTime(message) {
  const time = new Date().toLocaleTimeString();
  console.log(`[${time}] ${message}`);
}


const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  response.end('Hello, from Node.js server!\n');
});


server.listen(port, hostname, () => {
  logWithTime("=== Serwer został uruchomiony ===");

  
  logWithTime("📊 Statystyki pamięci V8:");
  console.log(v8.getHeapStatistics());

  logWithTime("📄 Nazwa pliku:");
  console.log(path.basename(__filename));

  
  logWithTime("📁 Przykładowa ścieżka do folderu 'uploads/images':");
  console.log(path.join(__dirname, 'uploads', 'images'));

 
  logWithTime(`🌐 Server running at http://${hostname}:${port}/`);
});

