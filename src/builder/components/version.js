class Version {
  constructor(component) {
    this.props = component.props || {};
  }

  render() {
    return `

<div class="elastic-card elastic-version">

<h2>Installed Versions</h2>


<table>

<tr>
<td>Elasticsearch</td>
<td>${this.props.elasticsearch || "-"}</td>
</tr>

<tr>
<td>Kibana</td>
<td>${this.props.kibana || "-"}</td>
</tr>

<tr>
<td>Logstash</td>
<td>${this.props.logstash || "-"}</td>
</tr>

<tr>
<td>Fleet Server</td>
<td>${this.props.fleet || "-"}</td>
</tr>

<tr>
<td>Elastic Agent</td>
<td>${this.props.agent || "-"}</td>
</tr>

</table>

</div>

`;
  }
}

module.exports = Version;
