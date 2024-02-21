const cowsay = require('cowsay');
function helloWorldcombat() {
  console.log(cowsay.say({ text: "hello world", f: "combat" }));
}
module.exports = helloWorldcombat;