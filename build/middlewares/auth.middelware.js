"use strict";

var authMiddleware = function authMiddleware(req, res, next) {
  var token = req.header('Authorization').replace('Bearer ', '');
  try {
    var decoded = jwt.verify(token, 'tu_secreto');
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).send('Acceso no autorizado');
  }
};
app.get('/protected', authMiddleware, function (req, res) {
  res.send('Ruta protegida');
});