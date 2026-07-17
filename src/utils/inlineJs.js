const fs = require("fs-extra");
const path = require("path");

module.exports = function inlineJs(jsFolder) {
  if (!fs.existsSync(jsFolder)) {
    return "";
  }

  let output = "";

  const files = fs
    .readdirSync(jsFolder)
    .filter((file) => file.endsWith(".js"))
    .sort();

  files.forEach((file) => {
    output += `

/* ===========================
   ${file}
=========================== */

`;

    output += fs.readFileSync(path.join(jsFolder, file), "utf8");
    output += "\n";
  });

  return output;
};
