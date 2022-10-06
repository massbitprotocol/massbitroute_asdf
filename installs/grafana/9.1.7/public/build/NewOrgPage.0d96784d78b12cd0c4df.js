"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[950],{13540:(e,n,a)=>{a.r(n),a.d(n,{NewOrgPage:()=>m,default:()=>p});a(68404);var t,r,i,o=a(18745),s=a(3490),c=a(69371),g=a(78837),d=a(8674),l=a(57192),u=a(45916);const h={createOrganization:l.Yi},v=(0,o.connect)((e=>({navModel:(0,d.h)(e.navIndex,"global-orgs")})),h),m=e=>{let{navModel:n,createOrganization:a}=e;return(0,u.jsx)(c.T,{navModel:n,children:(0,u.jsxs)(c.T.Contents,{children:[t||(t=(0,u.jsx)("h3",{className:"page-sub-heading",children:"New organization"})),r||(r=(0,u.jsxs)("p",{className:"playlist-description",children:["Each organization contains their own dashboards, data sources, and configuration, which cannot be shared shared between organizations. While users might belong to more than one organization, multiple organizations are most frequently used in multi-tenant deployments."," "]})),(0,u.jsx)(s.Form,{onSubmit:async e=>{await a(e),window.location.href=(0,g.iE)().appSubUrl+"/org"},children:e=>{let{register:n,errors:a}=e;return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(s.Field,{label:"Organization name",invalid:!!a.name,error:a.name&&a.name.message,children:(0,u.jsx)(s.Input,Object.assign({placeholder:"Org name"},n("name",{required:"Organization name is required"})))}),i||(i=(0,u.jsx)(s.Button,{type:"submit",children:"Create"}))]})}})]})})},p=v(m)},57192:(e,n,a)=>{a.d(n,{FV:()=>s,JE:()=>d,Q$:()=>c,RF:()=>o,Yi:()=>g});var t=a(90923),r=a(36537),i=a(41078);function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{getBackendSrv:t.getBackendSrv};return async n=>{const a=await e.getBackendSrv().get("/api/org");return n((0,i.jR)(a)),a}}function s(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{getBackendSrv:t.getBackendSrv};return async(n,a)=>{const t=a().organization.organization;await e.getBackendSrv().put("/api/org",{name:t.name}),n((0,r.H7)(t.name)),n(o(e))}}function c(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{getBackendSrv:t.getBackendSrv};return async a=>{const t=await n.getBackendSrv().post("/api/user/using/"+e);a((0,r.H7)(t.name))}}function g(e){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{getBackendSrv:t.getBackendSrv};return async a=>{a(c((await n.getBackendSrv().post("/api/orgs/",e)).orgId))}}function d(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{getBackendSrv:t.getBackendSrv};return async n=>{const a=await e.getBackendSrv().get("/api/user/orgs");return n((0,i.IM)(a)),a}}}}]);
//# sourceMappingURL=NewOrgPage.0d96784d78b12cd0c4df.js.map