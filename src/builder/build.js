const generateHtml = require("./generators/html");
const generateSidebar = require("./generators/sidebar");
const generatePdf = require("./generators/pdf");

const config = require("./config");

const { FolderExporter, SingleHtmlExporter } = require("../exporters");

console.clear();

console.log("=====================================");
console.log(" ElasticDocs Builder v1.1.0");
console.log("=====================================");

console.log("Generando HTML...");

const html = generateHtml();

console.log("Exportando documentación...");

switch (config.exportMode) {
  case "folder": {
    const exporter = new FolderExporter();

    exporter.export(html);

    break;
  }

  case "single":
    const exporter = new SingleHtmlExporter();
    exporter.export(html);
    // console.log("⏳ Single HTML Exporter (Próximamente)");
    break;

  case "pdf":
    generatePdf();
    break;

  default: {
    const exporter = new FolderExporter();

    exporter.export(html);
  }
}

console.log("Generando Sidebar...");
generateSidebar();

console.log("✔ Build finalizado");
