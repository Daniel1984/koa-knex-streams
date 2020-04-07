const app = require('./app');
const gracefulshutdown = require('./services/gracefulshutdown');
const { port } = require('./services/config');

const server = app.listen(port, () => console.log(`API listening on port ${port}`));

gracefulshutdown((signal, signalCode) => {
  server.close(() => {
    console.log(`server stopped by ${signal} with value ${signalCode}`)
  })
})
