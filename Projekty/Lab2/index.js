// // // // // // // const wait = 3000;
// // // // // // // console.log("Początek skryptu...");

// // // // // // setTimeout(function() {
// // // // // //     console.log("Upłynęły minimum 3 sek...");
// // // // // // }, wait);

// // // // // // console.log("Koniec skryptu...");

// // // // // const fs = require("fs");
// // // // // const data = fs.readFileSync('package.json');

// // // // // console.log("Początek skryptu.");
// // // // // console.log(data.toString());
// // // // // console.log("Koniec skryptu.");



// // // // const fs = require("fs"); 
// // // // console.log("Początek skryptu."); 
// // // // fs.readFile('package.json', function (err, data) { 
// // // // if (err) return console.error(err); 
// // // // console.log(data.toString()); 
// // // // }); 
// // // // console.log("Koniec skryptu."); 

// // // const http = require('http'); 
// // // const hostname = '127.0.0.1'; 
// // // const port = 8888; 
// // // const server = http.createServer(function(request, response) { 
// // // response.statusCode = 200; 
// // // response.setHeader('Content-Type', 'text/plain'); 
// // // response.end('Witaj, z serwera node.js !\n'); 
// // // }); 
// // // server.listen(port, hostname, () => { 
// // // console.log(`Server running at http://${hostname}:${port}/`); 
// // // }); 


// // const http = require('http');
// // const path = require('path');
// // const util = require('util');
// // const v8 = require('v8');

// // const hostname = '127.0.0.1';
// // const port = 8888;


// // function logWithTime(message) {
// //   const time = new Date().toLocaleTimeString();
// //   console.log(`[${time}] ${message}`);
// // }


// // const server = http.createServer((request, response) => {
// //   response.statusCode = 200;
// //   response.setHeader('Content-Type', 'text/plain');
// //   response.end('Hello, from Node.js server!\n');
// // });


// // server.listen(port, hostname, () => {
// //   logWithTime("=== Serwer został uruchomiony ===");

  
// //   logWithTime("📊 Statystyki pamięci V8:");
// //   console.log(v8.getHeapStatistics());

// //   logWithTime("📄 Nazwa pliku:");
// //   console.log(path.basename(__filename));

  
// //   logWithTime("📁 Przykładowa ścieżka do folderu 'uploads/images':");
// //   console.log(path.join(__dirname, 'uploads', 'images'));

 
// //   logWithTime(`🌐 Server running at http://${hostname}:${port}/`);


// // });


// const http = require('http');
// const path = require('path');
// const v8 = require('v8');

// // ✅ prosty moduł do stringów
// const { upperCase, localeUpperCase } = require('upper-case');

// const hostname = '127.0.0.1';
// const port = 8888;

// const server = http.createServer((request, response) => {
//   response.statusCode = 200;
//   response.setHeader('Content-Type', 'text/plain');

//   const message = 'Hello, from node.js server!';
//   // przykład użycia modułu: zamiana na wielkie litery
//   const upperMessage = upperCase(message);

//   response.end(`${upperMessage}\n`);
// });

// server.listen(port, hostname, () => {
//   // 🔁 ZAMIANA util.log → console.log (z timestampem)
//   const ts = new Date().toISOString();

//   console.log(`[${ts}] V8 heap stats:`);
//   console.log(JSON.stringify(v8.getHeapStatistics(), null, 2));

//   console.log(`[${ts}] Plik: ${path.basename(__filename)}`);
//   console.log(`[${ts}] Ścieżka: ${path.join(__dirname, 'uploads', 'images')}`);
//   console.log(`[${ts}] Server running at http://${hostname}:${port}/`);

//   // 📝 Opis modułu w konsoli (zgodnie z zadaniem)
//   console.log('\nOpis modułu "upper-case":');
//   console.log('- Prosty moduł do pracy ze stringami: zamienia tekst na WIELKIE LITERY.');
//   console.log('- Funkcja upperCase("abc") → "ABC". W przykładzie wysyłamy do klienta tekst już po konwersji.\n');

//   // (opcjonalnie) przykład wariantu zależnego od locale:
//   console.log('Przykład localeUpperCase("straße", "de") →', localeUpperCase('straße', 'de'));
// });






const http = require('http');
const path = require('path');
const v8 = require('v8');
const repeat = require('repeat-string'); 

const hostname = '127.0.0.1';
const port = 8888;

const server = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');

 
  const message = 'Hello! ';
  const repeated = repeat(message, 5); 

  response.end(`Powtórzony tekst:\n${repeated}\n`);
});

server.listen(port, hostname, () => {
  const ts = new Date().toISOString();

  console.log(`[${ts}] V8 heap stats:`);
  console.log(JSON.stringify(v8.getHeapStatistics(), null, 2));

  console.log(`[${ts}] Plik: ${path.basename(__filename)}`);
  console.log(`[${ts}] Ścieżka: ${path.join(__dirname, 'uploads', 'images')}`);
  console.log(`[${ts}] Server running at http://${hostname}:${port}/`);

  
  console.log('\nOpis modułu "repeat-string":');
  console.log('- Moduł służy do powtarzania łańcuchów znaków określoną liczbę razy.');
  console.log('- Funkcja repeat("abc", 3) zwróci "abcabcabc".');
  console.log('- W przykładzie powtarzamy tekst "Hello!" pięć razy i wysyłamy do przeglądarki.\n');
});

