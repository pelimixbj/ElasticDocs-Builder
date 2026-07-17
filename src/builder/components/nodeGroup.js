const Component = require("../engine/component");

class NodeGroupComponent extends Component {
  render() {
    const { role, nodes } = this.data;

    const colors = {
      Master: "#3edf4b",
      Hot: "#f92116",
      Cold: "#2563eb",
      Frozen: "#8b5cf6",
      Kibana: "#f4b400",
      Fleet: "#06b6d4",
      Logstash: "#92400e",
      ML: "#f97316",
    };

    const icons = {
      Master: "🟢",
      Hot: "🔴",
      Cold: "🔵",
      Frozen: "🟣",
      Kibana: "🟡",
      Fleet: "🔷",
      Logstash: "🟤",
      ML: "🟠",
    };

    const nodeCards = nodes
      .map(
        (node) => `
<div class="node-card">
<div class="node-card-title">🖥 ${node.hostname}</div>
<div class="node-card-body">
<div><span>🌐</span><strong>IP</strong><p>${node.ip}</p></div>
<div><span>💾</span><strong>RAM</strong><p>${node.ram}</p></div>
<div><span>⚙</span><strong>CPU</strong><p>${node.cpu}</p></div>
<div><span>🗄</span><strong>Disk</strong><p>${node.disk}</p></div>
<div><span>🐧</span><strong>OS</strong><p>${node.os}</p></div>
</div>
</div>`,
      )
      .join("");

    return `<div class="node-group">
<div class="node-group-header" style="border-left:6px solid ${colors[role] || "#0ea5e9"}">
<span>${icons[role] || "🖥"} ${role.toUpperCase()} NODES</span>
<span class="node-count">${nodes.length}</span>
</div>
<div class="node-grid">
${nodeCards}
</div>
</div>`;
  }
}

module.exports = NodeGroupComponent;
