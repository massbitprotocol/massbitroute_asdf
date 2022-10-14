"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[4253],{17910:(e,t,r)=>{r.d(t,{x:()=>v});r(68404);var s,a,n=r(18745),i=r(3490),o=r(22584),c=r(36636),l=r(43215),u=r(16695),d=r(30110),g=r(45916);function p(){const e=(0,d.UQ)(),{isLoading:t}=(0,d.ZV)(),r=(0,i.useTheme)();return t||0===e.length?null:(0,g.jsx)(i.InfoBox,{"aria-label":u.wl.pages.PluginsList.signatureErrorNotice,severity:"warning",urlTitle:"Read more about plugin signing",url:"https://grafana.com/docs/grafana/latest/plugins/plugin-signatures/",children:(0,g.jsxs)("div",{children:[s||(s=(0,g.jsx)("p",{children:"Unsigned plugins were found during plugin initialization. Grafana Labs cannot guarantee the integrity of these plugins. We recommend only using signed plugins."})),"The following plugins are disabled and not shown in the list below:",(0,g.jsx)(i.List,{items:e,className:c.css`
            list-style-type: circle;
          `,renderItem:e=>(0,g.jsx)("div",{className:c.css`
                margin-top: ${r.spacing.sm};
              `,children:(0,g.jsxs)(i.HorizontalGroup,{spacing:"sm",justify:"flex-start",align:"center",children:[(0,g.jsx)("strong",{children:e.pluginId}),(0,g.jsx)(i.PluginSignatureBadge,{status:h(e.errorCode),className:c.css`
                    margin-top: 0;
                  `})]})})})]})})}function h(e){switch(e){case l.PluginErrorCode.invalidSignature:return l.PluginSignatureStatus.invalid;case l.PluginErrorCode.missingSignature:return l.PluginSignatureStatus.missing;case l.PluginErrorCode.modifiedSignature:return l.PluginSignatureStatus.modified;default:return l.PluginSignatureStatus.missing}}function S(e){var t,r;let{onClick:s,dataSourcePlugin:a}=e;const n="phantom"===a.module,o=!n&&!a.unlicensed,l=(null===(t=a.info)||void 0===t||null===(r=t.links)||void 0===r?void 0:r.length)>0?a.info.links[0]:null,d=(0,i.useStyles2)(m);return(0,g.jsxs)(i.Card,{className:(0,c.cx)(d.card,"card-parent"),onClick:o?s:()=>{},children:[(0,g.jsx)(i.Card.Heading,{className:d.heading,"aria-label":u.wl.pages.AddDataSource.dataSourcePluginsV2(a.name),children:a.name}),(0,g.jsx)(i.Card.Figure,{align:"center",className:d.figure,children:(0,g.jsx)("img",{className:d.logo,src:a.info.logos.small,alt:""})}),(0,g.jsx)(i.Card.Description,{className:d.description,children:a.info.description}),!n&&(0,g.jsx)(i.Card.Meta,{className:d.meta,children:(0,g.jsx)(i.PluginSignatureBadge,{status:a.signature})}),(0,g.jsx)(i.Card.Actions,{className:d.actions,children:l&&(0,g.jsx)(i.LinkButton,{"aria-label":`${a.name}, learn more.`,href:`${l.url}?utm_source=grafana_add_ds`,icon:"external-link-alt",onClick:e=>e.stopPropagation(),rel:"noopener",target:"_blank",variant:"secondary",children:l.name})})]})}function m(e){return{heading:(0,c.css)({fontSize:e.v1.typography.heading.h5,fontWeight:"inherit"}),figure:(0,c.css)({width:"inherit",marginRight:"0px","> img":{width:e.spacing(7)}}),meta:(0,c.css)({marginTop:"6px",position:"relative"}),description:(0,c.css)({margin:"0px",fontSize:e.typography.size.sm}),actions:(0,c.css)({position:"relative",alignSelf:"center",marginTop:"0px",opacity:0,".card-parent:hover &, .card-parent:focus-within &":{opacity:1}}),card:(0,c.css)({gridTemplateAreas:'\n        "Figure   Heading   Actions"\n        "Figure Description Actions"\n        "Figure    Meta     Actions"\n        "Figure     -       Actions"'}),logo:(0,c.css)({marginRight:e.v1.spacing.lg,marginLeft:e.v1.spacing.sm,width:e.spacing(7),maxHeight:e.spacing(7)})}}function f(e){let{dataSourcePlugins:t,onClickDataSourceType:r}=e;return t&&t.length?(0,g.jsx)(i.List,{items:t,getItemKey:e=>e.id.toString(),renderItem:e=>(0,g.jsx)(S,{dataSourcePlugin:e,onClick:()=>r(e)}),className:c.css`
        > li {
          margin-bottom: 2px;
        }
      `}):null}function x(e){let{categories:t,onClickDataSourceType:r}=e;return(0,g.jsxs)(g.Fragment,{children:[t.map((e=>{let{id:t,title:s,plugins:a}=e;return(0,g.jsxs)("div",{className:"add-data-source-category",children:[(0,g.jsx)("div",{className:"add-data-source-category__header",id:t,children:s}),(0,g.jsx)(f,{dataSourcePlugins:a,onClickDataSourceType:r})]},t)})),a||(a=(0,g.jsx)("div",{className:"add-data-source-more",children:(0,g.jsx)(i.LinkButton,{variant:"secondary",href:"https://grafana.com/plugins?type=datasource&utm_source=grafana_add_ds",target:"_blank",rel:"noopener",children:"Find more data source plugins on grafana.com"})}))]})}var y,j,D,P=r(52772);function v(){(0,P.OU)();const e=(0,n.useDispatch)(),t=(0,n.useSelector)((e=>(0,P.I5)(e.dataSources))),r=(0,n.useSelector)((e=>e.dataSources.dataSourceTypeSearchQuery)),s=(0,n.useSelector)((e=>e.dataSources.isLoadingDataSources)),a=(0,n.useSelector)((e=>e.dataSources.categories)),i=(0,P.nH)();return(0,g.jsx)(C,{dataSources:t,dataSourceCategories:a,searchQuery:r,isLoading:s,onAddDataSource:i,onSetSearchQuery:t=>e((0,P.Ht)(t))})}function C(e){let{dataSources:t,dataSourceCategories:r,searchQuery:s,isLoading:a,onAddDataSource:n,onSetSearchQuery:c}=e;const l=(0,P.d7)();return a?y||(y=(0,g.jsx)(o.Z,{})):(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"page-action-bar",children:[(0,g.jsx)(i.FilterInput,{value:s,onChange:c,placeholder:"Filter by name or type"}),j||(j=(0,g.jsx)("div",{className:"page-action-bar__spacer"})),(0,g.jsx)(i.LinkButton,{href:l.List,fill:"outline",variant:"secondary",icon:"arrow-left",children:"Cancel"})]}),!s&&(D||(D=(0,g.jsx)(p,{}))),(0,g.jsxs)("div",{children:[s&&(0,g.jsx)(f,{dataSourcePlugins:t,onClickDataSourceType:n}),!s&&(0,g.jsx)(x,{categories:r,onClickDataSourceType:n})]})]})}},66558:(e,t,r)=>{r.r(t),r.d(t,{NewDataSourcePage:()=>l,default:()=>d,getNavModel:()=>u});r(68404);var s,a=r(69371),n=r(17910),i=r(78507),o=r(45916);const c=u();function l(){return s||(s=(0,o.jsx)(a.T,{navModel:c,children:(0,o.jsx)(a.T.Contents,{children:(0,o.jsx)(n.x,{})})}))}function u(){const e={icon:"database",id:"datasource-new",text:"Add data source",href:i.n.New,subTitle:"Choose a data source type"};return{main:e,node:e}}const d=l},52772:(e,t,r)=>{r.d(t,{Vj:()=>i,rl:()=>E.rl,mt:()=>m.mt,r7:()=>m.r7,IO:()=>m.IO,I5:()=>m.I5,BX:()=>E.BX,Ht:()=>E.Ht,zT:()=>E.zT,yr:()=>E.yr,nH:()=>P,wl:()=>w,IA:()=>N,Qs:()=>b,YY:()=>I,_l:()=>T,MF:()=>k,d7:()=>L,q6:()=>C,E:()=>f,wi:()=>j,OU:()=>D,zJ:()=>y,hw:()=>x,qj:()=>v});var s=r(4643),a=(r(57235),r(68404)),n=r(78507);const i=(0,a.createContext)(n.n);var o=r(18745),c=r(43215),l=r(45193),u=r(5831),d=r(98163),g=r(8674),p=r(47570),h=r(21169),S=r(7947),m=r(77197);const f=e=>{const t=(0,o.useDispatch)();(0,a.useEffect)((()=>(t((0,s.M9)(e)),function(){t((0,l.e)({stateSelector:e=>e.dataSourceSettings}))})),[e,t])},x=e=>{const t=(0,o.useDispatch)();return()=>t((0,s.kY)(e))},y=()=>{const e=(0,o.useDispatch)();(0,a.useEffect)((()=>{e((0,s.bZ)())}),[e])},j=e=>{const t=(0,o.useDispatch)();(0,a.useEffect)((()=>{t((0,s.gv)(e))}),[t,e])},D=()=>{const e=(0,o.useDispatch)();(0,a.useEffect)((()=>{e((0,s.Kj)())}),[e])},P=()=>{const e=(0,o.useDispatch)(),t=L();return r=>{e((0,s.J_)(r,t.Edit))}},v=()=>{const e=(0,o.useDispatch)();return t=>e((0,s.oe)(t))},C=()=>{const e=(0,o.useDispatch)(),{name:t}=(0,o.useSelector)((e=>e.dataSources.dataSource));return()=>{u.Z.publish(new h.VJ({title:"Delete",text:`Are you sure you want to delete the "${t}" data source?`,yesText:"Delete",icon:"trash-alt",onConfirm:()=>e((0,s.F5)())}))}},w=e=>(0,o.useSelector)((t=>(0,m.f6)(t.dataSources,e))),N=e=>{const t=w(e),r=JSON.stringify({datasource:t.name,context:"explore"});return c.urlUtil.renderUrl("/explore",{left:r})},b=e=>(0,o.useSelector)((t=>(0,m.G4)(t.dataSources,e))),T=()=>(0,o.useSelector)((e=>e.dataSourceSettings)),k=(e,t)=>{const r=w(e),{plugin:s,loadError:a,loading:n}=T(),i=(0,o.useSelector)((e=>e.navIndex)),c=t?`datasource-page-${t}`:`datasource-settings-${e}`;if(a){const e={text:a,subTitle:"Data Source Error",icon:"exclamation-triangle"};return{node:e,main:e}}return n||!s?(0,g.h)(i,c,(0,S.xG)("settings")):(0,g.h)(i,c,(0,S.nI)((0,S.B1)(r,s),t||"settings"))},I=e=>{const t=w(e);return{readOnly:!0===t.readOnly,hasWriteRights:d.Vt.hasPermissionInMetadata(p.bW.DataSourcesWrite,t),hasDeleteRights:d.Vt.hasPermissionInMetadata(p.bW.DataSourcesDelete,t)}},L=()=>(0,a.useContext)(i);var E=r(75375)},30110:(e,t,r)=>{r.d(t,{iY:()=>B,bt:()=>k,ZV:()=>T,GE:()=>P,UQ:()=>C,bJ:()=>v,x3:()=>w,IS:()=>I,y9:()=>b,S1:()=>N,wq:()=>L});var s=r(68404),a=r(18745),n=r(4936),i=r(72192),o=r(1250),c=r(98335),l=r(43215),u=r(79729);const d=e=>e.plugins,g=(0,c.P1)(d,(e=>{let{items:t}=e;return t})),p=(0,c.P1)(d,(e=>{let{settings:t}=e;return t.displayMode})),{selectAll:h,selectById:S}=o.CD.getSelectors(g),m=(e,t)=>(0,c.P1)((e=>(0,c.P1)(h,(t=>t.filter((t=>"installed"===e?t.isInstalled:!t.isCore)))))(e),(e=>e.filter((e=>"all"===t||e.type===t)))),f=(e,t,r)=>(0,c.P1)(m(t,r),(e=>(0,c.P1)(h,(t=>""===e?[]:t.filter((t=>{const r=[];return t.name&&r.push(t.name.toLowerCase()),t.orgName&&r.push(t.orgName.toLowerCase()),r.some((t=>t.includes((0,l.unEscapeStringFromRegex)(e).toLowerCase())))})))))(e),((t,r)=>""===e?t:r)),x=(0,c.P1)(h,(e=>e?e.filter((e=>Boolean(e.error))).map((e=>({pluginId:e.id,errorCode:e.error}))):[])),y=e=>(0,c.P1)(d,(t=>{let{requests:r={}}=t;return r[e]})),j=e=>(0,c.P1)(y(e),(e=>(null==e?void 0:e.status)===u.eE.Pending)),D=e=>(0,c.P1)(y(e),(e=>(null==e?void 0:e.status)===u.eE.Rejected?null==e?void 0:e.error:null)),P=e=>{let{query:t="",filterBy:r="installed",filterByType:s="all",sortBy:i=n.Nh.nameAsc}=e;E();const o=(0,a.useSelector)(f(t,r,s)),{isLoading:c,error:l}=T();return{isLoading:c,error:l,plugins:(0,n.AA)(o,i)}},v=e=>(E(),A(e),(0,a.useSelector)((t=>S(t,e)))),C=()=>(E(),(0,a.useSelector)(x)),w=()=>{const e=(0,a.useDispatch)();return(t,r,s)=>e((0,i.N9)({id:t,version:r,isUpdating:s}))},N=()=>{const e=(0,a.useDispatch)();return t=>e((0,i.Tz)(t))},b=()=>null===(0,a.useSelector)(D(i.tQ.typePrefix)),T=()=>({isLoading:(0,a.useSelector)(j(i.Qd.typePrefix)),error:(0,a.useSelector)(D(i.Qd.typePrefix))}),k=()=>({isLoading:(0,a.useSelector)(j(i.DD.typePrefix)),error:(0,a.useSelector)(D(i.DD.typePrefix))}),I=()=>({isInstalling:(0,a.useSelector)(j(i.N9.typePrefix)),error:(0,a.useSelector)(D(i.N9.typePrefix))}),L=()=>({isUninstalling:(0,a.useSelector)(j(i.Tz.typePrefix)),error:(0,a.useSelector)(D(i.Tz.typePrefix))}),E=()=>{const e=(0,a.useDispatch)(),t=(0,a.useSelector)((r=i.Qd.typePrefix,(0,c.P1)(y(r),(e=>void 0===e))));var r;(0,s.useEffect)((()=>{t&&e((0,i.Qd)())}),[])},A=e=>{const t=(0,a.useDispatch)(),r=(0,a.useSelector)((t=>S(t,e))),n=!(0,a.useSelector)(j(i.DD.typePrefix))&&r&&!r.details;(0,s.useEffect)((()=>{n&&t((0,i.DD)(e))}),[r])},B=()=>{const e=(0,a.useDispatch)();return{displayMode:(0,a.useSelector)(p),setDisplayMode:t=>e((0,o.UC)(t))}}}}]);
//# sourceMappingURL=NewDataSourcePage.b0446e89eb941a278be5.js.map