import mongoose from 'mongoose';
import Evaluation from '../models/Evaluation';
import Feedback from '../models/Feedback';

export const generateReportForEmployee = async (req, res) => {
    const { id } = req.params; // ID del empleado

    // Validar el ID del empleado
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(400).json({ message: "Invalid employee ID" });
    }

    try {
        // Obtener todas las evaluaciones del empleado
        const evaluations = await Evaluation.find({ employee: id }).populate('createdBy');

        if (!evaluations.length) {
            return res.status(404).json({ message: "No evaluations found for this employee" });
        }

        // Obtener feedbacks relacionados con las evaluaciones
        const feedbacks = await Feedback.find({ evaluation: { $in: evaluations.map(e => e._id) } })
            .populate('providedBy')
            .populate('evaluation');

        // Generar el reporte
        const report = {
            employeeId: id,
            evaluations: evaluations.map(evaluation => ({
                title: evaluation.title,
                description: evaluation.description,
                createdBy: evaluation.createdBy.username,
                status: evaluation.status,
                feedback: feedbacks.filter(f => f.evaluation.toString() === evaluation._id.toString())
            }))
        };

        res.status(200).json(report);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};