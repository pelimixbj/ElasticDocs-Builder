const Component = require("../engine/component");

class ClusterComponent extends Component {
  render() {
    const p = this.data.props || {};

    return `
<div class="elastic-card elastic-cluster">
<h2>Elastic Cluster</h2>

<table>
<tr>
<td>Master</td>
<td>${p.master || "-"}</td>
</tr>

<tr>
<td>Hot</td>
<td>${p.hot || "-"}</td>
</tr>

<tr>
<td>Warm</td>
<td>${p.warm || "-"}</td>
</tr>

<tr>
<td>Cold</td>
<td>${p.cold || "-"}</td>
</tr>

<tr>
<td>Frozen</td>
<td>${p.frozen || "-"}</td>
</tr>

<tr>
<td>ML</td>
<td>${p.ml || "-"}</td>
</tr>

<tr>
<td>Kibana</td>
<td>${p.kibana || "-"}</td>
</tr>

<tr>
<td>Fleet</td>
<td>${p.fleet || "-"}</td>
</tr>

<tr>
<td>Logstash</td>
<td>${p.logstash || "-"}</td>
</tr>

</table>
</div>`;
  }
}

module.exports = ClusterComponent;
