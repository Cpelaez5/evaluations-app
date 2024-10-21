"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _morgan = _interopRequireDefault(require("morgan"));
var _cors = _interopRequireDefault(require("cors"));
var _employeeRoutes = _interopRequireDefault(require("./routes/employee.routes.js"));
var _evaluationsRoutes = _interopRequireDefault(require("./routes/evaluations.routes.js"));
var _userRoutes = _interopRequireDefault(require("./routes/user.routes.js"));
var _authRoutes = _interopRequireDefault(require("./routes/auth.routes.js"));
var _feedbackRoutes = _interopRequireDefault(require("./routes/feedback.routes.js"));
var _reportRoutes = _interopRequireDefault(require("./routes/report.routes.js"));
var _initialSetup = require("./lib/initialSetup.js");
function _interopRequireDefault(e) {
  return e && e.__esModule ? e : {
    "default": e
  };
}
// Importar el paquete cors

// Importar el router de feedback
// Importar el router de reportes

var app = (0, _express["default"])();
(0, _initialSetup.createRoles)();

// Configurar CORS
app.use((0, _cors["default"])()); // Habilitar CORS para todas las rutas

// Si deseas permitir solo ciertos orígenes, puedes configurarlo así:
// app.use(cors({
//     origin: ['https://tudominio.com', 'https://otrotudominio.com']
// }));

app.use(_express["default"].json());
app.use((0, _morgan["default"])('dev'));
app.get('/api', function (req, res) {
  res.json({
    "users": ["userOne", "userTwo", "userThree", "userFour"]
  });
});
app.use('/api/users', _userRoutes["default"]);
app.use('/api/evaluations', _evaluationsRoutes["default"]);
app.use('/api/employees', _employeeRoutes["default"]);
app.use('/api/auth', _authRoutes["default"]);
app.use('/api/feedback', _feedbackRoutes["default"]);
app.use('/api/reports', _reportRoutes["default"]);
var _default = exports["default"] = app;