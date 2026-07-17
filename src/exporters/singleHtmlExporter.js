const fs = require("fs-extra");

const config = require("../builder/config");

const inlineCss = require("../utils/inlineCss");
const inlineJs = require("../utils/inlineJs");
const inlineImages = require("../utils/inlineImages");

class SingleHtmlExporter {
  export(html) {
    console.log("📄 Generando Single HTML...");

    // ==========================================
    // Incrustar CSS
    // ==========================================

    const css = inlineCss(config.cssSource);

    html = html.replace(/<link[^>]*href="[^"]+\.css"[^>]*>/g, "");

    html = html.replace(
      "</head>",
      `
<style>

${css}

</style>

</head>`,
    );

    // ==========================================
    // Incrustar JavaScript
    // ==========================================

    const js = inlineJs(config.jsSource);

    // Eliminar todos los <script src="...">
    html = html.replace(/<script[^>]*src="[^"]+\.js"[^>]*><\/script>/g, "");

    // Agregar el JS antes de cerrar el body
    html = html.replace(
      "</body>",
      `
<script>

${js}

</script>

</body>`,
    );

    // ==========================================
    // Guardar HTML
    // ==========================================

    // Imágenes
    html = inlineImages(html, config.imagesSource);

    fs.writeFileSync("single.html", html, "utf8");

    console.log("✔ Single HTML generado");
  }
}

module.exports = SingleHtmlExporter;
