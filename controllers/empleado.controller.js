const empleadoService = require('../services/empleado.service');

exports.getAllEmpleados = async (req, res) => {
    const empleados = await empleadoService.getAll();
    res.status(200).json(empleados||{});
};

exports.getEmpleadoById = async (req, res) => {
    const empleado = await empleadoService.getById(req.params.id);
    
    res.status(200).json(empleado||{});
};

exports.createEmpleado = async (req, res) => {

    const empleado = await empleadoService.create(req.body);
    res.status(201).json(empleado);
};

exports.updateEmpleado = async (req, res) => {
    const updated = await empleadoService.update(req.params.id, req.body);
    if (!updated) {
        return res.status(404).json({ message: 'empleado no encontrado' });
    }
    res.status(200).json(updated);
};

exports.deleteEmpleado = async (req, res) => {
    //desactiva el empleado en lugar de eliminarlo físicamente
    const deleted = await empleadoService.update(req.params.id, { activo: false });

    if (!deleted) {
        return res.status(404).json({ message: 'empleado no encontrado' });
    }
    res.status(204).send();
};

