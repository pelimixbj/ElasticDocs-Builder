const fs = require("fs-extra");
const { marked } = require("marked");
const { markedHighlight } = require("marked-highlight");
const hljs = require("highlight.js");

const config = require("../config");

const { parseComponents } = require("../engine/parser");
const { renderComponent } = require("../engine/renderer");

// Configurar Marked una sola vez
marked.use(
  markedHighlight({
    langPrefix: "hljs language-",

    highlight(code, lang) {
      const language = lang && hljs.getLanguage(lang) ? lang : "plaintext";

      return hljs.highlight(code, {
        language,
      }).value;
    },
  }),
);

function generateTOC(markdown) {
  const lines = markdown.split("\n");

  const toc = [];
  const anchors = [];

  for (const line of lines) {
    const match = line.match(/^(#{1,4})\s+(.*)$/);

    if (!match) continue;

    const level = match[1].length;
    const title = match[2].trim();

    const id = title
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    toc.push({
      level,
      title,
      id,
    });

    anchors.push({
      original: line,
      replacement: `${line} <a id="${id}"></a>`,
    });
  }

  return {
    toc,
    anchors,
  };
}

function buildSidebar(toc) {
  let html = "";

  toc.forEach((item) => {
    html += `
      <a class="toc-level-${item.level}" href="#${item.id}">
        ${item.title}
      </a>
    `;
  });

  return html;
}

function generateHTML() {
  // Leer archivos
  let markdown = fs.readFileSync(config.markdownFile, "utf8");
  let template = fs.readFileSync(config.templateFile, "utf8");
  const { toc, anchors } = generateTOC(markdown);
  const sidebar = buildSidebar(toc);

  // Buscar componentes
  const components = parseComponents(markdown);

  // Reemplazar componentes
  for (const component of components) {
    const html = renderComponent(component);
    markdown = markdown.replace(component.raw, html);
  }
  for (const anchor of anchors) {
    markdown = markdown.replace(anchor.original, anchor.replacement);
  }
  // Convertir Markdown a HTML
  const htmlContent = marked.parse(markdown);

  // Reemplazar variables del template
  template = template.replaceAll("{{TITLE}}", config.config.title);
  template = template.replaceAll("{{SUBTITLE}}", config.config.subtitle);
  template = template.replace("{{CONTENT}}", htmlContent);
  template = template.replace("{{SIDEBAR}}", sidebar);

  console.log("✔ HTML generado correctamente");

  return template;
}

module.exports = generateHTML;
