"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[529],{67833:(e,a,t)=>{t.d(a,{Z:()=>z,v:()=>y});var r,s,n,i,o,l=t(25235),d=t(19309),c=t(36636),h=t(68404),g=t(43215),u=t(16695),m=t(90923),p=t(3490),b=t(57512),f=t(76187),v=t(28659),S=t(45916);function x(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const k=[{value:"",label:d.ag._({id:"shared-preferences.theme.default-label",message:"Default"})},{value:"dark",label:d.ag._({id:"shared-preferences.theme.dark-label",message:"Dark"})},{value:"light",label:d.ag._({id:"shared-preferences.theme.light-label",message:"Light"})}],j=[{value:"",label:d.ag._({id:"common.locale.default",message:"Default"})},{value:b.cV,label:d.ag._({id:"common.locale.en",message:"English"})},{value:b.Hc,label:d.ag._({id:"common.locale.es",message:"Spanish"})},{value:b.jW,label:d.ag._({id:"common.locale.fr",message:"French"})}],w=Boolean(m.config.featureToggles.internationalization),D={title:"Default",tags:[],type:"",uid:void 0,uri:"",url:"",folderId:0,folderTitle:"",folderUid:"",folderUrl:"",isStarred:!1,slug:"",items:[]};class y extends h.PureComponent{constructor(e){super(e),x(this,"service",void 0),x(this,"onSubmitForm",(async()=>{const{homeDashboardUID:e,theme:a,timezone:t,weekStart:r,locale:s,queryHistory:n}=this.state;await this.service.update({homeDashboardUID:e,theme:a,timezone:t,weekStart:r,locale:s,queryHistory:n}),window.location.reload()})),x(this,"onThemeChanged",(e=>{this.setState({theme:e})})),x(this,"onTimeZoneChanged",(e=>{e&&this.setState({timezone:e})})),x(this,"onWeekStartChanged",(e=>{this.setState({weekStart:e})})),x(this,"onHomeDashboardChanged",(e=>{this.setState({homeDashboardUID:e})})),x(this,"onLocaleChanged",(e=>{this.setState({locale:e})})),x(this,"getFullDashName",(e=>void 0===e.folderTitle||""===e.folderTitle?e.title:e.folderTitle+" / "+e.title)),this.service=new f.y(e.resourceUri),this.state={homeDashboardUID:D.uid,theme:"",timezone:"",weekStart:"",locale:"",dashboards:[],queryHistory:{homeTab:""}}}async componentDidMount(){const e=await this.service.load(),a=await v.ae.search({starred:!0});if(e.homeDashboardUID&&!a.find((a=>a.uid===e.homeDashboardUID))){const t=await v.ae.search({dashboardUIDs:e.homeDashboardUID});t.length>0&&a.push(t[0])}this.setState({homeDashboardUID:e.homeDashboardUID,theme:e.theme,timezone:e.timezone,weekStart:e.weekStart,locale:e.locale,dashboards:[D,...a],queryHistory:e.queryHistory})}render(){const{theme:e,timezone:a,weekStart:t,homeDashboardUID:c,locale:h,dashboards:m}=this.state,{disabled:b}=this.props,f=C(),v=r||(r=(0,S.jsx)(p.Tooltip,{content:(0,S.jsx)(l.cC,{id:"shared-preferences.fields.home-dashboard-tooltip"}),children:(0,S.jsx)(p.Icon,{name:"info-circle"})}));return(0,S.jsx)(p.Form,{onSubmit:this.onSubmitForm,children:()=>{var r;return(0,S.jsxs)(p.FieldSet,{label:s||(s=(0,S.jsx)(l.cC,{id:"shared-preferences.title"})),disabled:b,children:[(0,S.jsx)(p.Field,{label:d.ag._({id:"shared-preferences.fields.theme-label",message:"UI Theme"}),children:(0,S.jsx)(p.RadioButtonGroup,{options:k,value:null===(r=k.find((a=>a.value===e)))||void 0===r?void 0:r.value,onChange:this.onThemeChanged})}),(0,S.jsx)(p.Field,{label:(0,S.jsxs)(p.Label,{htmlFor:"home-dashboard-select",children:[(0,S.jsx)("span",{className:f.labelText,children:n||(n=(0,S.jsx)(l.cC,{id:"shared-preferences.fields.home-dashboard-label"}))}),v]}),"data-testid":"User preferences home dashboard drop down",children:(0,S.jsx)(p.Select,{value:m.find((e=>e.uid===c)),getOptionValue:e=>e.uid,getOptionLabel:this.getFullDashName,onChange:e=>this.onHomeDashboardChanged(e.uid),options:m,placeholder:d.ag._({id:"shared-preferences.fields.home-dashboard-placeholder",message:"Choose default dashboard"}),inputId:"home-dashboard-select"})}),(0,S.jsx)(p.Field,{label:d.ag._({id:"shared-dashboard.fields.timezone-label",message:"Timezone"}),"data-testid":u.wl.components.TimeZonePicker.containerV2,children:(0,S.jsx)(p.TimeZonePicker,{includeInternal:!0,value:a,onChange:this.onTimeZoneChanged,inputId:"shared-preferences-timezone-picker"})}),(0,S.jsx)(p.Field,{label:d.ag._({id:"shared-preferences.fields.week-start-label",message:"Week start"}),"data-testid":u.wl.components.WeekStartPicker.containerV2,children:(0,S.jsx)(p.WeekStartPicker,{value:t,onChange:this.onWeekStartChanged,inputId:"shared-preferences-week-start-picker"})}),w?(0,S.jsx)(p.Field,{label:(0,S.jsxs)(p.Label,{htmlFor:"locale-select",children:[(0,S.jsx)("span",{className:f.labelText,children:i||(i=(0,S.jsx)(l.cC,{id:"shared-preferences.fields.locale-label"}))}),(0,S.jsx)(p.FeatureBadge,{featureState:g.FeatureState.alpha})]}),"data-testid":"User preferences language drop down",children:(0,S.jsx)(p.Select,{value:j.find((e=>e.value===h)),onChange:e=>{var a;return this.onLocaleChanged(null!==(a=e.value)&&void 0!==a?a:"")},options:j,placeholder:d.ag._({id:"shared-preferences.fields.locale-placeholder",message:"Choose language"}),inputId:"locale-select"})}):null,(0,S.jsx)("div",{className:"gf-form-button-row",children:(0,S.jsx)(p.Button,{type:"submit",variant:"primary","data-testid":u.wl.components.UserProfile.preferencesSaveButton,children:o||(o=(0,S.jsx)(l.cC,{id:"common.save"}))})})]})}})}}const z=y,C=(0,p.stylesFactory)((()=>({labelText:c.css`
      margin-right: 6px;
    `})))},36199:(e,a,t)=>{t.r(a),t.d(a,{OrgDetailsPage:()=>b,default:()=>v});var r,s=t(68404),n=t(18745),i=t(3490),o=t(69371),l=t(67833),d=t(98163),c=t(8674),h=t(47570),g=t(45916);const u=e=>{let{onSubmit:a,orgName:t}=e;const s=d.Vt.hasPermission(h.bW.OrgsWrite);return(0,g.jsx)(i.Form,{defaultValues:{orgName:t},onSubmit:e=>{let{orgName:t}=e;return a(t)},children:e=>{let{register:a}=e;return(0,g.jsxs)(i.FieldSet,{label:"Organization profile",disabled:!s,children:[(0,g.jsx)(i.Field,{label:"Organization name",children:(0,g.jsx)(i.Input,Object.assign({id:"org-name-input",type:"text"},a("orgName",{required:!0})))}),r||(r=(0,g.jsx)(i.Button,{type:"submit",children:"Update organization name"}))]})}})};var m=t(57192),p=t(41078);class b extends s.PureComponent{constructor(){var e,a,t;super(...arguments),t=e=>{this.props.setOrganizationName(e),this.props.updateOrganization()},(a="onUpdateOrganization")in(e=this)?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t}async componentDidMount(){await this.props.loadOrganization()}render(){const{navModel:e,organization:a}=this.props,t=0===Object.keys(a).length,r=d.Vt.hasPermission(h.bW.OrgsRead),s=d.Vt.hasPermission(h.bW.OrgsPreferencesRead),n=d.Vt.hasPermission(h.bW.OrgsPreferencesWrite);return(0,g.jsx)(o.T,{navModel:e,children:(0,g.jsx)(o.T.Contents,{isLoading:t,children:!t&&(0,g.jsxs)(i.VerticalGroup,{spacing:"lg",children:[r&&(0,g.jsx)(u,{onSubmit:this.onUpdateOrganization,orgName:a.name}),s&&(0,g.jsx)(l.Z,{resourceUri:"org",disabled:!n})]})})})}}const f={loadOrganization:m.RF,setOrganizationName:p.xR,updateOrganization:m.FV},v=(0,n.connect)((function(e){return{navModel:(0,c.h)(e.navIndex,"org-settings"),organization:e.organization.organization}}),f)(b)},57192:(e,a,t)=>{t.d(a,{FV:()=>o,JE:()=>c,Q$:()=>l,RF:()=>i,Yi:()=>d});var r=t(90923),s=t(36537),n=t(41078);function i(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{getBackendSrv:r.getBackendSrv};return async a=>{const t=await e.getBackendSrv().get("/api/org");return a((0,n.jR)(t)),t}}function o(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{getBackendSrv:r.getBackendSrv};return async(a,t)=>{const r=t().organization.organization;await e.getBackendSrv().put("/api/org",{name:r.name}),a((0,s.H7)(r.name)),a(i(e))}}function l(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{getBackendSrv:r.getBackendSrv};return async t=>{const r=await a.getBackendSrv().post("/api/user/using/"+e);t((0,s.H7)(r.name))}}function d(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{getBackendSrv:r.getBackendSrv};return async t=>{t(l((await a.getBackendSrv().post("/api/orgs/",e)).orgId))}}function c(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{getBackendSrv:r.getBackendSrv};return async a=>{const t=await e.getBackendSrv().get("/api/user/orgs");return a((0,n.IM)(t)),t}}}}]);
//# sourceMappingURL=OrgDetailsPage.f2d6e9a7af4d0c5295ed.js.map