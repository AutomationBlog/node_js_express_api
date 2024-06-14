import express from "express";
import { writeFile, readFolder } from "./file_utils.js";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/createFile", (req, res) => {
  res.send("Create File");
  writeFile();
  res.send("File Created successfully");
});

app.get("/readFolder", (req, res) => {
  const files = readFolder("files");
  res.send(files);
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
