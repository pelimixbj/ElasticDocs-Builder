class Architecture {
  constructor(component) {
    this.props = component.props || {};
  }

  render() {
    return `

<div class="elastic-card">

<h2>${this.props.title || "Architecture"}</h2>

<table>

<tr>
<td>Environment</td>
<td>${this.props.environment || "-"}</td>
</tr>

<tr>
<td>Security</td>
<td>${this.props.security || "-"}</td>
</tr>

<tr>
<td>Monitoring</td>
<td>${this.props.monitoring || "-"}</td>
</tr>

<tr>
<td>Nodes</td>
<td>${this.props.nodes || "-"}</td>
</tr>

</table>

</div>

`;
  }
}

module.exports = Architecture;
