const Component = require("../engine/component");

class SuccessComponent extends Component {
  render() {
    return `
<div class="callout success">

<div class="callout-title">

✔ Correcto

</div>

<div class="callout-body">

${this.data.content}

</div>

</div>
`;
  }
}

module.exports = SuccessComponent;
