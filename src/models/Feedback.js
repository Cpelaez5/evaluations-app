import { Schema, model } from 'mongoose';

const responseSchema = new Schema({
  question: {
    type: Schema.Types.ObjectId,
    ref: 'Question',
    required: true
  },
  answer: {
    type: Schema.Types.Mixed,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: function() { return this.question.type === 'rating'; }
  }
});

const feedbackSchema = new Schema({
  evaluation: {
    type: Schema.Types.ObjectId,
    ref: 'Evaluation',
    required: true
  },
  providedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  forEmployee: {
    type: Schema.Types.ObjectId,
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
    enum: ['draft', 'submitted'],
    default: 'draft'
  }
}, {
  timestamps: true,
  versionKey: false
});

// Método para calcular el promedio de las calificaciones
feedbackSchema.methods.calculateAverageRating = function() {
  const ratingResponses = this.responses.filter(r => r.rating);
  if (ratingResponses.length === 0) return 0;
  const sum = ratingResponses.reduce((acc, r) => acc + r.rating, 0);
  return sum / ratingResponses.length;
};

// Índices para mejorar el rendimiento de las consultas
feedbackSchema.index({ evaluation: 1, providedBy: 1 }, { unique: true });
feedbackSchema.index({ forEmployee: 1 });

export default model('Feedback', feedbackSchema);