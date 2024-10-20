import { Schema, model } from 'mongoose';

const employeeSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true,
        unique: true
    },
    name: {
        type: String, 
        required: true 
    }, 
    email: {
        type: String, 
        required: true,
        unique: true
    },
    position: {
        type: String,
        required: true
    },
    department: {
        type: String,
        required: true
    },
    manager: {
        type: Schema.Types.ObjectId,
        ref: 'Employee'
    },
    hireDate: {
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        enum: ['active', 'inactive', 'on_leave'],
        default: 'active'
    }
},{
    timestamps: true,
    versionKey: false
});

// Método para obtener las evaluaciones del empleado
employeeSchema.methods.getEvaluations = async function() {
    return await model('Evaluation').find({ forEmployee: this.user });
};

// Método para obtener el feedback recibido
employeeSchema.methods.getReceivedFeedback = async function() {
    return await model('Feedback').find({ forEmployee: this.user });
};

// Índices para mejorar el rendimiento de las consultas
employeeSchema.index({ user: 1 }, { unique: true });
employeeSchema.index({ email: 1 }, { unique: true });
employeeSchema.index({ department: 1, position: 1 });

export default model('Employee', employeeSchema);