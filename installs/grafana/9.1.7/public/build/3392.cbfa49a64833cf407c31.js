"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3392],{43392:(e,a,i)=>{i.r(a),i.d(a,{SignupPage:()=>m,default:()=>u});i(68404);var s,r=i(90923),l=i(3490),n=i(78837),o=i(58257),d=i(85040),t=i(45653),c=i(45916);const m=e=>{const a=(0,o.iG)(),i={email:e.queryParams.email,code:e.queryParams.code};return(0,c.jsx)(d.dd,{children:(0,c.jsx)(d.$s,{children:(0,c.jsx)(l.Form,{defaultValues:i,onSubmit:async e=>{""===e.name&&delete e.name,delete e.confirm;"redirect-to-select-org"===(await(0,r.getBackendSrv)().post("/api/user/signup/step2",{email:e.email,code:e.code,username:e.email,orgName:e.orgName,password:e.password,name:e.name}).catch((e=>{var i;const s=(null===(i=e.data)||void 0===i?void 0:i.message)||e;a.warning(s)}))).code&&window.location.assign((0,n.iE)().appSubUrl+"/profile/select-org?signup=1"),window.location.assign((0,n.iE)().appSubUrl+"/")},children:e=>{var a,i,r;let{errors:o,register:d,getValues:m}=e;return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.Field,{label:"Your name",children:(0,c.jsx)(l.Input,Object.assign({id:"user-name"},d("name"),{placeholder:"(optional)"}))}),(0,c.jsx)(l.Field,{label:"Email",invalid:!!o.email,error:null===(a=o.email)||void 0===a?void 0:a.message,children:(0,c.jsx)(l.Input,Object.assign({id:"email"},d("email",{required:"Email is required",pattern:{value:/^\S+@\S+$/,message:"Email is invalid"}}),{type:"email",placeholder:"Email"}))}),!(0,n.iE)().autoAssignOrg&&(0,c.jsx)(l.Field,{label:"Org. name",children:(0,c.jsx)(l.Input,Object.assign({id:"org-name"},d("orgName"),{placeholder:"Org. name"}))}),(0,n.iE)().verifyEmailEnabled&&(0,c.jsx)(l.Field,{label:"Email verification code (sent to your email)",children:(0,c.jsx)(l.Input,Object.assign({id:"verification-code"},d("code"),{placeholder:"Code"}))}),(0,c.jsx)(l.Field,{label:"Password",invalid:!!o.password,error:null==o||null===(i=o.password)||void 0===i?void 0:i.message,children:(0,c.jsx)(t.Z,Object.assign({id:"new-password",autoFocus:!0,autoComplete:"new-password"},d("password",{required:"Password is required"})))}),(0,c.jsx)(l.Field,{label:"Confirm password",invalid:!!o.confirm,error:null==o||null===(r=o.confirm)||void 0===r?void 0:r.message,children:(0,c.jsx)(t.Z,Object.assign({id:"confirm-new-password",autoComplete:"new-password"},d("confirm",{required:"Confirmed password is required",validate:e=>e===m().password||"Passwords must match!"})))}),(0,c.jsxs)(l.HorizontalGroup,{children:[s||(s=(0,c.jsx)(l.Button,{type:"submit",children:"Submit"})),(0,c.jsx)(l.LinkButton,{fill:"text",href:(0,n.iE)().appSubUrl+"/login",children:"Back to login"})]})]})}})})})},u=m}}]);
//# sourceMappingURL=3392.cbfa49a64833cf407c31.js.map