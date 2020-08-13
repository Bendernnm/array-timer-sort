module.exports = (items, handler) => Promise.all(items.map(handler));
