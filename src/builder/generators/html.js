const fs = require("fs-extra");
const { marked } = require("marked");
const { markedHighlight } = require("marked-highlight");
const hljs = require("highlight.js");

const config = require("../config");

const { parseComponents } = require("../engine/parser");
const { renderComponent } = require("../engine/renderer");

const NodeGroupComponent = require("../components/nodeGroup");
const parseCallouts = require("../../utils/parseCallouts");

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
  // ==========================================
  // Leer archivos
  // ==========================================

  let markdown = fs.readFileSync(config.markdownFile, "utf8");

  markdown = parseCallouts(markdown);

  let template = fs.readFileSync(config.templateFile, "utf8");

  const { toc, anchors } = generateTOC(markdown);

  const sidebar = buildSidebar(toc);

  // ==========================================
  // Buscar componentes
  // ==========================================

  const components = parseComponents(markdown);

  const nodeComponents = components.filter(
    (component) => component.type === "node",
  );

  const otherComponents = components.filter(
    (component) => component.type !== "node",
  );

  // ==========================================
  // Renderizar todos los componentes excepto Node
  // ==========================================

  for (const component of otherComponents) {
    const html = renderComponent(component);

    markdown = markdown.replace(component.raw, html);
  }

  // ==========================================
  // Agrupar automáticamente los Nodes
  // ==========================================

  if (nodeComponents.length) {
    const groups = {};

    nodeComponents.forEach((node) => {
      const role = node.props.role;

      if (!groups[role]) {
        groups[role] = [];
      }

      groups[role].push(node.props);
    });

    let groupedHtml = "";

    Object.entries(groups).forEach(([role, nodes]) => {
      groupedHtml += new NodeGroupComponent({
        role,
        nodes,
      }).render();
    });

    // eliminar todos los nodos individuales
    nodeComponents.forEach((node, index) => {
      if (index === 0) {
        markdown = markdown.replace(node.raw, groupedHtml);
      } else {
        markdown = markdown.replace(node.raw, "");
      }
    });
  }

  // ==========================================
  // Agregar Anchors
  // ==========================================

  for (const anchor of anchors) {
    markdown = markdown.replace(anchor.original, anchor.replacement);
  }

  // ==========================================
  // Markdown -> HTML
  // ==========================================
  //console.log(markdown);
  const htmlContent = marked.parse(markdown);

  // ==========================================
  // Template
  // ==========================================

  template = template.replaceAll("{{TITLE}}", config.config.title);

  template = template.replaceAll("{{SUBTITLE}}", config.config.subtitle);

  template = template.replace("{{CONTENT}}", htmlContent);

  template = template.replace("{{SIDEBAR}}", sidebar);

  console.log("✔ HTML generado correctamente");

  return template;
}

module.exports = generateHTML;
