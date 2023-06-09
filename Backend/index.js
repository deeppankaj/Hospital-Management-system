const express = require("express");
const app = express();
const connectDB = require('./config/MongoDB');
const cors = require("cors");
const userRouter = require("./Routes/UsersRoute");
const productRouter = require("./Routes/Product")
 
// connection to mongodb database
connectDB();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(productRouter);

app.get("/", (req, res) => {
  res.sendStatus(200);
});

app.listen(8000, () => {
  console.log("Server is Working");
});
