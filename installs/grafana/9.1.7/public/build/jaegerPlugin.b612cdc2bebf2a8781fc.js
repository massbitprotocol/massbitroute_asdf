(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[890],{19982:(e,t,a)=>{"use strict";a.d(t,{et:()=>r,fy:()=>s,nO:()=>i,np:()=>l});var n=a(43215);function r(e){e.sort(((e,t)=>e[0]-t[0]));return e.reduce(((e,t)=>{if(!e.length)return[t];const a=e.slice(-1)[0],[n,r]=a,[i,s]=t;return s<r?e:i>r?[...e,t]:[...e.slice(0,-1),[n,s]]}),[]).reduce(((e,t)=>e+(t[1]-t[0])),0)}function i(e){const t={};let a;for(let n=0;a=e(n),a;n++){t[a.id]?t[a.id].span=a.span:t[a.id]={span:a.span,children:[]};for(const e of a.parentIds)e&&(t[e]?t[e].children.push(a.id):t[e]={span:void 0,children:[a.id]})}return t}function s(e,t,a){return{main:`${o(e)}ms (${o(e/t*100)}%)`,secondary:`${o(a)}ms (${o(a/e*100)}%)`}}function o(e){return parseFloat(e.toFixed(2))}function l(){return[new n.MutableDataFrame({fields:[{name:n.NodeGraphDataFrameFieldNames.id,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.title,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.subTitle,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.mainStat,type:n.FieldType.string,config:{displayName:"Total time (% of trace)"}},{name:n.NodeGraphDataFrameFieldNames.secondaryStat,type:n.FieldType.string,config:{displayName:"Self time (% of total)"}},{name:n.NodeGraphDataFrameFieldNames.color,type:n.FieldType.number,config:{color:{mode:"continuous-GrYlRd"},displayName:"Self time / Trace duration"}}],meta:{preferredVisualisationType:"nodeGraph"}}),new n.MutableDataFrame({fields:[{name:n.NodeGraphDataFrameFieldNames.id,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.target,type:n.FieldType.string},{name:n.NodeGraphDataFrameFieldNames.source,type:n.FieldType.string}],meta:{preferredVisualisationType:"nodeGraph"}})]}},20481:(e,t,a)=>{"use strict";a.r(t),a.d(t,{plugin:()=>L});var n=a(43215),r=a(68404),i=a(90923),s=a(3490),o=a(11723),l=a(28239),u=a(4319),c=a(67211),p=a(45916);var d=a(36636),m=a(36537),g=a(58257),h=a(56340),f=a(27854),v=a.n(f);function y(e){if(!e)return"";const t=v().parse(e);return Object.keys(t).forEach((e=>{const a=t[e];"string"!=typeof a&&(t[e]=String(a))})),JSON.stringify(t)}function b(e){if(!e)return"";try{return v().stringify(JSON.parse(e))}catch{return e}}var D=a(40284);const F="e.g. 1.2s, 100ms, 500us";function T(e){let{query:t,onChange:a}=e;const[n,i]=(0,r.useState)(!1),o=(0,s.useStyles)(x);return(0,p.jsxs)("div",{children:[(0,p.jsx)(s.InlineFieldRow,{children:(0,p.jsx)("div",{className:o.advancedOptionsContainer,onClick:()=>i(!n),children:(0,p.jsxs)(s.InlineLabel,{as:"div",children:["Advanced options"," ",(0,p.jsx)(s.Icon,{className:n?o.angleUp:o.angleDown,name:"angle-down"})]})})}),(0,p.jsx)(D.Z,{in:n,mountOnEnter:!0,unmountOnExit:!0,timeout:300,classNames:o,children:(0,p.jsxs)("div",{children:[(0,p.jsx)(s.InlineFieldRow,{children:(0,p.jsx)(s.InlineField,{label:"Min Duration",labelWidth:21,grow:!0,children:(0,p.jsx)(s.Input,{id:"minDuration",name:"minDuration",value:t.minDuration||"",placeholder:F,onChange:e=>a(Object.assign({},t,{minDuration:e.currentTarget.value}))})})}),(0,p.jsx)(s.InlineFieldRow,{children:(0,p.jsx)(s.InlineField,{label:"Max Duration",labelWidth:21,grow:!0,children:(0,p.jsx)(s.Input,{id:"maxDuration",name:"maxDuration",value:t.maxDuration||"",placeholder:F,onChange:e=>a(Object.assign({},t,{maxDuration:e.currentTarget.value}))})})}),(0,p.jsx)(s.InlineFieldRow,{children:(0,p.jsx)(s.InlineField,{label:"Limit",labelWidth:21,grow:!0,tooltip:"Maximum numbers of returned results",children:(0,p.jsx)(s.Input,{id:"limit",name:"limit",value:t.limit||"",type:"number",onChange:e=>a(Object.assign({},t,{limit:e.currentTarget.value?parseInt(e.currentTarget.value,10):void 0}))})})})]})})]})}function x(e){return{advancedOptionsContainer:d.css`
      margin: 0 ${e.spacing.xs} ${e.spacing.xs} 0;
      width: 100%;
      cursor: pointer;
    `,enter:d.css`
      label: enter;
      height: 0;
      opacity: 0;
    `,enterActive:d.css`
      label: enterActive;
      height: 108px;
      opacity: 1;
      transition: height 300ms ease, opacity 300ms ease;
    `,exit:d.css`
      label: exit;
      height: 108px;
      opacity: 1;
    `,exitActive:d.css`
      label: exitActive;
      height: 0;
      opacity: 0;
      transition: height 300ms ease, opacity 300ms ease;
    `,angleUp:d.css`
      transform: rotate(-180deg);
      transition: transform 300ms;
    `,angleDown:d.css`
      transform: rotate(0deg);
      transition: transform 300ms;
    `}}const j={label:"All",value:void 0};function N(e){let{datasource:t,query:a,onChange:o}=e;const[l,u]=(0,r.useState)(),[c,f]=(0,r.useState)(),[v,y]=(0,r.useState)({services:!1,operations:!1}),D=(0,r.useCallback)((async function(e,a){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"";y((e=>Object.assign({},e,{[a]:!0})));try{const r=await t.metadataRequest(e);if(!r)return[{label:`No ${a} found`,value:`No ${a} found`}];const i=r.sort().map((e=>({label:e,value:e})));return i.filter((e=>!!e.value&&(0,s.fuzzyMatch)(e.value,n).found))}catch(e){return e instanceof Error&&(0,h.WI)((0,m.$l)((0,g.t_)("Error",e))),[]}finally{y((e=>Object.assign({},e,{[a]:!1})))}}),[t]);return(0,r.useEffect)((()=>{(async()=>{const e=await D("/api/services","services");a.service&&(0,i.getTemplateSrv)().containsTemplate(a.service)&&e.push((0,n.toOption)(a.service)),u(e)})()}),[t,D,a.service]),(0,r.useEffect)((()=>{a.service&&(async()=>{const e=await D(`/api/services/${encodeURIComponent((0,i.getTemplateSrv)().replace(a.service))}/operations`,"operations");a.operation&&(0,i.getTemplateSrv)().containsTemplate(a.operation)&&e.push((0,n.toOption)(a.operation)),f([j,...e])})()}),[t,a.service,D,a.operation]),(0,p.jsxs)("div",{className:(0,d.css)({maxWidth:"500px"}),children:[(0,p.jsx)(s.InlineFieldRow,{children:(0,p.jsx)(s.InlineField,{label:"Service",labelWidth:14,grow:!0,children:(0,p.jsx)(s.Select,{inputId:"service",options:l,onOpenMenu:()=>D("/api/services","services"),isLoading:v.services,value:(null==l?void 0:l.find((e=>(null==e?void 0:e.value)===a.service)))||void 0,onChange:e=>o(Object.assign({},a,{service:null==e?void 0:e.value,operation:a.service!==(null==e?void 0:e.value)?void 0:a.operation})),menuPlacement:"bottom",isClearable:!0,"aria-label":"select-service-name",allowCustomValue:!0})})}),(0,p.jsx)(s.InlineFieldRow,{children:(0,p.jsx)(s.InlineField,{label:"Operation",labelWidth:14,grow:!0,disabled:!a.service,children:(0,p.jsx)(s.Select,{inputId:"operation",options:c,onOpenMenu:()=>D(`/api/services/${encodeURIComponent((0,i.getTemplateSrv)().replace(a.service))}/operations`,"operations"),isLoading:v.operations,value:(null==c?void 0:c.find((e=>e.value===a.operation)))||null,onChange:e=>o(Object.assign({},a,{operation:(null==e?void 0:e.value)||void 0})),menuPlacement:"bottom",isClearable:!0,"aria-label":"select-operation-name",allowCustomValue:!0})})}),(0,p.jsx)(s.InlineFieldRow,{children:(0,p.jsx)(s.InlineField,{label:"Tags",labelWidth:14,grow:!0,children:(0,p.jsx)(s.Input,{id:"tags",value:b(a.tags),placeholder:"http.status_code=200 error=true",onChange:e=>o(Object.assign({},a,{tags:e.currentTarget.value}))})})}),(0,p.jsx)(T,{query:a,onChange:o})]})}var I=a(82897),w=a(58799),S=a(71808),O=a(35778),q=a(14444),C=a(25857),G=a(75478),k=a(19982);function R(e){const{nodes:t,edges:a}=function(e){const t=[],a=[],r=function(e){let t=0,a=1/0;for(const n of e)n.startTime<a&&(a=n.startTime),n.startTime+n.duration>t&&(t=n.startTime+n.duration);return t-a}(e.spans),i=(0,k.nO)((t=>{var a;if(t>=e.spans.length)return;const n=e.spans[t];return{span:n,id:n.spanID,parentIds:(null===(a=n.references)||void 0===a?void 0:a.filter((e=>"CHILD_OF"===e.refType)).map((e=>e.spanID)))||[]}}));for(const u of e.spans){var s,o,l;const c=e.processes[u.processID],p=i[u.spanID].children.map((e=>{const t=i[e].span;return[t.startTime,t.startTime+t.duration]})),d=(0,k.et)(p),m=u.duration-d,g=(0,k.fy)(u.duration/1e3,r/1e3,m/1e3);t.push({[n.NodeGraphDataFrameFieldNames.id]:u.spanID,[n.NodeGraphDataFrameFieldNames.title]:null!==(s=null==c?void 0:c.serviceName)&&void 0!==s?s:"",[n.NodeGraphDataFrameFieldNames.subTitle]:u.operationName,[n.NodeGraphDataFrameFieldNames.mainStat]:g.main,[n.NodeGraphDataFrameFieldNames.secondaryStat]:g.secondary,[n.NodeGraphDataFrameFieldNames.color]:m/r});const h=null===(o=u.references)||void 0===o||null===(l=o.find((e=>"CHILD_OF"===e.refType)))||void 0===l?void 0:l.spanID;h&&i[h].span&&a.push({[n.NodeGraphDataFrameFieldNames.id]:h+"--"+u.spanID,[n.NodeGraphDataFrameFieldNames.target]:u.spanID,[n.NodeGraphDataFrameFieldNames.source]:h})}return{nodes:t,edges:a}}(e),[r,i]=(0,k.np)();for(const e of t)r.add(e);for(const e of a)i.add(e);return[r,i]}var $=a(46461);function _(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}class M extends n.DataSourceApi{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,G.$t)(),a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:(0,i.getTemplateSrv)();super(e),_(this,"uploadedJson",null),_(this,"nodeGraph",void 0),_(this,"spanBar",void 0),this.instanceSettings=e,this.timeSrv=t,this.templateSrv=a,this.nodeGraph=e.jsonData.nodeGraph}async metadataRequest(e,t){return(await(0,w.n)(this._request(e,t,{hideFromInspector:!0}))).data.data}query(e){const t=e.targets[0];if(!t)return(0,S.of)({data:[J]});if("search"!==t.queryType&&t.query)return this._request(`/api/traces/${encodeURIComponent(this.templateSrv.replace(t.query,e.scopedVars))}`).pipe((0,O.U)((e=>{var t,a,n;const r=null==e||null===(t=e.data)||void 0===t||null===(a=t.data)||void 0===a?void 0:a[0];if(!r)return{data:[J]};let i=[(0,$.xM)(r)];return null!==(n=this.nodeGraph)&&void 0!==n&&n.enabled&&i.push(...R(r)),{data:i}})));if("upload"===t.queryType){if(!this.uploadedJson)return(0,S.of)({data:[]});try{var a;const e=JSON.parse(this.uploadedJson).data[0];let t=[(0,$.xM)(e)];return null!==(a=this.nodeGraph)&&void 0!==a&&a.enabled&&t.push(...R(e)),(0,S.of)({data:t})}catch(e){return(0,S.of)({error:{message:"JSON is not valid Jaeger format"},data:[]})}}let n=(0,I.pick)(this.applyVariables(t,e.scopedVars),["service","operation","tags","minDuration","maxDuration","limit"]),r=(0,I.pickBy)(n,I.identity);return"All"===r.operation&&(r=(0,I.omit)(r,"operation")),r.tags&&(r=Object.assign({},r,{tags:y(r.tags.toString())})),this._request("/api/traces",Object.assign({},r,this.getTimeRange(),{lookback:"custom"})).pipe((0,O.U)((e=>({data:[(0,$.Wp)(e.data.data,this.instanceSettings)]}))))}interpolateVariablesInQueries(e,t){return e&&0!==e.length?e.map((e=>Object.assign({},e,{datasource:this.getRef()},this.applyVariables(e,t)))):[]}applyVariables(e,t){var a,n,r,i;let s=Object.assign({},e);return e.tags&&this.templateSrv.containsTemplate(e.tags)&&(s=Object.assign({},e,{tags:this.templateSrv.replace(e.tags,t)})),Object.assign({},s,{service:this.templateSrv.replace(null!==(a=e.service)&&void 0!==a?a:"",t),operation:this.templateSrv.replace(null!==(n=e.operation)&&void 0!==n?n:"",t),minDuration:this.templateSrv.replace(null!==(r=e.minDuration)&&void 0!==r?r:"",t),maxDuration:this.templateSrv.replace(null!==(i=e.maxDuration)&&void 0!==i?i:"",t)})}async testDatasource(){return(0,w.n)(this._request("/api/services").pipe((0,O.U)((e=>{var t;return((null==e||null===(t=e.data)||void 0===t?void 0:t.data)||[]).length>0?{status:"success",message:"Data source connected and services found."}:{status:"error",message:"Data source connected, but no services received. Verify that Jaeger is configured properly."}})),(0,q.K)((e=>{let t="Jaeger: ";return e.statusText?t+=e.statusText:t+="Cannot connect to Jaeger",e.status&&(t+=`. ${e.status}`),e.data&&e.data.message?t+=`. ${e.data.message}`:e.data&&(t+=`. ${JSON.stringify(e.data)}`),(0,S.of)({status:"error",message:t})}))))}getTimeRange(){const e=this.timeSrv.timeRange();return{start:E(e.from,!1),end:E(e.to,!0)}}getQueryDisplayText(e){return e.query||""}_request(e,t,a){const n=t?(0,C.tW)(t):"",r=`${this.instanceSettings.url}${e}${n.length?`?${n}`:""}`,s=Object.assign({},a,{url:r});return(0,i.getBackendSrv)().fetch(s)}}function E(e,t){return"string"==typeof e&&(e=n.dateMath.parse(e,t)),1e3*e.valueOf()}const J=new n.MutableDataFrame({fields:[{name:"trace",type:n.FieldType.trace,values:[]}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}}),L=new n.DataSourcePlugin(M).setConfigEditor((e=>{let{options:t,onOptionsChange:a}=e;return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(s.DataSourceHttpSettings,{defaultUrl:"http://localhost:16686",dataSourceConfig:t,showAccessOptions:!1,onChange:a}),(0,p.jsx)("div",{className:"gf-form-group",children:(0,p.jsx)(u.Z,{options:t,onOptionsChange:a})}),i.config.featureToggles.traceToMetrics?(0,p.jsx)("div",{className:"gf-form-group",children:(0,p.jsx)(c.F,{options:t,onOptionsChange:a})}):null,(0,p.jsx)("div",{className:"gf-form-group",children:(0,p.jsx)(l.n,{options:t,onOptionsChange:a})}),(0,p.jsx)("div",{className:"gf-form-group",children:(0,p.jsx)(o.e6,{options:t,onOptionsChange:a})})]})})).setQueryEditor((function(e){var t;let{datasource:a,query:n,onChange:r,onRunQuery:i}=e;const o=(0,s.useTheme2)(),l=e=>{const t=Object.assign({},n,{query:e});r(t)};return(0,p.jsx)(p.Fragment,{children:(0,p.jsxs)("div",{className:(0,d.css)({width:"100%"}),children:[(0,p.jsx)(s.InlineFieldRow,{children:(0,p.jsx)(s.InlineField,{label:"Query type",children:(0,p.jsx)(s.RadioButtonGroup,{options:[{value:"search",label:"Search"},{value:void 0,label:"TraceID"},{value:"upload",label:"JSON file"}],value:n.queryType,onChange:e=>r(Object.assign({},n,{queryType:e})),size:"md"})})}),(()=>{switch(n.queryType){case"search":return t||(t=(0,p.jsx)(N,{datasource:a,query:n,onChange:r}));case"upload":return(0,p.jsx)("div",{className:(0,d.css)({padding:o.spacing(2)}),children:(0,p.jsx)(s.FileDropzone,{options:{multiple:!1},onLoad:e=>{a.uploadedJson=e,i()}})});default:return(0,p.jsx)(s.InlineFieldRow,{children:(0,p.jsx)(s.InlineField,{label:"Trace ID",labelWidth:14,grow:!0,children:(0,p.jsx)(s.QueryField,{query:n.query,onChange:l,onRunQuery:i,onBlur:()=>{},placeholder:"Enter a Trace ID (run with Shift+Enter)",portalOrigin:"jaeger"})})})}})()]})})}))},46461:(e,t,a)=>{"use strict";a.d(t,{Wp:()=>s,c6:()=>l,xM:()=>i});var n=a(43215),r=a(11723);function i(e){const t=e.spans.map((t=>{return a=t,n=e.processes,{spanID:a.spanID,traceID:a.traceID,parentSpanID:null===(r=a.references)||void 0===r||null===(i=r.find((e=>"CHILD_OF"===e.refType)))||void 0===i?void 0:i.spanID,operationName:a.operationName,startTime:a.startTime/1e3,duration:a.duration/1e3,logs:a.logs.map((e=>Object.assign({},e,{timestamp:e.timestamp/1e3}))),tags:a.tags,warnings:null!==(s=a.warnings)&&void 0!==s?s:void 0,stackTraces:a.stackTraces,serviceName:n[a.processID].serviceName,serviceTags:n[a.processID].tags};var a,n,r,i,s})),a=new n.MutableDataFrame({fields:[{name:"traceID",type:n.FieldType.string},{name:"spanID",type:n.FieldType.string},{name:"parentSpanID",type:n.FieldType.string},{name:"operationName",type:n.FieldType.string},{name:"serviceName",type:n.FieldType.string},{name:"serviceTags",type:n.FieldType.other},{name:"startTime",type:n.FieldType.number},{name:"duration",type:n.FieldType.number},{name:"logs",type:n.FieldType.other},{name:"tags",type:n.FieldType.other},{name:"warnings",type:n.FieldType.other},{name:"stackTraces",type:n.FieldType.other}],meta:{preferredVisualisationType:"trace",custom:{traceFormat:"jaeger"}}});for(const e of t)a.add(e);return a}function s(e,t){const a=new n.MutableDataFrame({fields:[{name:"traceID",type:n.FieldType.string,config:{unit:"string",displayNameFromDS:"Trace ID",links:[{title:"Trace: ${__value.raw}",url:"",internal:{datasourceUid:t.uid,datasourceName:t.name,query:{query:"${__value.raw}"}}}]}},{name:"traceName",type:n.FieldType.string,config:{displayNameFromDS:"Trace name"}},{name:"startTime",type:n.FieldType.time,config:{displayNameFromDS:"Start time"}},{name:"duration",type:n.FieldType.number,config:{displayNameFromDS:"Duration",unit:"µs"}}],meta:{preferredVisualisationType:"table"}}),r=e.map(o).sort(((e,t)=>(null==t?void 0:t.startTime)-(null==e?void 0:e.startTime)));for(const e of r)a.add(e);return a}function o(e){const t=(0,r.R1)(e);if(t)return{traceID:t.traceID,startTime:t.startTime/1e3,duration:t.duration,traceName:t.traceName}}function l(e){let t={traceID:"",spans:[],processes:{},warnings:null},a=[];for(let n=0;n<e.length;n++){const r=e.get(n);t.traceID||(t.traceID=r.traceID),a.find((e=>e===r.serviceName))||(a.push(r.serviceName),t.processes[`p${a.length}`]={serviceName:r.serviceName,tags:r.serviceTags}),t.spans.push({traceID:r.traceID,spanID:r.spanID,duration:1e3*r.duration,references:r.parentSpanID?[{refType:"CHILD_OF",spanID:r.parentSpanID,traceID:r.traceID}]:[],flags:0,logs:r.logs.map((e=>Object.assign({},e,{timestamp:1e3*e.timestamp}))),operationName:r.operationName,processID:Object.keys(t.processes).find((e=>t.processes[e].serviceName===r.serviceName))||"",startTime:1e3*r.startTime,tags:r.tags,warnings:r.warnings?r.warnings:null})}return{data:[t],total:0,limit:0,offset:0,errors:null}}},57739:(e,t)=>{e.exports=function(e){return null==e&&(e={}),function(t,a,n){return t._body?n():t.header("content-type")===e.contentType?(t._body=!0,t.body=t.body||{},r="",t.setEncoding("utf8"),t.on("data",(function(e){return r+=e})),void t.on("end",(function(){try{var a=[];r.trim().split("\n").forEach((function(t){a.push(e.parser(t))})),t.body=a}catch(e){return e.body=r,e.status=400,n(e)}return n()}))):n();var r}}},26362:(e,t,a)=>{a(20703),a(12402),a(96137).Readable;var n=a(96137).PassThrough,r=a(27854);e.exports=function(e){null==e&&(e={});var t=e.contentType||"application/logplex-1";return function(e,a,i){return e._body?i():e.header("content-type")===t?(e._body=!0,e.body=new n({objectMode:!0}),e.pipe(r.streamParser()).pipe(e.body),i()):i()}}},30148:(e,t)=>{t.debug=!1,t.parse=function(e){var a="",n="",r=!1,i=!1,s=!1,o=!1,l={},u=t.debug;"\n"==e[e.length-1]&&(e=e.slice(0,e.length-1));for(var c=0;c<=e.length;c++){if(" "==e[c]&&!s||c==e.length){if(r&&a.length>0?l[a]=!0:i&&("true"==n?n=!0:"false"==n?n=!1:""!==n||o||(n=null),l[a]=n,n=""),c==e.length)break;r=!1,i=!1,s=!1,o=!1}"="!=e[c]||s?"\\"==e[c]?(n+=e[++c],u&&console.log("escape: "+e[c])):'"'==e[c]?(o=!0,s=!s,u&&console.log("in quote: "+s)):" "==e[c]||i||r?r?(u&&console.log("add to key: "+e[c]),a+=e[c]):i&&(u&&console.log("add to value: "+e[c]),n+=e[c]):(u&&console.log("start key with: "+e[c]),r=!0,a=e[c]):(u&&console.log("split"),r=!1,i=!0)}return l}},35021:(e,t,a)=>{t.log=function(e,t){this.stream=this.stream||process.stdout,null==t&&(t=this.stream);var a=Object.assign({},this.defaultData,e);if(this.timers)for(var n in this.timers){var r=(new Date).getTime();a[n]=(r-this.timers[n]).toString()+"ms"}t.write(this.stringify(a)+"\n")},t.time=function(e){var t=a(27854),n=(new Date).getTime(),r=(e=e||"elapsed",new t);return r.stream=this.stream,r.defaultData=this.defaultData,r.timers=Object.assign({},this.timers),r.timers[e]=n,r},t.namespace=function(e){var t=new(a(27854)),n=Object.assign({},this.defaultData,e);return t.stream=this.stream,t.defaultData=n,t.timers=this.timers,t},t.error=function(e,t){this.maxErrorLines=this.maxErrorLines||10,void 0===t&&(t=Math.random().toString().slice(2,12));var a=this.namespace({error:!0,id:t,now:(new Date).toISOString()});if(a.log({message:e.message}),e.stack){var n=e.stack.split("\n");for(var r in n){if(r>=this.maxErrorLines)break;a.log({line:r,trace:n[r]})}}}},88464:(e,t)=>{var a=function(e,t){if("function"==typeof e.path)var a=e.path();else a=e.originalUrl||e.path||e.url;var n=e.header&&e.header("x-forwarded-for"),r=e.header&&e.header("x-request-id"),i={ip:e.ip||n||e.connection.remoteAddress,time:(new Date).toISOString(),method:e.method,path:a,status:t.statusCode};return r&&(i.request_id=r),t.get&&(i.content_length=t.get("content-length"),i.content_type=t.get("content-type")),i};t.init=function(e,t,n){return this.logger=e,n||t?n||("function"==typeof t?(n=t,t={}):n=a):(n=a,t={}),(t=t||{}).immediate?function(e,t,a){return function(t,n,r){var i=a(t,n);e.log(i),r()}}(e,0,n):function(e,t,a){return function(n,r,i){var s=t.elapsed||"elapsed",o=e.time(s),l=r.end;r.end=function(e,t){var i=a(n,r);r.end=l,r.end(e,t),o.log(i)},i()}}(e,t,n)},t.commonFormatter=a},60233:(e,t,a)=>{var n=a(20703),r=a(12402),i=a(96137).PassThrough;t.streamParser=function(e){var t=new i,a=this,s=r((function(e){""!==e&&this.queue(a.parse(e))}));return t.on("pipe",(function(e){e.unpipe&&e.unpipe(this),this.transformStream=e.pipe(n()).pipe(s)})),t.pipe=function(e,t){return this.transformStream.pipe(e,t)},t},t.streamStringify=function(e){var t=this;if((e=e||{}).hasOwnProperty("delimiter"))var a=e.delimiter;else a="\n";return r((function(e){this.queue(t.stringify(e)+a)}),(function(){this.queue(null)}))}},14476:(e,t)=>{t.stringify=function(e){var t="";for(var a in e){var n=e[a],r=!1;null==n?(r=!0,n=""):n=n.toString();var i=n.indexOf(" ")>-1||n.indexOf("=")>-1;(n.indexOf('"')>-1||n.indexOf("\\")>-1)&&(n=n.replace(/["\\]/g,"\\$&")),i&&(n='"'+n+'"'),""!==n||r||(n='""'),t+=a+"="+n+" "}return t.substring(0,t.length-1)}},27854:(e,t,a)=>{function n(){}e.exports=n;var r=a(60233),i=a(57739),s=a(26362),o=a(30148),l=a(35021),u=a(88464),c=a(14476);Object.assign(n.prototype,l),Object.assign(n.prototype,r),n.prototype.stringify=c.stringify,n.prototype.parse=o.parse,n.prototype.bodyParser=function(e){e||(e={});var t=e.contentType||"application/logplex-1";return i({contentType:t,parser:this.parse})},n.prototype.bodyParserStream=function(e){e||(e={});var t=e.contentType||"application/logplex-1";return s({contentType:t})},n.prototype.requestLogger=function(e,t){return u.init(this,e,t)},n.prototype.requestLogger.commonFormatter=u.commonFormatter,Object.assign(n,n.prototype)},20703:(e,t,a)=>{var n=a(12402),r=a(55011).StringDecoder;e.exports=function(e,t){var a=new r,i="";"function"==typeof e&&(t=e,e=null);e||(e=/\r?\n/);function s(e,a){if(t){try{a=t(a)}catch(t){return e.emit("error",t)}void 0!==a&&e.queue(a)}else e.queue(a)}function o(t,a){var n=(i+a).split(e);i=n.pop();for(var r=0;r<n.length;r++){s(t,n[r])}}return n((function(e){o(this,a.write(e))}),(function(){a.end&&o(this,a.end()),null!=i&&s(this,i),this.queue(null)}))}},12402:(e,t,a)=>{var n=a(55068);function r(e,t,a){e=e||function(e){this.queue(e)},t=t||function(){this.queue(null)};var r=!1,i=!1,s=[],o=!1,l=new n;function u(){for(;s.length&&!l.paused;){var e=s.shift();if(null===e)return l.emit("end");l.emit("data",e)}}function c(){l.writable=!1,t.call(l),!l.readable&&l.autoDestroy&&l.destroy()}return l.readable=l.writable=!0,l.paused=!1,l.autoDestroy=!(a&&!1===a.autoDestroy),l.write=function(t){return e.call(this,t),!l.paused},l.queue=l.push=function(e){return o||(null===e&&(o=!0),s.push(e),u()),l},l.on("end",(function(){l.readable=!1,!l.writable&&l.autoDestroy&&process.nextTick((function(){l.destroy()}))})),l.end=function(e){if(!r)return r=!0,arguments.length&&l.write(e),c(),l},l.destroy=function(){if(!i)return i=!0,r=!0,s.length=0,l.writable=l.readable=!1,l.emit("close"),l},l.pause=function(){if(!l.paused)return l.paused=!0,l},l.resume=function(){return l.paused&&(l.paused=!1,l.emit("resume")),u(),l.paused||l.emit("drain"),l},l}e.exports=r,r.through=r},96137:()=>{},55011:()=>{},55068:()=>{}}]);
//# sourceMappingURL=jaegerPlugin.b612cdc2bebf2a8781fc.js.map