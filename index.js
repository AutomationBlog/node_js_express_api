import express from "express";
import { writeFile, readFolder } from "./file_utils.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/createFile", (req, res) => {
  writeFile();
  res.send({ message: "File Created successfully" });
});

app.get("/readFolder", (req, res) => {
  const files = readFolder("files");
  res.send(files);
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
