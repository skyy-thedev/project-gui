const jwt = require("jsonwebtoken");

module.exports = function (rolesPermitidas = []) {
  return (req, res, next) => {
    try {
      // Checar se veio Authorization: Bearer token
      const authHeader = req.headers.authorization;
      if (!authHeader)
        return res.status(401).json({ msg: "Token não fornecido" });

      const token = authHeader.split(" ")[1];

      // Verificar o JWT
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Checar roles
      if (rolesPermitidas.length > 0 && !rolesPermitidas.includes(decoded.role)) {
        return res.status(403).json({ msg: "Acesso negado" });
      }

      // Anexar info do usuário ao req
      req.user = decoded;

      next();
    } catch (error) {
      return res.status(401).json({ msg: "Token inválido", error });
    }
  };
};
