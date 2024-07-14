// server.js
const express = require('express');
const userRoutes = require('./routes/userRoutes');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');

const app = express();


const PORT = process.env.PORT || 8000;

app.use(express.json());
app.use('/api', userRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
