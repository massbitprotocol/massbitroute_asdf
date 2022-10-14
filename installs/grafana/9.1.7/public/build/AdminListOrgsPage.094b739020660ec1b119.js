"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3798],{77280:(e,s,a)=>{a.r(s),a.d(s,{default:()=>p});var n,r,i,t,l,d=a(68404),o=a(18745),c=a(33554),h=a(90923),x=a(3490),g=a(69371),m=a(8674),j=a(61959),u=a(47570),f=a(98163),v=a(45916);function b(e){let{orgs:s,onDelete:a}=e;const l=f.Vt.hasPermission(u.bW.OrgsDelete),[o,c]=(0,d.useState)();return(0,v.jsxs)("table",{className:"filter-table form-inline filter-table--hover",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[n||(n=(0,v.jsx)("th",{children:"ID"})),r||(r=(0,v.jsx)("th",{children:"Name"})),(0,v.jsx)("th",{style:{width:"1%"}})]})}),(0,v.jsx)("tbody",{children:s.map((e=>(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"link-td",children:(0,v.jsx)("a",{href:`admin/orgs/edit/${e.id}`,children:e.id})}),(0,v.jsx)("td",{className:"link-td",children:(0,v.jsx)("a",{href:`admin/orgs/edit/${e.id}`,children:e.name})}),(0,v.jsx)("td",{className:"text-right",children:(0,v.jsx)(x.Button,{variant:"destructive",size:"sm",icon:"times",onClick:()=>c(e),"aria-label":"Delete org",disabled:!l})})]},`${e.id}-${e.name}`)))}),o&&(0,v.jsx)(x.ConfirmModal,{isOpen:!0,icon:"trash-alt",title:"Delete",body:(0,v.jsxs)("div",{children:["Are you sure you want to delete '",o.name,"'?",i||(i=(0,v.jsx)("br",{}))," ",t||(t=(0,v.jsx)("small",{children:"All dashboards for this organization will be removed!"}))]}),confirmText:"Delete",onDismiss:()=>c(void 0),onConfirm:()=>{a(o.id),c(void 0)}})]})}function p(){const e=(0,o.useSelector)((e=>e.navIndex)),s=(0,m.h)(e,"global-orgs"),[a,n]=(0,c.default)((async()=>await(async()=>await(0,h.getBackendSrv)().get("/api/orgs"))()),[]),r=j.Vt.hasPermission(u.bW.OrgsCreate);return(0,d.useEffect)((()=>{n()}),[n]),(0,v.jsx)(g.T,{navModel:s,children:(0,v.jsx)(g.T.Contents,{children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("div",{className:"page-action-bar",children:[l||(l=(0,v.jsx)("div",{className:"page-action-bar__spacer"})),(0,v.jsx)(x.LinkButton,{icon:"plus",href:"org/new",disabled:!r,children:"New org"})]}),a.error&&(i=a.error,(null==i||null===(t=i.data)||void 0===t?void 0:t.message)||"An unexpected error happened."),a.loading&&"Fetching organizations",a.value&&(0,v.jsx)(b,{orgs:a.value,onDelete:e=>{(async e=>await(0,h.getBackendSrv)().delete("/api/orgs/"+e))(e).then((()=>n()))}})]})})});var i,t}}}]);
//# sourceMappingURL=AdminListOrgsPage.094b739020660ec1b119.js.map