const registry = require("./registry");

function renderComponent(component) {
  const ComponentClass = registry[component.type];

  if (!ComponentClass) {
    console.log("NO EXISTE:", component.type);
    return component.raw;
  }

  console.log("Renderizando:", component.type);

  const instance = new ComponentClass(component);

  const html = instance.render();

  console.log(html);

  return html;
}

module.exports = {
  renderComponent,
};
