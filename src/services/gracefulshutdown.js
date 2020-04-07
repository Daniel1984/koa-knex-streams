const APP_KILL_SIGNALS = {
  SIGHUP: 1,
  SIGINT: 2,
  SIGTERM: 15
}

function gracefulshutdown(cb) {
  Object.keys(APP_KILL_SIGNALS).forEach((signal) => {
    process.on(signal, () => {
      cb(signal, APP_KILL_SIGNALS[signal])
    })
  })
}

module.exports = gracefulshutdown;
