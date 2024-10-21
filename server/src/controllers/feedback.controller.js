import Feedback from '../models/Feedback';
import Evaluation from '../models/Evaluation'; // Para verificar la evaluación
import User from '../models/User'; // Para verificar el usuario

// Crear un nuevo feedback
export const createFeedback = async (req, res) => {
    try {
        const { evaluationId, forEmployee, responses, comments } = req.body;
        const userId = req.userId; // Asumiendo que el ID del usuario está en req.userId

        // Verificar si la evaluación existe
        const evaluation = await Evaluation.findById(evaluationId);
        if (!evaluation) {
            return res.status(404).json({ message: "Evaluation not found" });
        }

        // Crear el feedback
        const feedback = new Feedback({
            evaluation: evaluationId,
            providedBy: userId,
            forEmployee,
            responses,
            comments
        });

        const savedFeedback = await feedback.save();
        res.status(201).json(savedFeedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener feedback por ID
export const getFeedbackById = async (req, res) => {
    try {
        const feedback = await Feedback.findById(req.params.feedbackId)
            .populate('providedBy', 'name')
            .populate('forEmployee', 'name')
            .populate('evaluation');

        if (!feedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }

        res.status(200).json(feedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Obtener todos los feedbacks para una evaluación
export const getFeedbackByEvaluation = async (req, res) => {
    try {
        const feedbacks = await Feedback.find({ evaluation: req.params.evaluationId })
            .populate('providedBy', 'name')
            .populate('forEmployee', 'name');

        res.status(200).json(feedbacks);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Actualizar feedback
export const updateFeedback = async (req, res) => {
    try {
        const { responses, comments } = req.body;

        const updatedFeedback = await Feedback.findByIdAndUpdate(
            req.params.feedbackId,
            { responses, comments, status: 'submitted' },
            { new: true }
        );

        if (!updatedFeedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }

        res.status(200).json(updatedFeedback);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Eliminar feedback
export const deleteFeedback = async (req, res) => {
    try {
        const deletedFeedback = await Feedback.findByIdAndDelete(req.params.feedbackId);
        if (!deletedFeedback) {
            return res.status(404).json({ message: "Feedback not found" });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};