const path = require("path");
const fs = require("fs-extra");

const projectPath = path.join(__dirname, "../../examples/SERMAS");
const themePath = path.join(__dirname, "../../themes/elastic");

module.exports = {
  // ==========================================
  // Proyecto
  // ==========================================

  projectPath,

  themePath,

  // ==========================================
  // Exportador
  // folder | single | pdf
  // ==========================================

  exportMode: "single",

  // ==========================================
  // Archivos principales
  // ==========================================

  markdownFile: path.join(projectPath, "markdown", "Arquitectura.md"),

  configFile: path.join(projectPath, "config.json"),

  templateFile: path.join(themePath, "templates", "layout.html"),

  outputFile: path.join(projectPath, "output", "index.html"),

  outputDir: path.join(projectPath, "output"),

  // ==========================================
  // Recursos del tema
  // ==========================================

  cssSource: path.join(themePath, "css"),

  jsSource: path.join(themePath, "js"),

  themeImagesSource: path.join(themePath, "images"),

  fontsSource: path.join(themePath, "fonts"),

  // ==========================================
  // Recursos del proyecto
  // ==========================================

  imagesSource: path.join(projectPath, "markdown", "images"),

  imagesOutput: path.join(projectPath, "output", "images"),

  // ==========================================
  // Configuración del proyecto
  // ==========================================

  config: fs.readJsonSync(path.join(projectPath, "config.json")),
};
