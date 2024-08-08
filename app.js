const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoDB = require("./src/config/db");

//  calling routes
const userRoutes = require("./src/routes/user.route");
const consultationRoutes = require("./src/routes/consultation.route");
const prescriptionRoutes = require("./src/routes/prescription.route");
const taskRoutes = require("./src/routes/tasks.route");
//end
app.use(bodyParser.json());
mongoDB(); // Db invok
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.json({ success: true });
});

app.use("/users", userRoutes);
app.use("/consultation", consultationRoutes);
app.use("/prescription", prescriptionRoutes);
app.use("/task", taskRoutes);

module.exports = app;
