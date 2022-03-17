const cowsay = require("cowsay");
const userInfo = require("./information");

console.log(
  cowsay.say({
    text: `Hello world ! i'm ${userInfo.name} and my campus is : ${userInfo.campus}`,
    e: "oO",
    T: "U ",
  })
);
