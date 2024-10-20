const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    try {
      const decoded = jwt.verify(token, 'tu_secreto');
      req.user = decoded;
      next();
    } catch (error) {
      res.status(401).send('Acceso no autorizado');
    }
  };
  
  app.get('/protected', authMiddleware, (req, res) => {
    res.send('Ruta protegida');
  });
  