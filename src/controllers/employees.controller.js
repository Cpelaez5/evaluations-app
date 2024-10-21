import Employee from '../models/Employee';

export const createEmployee = async (req, res) => {
    const { user, name, position, department, manager, status } = req.body;

    // Validación manual
    if (!name || !position || !department || !manager || !status) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    try {
        const newEmployee = new Employee({
            user,
            name,
            position,
            department,
            manager,
            status
        });

        const employeeSaved = await newEmployee.save();
        res.status(201).json(employeeSaved);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getEmployees = async (req, res) => {
    try {
        const employees = await Employee.find().populate('user', 'email');
        res.json(employees);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getEmployeeById = async (req, res) => {
    try {
        const employee = await Employee.findById(req.params.employeeId).populate('user', 'email');
        if (!employee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(employee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateEmployeesById = async (req, res) => {
    try {
        const updatedEmployee = await Employee.findByIdAndUpdate(req.params.employeeId, req.body, { new: true }).populate('user', 'email');
        if (!updatedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(200).json(updatedEmployee);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteEmployeeById = async (req, res) => {
    try {
        const deletedEmployee = await Employee.findByIdAndDelete(req.params.employeeId);
        if (!deletedEmployee) {
            return res.status(404).json({ message: 'Employee not found' });
        }
        res.status(204).json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};