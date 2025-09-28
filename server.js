// const fs = require("fs");

// fs.writeFile("hey.txt", "kya halchal", function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("done");
//   }
// });

// // const http = require("http");
// const http = require("http");
// const chalk = require("chalk");

// const server = http.createServer((req, res) => {
//   // Log the request URL in green
//   console.log(chalk.green(`✔ Request received: ${req.url}`));

//   // Respond to the client
//   res.end("Hey mula!");
// });

// server.listen(8080, () => {
//   console.log(chalk.blue.bold("Server listening on port 8080..."));
// });

// const express = require("express");

// const app = express();
// app.get("/", function (req, res) {
//   res.send("I am Aadarsh chadhary");
// });
// app.listen(8080);

// require("dotenv").config();
// const express = require("express");
// const app = express();

// // middleware
// app.use((req, res, next) => {
//   console.log("middleware running...");
//   next();
// });

// // home route
// app.get("/", (req, res) => {
//   res.send("I am Aadarsh Chaudhary");
// });

// app.get("/instagram", (req, res) => {
//   res.send("czy_aadarsh");
// });

// app.get("/youtube", (req, res) => {
//   res.send("<h1>chai aur code</h1>");
// });

// // profile route with error
// app.get("/profile", (req, res, next) => {
//   return next(new Error("something went wrong"));
// });

// error handler middleware (must be at the end)
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(500).send("Something broke!");
// });

// start server
// app.listen(process.env.PORT, () => {
//   console.log("Server running at http://localhost:8080");
// });
