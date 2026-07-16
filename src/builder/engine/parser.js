function parseProps(content) {
  const props = {};

  const lines = content.split("\n");

  for (const line of lines) {
    const value = line.trim();

    if (!value) continue;

    const index = value.indexOf("=");

    if (index === -1) continue;

    const key = value.substring(0, index).trim();
    const val = value.substring(index + 1).trim();

    props[key] = val;
  }

  return props;
}

function parseComponents(markdown) {
  const regex = /:::(\w+)\s*([\s\S]*?):::/gm;

  const components = [];

  let match;

  while ((match = regex.exec(markdown)) !== null) {
    const content = match[2].trim();

    components.push({
      raw: match[0],
      type: match[1],
      content,
      props: parseProps(content),
    });
  }

  return components;
}

module.exports = {
  parseComponents,
};
