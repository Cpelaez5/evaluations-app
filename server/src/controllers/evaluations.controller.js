import Evaluation from '../models/Evaluation';

export const createEvaluation = async (req, res) => {
    const { name } = req.body;

    const newEvaluation = new Evaluation({name})

    const evaluationSaved = await newEvaluation.save()
    res.status(201).json(evaluationSaved);
}

export const getEvaluations = async (req, res) => {
    const evaluations = await Evaluation.find();
    res.json(evaluations)
}

export const getEvaluationById = async (req, res) => {
    const evaluation = await Evaluation.findById(req.params.evaluationId);
    res.status(200).json(evaluation)
}

export const updateEvaluationsById = async (req, res) => {
   const updatedEvaluation = await Evaluation.findByIdAndUpdate(req.params.evaluationId, req.body, {new: true})
   res.status(200).json(updatedEvaluation)
}
export const deleteEvaluationById = async (req, res) => {
    await Evaluation.findByIdAndDelete(req.params.evaluationId)
    res.status(204).json()

}
