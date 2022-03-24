"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[903],{"./public/app/core/components/Signup/VerifyEmailPage.tsx":(e,i,a)=>{a.r(i),a.d(i,{VerifyEmailPage:()=>v,default:()=>j});var n,r,s,t,l=a("./node_modules/react/index.js"),o=a("./public/app/core/components/Login/LoginLayout.tsx"),c=a("./packages/grafana-ui/src/index.ts"),d=a("./public/app/core/config.ts"),p=a("./packages/grafana-runtime/src/index.ts"),u=a("./public/app/core/app_events.ts"),m=a("./packages/grafana-data/src/index.ts"),g=a("./node_modules/react/jsx-runtime.js");const h=()=>{const[e,i]=(0,l.useState)(!1);return e?(0,g.jsxs)("div",{children:[n||(n=(0,g.jsx)("p",{children:"An email with a verification link has been sent to the email address. You should receive it shortly."})),r||(r=(0,g.jsx)(c.Container,{margin:"md"})),(0,g.jsx)(c.LinkButton,{variant:"primary",href:(0,d.iE)().appSubUrl+"/signup",children:"Complete Signup"})]}):(0,g.jsx)(c.Form,{onSubmit:e=>{(0,p.getBackendSrv)().post("/api/user/signup",e).then((()=>{i(!0)})).catch((e=>{var i;const a=(null===(i=e.data)||void 0===i?void 0:i.message)||e;u.Z.emit(m.AppEvents.alertWarning,[a])}))},children:({register:e,errors:i})=>{var a;return(0,g.jsxs)(g.Fragment,{children:[s||(s=(0,g.jsx)(c.Legend,{children:"Verify Email"})),(0,g.jsx)(c.Field,{label:"Email",description:"Enter your email address to get a verification link sent to you",invalid:!!i.email,error:null===(a=i.email)||void 0===a?void 0:a.message,children:(0,g.jsx)(c.Input,Object.assign({id:"email"},e("email",{required:"Email is required",pattern:{value:/^\S+@\S+$/,message:"Email is invalid"}}),{placeholder:"Email"}))}),(0,g.jsxs)(c.HorizontalGroup,{children:[t||(t=(0,g.jsx)(c.Button,{children:"Send verification email"})),(0,g.jsx)(c.LinkButton,{fill:"text",href:(0,d.iE)().appSubUrl+"/login",children:"Back to login"})]})]})}})};var x;const v=()=>x||(x=(0,g.jsx)(o.dd,{children:(0,g.jsx)(o.$s,{children:(0,g.jsx)(h,{})})})),j=v}}]);
//# sourceMappingURL=903.8128b05ac04b15cbf98d.js.map