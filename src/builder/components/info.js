const Component = require("../engine/component");

class InfoComponent extends Component {
  render() {
    return `
<div class="callout info">

<div class="callout-title">

ℹ Información

</div>

<div class="callout-body">

${this.data.content}

</div>

</div>
`;
  }
}

module.exports = InfoComponent;
