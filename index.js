const express = require("express");
const mongoose = require("mongoose");
const { config } = require("dotenv");
const cors = require("cors");
const colors = require("colors");

const app = express();
app.use(express.json());
app.use(cors());
config();

mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB is connected".bgGreen.white))
  .catch(() => console.log("MongoDB is not connected".bgRed.white));

// Router import
const User = require("./routes/doctorRoutes");
app.use("/user", User);


app.get("/", async (req, res) => {
  res.json("App is running");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`${PORT} in listening`));

