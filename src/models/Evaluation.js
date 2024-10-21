import { Schema, model } from 'mongoose';

const questionSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: ['rating', 'text', 'multipleChoice'],
    required: true
  },
  options: [String], // Para preguntas de opción múltiple
});

const evaluationSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  createdBy: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  forEmployee: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  evaluators: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }],
  questions: [questionSchema],
  status: {
    type: String,
    enum: ['draft', 'inProgress', 'completed'],
    default: 'draft'
  },
  feedbacks: [{
    evaluator: { type: Schema.Types.ObjectId, ref: 'User' },
    questions: [{
      question: String,
      answer: String,
      rating: Number
    }],
    submittedAt: { type: Date, default: Date.now }
  }],
  startDate: Date,
  endDate: Date
}, {
  timestamps: true,
  versionKey: false
});

// Método para verificar si la evaluación está activa
evaluationSchema.methods.isActive = function() {
  const now = new Date();
  return this.status === 'inProgress' && 
         (!this.startDate || this.startDate <= now) && 
         (!this.endDate || this.endDate >= now);
};

// Método para obtener el progreso de la evaluación
evaluationSchema.methods.getProgress = async function() {
  const totalEvaluators = this.evaluators.length;
  const completedFeedbacks = await model('Feedback').countDocuments({
    evaluation: this._id,
    status: 'submitted'
  });
  return (completedFeedbacks / totalEvaluators) * 100;
};

// Índices para mejorar el rendimiento de las consultas
evaluationSchema.index({ forEmployee: 1, status: 1 });
evaluationSchema.index({ startDate: 1, endDate: 1 });

export default model('Evaluation', evaluationSchema);