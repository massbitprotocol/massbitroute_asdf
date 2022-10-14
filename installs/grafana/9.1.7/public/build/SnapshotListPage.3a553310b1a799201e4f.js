"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[5295],{17821:(e,s,t)=>{t.r(s),t.d(s,{SnapshotListPage:()=>u,default:()=>p});var n,a,r,i=t(68404),l=t(69371),c=t(66049),d=t(90923),h=t(3490),o=t(45916);const x=()=>{const[e,s]=(0,i.useState)([]),[t,l]=(0,i.useState)(),x=d.locationService.getLocation().pathname,j=window.location.href,u=j.substring(0,j.indexOf(x));(0,c.Z)((async()=>{const e=await(0,d.getBackendSrv)().get("/api/dashboard/snapshots").then((e=>e.map((e=>Object.assign({},e,{url:`/dashboard/snapshot/${e.key}`})))));s(e)}),[s]);const p=(0,i.useCallback)((async t=>{const n=e.filter((e=>e.key!==t.key));s(n),await(0,d.getBackendSrv)().delete(`/api/snapshots/${t.key}`).catch((()=>{s(e)}))}),[e]);return(0,o.jsxs)("div",{children:[(0,o.jsxs)("table",{className:"filter-table",children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[n||(n=(0,o.jsx)("th",{children:(0,o.jsx)("strong",{children:"Name"})})),a||(a=(0,o.jsx)("th",{children:(0,o.jsx)("strong",{children:"Snapshot url"})})),(0,o.jsx)("th",{style:{width:"70px"}}),(0,o.jsx)("th",{style:{width:"30px"}}),(0,o.jsx)("th",{style:{width:"25px"}})]})}),(0,o.jsx)("tbody",{children:e.map((e=>{const s=e.externalUrl||e.url,t=e.externalUrl||`${u}${e.url}`;return(0,o.jsxs)("tr",{children:[(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:s,children:e.name})}),(0,o.jsx)("td",{children:(0,o.jsx)("a",{href:s,children:t})}),(0,o.jsx)("td",{children:e.external&&(r||(r=(0,o.jsx)("span",{className:"query-keyword",children:"External"})))}),(0,o.jsx)("td",{className:"text-center",children:(0,o.jsx)(h.LinkButton,{href:s,variant:"secondary",size:"sm",icon:"eye",children:"View"})}),(0,o.jsx)("td",{className:"text-right",children:(0,o.jsx)(h.Button,{variant:"destructive",size:"sm",icon:"times",onClick:()=>l(e)})})]},e.key)}))})]}),(0,o.jsx)(h.ConfirmModal,{isOpen:!!t,icon:"trash-alt",title:"Delete",body:`Are you sure you want to delete '${null==t?void 0:t.name}'?`,confirmText:"Delete",onDismiss:()=>l(void 0),onConfirm:()=>{p(t),l(void 0)}})]})};var j;const u=e=>{let{}=e;return j||(j=(0,o.jsx)(l.T,{navId:"dashboards/snapshots",children:(0,o.jsx)(l.T.Contents,{children:(0,o.jsx)(x,{})})}))},p=u}}]);
//# sourceMappingURL=SnapshotListPage.3a553310b1a799201e4f.js.map