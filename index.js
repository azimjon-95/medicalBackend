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
const Doctor = require("./routes/doctorRoutes");
const Client = require("./routes/client");
const Room = require("./routes/roomRoutes");
app.use("/admin", Doctor);
app.use("/rooms", Room);
app.use("/client", Client);



app.get("/", async (req, res) => {
  res.json("App is running");
});

const PORT = process.env.PORT || 5050;
app.listen(PORT, () => console.log(`${PORT} in listening`));

