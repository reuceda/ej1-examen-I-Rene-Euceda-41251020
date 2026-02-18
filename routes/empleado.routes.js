const express = require('express');
const { body, param } = require('express-validator');
const validateRequest = require('../middlewares/validate.middleware');
const empleadoController = require('../controllers/empleado.controller');

const router = express.Router();

router.get('/', empleadoController.getAllEmpleados);

router.get('/:id',
    validateRequest([param('id').isInt().withMessage('ID must be an integer')]),
    empleadoController.getEmpleadoById
);

router.post('/',
    validateRequest([
        body('nombre').isString().withMessage('El nombre es requerido'),
        body('puesto').isString().withMessage('El puesto es requerido'),
        body('salario').isDecimal({ min: 0 }).withMessage('Salario inválido'),
    ]),
    empleadoController.createEmpleado
);

router.put('/:id',
    validateRequest([
        param('id').isInt().withMessage('ID must be an integer'),
        body('nombre').isString().withMessage('El nombre es requerido'),
        body('puesto').isString().withMessage('El puesto es requerido'),
        body('salario').isDecimal({ min: 0 }).withMessage('Salario inválido'),
        body('activo').isBoolean().withMessage('Activo debe ser booleano'),
    ]),
    empleadoController.updateEmpleado
);

router.delete('/:id',
    validateRequest([param('id').isInt().withMessage('ID must be an integer')]),
    empleadoController.deleteEmpleado
);

module.exports = router;