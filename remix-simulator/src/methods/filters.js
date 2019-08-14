var RemixLib = require('remix-lib')
var executionContext = RemixLib.execution.executionContext

var Filters = function (_options) {
  const options = _options || {}
}

Filters.prototype.methods = function () {
  return {
    eth_getLogs: this.eth_getLogs.bind(this),
    eth_subscribe: this.eth_subscribe.bind(this),
    eth_unsubscribe: this.eth_unsubscribe.bind(this)
  }
}

// https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_getlogs
Filters.prototype.eth_getLogs = function (payload, cb) {
  console.dir("===============================")
  console.dir("===============================")
  console.dir("=== eth_getLogs")
  console.dir(payload.params)
  // [ { fromBlock: '0x0',
  //   address: '0xdb2eb1480cb3ac3a5c0ee957045d1ad9dcd34f01',
  //   topics: [] } ]

  let results = executionContext.logsManager.getLogsFor(payload.params);

  cb(null, results)
}

Filters.prototype.eth_subscribe = function (payload, cb) {
  console.dir("===============================")
  console.dir("===============================")
  console.dir("=== eth_subscribe")
  console.dir(payload.params)

  let subscriptionId = executionContext.logsManager.subscribe(payload.params);

  cb(null, subscriptionId)
}

Filters.prototype.eth_unsubscribe = function (payload, cb) {
  console.dir("===============================")
  console.dir("===============================")
  console.dir("=== eth_unsubscribe")
  console.dir(payload.params)

  executionContext.logsManager.unsubscribe(payload.params[0])

  cb(null, true)
}

module.exports = Filters
