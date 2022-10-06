"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4679],{84987:(e,t,r)=>{r.r(t),r.d(t,{RuleViewer:()=>J,default:()=>X});var s=r(36636),n=r(68404),a=r(12990),i=r(43215),o=r(3490),l=r(65747),c=r(94322),u=r(52510),d=r(73358),h=r(31865),g=r(87723),f=r(90923),p=r(73389),m=r(47570),x=r(85464),j=r(53262),v=r(95910),b=r(45916);const y=["refId"];var S;function w(e){var t;const r=(0,o.useTheme2)(),s=(0,o.useStyles2)(C),{data:a,query:l,onChangeQuery:c}=e,u=(0,p.j)(l.model)?x.Fe:x.GC,[d,h]=(0,n.useState)(u),y=(0,f.getDataSourceSrv)().getInstanceSettings(l.datasourceUid),w=l.relativeTimeRange,[$,I]=(0,n.useState)({frameIndex:0,showHeader:!0}),q=(0,n.useCallback)((e=>{const t=(0,i.dateTime)().unix()-e.unix();if(w){const e=w.from-w.to;c(Object.assign({},l,{relativeTimeRange:{from:t+e,to:t}}))}}),[c,l,w]),k=(0,n.useCallback)((e=>0===e?(0,i.dateTime)():(0,i.dateTime)().subtract(e,"seconds")),[]);return a?y?(0,b.jsx)("div",{className:s.content,children:(0,b.jsx)(g.Z,{children:e=>{let{width:n,height:i}=e;return(0,b.jsxs)("div",{style:{width:n,height:i},children:[(0,b.jsxs)("div",{className:s.header,children:[(0,b.jsxs)("div",{children:[`Query ${l.refId}`,(0,b.jsxs)("span",{className:s.dataSource,children:["(",y.name,")"]})]}),(0,b.jsxs)("div",{className:s.actions,children:[!(0,p.j)(l.model)&&w?(0,b.jsx)(o.DateTimePicker,{date:k(w.to),onChange:q,maxDate:new Date}):null,t||(t=(0,b.jsx)(v.j,{onChange:h,value:d,size:"md"})),(0,b.jsx)(j.q,{actions:[m.bW.DataSourcesExplore],children:!(0,p.j)(l.model)&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:s.spacing}),(0,b.jsx)(o.LinkButton,{size:"md",variant:"secondary",icon:"compass",target:"_blank",href:R(y,l),children:"View in Explore"})]})})]})]}),(0,b.jsx)(f.PanelRenderer,{height:i-4*r.spacing.gridSize,width:n,data:a,pluginId:d,title:"",onOptionsChange:I,options:$})]})}})}):(0,b.jsxs)("div",{className:s.content,children:[S||(S=(0,b.jsx)(o.Alert,{title:"Could not find datasource for query"})),(0,b.jsx)(o.CodeEditor,{width:"100%",height:"250px",language:"json",showLineNumbers:!1,showMiniMap:!1,value:JSON.stringify(l,null,"\t"),readOnly:!0})]}):null}function R(e,t){const{name:r}=e,s=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(t.model,y),n=Object.assign({},s,{datasource:r});return i.urlUtil.renderUrl(`${f.config.appSubUrl}/explore`,{left:JSON.stringify(["now-1h","now",r,n])})}const C=e=>({content:s.css`
      width: 100%;
      height: 250px;
    `,header:s.css`
      height: ${e.spacing(4)};
      display: flex;
      align-items: center;
      justify-content: space-between;
      white-space: nowrap;
    `,refId:s.css`
      font-weight: ${e.typography.fontWeightMedium};
      color: ${e.colors.text.link};
      overflow: hidden;
    `,dataSource:s.css`
      margin-left: ${e.spacing(1)};
      font-style: italic;
      color: ${e.colors.text.secondary};
    `,actions:s.css`
      display: flex;
      align-items: center;
    `,spacing:s.css`
      padding: ${e.spacing(0,1,0,0)};
    `,errorMessage:s.css`
      white-space: pre-wrap;
    `});var $=r(83039),I=r(97292),q=r(79842),k=r(85351);const N=e=>{var t;let{group:r}=e;const s=null!==(t=r.source_tenants)&&void 0!==t?t:[];return(0,b.jsx)(u.C,{label:"Tenant sources",children:(0,b.jsx)(b.Fragment,{children:s.map((e=>(0,b.jsx)("div",{children:e},e)))})})};var T=r(12135),O=r(82434),L=r(18181),D=r(17569),U=r(80145),M=r(20910),A=r(19462),P=r(86647);function z(e){if(!e)return[];const{namespace:t,rulerRule:r}=e,{rulesSource:s}=t;if((0,A.HY)(s)&&(0,P.Pc)(r))return r.grafana_alert.data;if((0,A.jq)(s)){const t=function(e,t){const r="A";switch(e.type){case"prometheus":return{refId:r,expr:t.query};case"loki":return{refId:r,expr:t.query};default:throw new Error(`Query for datasource type ${e.type} is currently not supported by cloud alert rules.`)}}(s,e);return[{refId:t.refId,datasourceUid:s.uid,queryType:"",model:t,relativeTimeRange:{from:360,to:0}}]}return[]}var E,F,Q,B,V,_=r(59940);const G="Could not find data source for rule",Z="Could not view rule",H="Alerting / View rule";function J(e){let{match:t}=e;const r=(0,o.useStyles2)(K),{id:s}=t.params,i=_.OA(s,!0),{loading:g,error:f,result:p}=(0,U.H)(i,null==i?void 0:i.ruleSourceName),m=(0,n.useMemo)((()=>new M.v),[]),x=(0,a.Z)(m.get()),j=(0,n.useMemo)((()=>z(p)),[p]),[v,y]=(0,n.useState)([]),{allDataSourcesAvailable:S}=(0,D.S)(j),R=(0,n.useCallback)((()=>{v.length>0&&S&&m.run(v)}),[v,m,S]);(0,n.useEffect)((()=>{y(j)}),[j]),(0,n.useEffect)((()=>{S&&R()}),[R,S]),(0,n.useEffect)((()=>()=>m.destroy()),[m]);const C=(0,n.useCallback)((e=>{y((t=>t.map((t=>t.refId===e.refId?e:t))))}),[]);if(null==i||!i.ruleSourceName)return(0,b.jsx)(h.$,{title:H,children:(0,b.jsx)(o.Alert,{title:Z,children:(0,b.jsx)("details",{className:r.errorMessage,children:G})})});const J=(0,A.o_)(i.ruleSourceName);if(g)return E||(E=(0,b.jsx)(h.$,{title:H,children:(0,b.jsx)(o.LoadingPlaceholder,{text:"Loading rule..."})}));var X;if(f||!J)return(0,b.jsx)(h.$,{title:H,children:(0,b.jsx)(o.Alert,{title:Z,children:(0,b.jsxs)("details",{className:r.errorMessage,children:[null!==(X=null==f?void 0:f.message)&&void 0!==X?X:G,F||(F=(0,b.jsx)("br",{})),!(null==f||!f.stack)&&f.stack]})})});if(!p)return Q||(Q=(0,b.jsx)(h.$,{title:H,children:(0,b.jsx)("span",{children:"Rule could not be found."})}));const Y=Object.entries(p.annotations).filter((e=>{let[t,r]=e;return!!r.trim()})),ee=(0,P.Jq)(p.group),te=(0,P.Pc)(p.rulerRule)&&Boolean(p.rulerRule.grafana_alert.provenance);return(0,b.jsxs)(h.$,{wrapInContent:!1,title:H,children:[ee&&(B||(B=(0,b.jsx)(o.Alert,{severity:"info",title:"This rule is part of a federated rule group.",children:(0,b.jsxs)(o.VerticalGroup,{children:["Federated rule groups are currently an experimental feature.",(0,b.jsx)(o.Button,{fill:"text",icon:"book",children:(0,b.jsx)("a",{href:"https://grafana.com/docs/metrics-enterprise/latest/tenant-management/tenant-federation/#cross-tenant-alerting-and-recording-rule-federation",children:"Read documentation"})})]})}))),te&&(0,b.jsx)(d.Xq,{resource:d.Uv.AlertRule}),(0,b.jsxs)(h.l,{children:[(0,b.jsxs)("div",{children:[(0,b.jsxs)("h4",{children:[V||(V=(0,b.jsx)(o.Icon,{name:"bell",size:"lg"}))," ",p.name]}),(0,b.jsx)(L.p,{rule:p,isCreating:!1,isDeleting:!1}),(0,b.jsx)($.f,{rule:p,rulesSource:J})]}),(0,b.jsxs)("div",{className:r.details,children:[(0,b.jsxs)("div",{className:r.leftSide,children:[p.promRule&&(0,b.jsx)(u.C,{label:"Health",horizontal:!0,children:(0,b.jsx)(O.V,{rule:p.promRule})}),!!p.labels&&!!Object.keys(p.labels).length&&(0,b.jsx)(u.C,{label:"Labels",horizontal:!0,children:(0,b.jsx)(c.s,{labels:p.labels})}),(0,b.jsx)(k.C,{rulesSource:J,rule:p,annotations:Y}),(0,b.jsx)(I.J,{annotations:Y})]}),(0,b.jsxs)("div",{className:r.rightSide,children:[(0,b.jsx)(q.C,{rule:p,rulesSource:J}),ee&&(0,b.jsx)(N,{group:p.group}),(0,b.jsx)(u.C,{label:"Namespace / Group",children:`${p.namespace.name} / ${p.group.name}`})]})]}),(0,b.jsx)("div",{children:(0,b.jsx)(T.M,{rule:p,pagination:{itemsPerPage:l.gN}})})]}),!ee&&x&&Object.keys(x).length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:r.queriesTitle,children:["Query results ",(0,b.jsx)(o.PanelChromeLoadingIndicator,{loading:W(x),onCancel:()=>m.cancel()})]}),(0,b.jsx)(h.l,{padding:0,children:(0,b.jsx)("div",{className:r.queries,children:v.map((e=>(0,b.jsx)("div",{className:r.query,children:(0,b.jsx)(w,{query:e,data:x&&x[e.refId],onChangeQuery:C})},e.refId)))})})]}),!ee&&!S&&(0,b.jsx)(o.Alert,{title:"Query not available",severity:"warning",className:r.queryWarning,children:"Cannot display the query preview. Some of the data sources used in the queries are not available."})]})}function W(e){return!!Object.values(e).find((e=>e.state===i.LoadingState.Loading))}const K=e=>({errorMessage:s.css`
      white-space: pre-wrap;
    `,queries:s.css`
      height: 100%;
      width: 100%;
    `,queriesTitle:s.css`
      padding: ${e.spacing(2,.5)};
      font-size: ${e.typography.h5.fontSize};
      font-weight: ${e.typography.fontWeightBold};
      font-family: ${e.typography.h5.fontFamily};
    `,query:s.css`
      border-bottom: 1px solid ${e.colors.border.medium};
      padding: ${e.spacing(2)};
    `,queryWarning:s.css`
      margin: ${e.spacing(4,0)};
    `,details:s.css`
      display: flex;
      flex-direction: row;
    `,leftSide:s.css`
      flex: 1;
    `,rightSide:s.css`
      padding-left: 90px;
      width: 300px;
    `}),X=(0,o.withErrorBoundary)(J,{style:"page"})},53262:(e,t,r)=>{r.d(t,{q:()=>a});r(68404);var s=r(61959),n=r(45916);const a=e=>{let{actions:t,children:r,fallback:a=!0}=e;return t.some((e=>s.Vt.hasAccess(e,a)))?(0,n.jsx)(n.Fragment,{children:r}):null}},95910:(e,t,r)=>{r.d(t,{j:()=>l});var s=r(68404),n=r(90923),a=r(3490),i=r(85464),o=r(45916);function l(e){const{value:t,onChange:r,size:l="md"}=e,c=(0,s.useMemo)((()=>Object.values(n.config.panels).reduce(((e,t)=>(function(e){switch(e){case i.GC:case i.Fe:case i.Kd:return!0;default:return!1}}(t.id)&&e.push({value:t.id,label:t.name,imgUrl:t.info.logos.small}),e)),[])),[]);return(0,o.jsx)(a.RadioButtonGroup,{options:c,value:t,onChange:r,size:l})}},31865:(e,t,r)=>{r.d(t,{$:()=>l,l:()=>c});var s=r(36636),n=(r(68404),r(90923)),a=r(3490),i=r(69371),o=r(45916);function l(e){const{wrapInContent:t=!0,children:r,title:s}=e,l=(0,a.useStyles2)(u);return(0,o.jsxs)(i.T,{children:[(0,o.jsx)(a.PageToolbar,{title:s,pageIcon:"bell",onGoBack:()=>n.locationService.push("/alerting/list")}),(0,o.jsx)("div",{className:l.content,children:t?(0,o.jsx)(c,Object.assign({},e)):r})]})}function c(e){let{children:t,padding:r=2}=e;const s=(0,a.useStyles2)(d(r));return(0,o.jsx)("div",{className:s.wrapper,children:t})}const u=e=>({content:s.css`
      margin: ${e.spacing(0,2,2)};
      max-width: ${e.breakpoints.values.xxl}px;
    `}),d=e=>t=>({wrapper:s.css`
      background: ${t.colors.background.primary};
      border: 1px solid ${t.colors.border.weak};
      border-radius: ${t.shape.borderRadius()};
      padding: ${t.spacing(e)};
    `})},17569:(e,t,r)=>{r.d(t,{S:()=>a});var s=r(68404),n=r(90923);function a(e){return{allDataSourcesAvailable:(0,s.useMemo)((()=>e.every((e=>Boolean((0,n.getDataSourceSrv)().getInstanceSettings(e.datasourceUid))))),[e])}}},80145:(e,t,r)=>{r.d(t,{H:()=>h,X:()=>g});var s=r(68404),n=r(18745),a=r(17614),i=r(83809),o=r(8455),l=r(59940),c=r(86647),u=r(75678),d=r(33899);function h(e,t){const r=f(t),n=(0,u.Zo)(t),a=(0,s.useMemo)((()=>{if(e&&t&&0!==n.length)for(const r of n)for(const s of r.groups)for(const r of s.rules){const s=l.Yd(t,r);if(l.Dg(s,e))return r}}),[e,t,n]);return Object.assign({},r,{result:a})}function g(e,t){const r=f(t),n=(0,u.Zo)(t),a=(0,s.useMemo)((()=>{if(!e||!t||0===n.length)return[];const r=[];for(const t of n)for(const s of t.groups)for(const t of s.rules)t.name===e&&r.push(t);return r}),[e,t,n]);return Object.assign({},r,{result:a})}function f(e){var t;const r=(0,n.useDispatch)(),s=(0,d._)((e=>e.promRules)),o=p(e,s),l=(0,d._)((e=>e.rulerRules)),u=p(e,l),{loading:h}=(0,a.Z)((async()=>{e&&await r((0,i.dn)({rulesSourceName:e}))}),[r,e]);return{loading:h,error:(null!==(t=o.error)&&void 0!==t?t:(0,c.m$)(u))?void 0:u.error,dispatched:o.dispatched&&u.dispatched}}function p(e,t){if(!e)return o.oq;const r=t[e];return r||o.oq}},20910:(e,t,r)=>{r.d(t,{v:()=>R});var s=r(25918),n=r(71808),a=r(14444),i=r(2027),o=r(35778),l=r(34110),c=r(43215),u=r(90923),d=r(28659),h=r(73389),g=r(45418),f=r(86452),p=r(392),m=r(22912);const x={from:21600,to:0},j=(e,t)=>{switch(e.type){case m.Us.classic:return v(e);case m.Us.math:return y(e,t);case m.Us.resample:case m.Us.reduce:return S(e)}},v=e=>{var t;return null===(t=e.conditions)||void 0===t?void 0:t.map((e=>e.query.params[0]))},b=(e,t)=>{let r=[],s=[x.to];for(const n of e){const e=t.find((e=>e.refId===n));e&&e.relativeTimeRange&&(r.push(e.relativeTimeRange.from),s.push(e.relativeTimeRange.to))}return{from:r,to:s}},y=(e,t)=>t.filter((t=>{var r;return"query"===t.queryType&&(null===(r=e.expression)||void 0===r?void 0:r.includes(t.refId))})).map((e=>e.refId)),S=e=>e.expression?[e.expression]:void 0;function w(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}class R{constructor(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:(0,d.i)(),t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,u.getDataSourceSrv)();w(this,"subject",void 0),w(this,"subscription",void 0),w(this,"lastResult",void 0),this.backendSrv=e,this.dataSourceSrv=t,this.subject=new s.t(1),this.lastResult={}}get(){return this.subject.asObservable()}async run(e){if(0===e.length){const t=$(e,c.LoadingState.Done);return this.subject.next(t)}for(const t of e)if(!(0,h.j)(t.model)){const r=await this.dataSourceSrv.get(t.datasourceUid);if(r.filterQuery&&!r.filterQuery(t.model)){const t=$(e,c.LoadingState.Done);return this.subject.next(t)}}this.subscription=C(this.backendSrv,e).subscribe({next:e=>{const t=N(e,((e,t)=>{const r=this.lastResult[e],s=(0,p.zR)(t,r);return(0,f.C)(s,r)}));this.lastResult=t,this.subject.next(this.lastResult)},error:e=>{this.lastResult=k(this.lastResult,e),this.subject.next(this.lastResult)}})}cancel(){if(!this.subscription)return;this.subscription.unsubscribe();let e=!1;const t=N(this.lastResult,((t,r)=>(r.state===c.LoadingState.Loading&&(e=!0),Object.assign({},r,{state:c.LoadingState.Done}))));e&&this.subject.next(t)}destroy(){this.subject&&this.subject.complete(),this.cancel()}}const C=(e,t)=>{const r=$(t,c.LoadingState.Loading),s={data:{data:t},url:"/api/v1/eval",method:"POST",requestId:(0,l.Z)()};return(0,c.withLoadingIndicator)({whileLoading:r,source:e.fetch(s).pipe(q(r),(0,a.K)((e=>(0,n.of)(k(r,e)))),(0,g.V)(e,s.requestId),(0,i.B)())})},$=(e,t)=>e.reduce(((r,s)=>(r[s.refId]={state:t,series:[],timeRange:I(s,e)},r)),{}),I=(e,t)=>{if((0,h.j)(e.model)){const r=((e,t)=>{const r=j(e,t);if(!r)return x;const{from:s,to:n}=b(r,t);return s.length||n.length?{from:Math.max(...s),to:Math.min(...n)}:x})(e.model,t);return c.rangeUtil.relativeToTimeRange(r)}return e.relativeTimeRange?c.rangeUtil.relativeToTimeRange(e.relativeTimeRange):(console.warn(`Query with refId: ${e.refId} did not have any relative time range, using default.`),(0,c.getDefaultTimeRange)())},q=e=>(0,o.U)((t=>{const{data:r}=t,s={};for(const[t,n]of Object.entries(r.results))s[t]={timeRange:e[t].timeRange,state:c.LoadingState.Done,series:n.frames.map(c.dataFrameFromJSON)};return s})),k=(e,t)=>{const r=(0,u.toDataQueryError)(t);return N(e,((e,t)=>Object.assign({},t,{state:c.LoadingState.Error,error:r})))},N=(e,t)=>{const r={};for(const[s,n]of Object.entries(e))r[s]=t(s,n);return r}},73389:(e,t,r)=>{r.d(t,{j:()=>a});var s=r(20467),n=r(22912);const a=e=>{if(!e)return!1;if((0,s.Pr)(e.datasource))return!0;const t=e;return"string"==typeof t.type&&Object.values(n.Us).includes(t.type)}}}]);
//# sourceMappingURL=AlertingRule.3d8aba00f45d41923a34.js.map