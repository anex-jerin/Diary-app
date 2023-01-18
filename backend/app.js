require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors')

const app = express();


const userRoutes = require('./routes/user.js')

const Port = 3500 || process.env.PORT;

async function connect() {
  mongoose.set("strictQuery", false);
  await mongoose.connect(process.env.MONGO_URL);
  app.listen(Port, () => {
    console.log(`connected to port : ${Port}`);
  });
}
app.use(cors())
app.use(express.json())
app.use('/api/diary', userRoutes)




connect();