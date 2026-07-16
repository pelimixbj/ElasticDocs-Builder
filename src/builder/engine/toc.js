function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[áàä]/g, "a")
    .replace(/[éèë]/g, "e")
    .replace(/[íìï]/g, "i")
    .replace(/[óòö]/g, "o")
    .replace(/[úùü]/g, "u")
    .replace(/ñ/g, "n")
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function generateTOC(html) {
  const headings = [];

  html = html.replace(/<(h[1-4])>(.*?)<\/h[1-4]>/g, (_, tag, title) => {
    const id = slugify(title);

    headings.push({
      level: Number(tag.substring(1)),
      title,
      id,
    });

    return `<${tag} id="${id}">${title}</${tag}>`;
  });

  let sidebar = "<ul>";

  headings.forEach((h) => {
    sidebar += `
<li class="toc-h${h.level}">
<a href="#${h.id}">
${h.title}
</a>
</li>`;
  });

  sidebar += "</ul>";

  return {
    html,
    sidebar,
  };
}

module.exports = {
  generateTOC,
};
