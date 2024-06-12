const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');

const todoRoutes = require('./routes/Todo');

const app = express();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {
    console.log(`Some Problem Occured: ${err}`);
  });

app.use(cors());
app.use(express.json());
app.use("/api", todoRoutes);

const PORT = 8080;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});