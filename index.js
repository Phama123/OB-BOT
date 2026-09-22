const express = require('express');
const app = express();
const PORT = process.env.PORT || 10000;
app.get('/',(reg, res) => res.send('OB-BOT is alive - Scanning for Order Blocks'));
app.listen(PORT, () => console.log('Web server running on ${PORT}'));
console.log("OB-BOT is alive")

function findOrderBlock() {
  console.log("Scanning for Order Blocks...");
  console.log("Bullish OB Found - Ready to trade");
}

findOrderBlock();
