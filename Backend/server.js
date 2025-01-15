require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const menuRoutes = require("./routes/menu");

app = express();

port = process.env.PORT || 3000;

// middlewares
app.use(express.json());

app.use("/api/menu", menuRoutes);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// db connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(port, () => {
      console.log(`listening on port ${port}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
