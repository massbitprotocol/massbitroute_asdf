"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1919],{20469:(e,r,a)=>{a.d(r,{ZP:()=>o,hF:()=>s,rb:()=>i});var t=a(93964),n=a.n(t);const s=n().module("grafana.core",["ngRoute"]),i=[s,n().module("grafana.controllers",[]),n().module("grafana.directives",[]),n().module("grafana.factories",[]),n().module("grafana.services",[]),n().module("grafana.filters",[]),n().module("grafana.routes",[])],o=s},69435:(e,r,a)=>{a.d(r,{GO:()=>o,rR:()=>i});var t=a(20469),n=a(78837);class s{constructor(){var e,r,a;a=void 0,(r="navItems")in(e=this)?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,this.navItems=n.ZP.bootData.navTree}getCfgNode(){return this.navItems.find((e=>"cfg"===e.id))}getNav(){var e;let r=this.navItems;const a={breadcrumbs:[]};for(var t=arguments.length,n=new Array(t),s=0;s<t;s++)n[s]=arguments[s];for(const e of n){if("number"==typeof e){a.main=a.breadcrumbs[e];break}const t=r.find((r=>r.id===e));var i;if(t)a.breadcrumbs.push(t),a.node=t,a.main=t,r=null!==(i=t.children)&&void 0!==i?i:[]}if(null!==(e=a.main)&&void 0!==e&&e.children)for(const e of a.main.children){var o;e.active=e.url===(null===(o=a.node)||void 0===o?void 0:o.url)}return a}getNotFoundNav(){return i()}}function i(){return o("Page not found","404 Error")}function o(e,r){const a={text:e,subTitle:r,icon:"exclamation-triangle"};return{node:a,main:a}}s.$inject=[],t.ZP.service("navModelSrv",s)},59507:(e,r,a)=>{a.d(r,{Z:()=>i});var t=a(68404),n=a(3490),s=a(45916);class i extends t.PureComponent{render(){const{searchQuery:e,linkButton:r,setSearchQuery:a,target:t,placeholder:i="Search by name or type"}=this.props,o={href:null==r?void 0:r.href,disabled:null==r?void 0:r.disabled};return t&&(o.target=t),(0,s.jsxs)("div",{className:"page-action-bar",children:[(0,s.jsx)("div",{className:"gf-form gf-form--grow",children:(0,s.jsx)(n.FilterInput,{value:e,onChange:a,placeholder:i})}),r&&(0,s.jsx)(n.LinkButton,Object.assign({},o,{children:r.title}))]})}}},62527:(e,r,a)=>{a.r(r),a.d(r,{default:()=>I});var t=a(68404),n=a(42326),s=a(69371),i=a(88451),o=a(17910),c=a(52772),l=a(79383),u=a(18745);var d=a(36636),g=a(3490),p=a(69435),h=a(22584),m=a(66049),f=a(43215),x=a(32569),S=a(33566);var v,j=a(45916);const y=e=>{let{id:r,basePath:a}=e;const[i,o]=(0,t.useState)(null),{value:c,error:l,loading:u}=(e=>(0,m.Z)((async()=>{const r=await(0,x.a)(e);if(!r)throw new Error(`Unknown plugin: "${e}"`);if(r.type!==f.PluginType.app)throw new Error(`Plugin must be an app (currently "${r.type}")`);if(!r.enabled)throw new Error(`Application "${e}" is not enabled`);return await(0,S.Av)(r)})))(r),d=(0,n.UO)(),{pathname:g}=(0,n.TH)();return l?(0,j.jsx)(s.T.Header,{navItem:(0,p.GO)(l.message,l.stack).main}):(0,j.jsxs)(j.Fragment,{children:[u&&(v||(v=(0,j.jsx)(h.Z,{}))),i&&(0,j.jsx)(s.T.Header,{navItem:i.main}),!u&&c&&c.root&&(0,j.jsx)(c.root,{meta:c.meta,basename:a||g,onNavChanged:o,query:d,path:g})]})};function b(){const e=(0,g.useStyles2)(P);return(0,j.jsx)("div",{className:e.container,children:(0,j.jsx)(y,{id:l.D,basePath:l.Z6.CloudIntegrations})})}const P=e=>({container:d.css`
    position: relative;
  `});var C,D,N,w=a(15477);function T(e){const r=e.match.params.uid,a=new URLSearchParams(e.location.search).get("page");return(0,j.jsx)(w.H,{uid:r,pageId:a})}function k(){return C||(C=(0,j.jsx)("div",{children:"The list of plugins is under development"}))}function L(){return D||(D=(0,j.jsx)("div",{children:"The recorded queries tab is under development."}))}function I(){const e=(()=>{var e;const{pathname:r}=(0,n.TH)(),a=(0,u.useSelector)((e=>e.navIndex)),t=a[l.D3],s=t,i=e=>r===`/${l.D3}`&&"data-connections-datasources"===e.id,o=e=>r.startsWith(e.url||"");return s.children=null===(e=s.children)||void 0===e?void 0:e.map((e=>Object.assign({},e,{active:o(e)||i(e)}))),{node:t,main:s}})();return(0,j.jsx)(c.Vj.Provider,{value:{New:l.Z6.DataSourcesNew,List:l.Z6.DataSources,Edit:l.Z6.DataSourcesEdit,Dashboards:l.Z6.DataSourcesDashboards},children:(0,j.jsx)(s.T,{navModel:e,children:(0,j.jsx)(s.T.Contents,{children:(0,j.jsxs)(n.rs,{children:[(0,j.jsx)(n.AW,{path:l.Z6.DataSourcesNew,component:o.x}),(0,j.jsx)(n.AW,{path:l.Z6.DataSourcesEdit,component:T}),(0,j.jsx)(n.AW,{path:l.Z6.DataSources,component:i.c}),(0,j.jsx)(n.AW,{path:l.Z6.Plugins,component:k}),(0,j.jsx)(n.AW,{path:l.Z6.CloudIntegrations,component:b}),(0,j.jsx)(n.AW,{path:l.Z6.RecordedQueries,component:L}),N||(N=(0,j.jsx)(n.AW,{component:i.c}))]})})})})}},88451:(e,r,a)=>{a.d(r,{c:()=>v});var t,n,s,i=a(36636),o=a(68404),c=a(18745),l=a(3490),u=a(28436),d=a(22584),g=a(98163),p=a(47570),h=a(52772),m=a(59507),f=a(45916);function x(){const e=(0,c.useDispatch)(),r=(0,o.useCallback)((r=>e((0,h.zT)(r))),[e]),a=(0,c.useSelector)((e=>{let{dataSources:r}=e;return(0,h.IO)(r)})),t=g.Vt.hasPermission(p.bW.DataSourcesCreate);return(0,f.jsx)(S,{searchQuery:a,setSearchQuery:r,canCreateDataSource:t})}function S(e){let{searchQuery:r,setSearchQuery:a,canCreateDataSource:t}=e;const n={href:(0,h.d7)().New,title:"Add data source",disabled:!t};return(0,f.jsx)(m.Z,{searchQuery:r,setSearchQuery:a,linkButton:n},"action-bar")}function v(){(0,h.zJ)();const e=(0,c.useSelector)((e=>(0,h.mt)(e.dataSources))),r=(0,c.useSelector)((e=>{let{dataSources:r}=e;return(0,h.r7)(r)})),a=(0,c.useSelector)((e=>{let{dataSources:r}=e;return r.hasFetched})),t=g.Vt.hasPermission(p.bW.DataSourcesCreate);return(0,f.jsx)(j,{dataSources:e,dataSourcesCount:r,isLoading:!a,hasCreateRights:t})}function j(e){let{dataSources:r,dataSourcesCount:a,isLoading:i,hasCreateRights:o}=e;const c=(0,l.useStyles)(y),g=(0,h.d7)();return i?t||(t=(0,f.jsx)(d.Z,{})):0===a?(0,f.jsx)(u.Z,{buttonDisabled:!o,title:"No data sources defined",buttonIcon:"database",buttonLink:g.New,buttonTitle:"Add data source",proTip:"You can also define data sources through configuration files.",proTipLink:"http://docs.grafana.org/administration/provisioning/#datasources?utm_source=grafana_ds_list",proTipLinkTitle:"Learn more",proTipTarget:"_blank"}):(0,f.jsxs)(f.Fragment,{children:[n||(n=(0,f.jsx)(x,{})),(0,f.jsx)("ul",{className:c.list,children:r.map((e=>(0,f.jsx)("li",{children:(0,f.jsxs)(l.Card,{href:g.Edit.replace(/:uid/gi,e.uid),children:[(0,f.jsx)(l.Card.Heading,{children:e.name}),(0,f.jsx)(l.Card.Figure,{children:(0,f.jsx)("img",{src:e.typeLogoUrl,alt:"",height:"40px",width:"40px",className:c.logo})}),(0,f.jsx)(l.Card.Meta,{children:[e.typeName,e.url,e.isDefault&&(s||(s=(0,f.jsx)(l.Tag,{name:"default",colorIndex:1},"default-tag")))]})]})},e.uid)))})]})}const y=()=>({list:(0,i.css)({listStyle:"none",display:"grid"}),logo:(0,i.css)({objectFit:"contain"})})},17910:(e,r,a)=>{a.d(r,{x:()=>P});a(68404);var t,n,s=a(18745),i=a(3490),o=a(22584),c=a(36636),l=a(43215),u=a(16695),d=a(30110),g=a(45916);function p(){const e=(0,d.UQ)(),{isLoading:r}=(0,d.ZV)(),a=(0,i.useTheme)();return r||0===e.length?null:(0,g.jsx)(i.InfoBox,{"aria-label":u.wl.pages.PluginsList.signatureErrorNotice,severity:"warning",urlTitle:"Read more about plugin signing",url:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",children:(0,g.jsxs)("div",{children:[t||(t=(0,g.jsx)("p",{children:"Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."})),"The following plugins are disabled and not shown in the list below:",(0,g.jsx)(i.List,{items:e,className:c.css`
            list-style-type: circle;
          `,renderItem:e=>(0,g.jsx)("div",{className:c.css`
                margin-top: ${a.spacing.sm};
              `,children:(0,g.jsxs)(i.HorizontalGroup,{spacing:"sm",justify:"flex-start",align:"center",children:[(0,g.jsx)("strong",{children:e.pluginId}),(0,g.jsx)(i.PluginSignatureBadge,{status:h(e.errorCode),className:c.css`
                    margin-top: 0;
                  `})]})})})]})})}function h(e){switch(e){case l.PluginErrorCode.invalidSignature:return l.PluginSignatureStatus.invalid;case l.PluginErrorCode.missingSignature:return l.PluginSignatureStatus.missing;case l.PluginErrorCode.modifiedSignature:return l.PluginSignatureStatus.modified;default:return l.PluginSignatureStatus.missing}}function m(e){var r,a;let{onClick:t,dataSourcePlugin:n}=e;const s="phantom"===n.module,o=!s&&!n.unlicensed,l=(null===(r=n.info)||void 0===r||null===(a=r.links)||void 0===a?void 0:a.length)>0?n.info.links[0]:null,d=(0,i.useStyles2)(f);return(0,g.jsxs)(i.Card,{className:(0,c.cx)(d.card,"card-parent"),onClick:o?t:()=>{},children:[(0,g.jsx)(i.Card.Heading,{className:d.heading,"aria-label":u.wl.pages.AddDataSource.dataSourcePluginsV2(n.name),children:n.name}),(0,g.jsx)(i.Card.Figure,{align:"center",className:d.figure,children:(0,g.jsx)("img",{className:d.logo,src:n.info.logos.small,alt:""})}),(0,g.jsx)(i.Card.Description,{className:d.description,children:n.info.description}),!s&&(0,g.jsx)(i.Card.Meta,{className:d.meta,children:(0,g.jsx)(i.PluginSignatureBadge,{status:n.signature})}),(0,g.jsx)(i.Card.Actions,{className:d.actions,children:l&&(0,g.jsx)(i.LinkButton,{"aria-label":`${n.name}, learn more.`,href:`${l.url}?utm_source=grafana_add_ds`,icon:"external-link-alt",onClick:e=>e.stopPropagation(),rel:"noopener",target:"_blank",variant:"secondary",children:l.name})})]})}function f(e){return{heading:(0,c.css)({fontSize:e.v1.typography.heading.h5,fontWeight:"inherit"}),figure:(0,c.css)({width:"inherit",marginRight:"0px","> img":{width:e.spacing(7)}}),meta:(0,c.css)({marginTop:"6px",position:"relative"}),description:(0,c.css)({margin:"0px",fontSize:e.typography.size.sm}),actions:(0,c.css)({position:"relative",alignSelf:"center",marginTop:"0px",opacity:0,".card-parent:hover &, .card-parent:focus-within &":{opacity:1}}),card:(0,c.css)({gridTemplateAreas:'\n        "Figure   Heading   Actions"\n        "Figure Description Actions"\n        "Figure    Meta     Actions"\n        "Figure     -       Actions"'}),logo:(0,c.css)({marginRight:e.v1.spacing.lg,marginLeft:e.v1.spacing.sm,width:e.spacing(7),maxHeight:e.spacing(7)})}}function x(e){let{dataSourcePlugins:r,onClickDataSourceType:a}=e;return r&&r.length?(0,g.jsx)(i.List,{items:r,getItemKey:e=>e.id.toString(),renderItem:e=>(0,g.jsx)(m,{dataSourcePlugin:e,onClick:()=>a(e)}),className:c.css`
        > li {
          margin-bottom: 2px;
        }
      `}):null}function S(e){let{categories:r,onClickDataSourceType:a}=e;return(0,g.jsxs)(g.Fragment,{children:[r.map((e=>{let{id:r,title:t,plugins:n}=e;return(0,g.jsxs)("div",{className:"add-data-source-category",children:[(0,g.jsx)("div",{className:"add-data-source-category__header",id:r,children:t}),(0,g.jsx)(x,{dataSourcePlugins:n,onClickDataSourceType:a})]},r)})),n||(n=(0,g.jsx)("div",{className:"add-data-source-more",children:(0,g.jsx)(i.LinkButton,{variant:"secondary",href:"https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",target:"_blank",rel:"noopener",children:"Find more data source plugins on grafana.com"})}))]})}var v,j,y,b=a(52772);function P(){(0,b.OU)();const e=(0,s.useDispatch)(),r=(0,s.useSelector)((e=>(0,b.I5)(e.dataSources))),a=(0,s.useSelector)((e=>e.dataSources.dataSourceTypeSearchQuery)),t=(0,s.useSelector)((e=>e.dataSources.isLoadingDataSources)),n=(0,s.useSelector)((e=>e.dataSources.categories)),i=(0,b.nH)();return(0,g.jsx)(C,{dataSources:r,dataSourceCategories:n,searchQuery:a,isLoading:t,onAddDataSource:i,onSetSearchQuery:r=>e((0,b.Ht)(r))})}function C(e){let{dataSources:r,dataSourceCategories:a,searchQuery:t,isLoading:n,onAddDataSource:s,onSetSearchQuery:c}=e;const l=(0,b.d7)();return n?v||(v=(0,g.jsx)(o.Z,{})):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"page-action-bar",children:[(0,g.jsx)(i.FilterInput,{value:t,onChange:c,placeholder:"Filter by name or type"}),j||(j=(0,g.jsx)("div",{className:"page-action-bar__spacer"})),(0,g.jsx)(i.LinkButton,{href:l.List,fill:"outline",variant:"secondary",icon:"arrow-left",children:"Cancel"})]}),!t&&(y||(y=(0,g.jsx)(p,{}))),(0,g.jsxs)("div",{children:[t&&(0,g.jsx)(x,{dataSourcePlugins:r,onClickDataSourceType:s}),!t&&(0,g.jsx)(S,{categories:a,onClickDataSourceType:s})]})]})}},30110:(e,r,a)=>{a.d(r,{iY:()=>Q,bt:()=>k,ZV:()=>T,GE:()=>b,UQ:()=>C,bJ:()=>P,x3:()=>D,IS:()=>L,y9:()=>w,S1:()=>N,wq:()=>I});var t=a(68404),n=a(18745),s=a(4936),i=a(72192),o=a(1250),c=a(98335),l=a(43215),u=a(79729);const d=e=>e.plugins,g=(0,c.P1)(d,(e=>{let{items:r}=e;return r})),p=(0,c.P1)(d,(e=>{let{settings:r}=e;return r.displayMode})),{selectAll:h,selectById:m}=o.CD.getSelectors(g),f=(e,r)=>(0,c.P1)((e=>(0,c.P1)(h,(r=>r.filter((r=>"installed"===e?r.isInstalled:!r.isCore)))))(e),(e=>e.filter((e=>"all"===r||e.type===r)))),x=(e,r,a)=>(0,c.P1)(f(r,a),(e=>(0,c.P1)(h,(r=>""===e?[]:r.filter((r=>{const a=[];return r.name&&a.push(r.name.toLowerCase()),r.orgName&&a.push(r.orgName.toLowerCase()),a.some((r=>r.includes((0,l.unEscapeStringFromRegex)(e).toLowerCase())))})))))(e),((r,a)=>""===e?r:a)),S=(0,c.P1)(h,(e=>e?e.filter((e=>Boolean(e.error))).map((e=>({pluginId:e.id,errorCode:e.error}))):[])),v=e=>(0,c.P1)(d,(r=>{let{requests:a={}}=r;return a[e]})),j=e=>(0,c.P1)(v(e),(e=>(null==e?void 0:e.status)===u.eE.Pending)),y=e=>(0,c.P1)(v(e),(e=>(null==e?void 0:e.status)===u.eE.Rejected?null==e?void 0:e.error:null)),b=e=>{let{query:r="",filterBy:a="installed",filterByType:t="all",sortBy:i=s.Nh.nameAsc}=e;A();const o=(0,n.useSelector)(x(r,a,t)),{isLoading:c,error:l}=T();return{isLoading:c,error:l,plugins:(0,s.AA)(o,i)}},P=e=>(A(),Z(e),(0,n.useSelector)((r=>m(r,e)))),C=()=>(A(),(0,n.useSelector)(S)),D=()=>{const e=(0,n.useDispatch)();return(r,a,t)=>e((0,i.N9)({id:r,version:a,isUpdating:t}))},N=()=>{const e=(0,n.useDispatch)();return r=>e((0,i.Tz)(r))},w=()=>null===(0,n.useSelector)(y(i.tQ.typePrefix)),T=()=>({isLoading:(0,n.useSelector)(j(i.Qd.typePrefix)),error:(0,n.useSelector)(y(i.Qd.typePrefix))}),k=()=>({isLoading:(0,n.useSelector)(j(i.DD.typePrefix)),error:(0,n.useSelector)(y(i.DD.typePrefix))}),L=()=>({isInstalling:(0,n.useSelector)(j(i.N9.typePrefix)),error:(0,n.useSelector)(y(i.N9.typePrefix))}),I=()=>({isUninstalling:(0,n.useSelector)(j(i.Tz.typePrefix)),error:(0,n.useSelector)(y(i.Tz.typePrefix))}),A=()=>{const e=(0,n.useDispatch)(),r=(0,n.useSelector)((a=i.Qd.typePrefix,(0,c.P1)(v(a),(e=>void 0===e))));var a;(0,t.useEffect)((()=>{r&&e((0,i.Qd)())}),[])},Z=e=>{const r=(0,n.useDispatch)(),a=(0,n.useSelector)((r=>m(r,e))),s=!(0,n.useSelector)(j(i.DD.typePrefix))&&a&&!a.details;(0,t.useEffect)((()=>{s&&r((0,i.DD)(e))}),[a])},Q=()=>{const e=(0,n.useDispatch)();return{displayMode:(0,n.useSelector)(p),setDisplayMode:r=>e((0,o.UC)(r))}}}}]);
//# sourceMappingURL=DataConnectionsPage.7fa606a4927f119867ef.js.map