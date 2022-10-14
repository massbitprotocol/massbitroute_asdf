"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8595],{56303:(e,t,r)=>{r.d(t,{l:()=>u});var n=r(68404),s=r(48435),o=r(90923),a=r(359),i=r(45916);function d(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class u extends n.PureComponent{constructor(){super(...arguments),d(this,"onRemoveQuery",(e=>{this.props.onQueriesChange(this.props.queries.filter((t=>t!==e)))})),d(this,"onDragStart",(e=>{const{queries:t,dsSettings:r}=this.props;(0,o.reportInteraction)("query_row_reorder_started",{startIndex:e.source.index,numberOfQueries:t.length,datasourceType:r.type})})),d(this,"onDragEnd",(e=>{const{queries:t,onQueriesChange:r,dsSettings:n}=this.props;if(!e||!e.destination)return;const s=e.source.index,a=e.destination.index;if(s===a)return void(0,o.reportInteraction)("query_row_reorder_canceled",{startIndex:s,endIndex:a,numberOfQueries:t.length,datasourceType:n.type});const i=Array.from(t),[d]=i.splice(s,1);i.splice(a,0,d),r(i),(0,o.reportInteraction)("query_row_reorder_ended",{startIndex:s,endIndex:a,numberOfQueries:t.length,datasourceType:n.type})}))}onChangeQuery(e,t){const{queries:r,onQueriesChange:n}=this.props;n(r.map(((r,n)=>n===t?e:r)))}onDataSourceChange(e,t){const{queries:r,onQueriesChange:n}=this.props;n(r.map(((r,n)=>{if(n!==t)return r;const s={type:e.type,uid:e.uid};if(r.datasource){const t=(0,o.getDataSourceSrv)().getInstanceSettings(r.datasource);if((null==t?void 0:t.type)===e.type)return Object.assign({},r,{datasource:s})}return{refId:r.refId,hide:r.hide,datasource:s}})))}render(){const{dsSettings:e,data:t,queries:r,app:n,history:o,eventBus:d,onAddQuery:u,onRunQueries:l,onQueryCopied:h,onQueryRemoved:p,onQueryToggled:g}=this.props;return(0,i.jsx)(s.Z5,{onDragStart:this.onDragStart,onDragEnd:this.onDragEnd,children:(0,i.jsx)(s.bK,{droppableId:"transformations-list",direction:"vertical",children:s=>(0,i.jsxs)("div",Object.assign({ref:s.innerRef},s.droppableProps,{children:[r.map(((s,f)=>{const m=c(s,e),y=e.meta.mixed?e=>this.onDataSourceChange(e,f):void 0;return(0,i.jsx)(a.x,{id:s.refId,index:f,data:t,query:s,dataSource:m,onChangeDataSource:y,onChange:e=>this.onChangeQuery(e,f),onRemoveQuery:this.onRemoveQuery,onAddQuery:u,onRunQuery:l,onQueryCopied:h,onQueryRemoved:p,onQueryToggled:g,queries:r,app:n,history:o,eventBus:d},s.refId)})),s.placeholder]}))})})}}const c=(e,t)=>{if(!e.datasource)return t;return(0,o.getDataSourceSrv)().getInstanceSettings(e.datasource)||t}},14870:(e,t,r)=>{r.r(t),r.d(t,{TestStuffPage:()=>f,default:()=>y,getDefaultState:()=>m});var n=r(68404),s=r(12990),o=r(87723),a=r(43215),i=r(3490),d=r(69371),u=r(78837),c=r(58257),l=r(57866),h=r(73833),p=r(78338),g=r(45916);const f=()=>{const[e,t]=(0,n.useState)(m()),{queryOptions:r,queryRunner:u}=e,p=(0,n.useMemo)((()=>u.getData({withFieldConfig:!0,withTransforms:!0})),[u]),f=(0,s.Z)(p),y={id:"test-page",text:"Test page",icon:"dashboard",subTitle:"FOR TESTING!",url:"sandbox/test"},x=(0,c.iG)();return(0,g.jsx)(d.T,{navModel:{node:y,main:y},children:(0,g.jsxs)(d.T.Contents,{children:[f&&(0,g.jsx)(o.Z,{style:{width:"100%",height:"600px"},children:e=>{let{width:t}=e;return(0,g.jsxs)("div",{children:[(0,g.jsx)(l.$,{title:"Hello",pluginId:"timeseries",width:t,height:300,data:f,options:{},fieldConfig:{defaults:{},overrides:[]},timeZone:"browser"}),(0,g.jsx)(i.Table,{data:f.series[0],width:t,height:300})]})}}),(0,g.jsx)("div",{style:{marginTop:"16px",height:"45%"},children:(0,g.jsx)(h.D,{options:r,queryRunner:u,onRunQueries:()=>{var e;const t={from:"now-1h",to:"now"};u.run({queries:r.queries,datasource:r.dataSource,timezone:"browser",timeRange:{from:a.dateMath.parse(t.from),to:a.dateMath.parse(t.to),raw:t},maxDataPoints:null!==(e=r.maxDataPoints)&&void 0!==e?e:100,minInterval:r.minInterval})},onOptionsChange:r=>{t(Object.assign({},e,{queryOptions:r}))}})}),(0,g.jsxs)("div",{style:{display:"flex",gap:"1em"},children:[(0,g.jsx)(i.Button,{onClick:()=>x.success("Success toast","some more text goes here"),variant:"primary",children:"Success"}),(0,g.jsx)(i.Button,{onClick:()=>x.warning("Warning toast","some more text goes here","bogus-trace-99999"),variant:"secondary",children:"Warning"}),(0,g.jsx)(i.Button,{onClick:()=>x.error("Error toast","some more text goes here","bogus-trace-fdsfdfsfds"),variant:"destructive",children:"Error"})]})]})})};function m(){const e={fieldConfig:{defaults:{color:{mode:a.FieldColorModeId.PaletteClassic}},overrides:[]},replaceVariables:e=>e,theme:u.vc.theme2},t={getTransformations:()=>[],getFieldOverrideOptions:()=>e,getDataSupport:()=>({annotations:!1,alertStates:!1})};return{queryRunner:new p.o(t),queryOptions:{queries:[],dataSource:{name:"gdev-testdata"},maxDataPoints:100}}}const y=f}}]);
//# sourceMappingURL=TestStuffPage.1aaba8413333957713d6.js.map