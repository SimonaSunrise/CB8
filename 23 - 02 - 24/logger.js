const logger = (req, res, next) => {
  const metodo = req.method;
  const url = req.url;
  const data = new Date().getFullYear();

  console.log(metodo, url, data);
  next();
};

module.exports = logger;
