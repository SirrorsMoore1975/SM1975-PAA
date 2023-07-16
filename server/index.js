const setupServer = require('./server');
const PORT = process.env.PORT || 4000;
const app = setupServer();

(async() => {
  try {
    app.listen(PORT, () => {
      console.log(`The server is listening @ http://localhost:${PORT}`);
    })
  } catch (err) {
    console.error(`app failed to start ${err}`);
  }

})();