const app = require('./app');
const express = require('express');
const sequilize = require('./config/database');
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

//ruta principal
app.get('/', (req, res) => {
    res.send('<h1>Esta es la API del ejercicio 1 del primer examen de Aplicaciones de Vanguardia</h1>');
});

const startServer = async () => {
    try {
        await sequilize.authenticate();
        await sequilize.sync();
        console.log('Database connected');

        app.listen(PORT, () => {
            console.log(`Server is running on http://localhost:${PORT}`);
        });
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
};

startServer();