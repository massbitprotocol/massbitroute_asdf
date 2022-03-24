"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2929],{"./public/app/features/datasources/DataSourceDashboards.tsx":(a,s,e)=>{e.r(s),e.d(s,{DataSourceDashboards:()=>g,default:()=>f});var o=e("./node_modules/react/index.js"),t=e("./node_modules/react-redux/es/index.js"),r=e("./public/app/core/components/Page/Page.tsx"),n=e("./public/app/features/datasources/DashboardsTable.tsx"),d=e("./public/app/core/selectors/navModel.ts"),u=e("./public/app/features/datasources/state/actions.ts"),p=e("./public/app/features/plugins/state/actions.ts"),i=e("./public/app/features/dashboard/state/actions.ts"),c=e("./public/app/features/datasources/state/selectors.ts"),l=e("./node_modules/react/jsx-runtime.js");function h(a,s,e){return s in a?Object.defineProperty(a,s,{value:e,enumerable:!0,configurable:!0,writable:!0}):a[s]=e,a}const b={importDashboard:i.$j,loadDataSource:u.gv,loadPluginDashboards:p.m3,removeDashboard:i.fG},m=(0,t.connect)((function(a,s){const e=s.match.params.uid;return{navModel:(0,d.h)(a.navIndex,`datasource-dashboards-${e}`),dashboards:a.plugins.dashboards,dataSource:(0,c.f6)(a.dataSources,e),isLoading:a.plugins.isLoadingPluginDashboards,dataSourceId:e}}),b);class g extends o.PureComponent{constructor(...a){super(...a),h(this,"onImport",((a,s)=>{const{dataSource:e,importDashboard:o}=this.props,t={pluginId:a.pluginId,path:a.path,overwrite:s,inputs:[]};e&&t.inputs.push({name:"*",type:"datasource",pluginId:e.type,value:e.name}),o(t,a.title)})),h(this,"onRemove",(a=>{this.props.removeDashboard(a.importedUri)}))}async componentDidMount(){const{loadDataSource:a,dataSourceId:s}=this.props;await a(s),this.props.loadPluginDashboards()}render(){const{dashboards:a,navModel:s,isLoading:e}=this.props;return(0,l.jsx)(r.Z,{navModel:s,children:(0,l.jsx)(r.Z.Contents,{isLoading:e,children:(0,l.jsx)(n.Z,{dashboards:a,onImport:(a,s)=>this.onImport(a,s),onRemove:a=>this.onRemove(a)})})})}}const f=m(g)}}]);
//# sourceMappingURL=DataSourceDashboards.8128b05ac04b15cbf98d.js.map