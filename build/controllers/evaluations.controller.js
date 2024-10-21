"use strict";

function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.updateEvaluationById = exports.submitFeedback = exports.startEvaluation = exports.getEvaluationsByEmployee = exports.getEvaluations = exports.getEvaluationProgress = exports.getEvaluationById = exports.deleteEvaluationById = exports.createEvaluation = exports.completeEvaluation = void 0;
var _Evaluation = _interopRequireDefault(require("../models/Evaluation"));
var _User = _interopRequireDefault(require("../models/User"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
var createEvaluation = exports.createEvaluation = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(req, res) {
    var _req$body, title, description, forEmployee, evaluators, questions, startDate, endDate, employeeExists, evaluatorsExist, newEvaluation, evaluationSaved;
    return _regeneratorRuntime().wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _req$body = req.body, title = _req$body.title, description = _req$body.description, forEmployee = _req$body.forEmployee, evaluators = _req$body.evaluators, questions = _req$body.questions, startDate = _req$body.startDate, endDate = _req$body.endDate; // Verificar si el empleado y los evaluadores existen
          _context.next = 4;
          return _User["default"].findById(forEmployee);
        case 4:
          employeeExists = _context.sent;
          if (employeeExists) {
            _context.next = 7;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: "Employee not found"
          }));
        case 7:
          _context.next = 9;
          return _User["default"].find({
            _id: {
              $in: evaluators
            }
          });
        case 9:
          evaluatorsExist = _context.sent;
          if (!(evaluatorsExist.length !== evaluators.length)) {
            _context.next = 12;
            break;
          }
          return _context.abrupt("return", res.status(400).json({
            message: "One or more evaluators not found"
          }));
        case 12:
          newEvaluation = new _Evaluation["default"]({
            title: title,
            description: description,
            createdBy: req.user._id,
            forEmployee: forEmployee,
            evaluators: evaluators,
            questions: questions,
            startDate: startDate,
            endDate: endDate
          });
          _context.next = 15;
          return newEvaluation.save();
        case 15:
          evaluationSaved = _context.sent;
          res.status(201).json(evaluationSaved);
          _context.next = 22;
          break;
        case 19:
          _context.prev = 19;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: _context.t0.message
          });
        case 22:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[0, 19]]);
  }));
  return function createEvaluation(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();
var getEvaluations = exports.getEvaluations = /*#__PURE__*/function () {
  var _ref2 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2(req, res) {
    var evaluations;
    return _regeneratorRuntime().wrap(function _callee2$(_context2) {
      while (1) switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return _Evaluation["default"].find().populate('createdBy', 'name').populate('forEmployee', 'name').populate('evaluators', 'name');
        case 3:
          evaluations = _context2.sent;
          res.json(evaluations);
          _context2.next = 10;
          break;
        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t0.message
          });
        case 10:
        case "end":
          return _context2.stop();
      }
    }, _callee2, null, [[0, 7]]);
  }));
  return function getEvaluations(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();
var getEvaluationById = exports.getEvaluationById = /*#__PURE__*/function () {
  var _ref3 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3(req, res) {
    var evaluation;
    return _regeneratorRuntime().wrap(function _callee3$(_context3) {
      while (1) switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return _Evaluation["default"].findById(req.params.evaluationId).populate('createdBy', 'name').populate('forEmployee', 'name').populate('evaluators', 'name');
        case 3:
          evaluation = _context3.sent;
          if (evaluation) {
            _context3.next = 6;
            break;
          }
          return _context3.abrupt("return", res.status(404).json({
            message: "Evaluation not found"
          }));
        case 6:
          res.status(200).json(evaluation);
          _context3.next = 12;
          break;
        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });
        case 12:
        case "end":
          return _context3.stop();
      }
    }, _callee3, null, [[0, 9]]);
  }));
  return function getEvaluationById(_x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var updateEvaluationById = exports.updateEvaluationById = /*#__PURE__*/function () {
  var _ref4 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee4(req, res) {
    var _req$body2, title, description, forEmployee, evaluators, questions, startDate, endDate, status, evaluatorsExist, updatedEvaluation;
    return _regeneratorRuntime().wrap(function _callee4$(_context4) {
      while (1) switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _req$body2 = req.body, title = _req$body2.title, description = _req$body2.description, forEmployee = _req$body2.forEmployee, evaluators = _req$body2.evaluators, questions = _req$body2.questions, startDate = _req$body2.startDate, endDate = _req$body2.endDate, status = _req$body2.status; // Verificar si se están actualizando los evaluadores
          if (!evaluators) {
            _context4.next = 8;
            break;
          }
          _context4.next = 5;
          return _User["default"].find({
            _id: {
              $in: evaluators
            }
          });
        case 5:
          evaluatorsExist = _context4.sent;
          if (!(evaluatorsExist.length !== evaluators.length)) {
            _context4.next = 8;
            break;
          }
          return _context4.abrupt("return", res.status(400).json({
            message: "One or more evaluators not found"
          }));
        case 8:
          _context4.next = 10;
          return _Evaluation["default"].findByIdAndUpdate(req.params.evaluationId, {
            title: title,
            description: description,
            forEmployee: forEmployee,
            evaluators: evaluators,
            questions: questions,
            startDate: startDate,
            endDate: endDate,
            status: status
          }, {
            "new": true
          }).populate('createdBy', 'name').populate('forEmployee', 'name').populate('evaluators', 'name');
        case 10:
          updatedEvaluation = _context4.sent;
          if (updatedEvaluation) {
            _context4.next = 13;
            break;
          }
          return _context4.abrupt("return", res.status(404).json({
            message: "Evaluation not found"
          }));
        case 13:
          res.status(200).json(updatedEvaluation);
          _context4.next = 19;
          break;
        case 16:
          _context4.prev = 16;
          _context4.t0 = _context4["catch"](0);
          res.status(500).json({
            message: _context4.t0.message
          });
        case 19:
        case "end":
          return _context4.stop();
      }
    }, _callee4, null, [[0, 16]]);
  }));
  return function updateEvaluationById(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();
var deleteEvaluationById = exports.deleteEvaluationById = /*#__PURE__*/function () {
  var _ref5 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee5(req, res) {
    var deletedEvaluation;
    return _regeneratorRuntime().wrap(function _callee5$(_context5) {
      while (1) switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return _Evaluation["default"].findByIdAndDelete(req.params.evaluationId);
        case 3:
          deletedEvaluation = _context5.sent;
          if (deletedEvaluation) {
            _context5.next = 6;
            break;
          }
          return _context5.abrupt("return", res.status(404).json({
            message: "Evaluation not found"
          }));
        case 6:
          res.status(204).json();
          _context5.next = 12;
          break;
        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: _context5.t0.message
          });
        case 12:
        case "end":
          return _context5.stop();
      }
    }, _callee5, null, [[0, 9]]);
  }));
  return function deleteEvaluationById(_x9, _x10) {
    return _ref5.apply(this, arguments);
  };
}();
var getEvaluationsByEmployee = exports.getEvaluationsByEmployee = /*#__PURE__*/function () {
  var _ref6 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee6(req, res) {
    var evaluations;
    return _regeneratorRuntime().wrap(function _callee6$(_context6) {
      while (1) switch (_context6.prev = _context6.next) {
        case 0:
          _context6.prev = 0;
          _context6.next = 3;
          return _Evaluation["default"].find({
            forEmployee: req.params.employeeId
          }).populate('createdBy', 'name').populate('forEmployee', 'name').populate('evaluators', 'name');
        case 3:
          evaluations = _context6.sent;
          res.json(evaluations);
          _context6.next = 10;
          break;
        case 7:
          _context6.prev = 7;
          _context6.t0 = _context6["catch"](0);
          res.status(500).json({
            message: _context6.t0.message
          });
        case 10:
        case "end":
          return _context6.stop();
      }
    }, _callee6, null, [[0, 7]]);
  }));
  return function getEvaluationsByEmployee(_x11, _x12) {
    return _ref6.apply(this, arguments);
  };
}();
var startEvaluation = exports.startEvaluation = /*#__PURE__*/function () {
  var _ref7 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee7(req, res) {
    var evaluation;
    return _regeneratorRuntime().wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _context7.prev = 0;
          _context7.next = 3;
          return _Evaluation["default"].findByIdAndUpdate(req.params.evaluationId, {
            status: 'inProgress',
            startDate: Date.now()
          }, {
            "new": true
          });
        case 3:
          evaluation = _context7.sent;
          if (evaluation) {
            _context7.next = 6;
            break;
          }
          return _context7.abrupt("return", res.status(404).json({
            message: "Evaluation not found"
          }));
        case 6:
          res.json(evaluation);
          _context7.next = 12;
          break;
        case 9:
          _context7.prev = 9;
          _context7.t0 = _context7["catch"](0);
          res.status(500).json({
            message: _context7.t0.message
          });
        case 12:
        case "end":
          return _context7.stop();
      }
    }, _callee7, null, [[0, 9]]);
  }));
  return function startEvaluation(_x13, _x14) {
    return _ref7.apply(this, arguments);
  };
}();
var completeEvaluation = exports.completeEvaluation = /*#__PURE__*/function () {
  var _ref8 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee8(req, res) {
    var evaluation;
    return _regeneratorRuntime().wrap(function _callee8$(_context8) {
      while (1) switch (_context8.prev = _context8.next) {
        case 0:
          _context8.prev = 0;
          _context8.next = 3;
          return _Evaluation["default"].findByIdAndUpdate(req.params.evaluationId, {
            status: 'completed',
            endDate: Date.now()
          }, {
            "new": true
          });
        case 3:
          evaluation = _context8.sent;
          if (evaluation) {
            _context8.next = 6;
            break;
          }
          return _context8.abrupt("return", res.status(404).json({
            message: "Evaluation not found"
          }));
        case 6:
          res.json(evaluation);
          _context8.next = 12;
          break;
        case 9:
          _context8.prev = 9;
          _context8.t0 = _context8["catch"](0);
          res.status(500).json({
            message: _context8.t0.message
          });
        case 12:
        case "end":
          return _context8.stop();
      }
    }, _callee8, null, [[0, 9]]);
  }));
  return function completeEvaluation(_x15, _x16) {
    return _ref8.apply(this, arguments);
  };
}();
var getEvaluationProgress = exports.getEvaluationProgress = /*#__PURE__*/function () {
  var _ref9 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee9(req, res) {
    var evaluation, completedFeedbacks, totalEvaluators, progress;
    return _regeneratorRuntime().wrap(function _callee9$(_context9) {
      while (1) switch (_context9.prev = _context9.next) {
        case 0:
          _context9.prev = 0;
          _context9.next = 3;
          return _Evaluation["default"].findById(req.params.evaluationId);
        case 3:
          evaluation = _context9.sent;
          if (evaluation) {
            _context9.next = 6;
            break;
          }
          return _context9.abrupt("return", res.status(404).json({
            message: "Evaluation not found"
          }));
        case 6:
          completedFeedbacks = evaluation.feedbacks.length;
          totalEvaluators = evaluation.evaluators.length;
          progress = {
            totalEvaluators: totalEvaluators,
            completedEvaluations: completedFeedbacks,
            percentage: completedFeedbacks / totalEvaluators * 100,
            status: evaluation.status
          };
          res.json(progress);
          _context9.next = 15;
          break;
        case 12:
          _context9.prev = 12;
          _context9.t0 = _context9["catch"](0);
          res.status(500).json({
            message: _context9.t0.message
          });
        case 15:
        case "end":
          return _context9.stop();
      }
    }, _callee9, null, [[0, 12]]);
  }));
  return function getEvaluationProgress(_x17, _x18) {
    return _ref9.apply(this, arguments);
  };
}();
var submitFeedback = exports.submitFeedback = /*#__PURE__*/function () {
  var _ref10 = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee10(req, res) {
    var evaluationId, feedback, userId, evaluation, existingFeedbackIndex;
    return _regeneratorRuntime().wrap(function _callee10$(_context10) {
      while (1) switch (_context10.prev = _context10.next) {
        case 0:
          _context10.prev = 0;
          evaluationId = req.params.evaluationId;
          feedback = req.body.feedback;
          userId = req.userId; // Encuentra la evaluación
          _context10.next = 6;
          return _Evaluation["default"].findById(evaluationId);
        case 6:
          evaluation = _context10.sent;
          if (evaluation) {
            _context10.next = 9;
            break;
          }
          return _context10.abrupt("return", res.status(404).json({
            message: "Evaluation not found"
          }));
        case 9:
          if (evaluation.evaluators.includes(userId)) {
            _context10.next = 11;
            break;
          }
          return _context10.abrupt("return", res.status(403).json({
            message: "You are not authorized to submit feedback for this evaluation"
          }));
        case 11:
          // Verifica si el usuario ya ha enviado feedback
          existingFeedbackIndex = evaluation.feedbacks.findIndex(function (f) {
            return f.evaluator.toString() === userId;
          });
          if (existingFeedbackIndex !== -1) {
            // Si ya existe, actualiza el feedback existente
            evaluation.feedbacks[existingFeedbackIndex] = {
              evaluator: userId,
              questions: feedback.questions,
              submittedAt: Date.now()
            };
          } else {
            // Si no existe, agrega nuevo feedback
            evaluation.feedbacks.push({
              evaluator: userId,
              questions: feedback.questions
            });
          }

          // Guarda la evaluación actualizada
          _context10.next = 15;
          return evaluation.save();
        case 15:
          if (!(evaluation.feedbacks.length === evaluation.evaluators.length)) {
            _context10.next = 19;
            break;
          }
          evaluation.status = 'completed';
          _context10.next = 19;
          return evaluation.save();
        case 19:
          res.status(200).json({
            message: "Feedback submitted successfully"
          });
          _context10.next = 25;
          break;
        case 22:
          _context10.prev = 22;
          _context10.t0 = _context10["catch"](0);
          res.status(500).json({
            message: _context10.t0.message
          });
        case 25:
        case "end":
          return _context10.stop();
      }
    }, _callee10, null, [[0, 22]]);
  }));
  return function submitFeedback(_x19, _x20) {
    return _ref10.apply(this, arguments);
  };
}();