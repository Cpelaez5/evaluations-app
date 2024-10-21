"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = require("mongoose");
var responseSchema = new _mongoose.Schema({
  question: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  answer: {
    type: _mongoose.Schema.Types.Mixed,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: function required() {
      return this.question.type === 'rating';
    }
  }
});
var feedbackSchema = new _mongoose.Schema({
  evaluation: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'Evaluation',
    required: true
  },
  providedBy: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  forEmployee: {
    type: _mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  responses: [responseSchema],
  comments: {
    type: String,
    maxlength: 1000
  },
  status: {
    type: String,
    "enum": ['draft', 'submitted'],
    "default": 'draft'
  }
}, {
  timestamps: true,
  versionKey: false
});

// Método para calcular el promedio de las calificaciones
feedbackSchema.methods.calculateAverageRating = function () {
  var ratingResponses = this.responses.filter(function (r) {
    return r.rating;
  });
  if (ratingResponses.length === 0) return 0;
  var sum = ratingResponses.reduce(function (acc, r) {
    return acc + r.rating;
  }, 0);
  return sum / ratingResponses.length;
};

// Índices para mejorar el rendimiento de las consultas
feedbackSchema.index({
  evaluation: 1,
  providedBy: 1
}, {
  unique: true
});
feedbackSchema.index({
  forEmployee: 1
});
var _default = exports["default"] = (0, _mongoose.model)('Feedback', feedbackSchema);