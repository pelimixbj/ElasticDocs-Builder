const Component = require("../engine/component");

class WarningComponent extends Component {
  render() {
    return `
<div class="callout warning">

<div class="callout-title">

⚠️ Warning

</div>

<div class="callout-body">

${this.data.content}

</div>

</div>
`;
  }
}

module.exports = WarningComponent;
