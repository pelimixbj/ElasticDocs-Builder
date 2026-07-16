class Server {
  constructor(component) {
    this.props = component.props || {};
  }

  render() {
    return `

<div class="elastic-card elastic-server">

<h3>${this.props.hostname || "Server"}</h3>

<table>

<tr>
<td>Environment</td>
<td>${this.props.environment || "-"}</td>
</tr>

<tr>
<td>Operating System</td>
<td>${this.props.os || "-"}</td>
</tr>

<tr>
<td>CPU</td>
<td>${this.props.cpu || "-"}</td>
</tr>

<tr>
<td>RAM</td>
<td>${this.props.ram || "-"}</td>
</tr>

<tr>
<td>Storage</td>
<td>${this.props.storage || "-"}</td>
</tr>

<tr>
<td>IP</td>
<td>${this.props.ip || "-"}</td>
</tr>

</table>

</div>

`;
  }
}

module.exports = Server;
