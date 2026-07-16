const fs = require("fs");
const path = require("path");

const Component = require("../engine/component");

class ElasticComponent extends Component {
  render() {
    const { type } = this.data.props || {};

    if (!type) {
      return `<p><strong>Error:</strong> Debe indicar la propiedad <code>type</code>.</p>`;
    }

    const componentPath = path.join(
      __dirname,
      "..",
      "content",
      "elastic",
      `${type}.js`,
    );

    if (!fs.existsSync(componentPath)) {
      return `<p><strong>Error:</strong> El componente '${type}' no existe.</p>`;
    }

    delete require.cache[require.resolve(componentPath)];

    return require(componentPath);
  }
}

module.exports = ElasticComponent;
