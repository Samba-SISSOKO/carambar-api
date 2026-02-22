const express = require("express");
const cors = require("cors");
const sequelize = require("./sequelize");
const jokeRoutes = require("./routes/jokeRoutes");

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./swagger");

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", jokeRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

sequelize.sync().then(() => {
    console.log("Base de données synchronisée");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Serveur lancé sur le port ${PORT}`);
});