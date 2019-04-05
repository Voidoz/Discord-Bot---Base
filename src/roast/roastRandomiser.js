const { roastList } = require('./roastList.js');

module.exports = function() {
  return roastList[Math.floor(Math.random() * roastList.length)];
};