const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());
app.use(cors()); // Usa CORS para permitir solicitudes desde cualquier origen

// Función para calcular qué helado puede comprar cada persona
const calcularHelado = (nombre, dinero) => {
    if (dinero >= 2.000 && dinero < 3.000) {
        return `${nombre}, cómprate el helado de agua. Tu vuelto es de ${dinero - 2000}.`;
    } else if (dinero >= 3.000 && dinero < 4.000) {
        return `${nombre}, cómprate un helado a base de crema. Tu vuelto es de ${dinero - 3000}.`;
    } else if (dinero >= 4.000 && dinero < 5.000) {
        return `${nombre}, cómprate un helado de CreamHelado. Tu vuelto es de ${dinero - 4000}.`;
    } else if (dinero >= 5.000 && dinero < 6.000) {
        return `${nombre}, cómprate un Helardo. Tu vuelto es de ${dinero - 5000}.`;
    } else if (dinero >= 6.000 && dinero < 10.000) {
        return `${nombre}, cómprate un bombón Helado. Tu vuelto es de ${dinero - 6000}.`;
    } else if (dinero >= 10.000) {
        return `${nombre}, puedes comprarte un pote de helado o uno con confites. Tu vuelto es de ${dinero - 10.000}.`;
    } else {
        return `${nombre}, no tienes suficiente dinero para comprar un helado.`;
    }
};

// Ruta para manejar la solicitud POST
app.post('/comprarHelado', (req, res) => {
    const { dineroJason, dineroDiego, dineroAlberto } = req.body;

    // Generar las respuestas para Jason, Diego y Alberto
    const mensajeJason = calcularHelado('Jason', dineroJason);
    const mensajeDiego = calcularHelado('Diego', dineroDiego);
    const mensajeAlberto = calcularHelado('Alberto', dineroAlberto);

    // Enviar la respuesta al cliente
    res.json({ mensajeJason, mensajeDiego, mensajeAlberto });
});

// Iniciar el servidor en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});