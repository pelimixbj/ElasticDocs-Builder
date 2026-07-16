const path = require("path");
const fs = require("fs-extra");

const projectPath = path.join(__dirname, "../../examples/SERMAS");

const themePath = path.join(__dirname, "../../themes/elastic");

module.exports = {
  projectPath,

  themePath,

  markdownFile: path.join(projectPath, "markdown", "Arquitectura.md"),

  configFile: path.join(projectPath, "config.json"),

  templateFile: path.join(themePath, "templates", "layout.html"),

  outputFile: path.join(projectPath, "output", "index.html"),

  outputDir: path.join(projectPath, "output"),

  cssSource: path.join(themePath, "css"),

  jsSource: path.join(themePath, "js"),

  imagesSource: path.join(themePath, "images"),

  fontsSource: path.join(themePath, "fonts"),

  imagesSource: path.join(projectPath, "markdown", "images"),

  imagesOutput: path.join(projectPath, "output", "images"),

  config: fs.readJsonSync(path.join(projectPath, "config.json")),
};
