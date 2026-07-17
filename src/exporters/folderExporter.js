const fs = require("fs-extra");
const path = require("path");

const config = require("../builder/config");

class FolderExporter {
  export(html) {
    console.log("📦 Exportando proyecto...");

    // Crear output
    fs.ensureDirSync(config.outputDir);

    // ===========================
    // CSS
    // ===========================

    if (fs.existsSync(config.cssSource)) {
      fs.copySync(config.cssSource, config.outputDir, {
        overwrite: true,
      });
    }

    // ===========================
    // JavaScript
    // ===========================

    if (fs.existsSync(config.jsSource)) {
      fs.copySync(config.jsSource, path.join(config.outputDir, "js"), {
        overwrite: true,
      });
    }

    // ===========================
    // Imágenes
    // ===========================

    if (fs.existsSync(config.imagesSource)) {
      fs.copySync(config.imagesSource, config.imagesOutput, {
        overwrite: true,
      });
    }

    // ===========================
    // Fonts
    // ===========================

    if (fs.existsSync(config.fontsSource)) {
      fs.copySync(config.fontsSource, path.join(config.outputDir, "fonts"), {
        overwrite: true,
      });
    }

    // ===========================
    // HTML
    // ===========================

    fs.writeFileSync(config.outputFile, html);

    console.log("✔ Proyecto exportado");
  }
}

module.exports = FolderExporter;
