const Empleado = require('../models/empleado.model');

const getAll = async () => await Empleado.findAll();

const getById = async (id) => await Empleado.findByPk(id);

const findOne = async (data) => await Empleado.findOne({ where: data });

const create = async (data) => await Empleado.create(data);

const update = async (id, data) => {
    const empleado = await Empleado.findByPk(id);
    if (!empleado) return null;
    return await empleado.update(data);
};

const remove = async (id) => {
    const empleado = await Empleado.findByPk(id);
    if (!empleado) return null;
    await empleado.destroy();
    return empleado;
};

module.exports = {
    getAll,
    getById,
    findOne,
    create,
    update,
    remove,
};