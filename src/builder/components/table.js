const Component = require("../engine/component");
const { marked } = require("marked");

class TableComponent extends Component {
  render() {
    const props = this.data.props || {};

    return `
<div class="elastic-table-card">

    ${props.title ? `<h3>${props.title}</h3>` : ""}

    ${marked.parse(this.data.content)}

</div>`;
  }
}

module.exports = TableComponent;
