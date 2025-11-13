const fs = require('fs');
const events = require('events');
const util = require('util');


function Watcher(watchDir, processedDir) {
  this.watchDir = watchDir;
  this.processedDir = processedDir;
}


util.inherits(Watcher, events.EventEmitter);


Watcher.prototype.watch = function () {
  const watcher = this;

  fs.readdir(this.watchDir, function (err, files) {
    if (err) throw err;

    files.forEach(file => {
      watcher.emit('process', file);
    });
  });
};


Watcher.prototype.start = function () {
  const watcher = this;

  
  fs.watch(this.watchDir, function () {
    watcher.watch();
  });

  
  watcher.watch();
};

const watchDir = './watch';
const processedDir = './done';


const watcher = new Watcher(watchDir, processedDir);


watcher.on('process', function (file) {
  const watchFile = this.watchDir + '/' + file;
  const processedFile = this.processedDir + '/' + file.toLowerCase();

  fs.rename(watchFile, processedFile, function (err) {
    if (err) {
      console.error('Błąd przy przenoszeniu pliku:', err.message);
    } else {
      console.log(`Przeniesiono: ${file} -> ${file.toLowerCase()}`);
    }
  });
});

watcher.start();
