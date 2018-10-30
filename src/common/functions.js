module.exports = {
  pageUrlify: (originalUrl) => {
    return originalUrl.replace(/[^A-Za-z0-9]+/g, '-').replace(/-$/, '');
  }
}
