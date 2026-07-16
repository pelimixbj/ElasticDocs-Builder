const generateHtml = require("./generators/html");
const copyAssets = require("./assets/copyAssets");
const generateSidebar = require("./generators/sidebar");
const generatePdf = require("./generators/pdf");

console.clear();

console.log("=====================================");
console.log(" ElasticDocs Builder v0.1.0");
console.log("=====================================");

console.log("Generando HTML...");
generateHtml();

console.log("Copiando recursos...");
copyAssets();

console.log("Generando Sidebar...");
generateSidebar();

console.log("Generando PDF...");
generatePdf();

console.log("✔ Build finalizado");
