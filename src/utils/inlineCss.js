const fs = require("fs-extra");
const path = require("path");

function loadCss(filePath, loaded = new Set()) {
  if (loaded.has(filePath)) {
    return "";
  }

  loaded.add(filePath);

  let css = fs.readFileSync(filePath, "utf8");

  css = css.replace(/@import\s+url\(["'](.+?)["']\);?/g, (_, importFile) => {
    const importPath = path.join(path.dirname(filePath), importFile);

    if (fs.existsSync(importPath)) {
      return loadCss(importPath, loaded);
    }

    return "";
  });

  return css;
}

function inlineCss(cssFolder) {
  const main = path.join(cssFolder, "main.css");

  return loadCss(main);
}

module.exports = inlineCss;
