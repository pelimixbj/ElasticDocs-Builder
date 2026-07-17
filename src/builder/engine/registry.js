const WarningComponent = require("../components/warning");
const InfoComponent = require("../components/info");
const SuccessComponent = require("../components/success");
const ElasticComponent = require("../components/component");
//const NoteComponent = require("../components/note");
const TableComponent = require("../components/table");

const ClusterComponent = require("../components/cluster");
const NodeComponent = require("../components/node");
const VersionComponent = require("../components/version");
const ServerComponent = require("../components/server");
const TopologyComponent = require("../components/topology");
const ArchitectureComponent = require("../components/architecture");
const CoverComponent = require("../components/cover");
const InfrastructureComponent = require("../components/infrastructure");
const NodeGroupComponent = require("../components/nodeGroup");

module.exports = {
  warning: WarningComponent,
  info: InfoComponent,
  success: SuccessComponent,
  //note: NoteComponent,
  cluster: ClusterComponent,
  node: NodeComponent,
  version: VersionComponent,
  server: ServerComponent,
  topology: TopologyComponent,
  architecture: ArchitectureComponent,
  component: ElasticComponent,
  table: TableComponent,
  cover: CoverComponent,
  infrastructure: InfrastructureComponent,
  nodegroup: NodeGroupComponent,
};
