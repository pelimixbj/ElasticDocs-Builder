const Component = require("../engine/component");

class Cover extends Component {
  render() {
    const p = this.data.props || {};

    return `
<div class="elastic-cover">

<div class="elastic-cover-left">

<div class="cover-label">
ENTREGABLE FINAL DE PROYECTO
</div>

<h1>${p.client || ""}</h1>

<p class="cover-description">
${p.subtitle || ""}
</p>

</div>

<div class="elastic-cover-right">

<table>

<tr>
<th>CLIENTE</th>
<td>${p.client || ""}</td>
</tr>

<tr>
<th>CONSULTORA</th>
<td>${p.company || ""}</td>
</tr>

<tr>
<th>ESTADO</th>
<td>
<span class="cover-status">${p.status || ""}</span>
</td>
</tr>

<tr>
<th>FECHA</th>
<td>${p.date || ""}</td>
</tr>

<tr>
<th>VERSIÓN</th>
<td>${p.version || ""}</td>
</tr>

</table>

</div>

</div>`;
  }
}

module.exports = Cover;
