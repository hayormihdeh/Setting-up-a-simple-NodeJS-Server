
const http = require('http');
const os = require('os');

// Function to generate random delay
const getRandomDelay = () => Math.floor(Math.random() * 1000) + 500;

// Function to generate CPU and OS information
const getUserInfo = () => {
  const cpuInfo = os.cpus()[0];
  const userInfo = {
    cpuModel: cpuInfo.model,
    cpuSpeed: cpuInfo.speed,
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
    platform: os.platform(),
    release: os.release()
  };
  return JSON.stringify(userInfo);
};

// Create the HTTP server
const server = http.createServer((req, res) => {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Handle GET requests
  if (req.method === 'GET') {
    if (req.url === '/userinfo') {
      setTimeout(() => {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(getUserInfo());
      }, getRandomDelay());
    } else {
      res.writeHead(404);
      res.end('Not Found');
    }
  } else {
    res.writeHead(405);
    res.end('Method Not Allowed');
  }
});

// Start the server
server.listen(3000, () => {
  console.log('server running');
});



