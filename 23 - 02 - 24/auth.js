const authorize = (req, res, next) => {
  const { user } = req.query;
  if (user === "admin") {
    req.user = { name: "admin" };
    next();
  } else {
    res.status(401).send(` ${user} non sei autorizzato`);
  }
};
module.exports = authorize;
