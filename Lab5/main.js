
const { Worker } = require('worker_threads');
const path = require('path');


function runWorker(limit) {
  return new Promise((resolve, reject) => {
    const worker = new Worker(path.join(__dirname, 'sumWorker.js'), {
      workerData: { limit }
    });

    const start = Date.now();

    worker.on('message', (result) => {
      const end = Date.now();
      resolve({
        limit,
        result,
        time: end - start
      });
    });

    worker.on('error', reject);
  });
}


async function main() {
  console.log("Start obliczeń w worker_threads...\n");

  // Możesz zmienić limity, jeśli chcesz wolniej/szybciej
  const limits = [30_000_000, 40_000_000, 50_000_000, 60_000_000];

  console.time("czas_łączny");

  const tasks = limits.map(runWorker);
  const results = await Promise.all(tasks);

  results.forEach((r, i) => {
    console.log(`Worker #${i + 1}`);
    console.log(`  limit: ${r.limit}`);
    console.log(`  wynik sumy: ${r.result}`);
    console.log(`  czas: ${r.time} ms\n`);
  });

  console.timeEnd("czas_łączny");
}

main();
