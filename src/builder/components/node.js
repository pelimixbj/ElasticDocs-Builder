const Component = require("../engine/component");

class NodeComponent extends Component {
  render() {
    const p = this.data.props;

    const roles = {
      master: {
        icon: "🟢",
        className: "master",
        title: "MASTER",
      },

      hot: {
        icon: "🟠",
        className: "hot",
        title: "HOT",
      },

      cold: {
        icon: "🔵",
        className: "cold",
        title: "COLD",
      },

      frozen: {
        icon: "🟣",
        className: "frozen",
        title: "FROZEN",
      },

      ml: {
        icon: "🟡",
        className: "ml",
        title: "MACHINE LEARNING",
      },

      kibana: {
        icon: "⚫",
        className: "kibana",
        title: "KIBANA",
      },
    };

    const role = (p.role || "").toLowerCase();

    const info = roles[role] || {
      icon: "⚪",
      className: "default",
      title: p.role || "NODE",
    };

    return `
<div class="elastic-node-card ${info.className}">

    <div class="node-header">
        ${info.icon} ${info.title}
    </div>

    <div class="node-hostname">
        ${p.hostname}
    </div>

    <div class="node-info">

        <div>
            <span>🌐</span>
            <strong>IP</strong>
            <span>${p.ip}</span>
        </div>

        <div>
            <span>💾</span>
            <strong>RAM</strong>
            <span>${p.ram}</span>
        </div>

        <div>
            <span>⚙</span>
            <strong>CPU</strong>
            <span>${p.cpu}</span>
        </div>

        <div>
            <span>🖴</span>
            <strong>DISK</strong>
            <span>${p.disk}</span>
        </div>

        <div>
            <span>🖥</span>
            <strong>OS</strong>
            <span>${p.os}</span>
        </div>

    </div>

</div>
`;
  }
}

module.exports = NodeComponent;
