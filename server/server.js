const express = require('express');
const mongoose = require('mongoose');
const Institute = require('./models/institute');
const cors = require('cors');

const app = express();
const PORT = 3000;

// Configurar CORS
app.use(cors());

app.use(express.json());



// URL de conexión a MongoDB
const MONGODB_URI = 'mongodb+srv://arjaibanezpa:C19400437@cluster0.dvqk9.mongodb.net/db_esecurity?retryWrites=true&w=majority';

const InstitutesData = [
    { IdInstitutoOK: '100', IdInstitutoBK: '100-1', DesInstituto: 'Liverpool', Alias: 'Liverpool', Matriz: 'S', IdTipoGiroOK: 'IdTipoGiros-IdComercial', IdInstitutoSupOK: '' },
    { IdInstitutoOK: '101', IdInstitutoBK: '101-1', DesInstituto: 'Walmart', Alias: 'Walmart', Matriz: 'S', IdTipoGiroOK: 'IdTipoGiros-IdComercial', IdInstitutoSupOK: '' },
    { IdInstitutoOK: '102', IdInstitutoBK: '102-1', DesInstituto: 'Coppel', Alias: 'Coppel', Matriz: 'S', IdTipoGiroOK: 'IdTipoGiros-IdComercial', IdInstitutoSupOK: '' },
    { IdInstitutoOK: '103', IdInstitutoBK: '103-1', DesInstituto: 'Telcel', Alias: 'Telcel', Matriz: 'S', IdTipoGiroOK: 'IdTipoGiros-IdComercial', IdInstitutoSupOK: '' },
    { IdInstitutoOK: '104', IdInstitutoBK: '104-1', DesInstituto: 'Mercado Libre', Alias: 'Mercado Libre', Matriz: 'S', IdTipoGiroOK: 'IdTipoGiros-IdComercial', IdInstitutoSupOK: '' },
];

// Conexión a MongoDB
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch((error) => {
        console.error('Error al conectar a MongoDB:', error);
    });

// Ruta para insertar datos
app.get('/insert-data', async (req, res) => {
    try {
        await Institute.insertMany(InstitutesData);
        res.status(200).send('Datos insertados exitosamente');
    } catch (error) {
        console.error('Error al insertar datos:', error);
        res.status(500).send('Error al insertar datos');
    }
});

// Ruta para obtener datos
app.get('/institutes', async (req, res) => {
    try {
        const data = await Institute.find({});
        res.status(200).json(data);
    } catch (error) {
        console.error('Error al obtener datos:', error);
        res.status(500).send('Error al obtener datos');
    }
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
