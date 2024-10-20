import Evaluation from '../models/Evaluation';
import User from '../models/User';


export const createEvaluation = async (req, res) => {
    try {
        const { title, description, forEmployee, evaluators, questions, startDate, endDate } = req.body;

        // Verificar si el empleado y los evaluadores existen
        const employeeExists = await User.findById(forEmployee);
        if (!employeeExists) {
            return res.status(400).json({ message: "Employee not found" });
        }

        const evaluatorsExist = await User.find({ _id: { $in: evaluators } });
        if (evaluatorsExist.length !== evaluators.length) {
            return res.status(400).json({ message: "One or more evaluators not found" });
        }

        const newEvaluation = new Evaluation({
            title,
            description,
            createdBy: req.user._id,
            forEmployee,
            evaluators,
            questions,
            startDate,
            endDate
        });

        const evaluationSaved = await newEvaluation.save();
        res.status(201).json(evaluationSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getEvaluations = async (req, res) => {
    try {
        const evaluations = await Evaluation.find()
            .populate('createdBy', 'name')
            .populate('forEmployee', 'name')
            .populate('evaluators', 'name');
        res.json(evaluations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getEvaluationById = async (req, res) => {
    try {
        const evaluation = await Evaluation.findById(req.params.evaluationId)
            .populate('createdBy', 'name')
            .populate('forEmployee', 'name')
            .populate('evaluators', 'name');
        if (!evaluation) {
            return res.status(404).json({ message: "Evaluation not found" });
        }
        res.status(200).json(evaluation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateEvaluationById = async (req, res) => {
    try {
        const { title, description, forEmployee, evaluators, questions, startDate, endDate, status } = req.body;

        // Verificar si se están actualizando los evaluadores
        if (evaluators) {
            const evaluatorsExist = await User.find({ _id: { $in: evaluators } });
            if (evaluatorsExist.length !== evaluators.length) {
                return res.status(400).json({ message: "One or more evaluators not found" });
            }
        }

        const updatedEvaluation = await Evaluation.findByIdAndUpdate(
            req.params.evaluationId,
            {
                title,
                description,
                forEmployee,
                evaluators,
                questions,
                startDate,
                endDate,
                status
            },
            { new: true }
        ).populate('createdBy', 'name')
         .populate('forEmployee', 'name')
         .populate('evaluators', 'name');

        if (!updatedEvaluation) {
            return res.status(404).json({ message: "Evaluation not found" });
        }

        res.status(200).json(updatedEvaluation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteEvaluationById = async (req, res) => {
    try {
        const deletedEvaluation = await Evaluation.findByIdAndDelete(req.params.evaluationId);
        if (!deletedEvaluation) {
            return res.status(404).json({ message: "Evaluation not found" });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const getEvaluationsByEmployee = async (req, res) => {
    try {
        const evaluations = await Evaluation.find({ forEmployee: req.params.employeeId })
            .populate('createdBy', 'name')
            .populate('forEmployee', 'name')
            .populate('evaluators', 'name');
        res.json(evaluations);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const startEvaluation = async (req, res) => {
    try {
        const evaluation = await Evaluation.findByIdAndUpdate(
            req.params.evaluationId,
            { status: 'inProgress', startDate: Date.now() },
            { new: true }
        );
        if (!evaluation) {
            return res.status(404).json({ message: "Evaluation not found" });
        }
        res.json(evaluation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const completeEvaluation = async (req, res) => {
    try {
        const evaluation = await Evaluation.findByIdAndUpdate(
            req.params.evaluationId,
            { status: 'completed', endDate: Date.now() },
            { new: true }
        );
        if (!evaluation) {
            return res.status(404).json({ message: "Evaluation not found" });
        }
        res.json(evaluation);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getEvaluationProgress = async (req, res) => {
    try {
        const evaluation = await Evaluation.findById(req.params.evaluationId);
        if (!evaluation) {
            return res.status(404).json({ message: "Evaluation not found" });
        }
        // Aquí puedes implementar la lógica para calcular el progreso
        // Por ejemplo, contar cuántos evaluadores han completado su feedback
        const progress = {
            totalEvaluators: evaluation.evaluators.length,
            completedEvaluations: 0, // Esto deberías calcularlo basado en tu lógica de negocio
            status: evaluation.status
        };
        res.json(progress);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const submitFeedback = async (req, res) => {
    try {
        const { evaluationId } = req.params;
        const { feedback } = req.body;
        const userId = req.userId;

        // Encuentra la evaluación
        const evaluation = await Evaluation.findById(evaluationId);
        if (!evaluation) {
            return res.status(404).json({ message: "Evaluation not found" });
        }

        // Verifica si el usuario está autorizado para dar feedback
        if (!evaluation.evaluators.includes(userId)) {
            return res.status(403).json({ message: "You are not authorized to submit feedback for this evaluation" });
        }

        // Verifica si el usuario ya ha enviado feedback
        const existingFeedbackIndex = evaluation.feedbacks.findIndex(
            f => f.evaluator.toString() === userId
        );

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
        await evaluation.save();

        // Verifica si todos los evaluadores han enviado feedback
        if (evaluation.feedbacks.length === evaluation.evaluators.length) {
            evaluation.status = 'completed';
            await evaluation.save();
        }

        res.status(200).json({ message: "Feedback submitted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};