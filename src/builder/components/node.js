const Component = require("../engine/component");

class NodeComponent extends Component {
  render() {
    const p = this.data.props;

    return `
<div class="elastic-card elastic-node">
<h3>${p.hostname}</h3>

<table>
<tr>
<td>Role</td>
<td>${p.role}</td>
</tr>

<tr>
<td>IP</td>
<td>${p.ip}</td>
</tr>

<tr>
<td>RAM</td>
<td>${p.ram}</td>
</tr>

<tr>
<td>CPU</td>
<td>${p.cpu}</td>
</tr>

<tr>
<td>Disk</td>
<td>${p.disk}</td>
</tr>

<tr>
<td>OS</td>
<td>${p.os}</td>
</tr>
</table>
</div>`;
  }
}

module.exports = NodeComponent;
