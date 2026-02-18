const express = require('express');
const empleadoRoutes = require('./routes/empleado.routes');

const app = express();

app.use(express.json());
app.use('/api/empleados', empleadoRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

module.exports = app;