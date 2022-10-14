"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3549],{44141:(e,t,r)=>{r.r(t),r.d(t,{plugin:()=>ce});var s,a,i,n,l,c,o,u,p,h,d,y,g,m,v,j,b,S,T,x,f,Q=r(43215),O=r(36636),C=r(68404),L=r(45916);class M extends C.PureComponent{render(){return(0,L.jsxs)("div",{children:[s||(s=(0,L.jsx)("h2",{children:"Cloud Monitoring alias patterns"})),(0,L.jsxs)("div",{children:[a||(a=(0,L.jsx)("p",{children:"Format the legend keys any way you want by using alias patterns. Format the legend keys any way you want by using alias patterns."})),"Example:",i||(i=(0,L.jsx)("code",{children:"{{metric.name}} - {{metric.label.instance_name}}"})),n||(n=(0,L.jsx)("br",{})),"Result:   ",l||(l=(0,L.jsx)("code",{children:"cpu/usage_time - server1-europe-west-1"})),c||(c=(0,L.jsx)("br",{})),o||(o=(0,L.jsx)("br",{})),u||(u=(0,L.jsx)("label",{children:"Patterns"})),p||(p=(0,L.jsx)("br",{})),(0,L.jsxs)("ul",{className:O.css`
              list-style: none;
            `,children:[h||(h=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{metric.type}}"})," = metric type e.g. compute.googleapis.com/instance/cpu/usage_time"]})),d||(d=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{metric.name}}"})," = name part of metric e.g. instance/cpu/usage_time"]})),y||(y=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{metric.service}}"})," = service part of metric e.g. compute"]})),g||(g=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{metric.label.label_name}}"})," = Metric label metadata e.g. metric.label.instance_name"]})),m||(m=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{resource.label.label_name}}"})," = Resource label metadata e.g. resource.label.zone"]})),v||(v=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{metadata.system_labels.name}}"})," = Meta data system labels e.g. metadata.system_labels.name. For this to work, the needs to be included in the group by"]})),j||(j=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{metadata.user_labels.name}}"})," = Meta data user labels e.g. metadata.user_labels.name. For this to work, the needs to be included in the group by"]})),b||(b=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{bucket}}"})," = bucket boundary for distribution metrics when using a heatmap in Grafana"]})),S||(S=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{project}}"})," = The project name that was specified in the query editor"]})),T||(T=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{service}}"})," = The service id that was specified in the SLO query editor"]})),x||(x=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{slo}}"})," = The SLO id that was specified in the SLO query editor"]})),f||(f=(0,L.jsxs)("li",{children:[(0,L.jsx)("code",{children:"{{selector}}"})," = The Selector function that was specified in the SLO query editor"]}))]})]})]})}}var w=r(28153);class P extends C.PureComponent{render(){return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(w.ConnectionConfig,Object.assign({},this.props))})}}var N,R=r(59137),B=r(90923),D=r(2986),q=r(25576),E=r(49224);const F=["metricDescriptors","labels","metricTypes","services"];function A(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class I extends C.PureComponent{constructor(e){super(e),A(this,"queryTypes",[{value:q.Bp.Projects,label:"Projects"},{value:q.Bp.Services,label:"Services"},{value:q.Bp.MetricTypes,label:"Metric Types"},{value:q.Bp.LabelKeys,label:"Label Keys"},{value:q.Bp.LabelValues,label:"Label Values"},{value:q.Bp.ResourceTypes,label:"Resource Types"},{value:q.Bp.Aggregations,label:"Aggregations"},{value:q.Bp.Aligners,label:"Aligners"},{value:q.Bp.AlignmentPeriods,label:"Alignment Periods"},{value:q.Bp.Selectors,label:"Selectors"},{value:q.Bp.SLOServices,label:"SLO Services"},{value:q.Bp.SLO,label:"Service Level Objectives (SLO)"}]),A(this,"defaults",{selectedQueryType:this.queryTypes[0].value,metricDescriptors:[],selectedService:"",selectedMetricType:"",labels:[],labelKey:"",metricTypes:[],services:[],sloServices:[],selectedSLOService:"",projects:[],projectName:"",loading:!0}),A(this,"onPropsChange",(()=>{const e=function(e,t){if(null==e)return{};var r,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(this.state,F);this.props.onChange(Object.assign({},e,{refId:"CloudMonitoringVariableQueryEditor-VariableQuery"}))})),this.state=Object.assign(this.defaults,{projectName:this.props.datasource.getDefaultProject()},this.props.query)}async componentDidMount(){const e=await this.props.datasource.getProjects(),t=await this.props.datasource.getMetricTypes(this.props.query.projectName||this.props.datasource.getDefaultProject()),r=(0,D.qA)(t).map((e=>({value:e.service,label:e.serviceShortName})));let s="";r.some((e=>e.value===(0,B.getTemplateSrv)().replace(this.state.selectedService)))?s=this.state.selectedService:r&&r.length>0&&(s=r[0].value);const{metricTypes:a,selectedMetricType:i}=(0,D.FL)(t,this.state.selectedMetricType,(0,B.getTemplateSrv)().replace(this.state.selectedMetricType),(0,B.getTemplateSrv)().replace(s)),n=await this.props.datasource.getSLOServices(this.state.projectName),l=Object.assign({services:r,selectedService:s,metricTypes:a,selectedMetricType:i,metricDescriptors:t,projects:e},await this.getLabels(i,this.state.projectName),{sloServices:n,loading:!1});this.setState(l,(()=>this.onPropsChange()))}async onQueryTypeChange(e){const t=Object.assign({selectedQueryType:e},await this.getLabels(this.state.selectedMetricType,this.state.projectName,e));this.setState(t)}async onProjectChange(e){const t=await this.props.datasource.getMetricTypes(e),r=await this.getLabels(this.state.selectedMetricType,e),{metricTypes:s,selectedMetricType:a}=(0,D.FL)(t,this.state.selectedMetricType,(0,B.getTemplateSrv)().replace(this.state.selectedMetricType),(0,B.getTemplateSrv)().replace(this.state.selectedService)),i=await this.props.datasource.getSLOServices(e);this.setState(Object.assign({},r,{metricTypes:s,selectedMetricType:a,metricDescriptors:t,projectName:e,sloServices:i}),(()=>this.onPropsChange()))}async onServiceChange(e){const{metricTypes:t,selectedMetricType:r}=(0,D.FL)(this.state.metricDescriptors,this.state.selectedMetricType,(0,B.getTemplateSrv)().replace(this.state.selectedMetricType),(0,B.getTemplateSrv)().replace(e)),s=Object.assign({selectedService:e,metricTypes:t,selectedMetricType:r},await this.getLabels(r,this.state.projectName));this.setState(s,(()=>this.onPropsChange()))}async onMetricTypeChange(e){const t=Object.assign({selectedMetricType:e},await this.getLabels(e,this.state.projectName));this.setState(t,(()=>this.onPropsChange()))}onLabelKeyChange(e){this.setState({labelKey:e},(()=>this.onPropsChange()))}componentDidUpdate(e,t){const r=t.selectedQueryType!==this.state.selectedQueryType,s=this.state.selectedSLOService!==t.selectedSLOService;(r||s)&&this.onPropsChange()}async getLabels(e,t){let r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.state.selectedQueryType,s={labels:this.state.labels,labelKey:this.state.labelKey};if(e&&r===q.Bp.LabelValues){const r=await(0,D.Qd)(this.props.datasource,e,t),a=r.some((e=>e===(0,B.getTemplateSrv)().replace(this.state.labelKey)))?this.state.labelKey:r[0];s={labels:r,labelKey:a}}return s}renderQueryTypeSwitch(e){const t={label:"Template Variables",expanded:!1,options:(0,B.getTemplateSrv)().getVariables().map((e=>({value:`$${e.name}`,label:`$${e.name}`})))};switch(e){case q.Bp.MetricTypes:return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(E.Th,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"}),(0,L.jsx)(E.Th,{value:this.state.selectedService,options:[t,...this.state.services],onChange:e=>this.onServiceChange(e),label:"Service"})]});case q.Bp.LabelKeys:case q.Bp.LabelValues:case q.Bp.ResourceTypes:return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(E.Th,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"}),(0,L.jsx)(E.Th,{value:this.state.selectedService,options:[t,...this.state.services],onChange:e=>this.onServiceChange(e),label:"Service"}),(0,L.jsx)(E.Th,{value:this.state.selectedMetricType,options:[t,...this.state.metricTypes.map((e=>{let{value:t,name:r}=e;return{value:t,label:r}}))],onChange:e=>this.onMetricTypeChange(e),label:"Metric Type"}),e===q.Bp.LabelValues&&(0,L.jsx)(E.Th,{value:this.state.labelKey,options:[t,...this.state.labels.map((e=>({value:e,label:e})))],onChange:e=>this.onLabelKeyChange(e),label:"Label Key"})]});case q.Bp.Aligners:case q.Bp.Aggregations:return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(E.Th,{value:this.state.selectedService,options:[t,...this.state.services],onChange:e=>this.onServiceChange(e),label:"Service"}),(0,L.jsx)(E.Th,{value:this.state.selectedMetricType,options:[t,...this.state.metricTypes.map((e=>{let{value:t,name:r}=e;return{value:t,label:r}}))],onChange:e=>this.onMetricTypeChange(e),label:"Metric Type"})]});case q.Bp.SLOServices:return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)(E.Th,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"})});case q.Bp.SLO:return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(E.Th,{allowCustomValue:!0,value:this.state.projectName,options:[t,...this.state.projects],onChange:e=>this.onProjectChange(e),label:"Project"}),(0,L.jsx)(E.Th,{value:this.state.selectedSLOService,options:[t,...this.state.sloServices],onChange:e=>{this.setState(Object.assign({},this.state,{selectedSLOService:e}))},label:"SLO Service"})]});default:return""}}render(){return this.state.loading?N||(N=(0,L.jsxs)("div",{className:"gf-form max-width-21",children:[(0,L.jsx)("span",{className:"gf-form-label width-10 query-keyword",children:"Query Type"}),(0,L.jsx)("div",{className:"gf-form-select-wrapper max-width-12",children:(0,L.jsx)("select",{className:"gf-form-input",children:(0,L.jsx)("option",{children:"Loading..."})})})]})):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(E.Th,{value:this.state.selectedQueryType,options:this.queryTypes,onChange:e=>this.onQueryTypeChange(e),label:"Query Type"}),this.renderQueryTypeSwitch(this.state.selectedQueryType)]})}}var V,K=r(82897),k=r(58799),G=r(71808),_=r(94396),U=r(71114),$=r(35778),z=r(75478),H=r(7166),W=r(93368),Z=r(8072),J=r(3490),X=r(22002),Y=r(54919),ee=r(80425);const te=e=>{var t;const{datasource:r,query:s,onRunQuery:a,data:i,onChange:n}=e,l=null!=i&&i.series.length?null==i?void 0:i.series[0].meta:{},c=null!==(t=null==l?void 0:l.custom)&&void 0!==t?t:{},o=Object.assign({},(e=>({editorMode:q.je.Visual,projectName:e.getDefaultProject(),projects:[],metricType:"",filters:[],metricKind:q.lH.GAUGE,valueType:"",refId:"annotationQuery",title:"",text:"",labels:{},variableOptionGroup:{},variableOptions:[],query:"",crossSeriesReducer:"REDUCE_NONE",perSeriesAligner:q.CS.ALIGN_NONE,alignmentPeriod:"grafana-auto"}))(r),s.metricQuery),[u,p]=(0,C.useState)(o.title||""),[h,d]=(0,C.useState)(o.text||""),y={label:"Template Variables",options:r.getVariables().map(Q.toOption)},g=e=>n(Object.assign({},s,{metricQuery:e})),m=e=>{p(e.target.value)},v=e=>{d(e.target.value)};return(0,W.Z)((()=>{n(Object.assign({},s,{metricQuery:Object.assign({},o,{title:u})}))}),1e3,[u,n]),(0,W.Z)((()=>{n(Object.assign({},s,{metricQuery:Object.assign({},o,{text:h})}))}),1e3,[h,n]),(0,L.jsxs)(Z.EditorRows,{children:[B.config.featureToggles.cloudMonitoringExperimentalUI?(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(Y.a1,{refId:s.refId,variableOptionGroup:y,customMetaData:c,onChange:g,onRunQuery:a,datasource:r,query:o}),(0,L.jsx)(Z.EditorField,{label:"Title",htmlFor:"annotation-query-title",children:(0,L.jsx)(J.Input,{id:"annotation-query-title",value:u,onChange:m})}),(0,L.jsx)(Z.EditorField,{label:"Text",htmlFor:"annotation-query-text",children:(0,L.jsx)(J.Input,{id:"annotation-query-text",value:h,onChange:v})})]}):(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)(ee.a1,{refId:s.refId,variableOptionGroup:y,customMetaData:c,onChange:g,onRunQuery:a,datasource:r,query:o}),(0,L.jsx)(E.x5,{label:"Title",htmlFor:"annotation-query-title",children:(0,L.jsx)(J.Input,{id:"annotation-query-title",value:u,width:X.d7,onChange:m})}),(0,L.jsx)(E.x5,{label:"Text",htmlFor:"annotation-query-text",children:(0,L.jsx)(J.Input,{id:"annotation-query-text",value:h,width:X.d7,onChange:v})})]}),V||(V=(0,L.jsx)(E.zI,{}))]})};class re{constructor(e){this.datasource=e}async execute(e){try{switch(e.projectName||(e.projectName=this.datasource.getDefaultProject()),e.selectedQueryType){case q.Bp.Projects:return this.handleProjectsQuery();case q.Bp.Services:return this.handleServiceQuery(e);case q.Bp.MetricTypes:return this.handleMetricTypesQuery(e);case q.Bp.LabelKeys:return this.handleLabelKeysQuery(e);case q.Bp.LabelValues:return this.handleLabelValuesQuery(e);case q.Bp.ResourceTypes:return this.handleResourceTypeQuery(e);case q.Bp.Aligners:return this.handleAlignersQuery(e);case q.Bp.AlignmentPeriods:return this.handleAlignmentPeriodQuery();case q.Bp.Aggregations:return this.handleAggregationQuery(e);case q.Bp.SLOServices:return this.handleSLOServicesQuery(e);case q.Bp.SLO:return this.handleSLOQuery(e);case q.Bp.Selectors:return this.handleSelectorQuery();default:return[]}}catch(t){return console.error(`Could not run CloudMonitoringMetricFindQuery ${e}`,t),[]}}async handleProjectsQuery(){return(await this.datasource.getProjects()).map((e=>({text:e.label,value:e.value,expandable:!0})))}async handleServiceQuery(e){let{projectName:t}=e;const r=await this.datasource.getMetricTypes(t);return(0,D.qA)(r).map((e=>({text:e.serviceShortName,value:e.service,expandable:!0})))}async handleMetricTypesQuery(e){let{selectedService:t,projectName:r}=e;if(!t)return[];const s=await this.datasource.getMetricTypes(r);return(0,D.Qf)(s,this.datasource.templateSrv.replace(t)).map((e=>({text:e.displayName,value:e.type,expandable:!0})))}async handleLabelKeysQuery(e){let{selectedMetricType:t,projectName:r}=e;if(!t)return[];return(await(0,D.Qd)(this.datasource,t,r)).map(this.toFindQueryResult)}async handleLabelValuesQuery(e){let{selectedMetricType:t,labelKey:r,projectName:s}=e;if(!t)return[];const a=await this.datasource.getLabels(t,"handleLabelValuesQuery",s,{groupBys:[r],crossSeriesReducer:"REDUCE_MEAN"}),i=this.datasource.templateSrv.replace(r);return(a.hasOwnProperty(i)?a[i]:[]).map(this.toFindQueryResult)}async handleResourceTypeQuery(e){var t,r;let{selectedMetricType:s,projectName:a}=e;if(!s)return[];return null!==(t=null===(r=(await this.datasource.getLabels(s,"handleResourceTypeQueryQueryType",a))["resource.type"])||void 0===r?void 0:r.map(this.toFindQueryResult))&&void 0!==t?t:[]}async handleAlignersQuery(e){let{selectedMetricType:t,projectName:r}=e;if(!t)return[];const s=(await this.datasource.getMetricTypes(r)).find((e=>e.type===this.datasource.templateSrv.replace(t)));return s?(0,D.oU)(s.valueType,s.metricKind).map(this.toFindQueryResult):[]}async handleAggregationQuery(e){let{selectedMetricType:t,projectName:r}=e;if(!t)return[];const s=(await this.datasource.getMetricTypes(r)).find((e=>e.type===this.datasource.templateSrv.replace(t)));return s?(0,D.A_)(s.valueType,s.metricKind).map(this.toFindQueryResult):[]}async handleSLOServicesQuery(e){let{projectName:t}=e;return(await this.datasource.getSLOServices(t)).map(this.toFindQueryResult)}async handleSLOQuery(e){let{selectedSLOService:t,projectName:r}=e;return(await this.datasource.getServiceLevelObjectives(r,t)).map(this.toFindQueryResult)}async handleSelectorQuery(){return X.IR.map(this.toFindQueryResult)}handleAlignmentPeriodQuery(){return X.dD.map(this.toFindQueryResult)}toFindQueryResult(e){return(0,K.isString)(e)?{text:e,expandable:!0}:Object.assign({},e,{expandable:!0})}}function se(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class ae extends Q.CustomVariableSupport{constructor(e){super(),se(this,"metricFindQuery",void 0),se(this,"editor",I),this.datasource=e,this.metricFindQuery=new re(e),this.query=this.query.bind(this)}query(e){const t=(0,_.D)(this.metricFindQuery.execute(e.targets[0]));return(0,_.D)(this.datasource.ensureGCEDefaultProject()).pipe((0,U.z)((()=>t)),(0,$.U)((e=>({data:e}))))}}const ie=["hide","refId","datasource","key","queryType","maxLines","metric","intervalMs","type"];function ne(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class le extends B.DataSourceWithBackend{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,H.J)(),r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,z.$t)();var s;super(e),ne(this,"authenticationType",void 0),ne(this,"intervalMs",void 0),this.instanceSettings=e,this.templateSrv=t,this.timeSrv=r,this.authenticationType=e.jsonData.authenticationType||"jwt",this.variables=new ae(this),this.intervalMs=0,this.annotations=(s=this,{prepareAnnotation:e=>{if(!(e=>{var t,r;return void 0!==(null===(t=e.target)||void 0===t?void 0:t.title)||void 0!==(null===(r=e.target)||void 0===r?void 0:r.text)})(e))return e;const{enable:t,name:r,iconColor:a}=e,{target:i}=e;return{datasource:e.datasource,enable:t,name:r,iconColor:a,target:{intervalMs:s.intervalMs,refId:(null==i?void 0:i.refId)||"annotationQuery",type:"annotationQuery",queryType:q.xL.METRICS,metricQuery:{projectName:(null==i?void 0:i.projectName)||s.getDefaultProject(),editorMode:q.je.Visual,metricType:(null==i?void 0:i.metricType)||"",filters:(null==i?void 0:i.filters)||[],metricKind:(null==i?void 0:i.metricKind)||q.lH.GAUGE,query:"",crossSeriesReducer:"REDUCE_NONE",perSeriesAligner:q.CS.ALIGN_NONE,title:(null==i?void 0:i.title)||"",text:(null==i?void 0:i.text)||""}}}},prepareQuery:e=>{if(e.target)return Object.assign({},e.target,{queryType:q.xL.METRICS,type:"annotationQuery",metricQuery:Object.assign({},e.target.metricQuery)})},QueryEditor:te})}getVariables(){return this.templateSrv.getVariables().map((e=>`$${e.name}`))}query(e){return e.targets=e.targets.map((t=>Object.assign({},this.migrateQuery(t),{intervalMs:e.intervalMs}))),super.query(e)}applyTemplateVariables(e,t){const{metricQuery:r,sloQuery:s}=e;return Object.assign({},e,{datasource:this.getRef(),intervalMs:this.intervalMs,metricQuery:Object.assign({},this.interpolateProps(r,t),{projectName:this.templateSrv.replace(r.projectName?r.projectName:this.getDefaultProject(),t),filters:this.interpolateFilters(r.filters||[],t),groupBys:this.interpolateGroupBys(r.groupBys||[],t),view:r.view||"FULL",editorMode:r.editorMode}),sloQuery:s&&this.interpolateProps(s,t)})}async getLabels(e,t,r,s){var a;const i={targets:[{refId:t,datasource:this.getRef(),queryType:q.xL.METRICS,metricQuery:{projectName:this.templateSrv.replace(r),metricType:this.templateSrv.replace(e),groupBys:this.interpolateGroupBys((null==s?void 0:s.groupBys)||[],{}),crossSeriesReducer:null!==(a=null==s?void 0:s.crossSeriesReducer)&&void 0!==a?a:"REDUCE_NONE",view:"HEADERS"}}],range:this.timeSrv.timeRange()},n=i.targets;return n.length?(0,k.n)((0,_.D)(this.ensureGCEDefaultProject()).pipe((0,U.z)((()=>(0,B.getBackendSrv)().fetch({url:"/api/ds/query",method:"POST",data:{from:i.range.from.valueOf().toString(),to:i.range.to.valueOf().toString(),queries:n}}))),(0,$.U)((e=>{let{data:t}=e;const r=(0,B.toDataQueryResponse)({data:t}),s=null==r?void 0:r.data.map((e=>{var t,r;return null===(t=e.meta)||void 0===t||null===(r=t.custom)||void 0===r?void 0:r.labels})).filter((e=>!!e)).reduce(((e,t)=>{for(let r in t)e[r]||(e[r]=new Set),t[r]&&e[r].add(t[r]);return e}),{});return Object.fromEntries(Object.entries(s).map((e=>(e[1]=Array.from(e[1]),e))))})))):(0,k.n)((0,G.of)({results:[]}))}async getGCEDefaultProject(){return this.getResource("gceDefaultProject")}getDefaultProject(){const{defaultProject:e,authenticationType:t,gceDefaultProject:r}=this.instanceSettings.jsonData;return"gce"===t?r||"":e||""}async ensureGCEDefaultProject(){const{authenticationType:e,gceDefaultProject:t}=this.instanceSettings.jsonData;"gce"!==e||t||(this.instanceSettings.jsonData.gceDefaultProject=await this.getGCEDefaultProject())}async getMetricTypes(e){return e?this.getResource(`metricDescriptors/v3/projects/${this.templateSrv.replace(e)}/metricDescriptors`):[]}async getSLOServices(e){return this.getResource(`services/v3/projects/${this.templateSrv.replace(e)}/services?pageSize=1000`)}async getServiceLevelObjectives(e,t){if(!t)return Promise.resolve([]);let{projectName:r,serviceId:s}=this.interpolateProps({projectName:e,serviceId:t});return this.getResource(`slo-services/v3/projects/${r}/services/${s}/serviceLevelObjectives`)}getProjects(){return this.getResource("projects")}migrateQuery(e){if(!e.hasOwnProperty("metricQuery")){const t=e,{hide:r,refId:s,intervalMs:a,type:i}=t,n=function(e,t){if(null==e)return{};var r,s,a={},i=Object.keys(e);for(s=0;s<i.length;s++)r=i[s],t.indexOf(r)>=0||(a[r]=e[r]);return a}(t,ie);return{refId:s,intervalMs:a,type:i,hide:r,queryType:q.xL.METRICS,metricQuery:Object.assign({},n,{view:n.view||"FULL"})}}return e}interpolateProps(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.entries(e).reduce(((e,r)=>{let[s,a]=r;return Object.assign({},e,{[s]:a&&(0,K.isString)(a)?this.templateSrv.replace(a,t):a})}),{})}filterQuery(e){if(e.hide)return!1;if(e.queryType&&e.queryType===q.xL.SLO&&e.sloQuery){const{selectorName:t,serviceId:r,sloId:s,projectName:a,lookbackPeriod:i}=e.sloQuery;return!(!t||!r||!s||!a||t===X.Fh&&!i)}if(e.queryType&&e.queryType===q.xL.METRICS&&e.metricQuery.editorMode===q.je.MQL)return!!e.metricQuery.projectName&&!!e.metricQuery.query;const{metricType:t}=e.metricQuery;return!!t}interpolateVariablesInQueries(e,t){return e.map((e=>this.applyTemplateVariables(this.migrateQuery(e),t)))}interpolateFilters(e,t){const r=(0,K.chunk)(e,4).map((e=>{let[t,r,s,a]=e;return Object.assign({key:t,operator:r,value:s},a&&{condition:a})})).filter((e=>e.value));return(0,K.flatten)(r.map((e=>{let{key:r,operator:s,value:a,condition:i}=e;return[this.templateSrv.replace(r,t||{}),s,this.templateSrv.replace(a,t||{},(e=>(0,K.isArray)(e)&&e.length?`(${e.join("|")})`:e)),...i?[i]:[]]})))||[]}interpolateGroupBys(e,t){let r=[];return(e||[]).forEach((e=>{const s=this.templateSrv.replace(e,t||{},"csv").split(",");Array.isArray(s)?r=r.concat(s):r.push(s)})),r}}const ce=new Q.DataSourcePlugin(le).setQueryEditorHelp(M).setQueryEditor(R.W).setConfigEditor(P).setVariableQueryEditor(I)}}]);
//# sourceMappingURL=cloudMonitoringPlugin.0b161f27ba0f5d102cba.js.map