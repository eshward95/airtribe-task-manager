const fs = require("fs");
const path = require("path");

exports.taskData = JSON.parse(
  fs.readFileSync(path.join(__dirname, "..", "data", "task.json"), {
    encoding: "utf8",
  })
);
exports.writeFileHelper = (data, callback) => {
  fs.writeFile(
    path.join(__dirname, "..", "data", "task.json"),
    JSON.stringify(data),
    callback
  );
};
