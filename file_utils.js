import fs from "fs";

//Write data to a file
const writeFile = () => {
  try {
    if (!fs.existsSync("files")) {
      fs.mkdirSync("files");
    }
    fs.writeFileSync(`./files/${Date().toString()}`, `${Date.now()}`);
  } catch (error) {
    console.log(`Error writing file ${error.message}`);
  }
};

//Read files in a folder
const readFolder = (folderName) => {
  try {
    const files = fs.readdirSync(folderName);
    return files;
  } catch (error) {
    console.log(`Error reading folder ${error.message}`);
  }
};

writeFile();
// readFolder();
export { writeFile, readFolder };
