const http = require('http');
const fs = require('fs');

const server = http.createServer(function (req, res) {
  if (req.url !== '/') {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    return res.end('Nie znaleziono strony');
  }

  getTitles(res);
}).listen(8000, "127.0.0.1");

function getTitles(res) {
  fs.readFile('./titles.json', function (err, data) {
    if (err) return hadError(err, res);

    const titles = JSON.parse(data.toString());
    getTemplate(titles, res);
  });
}

function getTemplate(titles, res) {
  fs.readFile('./template.html', function (err, data) {
    if (err) return hadError(err, res);

    const tmpl = data.toString();
    formatHtml(titles, tmpl, res);
  });
}

function formatHtml(titles, tmpl, res) {
  const html = tmpl.replace('%', titles.join('</li><li>'));
  res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
  res.end(html);
}

function hadError(err, res) {
  console.error(err);
  res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Error');
}
