const Component = require("../engine/component");

class TopologyComponent extends Component {
  render() {
    const p = this.data.props || {};

    return `
<div class="elastic-card elastic-topology">
<h3>${p.title || "Topology"}</h3>

<table>
<tr>
<td>Environment</td>
<td>${p.environment || "-"}</td>
</tr>

<tr>
<td>Sites</td>
<td>${p.sites || "-"}</td>
</tr>

<tr>
<td>Total Nodes</td>
<td>${p.nodes || "-"}</td>
</tr>
</table>
</div>`;
  }
}

module.exports = TopologyComponent;
