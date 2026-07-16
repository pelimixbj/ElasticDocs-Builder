const fs = require("fs-extra");
const path = require("path");

const config = require("../config");

module.exports = function () {
  // CSS
  if (fs.existsSync(config.cssSource)) {
    fs.copySync(config.cssSource, config.outputDir, { overwrite: true });
  }

  // JavaScript
  if (fs.existsSync(config.jsSource)) {
    fs.copySync(config.jsSource, path.join(config.outputDir, "js"), {
      overwrite: true,
    });
  }

  // Copiar imágenes
  if (fs.existsSync(config.imagesSource)) {
    fs.copySync(config.imagesSource, config.imagesOutput, {
      overwrite: true,
    });

    console.log("✔ Imágenes copiadas");
  }

  // Fuentes
  if (fs.existsSync(config.fontsSource)) {
    fs.copySync(config.fontsSource, path.join(config.outputDir, "fonts"), {
      overwrite: true,
    });
  }

  console.log("✔ Recursos copiados");
};
