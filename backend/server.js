const express = require('express');
const cors = require('cors');

const connectDB = require('./connect/connectDb')

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

connectDB()

app.use("/users",require('./routes/userRoutes'))
app.use("/Formation",require('./routes/formationRoutes'))

app.listen(port, () => console.log(`Serveur is running on port: ${port}`));