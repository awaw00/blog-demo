var moduleA = require('./moduleA')

document.getElementById('btnA').onclick = function () {
  moduleA.sayHello()
}

document.getElementById('btnB').onclick = function () {
  require.ensure(['./moduleB'], function (require) {
    var moduleB = require('./moduleB')
    moduleB.sayHello()
  }, 'moduleB')
}
