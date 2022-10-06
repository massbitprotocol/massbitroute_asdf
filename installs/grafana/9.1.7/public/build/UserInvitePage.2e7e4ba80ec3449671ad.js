"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7707],{51767:(e,n,r)=>{r.r(n),r.d(n,{UserInvitePage:()=>f,default:()=>E});r(68404);var i,a=r(69371),l=r(98163),s=r(43215),t=r(8072),o=r(90923),d=r(3490),c=r(78837),u=r(47570),h=r(69778),m=r(45916);const j=["ref"];const x=[{label:"Viewer",value:u.B5.Viewer},{label:"Editor",value:u.B5.Editor},{label:"Admin",value:u.B5.Admin}],g={name:"",email:"",role:u.B5.Editor,sendEmail:!0},b=()=>{const e=(0,u.I0)();return(0,m.jsx)(d.Form,{defaultValues:g,onSubmit:async n=>{await e((0,h.MA)(n)).unwrap(),o.locationService.push("/org/users/")},children:e=>{let{register:n,control:r,errors:a}=e;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(d.FieldSet,{children:[(0,m.jsx)(d.Field,{invalid:!!a.loginOrEmail,error:a.loginOrEmail?"Email or username is required":void 0,label:"Email or username",children:(0,m.jsx)(d.Input,Object.assign({},n("loginOrEmail",{required:!0}),{placeholder:"email@example.com"}))}),(0,m.jsx)(d.Field,{invalid:!!a.name,label:"Name",children:(0,m.jsx)(d.Input,Object.assign({},n("name"),{placeholder:"(optional)"}))}),(0,m.jsx)(d.Field,{invalid:!!a.role,label:"Role",children:(0,m.jsx)(d.InputControl,{render:e=>{let{}=e,n=function(e,n){if(null==e)return{};var r,i,a={},l=Object.keys(e);for(i=0;i<l.length;i++)r=l[i],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e.field,j);return(0,m.jsx)(d.RadioButtonGroup,Object.assign({},n,{options:x}))},control:r,name:"role"})}),(0,m.jsx)(d.Field,{label:"Send invite email",children:(0,m.jsx)(d.Switch,Object.assign({id:"send-email-switch"},n("sendEmail")))})]}),(0,m.jsxs)(t.Stack,{children:[i||(i=(0,m.jsx)(d.Button,{type:"submit",children:"Submit"})),(0,m.jsx)(d.LinkButton,{href:s.locationUtil.assureBaseUrl((0,c.iE)().appSubUrl+"/org/users"),variant:"secondary",children:"Back"})]})]})}})};var p,v;function f(){const e=(0,m.jsxs)(m.Fragment,{children:["Send invitation or add existing Grafana user to the organization.",(0,m.jsxs)("span",{className:"highlight-word",children:[" ",l.Vt.user.orgName]})]});return(0,m.jsx)(a.T,{navId:"users",pageNav:{text:"Invite user"},subTitle:e,children:(0,m.jsxs)(a.T.Contents,{children:[(0,m.jsxs)(a.T.OldNavOnly,{children:[p||(p=(0,m.jsx)("h3",{className:"page-sub-heading",children:"Invite user"})),(0,m.jsx)("div",{className:"p-b-2",children:e})]}),v||(v=(0,m.jsx)(b,{}))]})})}const E=f}}]);
//# sourceMappingURL=UserInvitePage.2e7e4ba80ec3449671ad.js.map