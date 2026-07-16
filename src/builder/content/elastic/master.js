module.exports = `
<div class="elastic-card">

<h2>Elasticsearch Master Nodes</h2>

<p>
Los nodos <strong>Master</strong> son responsables de administrar el estado del clúster Elasticsearch.
No almacenan información de negocio ni procesan búsquedas intensivas.
</p>

<h3>Responsabilidades</h3>

<ul>
<li>Elegir el nodo Master activo.</li>
<li>Mantener el estado del clúster.</li>
<li>Crear y eliminar índices.</li>
<li>Administrar shards y réplicas.</li>
<li>Detectar fallos de nodos.</li>
<li>Redistribuir shards.</li>
<li>Gestionar cambios de configuración.</li>
</ul>

<p>
La existencia de tres nodos Master garantiza el quórum y la alta disponibilidad del clúster.
</p>

</div>
`;
