// return new sorted array, doesn't mutable old instance
const { asyncEach, asyncTimer } = require('./utils');

Array.prototype.timerSort = async function() {
  const sorted = [];

  await asyncEach(this,
      item => asyncTimer(item).then(() => sorted.push(item)));

  return sorted;
};
