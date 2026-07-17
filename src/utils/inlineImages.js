const fs = require("fs-extra");
const path = require("path");

module.exports = function inlineImages(html, imagesFolder) {
  return html.replace(
    /<img([^>]*)src="([^"]+)"([^>]*)>/g,
    (match, before, src, after) => {
      // Ignorar imágenes que ya estén en Base64
      if (src.startsWith("data:")) {
        return match;
      }

      const imagePath = path.join(imagesFolder, path.basename(src));

      if (!fs.existsSync(imagePath)) {
        console.warn("Imagen no encontrada:", imagePath);
        return match;
      }

      const ext = path.extname(imagePath).substring(1).toLowerCase();

      const mime = {
        png: "image/png",
        jpg: "image/jpeg",
        jpeg: "image/jpeg",
        gif: "image/gif",
        svg: "image/svg+xml",
        webp: "image/webp",
      };

      const base64 = fs.readFileSync(imagePath).toString("base64");

      return `<img${before}src="data:${mime[ext]};base64,${base64}"${after}>`;
    },
  );
};
