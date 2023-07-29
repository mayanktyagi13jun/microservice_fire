const express = require("express");
const proxy = require("express-http-proxy");

const app = express();

app.use(express.json());

app.use("/customer", proxy("http://localhost:5001"));
app.use("/shopping", proxy("http://localhost:5003"));
app.use("/", proxy("http://localhost:5002"));

app.listen(5000, () => {
  console.log(`Gateway Service is listening on PORT 5000`);
});
