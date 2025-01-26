const authorize = (role) => {
  return (req, res, next) => {
    if (req.user.role !== role) {
      return res
        .status(403)
        .json({ message: "Access Denied: Insufficient permissions" });
    }
    next();
  };
};

module.exports = authorize;
