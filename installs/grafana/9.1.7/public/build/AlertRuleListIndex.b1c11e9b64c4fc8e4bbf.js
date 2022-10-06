"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[2461,4286],{29507:(e,a,r)=>{r.d(a,{x:()=>l});var t=r(68404),n=r(18745),s=r(45193);function l(e){const a=(0,n.useDispatch)(),r=(0,t.useRef)(e);r.current=e,(0,t.useEffect)((()=>()=>{a((0,s.e)({stateSelector:r.current}))}),[a])}},10029:(e,a,r)=>{r.r(a),r.d(a,{AlertRuleListUnconnected:()=>F,default:()=>A});var t,n=r(68404),s=r(18745),l=r(90923),i=r(3490),o=r(5831),c=r(69371),u=r(8674),d=r(21169),p=r(45916);function g(e){let{onDismiss:a}=e;return(0,p.jsx)(i.Modal,{title:"Adding an Alert",isOpen:!0,onDismiss:a,onClickBackdrop:a,children:t||(t=(0,p.jsxs)(i.VerticalGroup,{spacing:"sm",children:[(0,p.jsx)("img",{src:"public/img/alert_howto_new.png",alt:"link to how to alert image"}),(0,p.jsx)("p",{children:"Alerts are added and configured in the Alert tab of any dashboard graph panel, letting you build and visualize an alert using existing queries."}),(0,p.jsx)("p",{children:"Remember to save the dashboard to persist your alert rule changes."})]}))})}var m=r(9575),h=r.n(m);const x=e=>{let{rule:a,search:r,onTogglePause:t}=e;const s=`${a.url}?editPanel=${a.panelId}&tab=alert`,l=(0,n.useCallback)((e=>(0,p.jsx)(h(),{highlightClassName:"highlight-search-match",textToHighlight:e,searchWords:[r]},e)),[r]);return(0,p.jsxs)(i.Card,{children:[(0,p.jsx)(i.Card.Heading,{children:l(a.name)}),(0,p.jsx)(i.Card.Figure,{children:(0,p.jsx)(i.Icon,{size:"xl",name:a.stateIcon,className:`alert-rule-item__icon ${a.stateClass}`})}),(0,p.jsxs)(i.Card.Meta,{children:[(0,p.jsxs)("span",{children:[(0,p.jsxs)("span",{className:`${a.stateClass}`,children:[l(a.stateText)," "]},"text"),"for ",a.stateAge]},"state"),a.info?l(a.info):null]}),(0,p.jsxs)(i.Card.Actions,{children:[(0,p.jsx)(i.Button,{variant:"secondary",icon:"paused"===a.state?"play":"pause",onClick:t,children:"paused"===a.state?"Resume":"Pause"},"play"),(0,p.jsx)(i.LinkButton,{variant:"secondary",href:s,icon:"cog",children:"Edit alert"},"edit")]})]})};var v;const f=()=>v||(v=(0,p.jsxs)(i.Alert,{severity:"warning",title:"Grafana legacy alerting is going away soon",children:[(0,p.jsxs)("p",{children:["You are using Grafana legacy alerting, it has been deprecated and will be removed in the next major version of Grafana.",(0,p.jsx)("br",{}),"We encourage you to upgrade to the new Grafana Alerting experience."]}),(0,p.jsxs)("p",{children:["See"," ",(0,p.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/difference-old-new/",children:"What’s New with Grafana Alerting"})," ","to learn more about what‘s new or learn"," ",(0,p.jsx)("a",{href:"https://grafana.com/docs/grafana/latest/alerting/unified-alerting/opt-in/",children:"how to enable the new Grafana Alerting feature"}),"."]})]}));var j=r(9191),b=r(61988);const S=e=>e.searchQuery,y=e=>{const a=new RegExp(e.alertRules.searchQuery,"i");return e.alertRules.items.filter((e=>a.test(e.name)||a.test(e.stateText)||a.test(e.info)))};var w,C,N,R;function $(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}const k={getAlertRulesAsync:j.Au,setSearchQuery:b.ql,togglePauseAlertRule:j.en},_=(0,s.connect)((function(e){return{navModel:(0,u.h)(e.navIndex,"alert-list"),alertRules:y(e),search:S(e.alertRules),isLoading:e.alertRules.isLoading}}),k);class F extends n.PureComponent{constructor(){super(...arguments),$(this,"stateFilters",[{label:"All",value:"all"},{label:"OK",value:"ok"},{label:"Not OK",value:"not_ok"},{label:"Alerting",value:"alerting"},{label:"No data",value:"no_data"},{label:"Paused",value:"paused"},{label:"Pending",value:"pending"}]),$(this,"onStateFilterChanged",(e=>{l.locationService.partial({state:e.value})})),$(this,"onOpenHowTo",(()=>{o.Z.publish(new d.Dn({component:g}))})),$(this,"onSearchQueryChange",(e=>{this.props.setSearchQuery(e)})),$(this,"onTogglePause",(e=>{this.props.togglePauseAlertRule(e.id,{paused:"paused"!==e.state})})),$(this,"alertStateFilterOption",(e=>{let{text:a,value:r}=e;return(0,p.jsx)("option",{value:r,children:a},r)}))}componentDidMount(){this.fetchRules()}componentDidUpdate(e){e.queryParams.state!==this.props.queryParams.state&&this.fetchRules()}async fetchRules(){await this.props.getAlertRulesAsync({state:this.getStateFilter()})}getStateFilter(){var e;return null!==(e=this.props.queryParams.state)&&void 0!==e?e:"all"}render(){const{navModel:e,alertRules:a,search:r,isLoading:t}=this.props;return(0,p.jsx)(c.T,{navModel:e,children:(0,p.jsxs)(c.T.Contents,{isLoading:t,children:[(0,p.jsxs)("div",{className:"page-action-bar",children:[(0,p.jsx)("div",{className:"gf-form gf-form--grow",children:(0,p.jsx)(i.FilterInput,{placeholder:"Search alerts",value:r,onChange:this.onSearchQueryChange})}),(0,p.jsxs)("div",{className:"gf-form",children:[w||(w=(0,p.jsx)("label",{className:"gf-form-label",htmlFor:"alert-state-filter",children:"States"})),(0,p.jsx)("div",{className:"width-13",children:(0,p.jsx)(i.Select,{inputId:"alert-state-filter",options:this.stateFilters,onChange:this.onStateFilterChanged,value:this.getStateFilter()})})]}),C||(C=(0,p.jsx)("div",{className:"page-action-bar__spacer"})),l.config.unifiedAlertingEnabled&&(N||(N=(0,p.jsx)(i.LinkButton,{variant:"primary",href:"alerting/ng/new",children:"Add NG Alert"}))),(0,p.jsx)(i.Button,{variant:"secondary",onClick:this.onOpenHowTo,children:"How to add an alert"})]}),R||(R=(0,p.jsx)(f,{})),(0,p.jsx)(i.VerticalGroup,{spacing:"none",children:a.map((e=>(0,p.jsx)(x,{rule:e,search:r,onTogglePause:()=>this.onTogglePause(e)},e.id)))})]})})}}const A=_(F)},9191:(e,a,r)=>{r.d(a,{Au:()=>i,C2:()=>c,c1:()=>d,en:()=>o,fA:()=>p,fg:()=>u,tk:()=>g});var t=r(90923),n=r(36537),s=r(58257),l=r(61988);function i(e){return async a=>{a((0,l.gz)());const r=await(0,t.getBackendSrv)().get("/api/alerts",e);a((0,l.Oc)(r))}}function o(e,a){return async r=>{await(0,t.getBackendSrv)().post(`/api/alerts/${e}/pause`,a);r(i({state:(t.locationService.getSearchObject().state||"all").toString()}))}}function c(e){return async a=>{try{await(0,t.getBackendSrv)().post("/api/alert-notifications",e),a((0,n.$l)((0,s.AT)("Notification created"))),t.locationService.push("/alerting/notifications")}catch(e){(0,t.isFetchError)(e)&&a((0,n.$l)((0,s.t_)(e.data.error)))}}}function u(e){return async a=>{try{await(0,t.getBackendSrv)().put(`/api/alert-notifications/${e.id}`,e),a((0,n.$l)((0,s.AT)("Notification updated")))}catch(e){(0,t.isFetchError)(e)&&a((0,n.$l)((0,s.t_)(e.data.error)))}}}function d(e){return async(a,r)=>{const n=r().notificationChannel.notificationChannel;await(0,t.getBackendSrv)().post("/api/alert-notifications/test",Object.assign({id:n.id},e))}}function p(){return async e=>{const a=(await(0,t.getBackendSrv)().get("/api/alert-notifiers")).sort(((e,a)=>e.name>a.name?1:-1));e((0,l.T2)(a))}}function g(e){return async a=>{await a(p());const r=await(0,t.getBackendSrv)().get(`/api/alert-notifications/${e}`);a((0,l.K)(r))}}},53838:(e,a,r)=>{r.r(a),r.d(a,{default:()=>ze});var t,n,s=r(36636),l=r(68404),i=r(18745),o=r(42326),c=r(43215),u=r(3490),d=r(26011),p=r(40256),g=r(28436),m=r(69450),h=r(45916);const x=()=>{const{canCreateGrafanaRules:e,canCreateCloudRules:a}=(0,m.B)();return e||a?t||(t=(0,h.jsx)(g.Z,{title:"You haven`t created any alert rules yet",buttonIcon:"bell",buttonLink:"alerting/new",buttonTitle:"New alert rule",proTip:"you can also create alert rules from existing panels and queries.",proTipLink:"https://grafana.com/docs/",proTipLinkTitle:"Learn more",proTipTarget:"_blank"})):n||(n=(0,h.jsx)(u.CallToActionCard,{message:"No rules exist yet.",callToActionElement:(0,h.jsx)("div",{})}))};var v=r(64681),f=r.n(v),j=r(92115),b=r(33899),S=r(19462),y=r(39357),w=r(86647);function C(){const[e,a]=(0,l.useState)(!1),[r,t]=(0,j.Z)("grafana.unifiedalerting.hideErrors",!1),n=(0,b._)((e=>e.dataSources)),s=(0,b._)((e=>e.promRules)),i=(0,b._)((e=>e.rulerRules)),o=(0,u.useStyles2)(R),c=(0,l.useMemo)((()=>{var e,a;const[r,t,l]=[n,s,i].map((e=>(0,S.Eu)().reduce(((a,r)=>{var t;const n=null===(t=e[r.name])||void 0===t?void 0:t.error;return e[r.name]&&n&&!(0,w.m$)(e[r.name])?[...a,{dataSource:r,error:n}]:a}),[]))),o=null===(e=s[S.GC])||void 0===e?void 0:e.error,c=null===(a=i[S.GC])||void 0===a?void 0:a.error,u=[];return o&&u.push((0,h.jsxs)(h.Fragment,{children:["Failed to load Grafana rules state: ",o.message||"Unknown error."]})),c&&u.push((0,h.jsxs)(h.Fragment,{children:["Failed to load Grafana rules config: ",c.message||"Unknown error."]})),r.forEach((e=>{let{dataSource:a,error:r}=e;u.push((0,h.jsxs)(h.Fragment,{children:["Failed to load the data source configuration for"," ",(0,h.jsx)("a",{href:(0,y.__)(a),children:a.name}),": ",r.message||"Unknown error."]}))})),t.forEach((e=>{let{dataSource:a,error:r}=e;return u.push((0,h.jsxs)(h.Fragment,{children:["Failed to load rules state from ",(0,h.jsx)("a",{href:(0,y.__)(a),children:a.name}),":"," ",r.message||"Unknown error."]}))})),l.forEach((e=>{let{dataSource:a,error:r}=e;return u.push((0,h.jsxs)(h.Fragment,{children:["Failed to load rules config from ",(0,h.jsx)("a",{href:(0,y.__)(a),children:a.name}),":"," ",r.message||"Unknown error."]}))})),u}),[n,s,i]);return(0,h.jsxs)(h.Fragment,{children:[!!c.length&&r&&(0,h.jsx)(N,{count:c.length,onClick:()=>t((e=>!e))}),!!c.length&&!r&&(0,h.jsxs)(u.Alert,{"data-testid":"cloud-rulessource-errors",title:"Errors loading rules",severity:"error",onRemove:()=>t(!0),children:[e&&c.map(((e,a)=>(0,h.jsx)("div",{children:e},a))),!e&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{children:c[0]}),c.length>=2&&(0,h.jsxs)(u.Button,{className:o.moreButton,fill:"text",icon:"angle-right",size:"sm",onClick:()=>a(!0),children:[c.length-1," more ",f()("error",c.length-1)]})]})]})]})}const N=e=>{let{count:a,onClick:r}=e;const t=(0,u.useStyles2)(R);return(0,h.jsx)("div",{className:t.floatRight,children:(0,h.jsx)(u.Tooltip,{content:"Show all errors",placement:"bottom",children:(0,h.jsx)(u.Button,{fill:"text",variant:"destructive",icon:"exclamation-triangle",onClick:r,children:a>1?(0,h.jsxs)(h.Fragment,{children:[a," errors"]}):(0,h.jsx)(h.Fragment,{children:"1 error"})})})})},R=e=>({moreButton:s.css`
    padding: 0;
  `,floatRight:s.css`
    display: flex;
    justify-content: flex-end;
  `});var $=r(47570),k=r(53262),_=r(65747),F=r(72965),A=r(37910),P=r(8455),T=r(90923),I=r(39132),G=r(13309),B=r(26980),L=r(83809),E=r(91045),O=r(85598),M=r(3799),q=r(29507),z=r(66322);function D(e){var a,r;const{namespace:t,group:n,onClose:s}=e,o=(0,u.useStyles2)(U),c=(0,i.useDispatch)(),{loading:d,error:p,dispatched:g}=null!==(a=(0,b._)((e=>e.updateLotexNamespaceAndGroup)))&&void 0!==a?a:P.oq,m=(0,l.useMemo)((()=>{var e;return{namespaceName:t.name,groupName:n.name,groupInterval:null!==(e=n.interval)&&void 0!==e?e:""}}),[t,n]);(0,l.useEffect)((()=>{!g||d||p||s()}),[g,d,s,p]),(0,q.x)((e=>e.unifiedAlerting.updateLotexNamespaceAndGroup));return(0,h.jsx)(u.Modal,{className:o.modal,isOpen:!0,title:"Edit namespace or rule group",onDismiss:s,onClickBackdrop:s,children:(0,h.jsx)(u.Form,{defaultValues:m,onSubmit:e=>{c((0,L.hv)({rulesSourceName:(0,S.EG)(t.rulesSource),groupName:n.name,newGroupName:e.groupName,namespaceName:t.name,newNamespaceName:e.namespaceName,groupInterval:e.groupInterval||void 0}))},children:e=>{var a,t,n;let{register:l,errors:i,formState:{isDirty:o}}=e;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(u.Field,{label:"Namespace",invalid:!!i.namespaceName,error:null===(a=i.namespaceName)||void 0===a?void 0:a.message,children:(0,h.jsx)(u.Input,Object.assign({id:"namespaceName"},l("namespaceName",{required:"Namespace name is required."})))}),(0,h.jsx)(u.Field,{label:"Rule group",invalid:!!i.groupName,error:null===(t=i.groupName)||void 0===t?void 0:t.message,children:(0,h.jsx)(u.Input,Object.assign({id:"groupName"},l("groupName",{required:"Rule group name is required."})))}),(0,h.jsx)(u.Field,{label:"Rule group evaluation interval",invalid:!!i.groupInterval,error:null===(n=i.groupInterval)||void 0===n?void 0:n.message,children:(0,h.jsx)(u.Input,Object.assign({id:"groupInterval",placeholder:"1m"},l("groupInterval",{pattern:z.lR})))}),(0,h.jsxs)(u.Modal.ButtonRow,{children:[r||(r=(0,h.jsx)(u.Button,{variant:"secondary",type:"button",disabled:d,onClick:s,fill:"outline",children:"Close"})),(0,h.jsx)(u.Button,{type:"submit",disabled:!o||d,children:d?"Saving...":"Save changes"})]})]})}},JSON.stringify(m))})}const U=()=>({modal:s.css`
    max-width: 560px;
  `});var H=r(51542);const V=e=>{let{children:a,status:r}=e;const t=(0,u.useStyles2)(W);return(0,h.jsx)("span",{className:t[r],children:a||r})},W=e=>({[H.x_.Inactive]:s.css`
    color: ${e.colors.success.text};
  `,[H.x_.Pending]:s.css`
    color: ${e.colors.warning.text};
  `,[H.x_.Firing]:s.css`
    color: ${e.colors.error.text};
  `,neutral:s.css`
    color: ${e.colors.text.secondary};
  `});var K,Z;const J={total:0,recording:0,[H.x_.Firing]:0,[H.x_.Pending]:0,[H.x_.Inactive]:0,error:0},Q=e=>{let{showInactive:a,showRecording:r,group:t,namespaces:n}=e;const s=(0,l.useMemo)((()=>{const e=Object.assign({},J),a=a=>{var r,t;a.promRule&&(0,w.x_)(a.promRule)&&(e[a.promRule.state]+=1),"err"!==(null===(r=a.promRule)||void 0===r?void 0:r.health)&&"error"!==(null===(t=a.promRule)||void 0===t?void 0:t.health)||(e.error+=1),(a.promRule&&(0,w.OP)(a.promRule)||a.rulerRule&&(0,w.yF)(a.rulerRule))&&(e.recording+=1),e.total+=1};return t&&t.rules.forEach(a),n&&n.forEach((e=>e.groups.forEach((e=>e.rules.forEach(a))))),e}),[t,n]),i=[];return s[H.x_.Firing]&&i.push((0,h.jsxs)(V,{status:H.x_.Firing,children:[s[H.x_.Firing]," firing"]},"firing")),s.error&&i.push((0,h.jsxs)(V,{status:H.x_.Firing,children:[s.error," errors"]},"errors")),s[H.x_.Pending]&&i.push((0,h.jsxs)(V,{status:H.x_.Pending,children:[s[H.x_.Pending]," pending"]},"pending")),a&&s[H.x_.Inactive]&&i.push((0,h.jsxs)(V,{status:"neutral",children:[s[H.x_.Inactive]," normal"]},"inactive")),r&&s.recording&&i.push((0,h.jsxs)(V,{status:"neutral",children:[s.recording," recording"]},"recording")),(0,h.jsxs)("div",{children:[(0,h.jsxs)("span",{children:[s.total," ",f()("rule",s.total)]}),!!i.length&&(0,h.jsxs)(h.Fragment,{children:[K||(K=(0,h.jsx)("span",{children:": "})),i.reduce(((e,a,r)=>e.length?[e,(0,h.jsx)(l.Fragment,{children:Z||(Z=(0,h.jsx)("span",{children:", "}))},r),a]:[a]),[])]})]})};var Y,X,ee,ae,re=r(61263);const te=l.memo((e=>{var a;let{group:r,namespace:t,expandAll:n}=e;const{rulesSource:s}=t,o=(0,i.useDispatch)(),c=(0,u.useStyles2)(ne),[d,p]=(0,l.useState)(!1),[g,x]=(0,l.useState)(!1),[v,j]=(0,l.useState)(!n),{canEditRules:b}=(0,m.B)();(0,l.useEffect)((()=>{j(!n)}),[n]);const{hasRuler:y,rulerRulesLoaded:C}=(0,B.h)(),N=null===(a=r.rules[0])||void 0===a?void 0:a.rulerRule,R=N&&(0,w.Pc)(N)&&N.grafana_alert.namespace_uid||void 0,{folder:$}=(0,G.W)(R),k=y(s)&&C(s)&&!r.rules.find((e=>!!e.rulerRule)),_=(0,w.Jq)(r),F=[];if(k)F.push(Y||(Y=(0,h.jsxs)(u.HorizontalGroup,{children:[(0,h.jsx)(u.Spinner,{}),"deleting"]},"is-deleting")));else if(s===S.GC){if(R){const e=`${T.config.appSubUrl}/dashboards/f/${R}/${I.Z.slugifyForUrl(t.name)}`;null!=$&&$.canSave&&F.push((0,h.jsx)(M.A,{"aria-label":"edit folder",icon:"pen",tooltip:"edit folder",to:e+"/settings",target:"__blank"},"edit")),null!=$&&$.canAdmin&&F.push((0,h.jsx)(M.A,{"aria-label":"manage permissions",icon:"lock",tooltip:"manage permissions",to:e+"/permissions",target:"__blank"},"manage-perms"))}}else b(s.name)&&y(s)&&(_||F.push((0,h.jsx)(M.A,{"aria-label":"edit rule group","data-testid":"edit-group",icon:"pen",tooltip:"edit rule group",onClick:()=>p(!0)},"edit")),F.push((0,h.jsx)(M.A,{"aria-label":"delete rule group","data-testid":"delete-group",icon:"trash-alt",tooltip:"delete rule group",onClick:()=>x(!0)},"delete-group")));const A="default"===r.name?(0,h.jsx)(O.V,{namespace:t.name}):(0,h.jsx)(O.V,{namespace:t.name,group:r.name});return(0,h.jsxs)("div",{className:c.wrapper,"data-testid":"rule-group",children:[(0,h.jsxs)("div",{className:c.header,"data-testid":"rule-group-header",children:[(0,h.jsx)(E.U,{className:c.collapseToggle,isCollapsed:v,onToggle:j,"data-testid":"group-collapse-toggle"}),(0,h.jsx)(u.Icon,{name:v?"folder":"folder-open"}),(0,S.jq)(s)&&(0,h.jsx)(u.Tooltip,{content:s.name,placement:"top",children:(0,h.jsx)("img",{alt:s.meta.name,className:c.dataSourceIcon,src:s.meta.info.logos.small})}),(0,h.jsxs)("h6",{className:c.heading,children:[_&&(X||(X=(0,h.jsx)(u.Badge,{color:"purple",text:"Federated"})))," ",A]}),(0,h.jsx)("div",{className:c.spacer}),(0,h.jsx)("div",{className:c.headerStats,children:(0,h.jsx)(Q,{showInactive:!1,group:r})}),!!F.length&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:c.actionsSeparator,children:"|"}),(0,h.jsx)("div",{className:c.actionIcons,children:F})]})]}),!v&&(0,h.jsx)(re.i,{showSummaryColumn:!0,className:c.rulesTable,showGuidelines:!0,rules:r.rules}),d&&(0,h.jsx)(D,{group:r,namespace:t,onClose:()=>p(!1)}),(0,h.jsx)(u.ConfirmModal,{isOpen:g,title:"Delete group",body:(0,h.jsxs)("div",{children:["Deleting this group will permanently remove the group",ee||(ee=(0,h.jsx)("br",{})),"and ",r.rules.length," alert ",f()("rule",r.rules.length)," belonging to it.",ae||(ae=(0,h.jsx)("br",{})),"Are you sure you want to delete this group?"]}),onConfirm:()=>{o((0,L.oE)(t,r)),x(!1)},onDismiss:()=>x(!1),confirmText:"Delete"})]})}));te.displayName="RulesGroup";const ne=e=>({wrapper:s.css`
    & + & {
      margin-top: ${e.spacing(2)};
    }
  `,header:s.css`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: ${e.spacing(1)} ${e.spacing(1)} ${e.spacing(1)} 0;
    background-color: ${e.colors.background.secondary};
    flex-wrap: wrap;
  `,headerStats:s.css`
    span {
      vertical-align: middle;
    }

    ${e.breakpoints.down("sm")} {
      order: 2;
      width: 100%;
      padding-left: ${e.spacing(1)};
    }
  `,heading:s.css`
    margin-left: ${e.spacing(1)};
    margin-bottom: 0;
  `,spacer:s.css`
    flex: 1;
  `,collapseToggle:s.css`
    background: none;
    border: none;
    margin-top: -${e.spacing(1)};
    margin-bottom: -${e.spacing(1)};

    svg {
      margin-bottom: 0;
    }
  `,dataSourceIcon:s.css`
    width: ${e.spacing(2)};
    height: ${e.spacing(2)};
    margin-left: ${e.spacing(2)};
  `,dataSourceOrigin:s.css`
    margin-right: 1em;
    color: ${e.colors.text.disabled};
  `,actionsSeparator:s.css`
    margin: 0 ${e.spacing(2)};
  `,actionIcons:s.css`
    & > * + * {
      margin-left: ${e.spacing(.5)};
    }
  `,rulesTable:s.css`
    margin-top: ${e.spacing(3)};
  `});function se(e){return(0,l.useMemo)((()=>e.flatMap((e=>e.groups.map((a=>({namespace:e,group:a})))))),[e])}var le,ie,oe,ce;const ue=e=>{let{namespaces:a,expandAll:r}=e;const t=(0,u.useStyles2)(de),n=(0,b._)((e=>e.dataSources)),s=(0,b._)((e=>e.promRules)),i=(0,l.useMemo)(S.Eu,[]),o=se(a),c=(0,l.useMemo)((()=>i.filter((e=>(0,P.op)(s[e.name])||(0,P.op)(n[e.name])))),[s,n,i]),d=i.length>0,p=c.length>0,g=a.length>0,{numberOfPages:m,onPageChange:x,page:v,pageItems:j}=(0,F.h)(o,1,_.gN);return(0,h.jsxs)("section",{className:t.wrapper,children:[(0,h.jsxs)("div",{className:t.sectionHeader,children:[le||(le=(0,h.jsx)("h5",{children:"Mimir / Cortex / Loki"})),c.length?(0,h.jsx)(u.LoadingPlaceholder,{className:t.loader,text:`Loading rules from ${c.length} ${f()("source",c.length)}`}):ie||(ie=(0,h.jsx)("div",{}))]}),j.map((e=>{let{group:a,namespace:t}=e;return(0,h.jsx)(te,{group:a,namespace:t,expandAll:r},`${(0,S.v_)(t.rulesSource)}-${t.name}-${a.name}`)})),!d&&(oe||(oe=(0,h.jsx)("p",{children:"There are no Prometheus or Loki data sources configured."}))),d&&!p&&!g&&(ce||(ce=(0,h.jsx)("p",{children:"No rules found."}))),(0,h.jsx)(u.Pagination,{className:t.pagination,currentPage:v,numberOfPages:m,onNavigate:x,hideWhenSinglePage:!0})]})},de=e=>({loader:s.css`
    margin-bottom: 0;
  `,sectionHeader:s.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:s.css`
    margin-bottom: ${e.spacing(4)};
  `,pagination:(0,A.Z)(e)});var pe,ge,me,he=r(75678);const xe=e=>{let{namespaces:a,expandAll:r}=e;const t=(0,u.useStyles2)(ve),[n]=(0,d.K)(),{loading:s}=(0,b._)((e=>e.promRules[S.GC]||P.oq)),l="grouped"===n.view?a:(0,he.Kd)(a),i=se(l),{numberOfPages:o,onPageChange:c,page:p,pageItems:g}=(0,F.h)(i,1,_.gN);return(0,h.jsxs)("section",{className:t.wrapper,children:[(0,h.jsxs)("div",{className:t.sectionHeader,children:[pe||(pe=(0,h.jsx)("h5",{children:"Grafana"})),s?(0,h.jsx)(u.LoadingPlaceholder,{className:t.loader,text:"Loading..."}):ge||(ge=(0,h.jsx)("div",{}))]}),g.map((e=>{let{group:a,namespace:t}=e;return(0,h.jsx)(te,{group:a,namespace:t,expandAll:r},`${t.name}-${a.name}`)})),0===(null==l?void 0:l.length)&&(me||(me=(0,h.jsx)("p",{children:"No rules found."}))),(0,h.jsx)(u.Pagination,{className:t.pagination,currentPage:p,numberOfPages:o,onNavigate:c,hideWhenSinglePage:!0})]})},ve=e=>({loader:s.css`
    margin-bottom: 0;
  `,sectionHeader:s.css`
    display: flex;
    justify-content: space-between;
  `,wrapper:s.css`
    margin-bottom: ${e.spacing(4)};
  `,pagination:(0,A.Z)(e)}),fe=e=>{let{rules:a,state:r,defaultCollapsed:t=!1}=e;const[n,s]=(0,l.useState)(t),i=(0,u.useStyles2)(je);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("h4",{className:i.header,children:[(0,h.jsx)(E.U,{className:i.collapseToggle,size:"xxl",isCollapsed:n,onToggle:()=>s(!n)}),(0,w.SS)(r)," (",a.length,")"]}),!n&&(0,h.jsx)(re.i,{className:i.rulesTable,rules:a,showGroupColumn:!0})]})},je=e=>({collapseToggle:s.css`
    vertical-align: middle;
  `,header:s.css`
    margin-top: ${e.spacing(2)};
  `,rulesTable:s.css`
    margin-top: ${e.spacing(3)};
  `});var be,Se,ye,we,Ce,Ne=r(82897),Re=r(8072);const $e=[{icon:"list-ul",label:"List",value:"list"},{icon:"folder",label:"Grouped",value:"grouped"},{icon:"heart-rate",label:"State",value:"state"}],ke=[{label:"Alert ",value:H.pz.Alerting},{label:"Recording ",value:H.pz.Recording}],_e=e=>({container:s.css`
      display: flex;
      flex-direction: column;
      padding-bottom: ${e.spacing.sm};
      margin-bottom: ${e.spacing.sm};
    `,inputWidth:s.css`
      width: 340px;
      flex-grow: 0;
    `,flexRow:s.css`
      display: flex;
      flex-direction: row;
      align-items: flex-end;
      width: 100%;
      flex-wrap: wrap;
    `,spaceBetween:s.css`
      justify-content: space-between;
    `,rowChild:s.css`
      margin: 0 ${e.spacing.sm} 0 0;
    `,clearButton:s.css`
      margin-top: ${e.spacing.sm};
    `}),Fe=()=>{var e;const[a,r]=(0,d.K)(),[t,n]=(0,l.useState)(Math.floor(100*Math.random())),i=`dataSource-${t}`,o=`queryString-${t}`,{dataSource:c,alertState:p,queryString:g,ruleType:m}=(0,y.lC)(a),x=(0,u.useStyles)(_e),v=Object.entries(H.x_).map((e=>{let[a,r]=e;return{label:(0,w.SS)(r),value:r}})),f=(0,Ne.debounce)((e=>{const a=e.target;r({queryString:a.value||null})}),600),j=be||(be=(0,h.jsx)(u.Icon,{name:"search"}));return(0,h.jsxs)("div",{className:x.container,children:[(0,h.jsx)(u.Field,{className:x.inputWidth,label:"Search by data source",children:(0,h.jsx)(T.DataSourcePicker,{alerting:!0,noDefault:!0,placeholder:"All data sources",current:c,onChange:e=>{r({dataSource:e.name})},onClear:()=>{r({dataSource:null})}},i)}),(0,h.jsxs)("div",{className:(0,s.cx)(x.flexRow,x.spaceBetween),children:[(0,h.jsxs)("div",{className:x.flexRow,children:[(0,h.jsx)(u.Field,{className:x.rowChild,label:Se||(Se=(0,h.jsx)(u.Label,{children:(0,h.jsxs)(Re.Stack,{gap:.5,children:[(0,h.jsx)("span",{children:"Search by label"}),(0,h.jsx)(u.Tooltip,{content:(0,h.jsxs)("div",{children:["Filter rules and alerts using label querying, ex:",(0,h.jsx)("code",{children:'{severity="critical", instance=~"cluster-us-.+"}'})]}),children:(0,h.jsx)(u.Icon,{name:"info-circle",size:"sm"})})]})})),children:(0,h.jsx)(u.Input,{className:x.inputWidth,prefix:j,onChange:f,defaultValue:g,placeholder:"Search","data-testid":"search-query-input"},o)}),(0,h.jsxs)("div",{className:x.rowChild,children:[ye||(ye=(0,h.jsx)(u.Label,{children:"State"})),(0,h.jsx)(u.RadioButtonGroup,{options:v,value:p,onChange:e=>{r({alertState:e})}})]}),(0,h.jsxs)("div",{className:x.rowChild,children:[we||(we=(0,h.jsx)(u.Label,{children:"Rule type"})),(0,h.jsx)(u.RadioButtonGroup,{options:ke,value:m,onChange:e=>{r({ruleType:e})}})]}),(0,h.jsxs)("div",{className:x.rowChild,children:[Ce||(Ce=(0,h.jsx)(u.Label,{children:"View as"})),(0,h.jsx)(u.RadioButtonGroup,{options:$e,value:String(null!==(e=a.view)&&void 0!==e?e:$e[0].value),onChange:e=>{r({view:e})}})]})]}),(c||p||g||m)&&(0,h.jsx)("div",{className:x.flexRow,children:(0,h.jsx)(u.Button,{className:x.clearButton,fullWidth:!1,icon:"times",variant:"secondary",onClick:()=>{r({alertState:null,queryString:null,dataSource:null,ruleType:null}),setTimeout((()=>n(t+1)),100)},children:"Clear filters"})})]})]})};var Ae=r(82139);const Pe=e=>(a,r)=>{const t=r.groups.reduce(Te(e),[]);return t.length&&a.push(Object.assign({},r,{groups:t})),a},Te=e=>(a,r)=>{const t=r.rules.filter((a=>{var r;if(e.ruleType&&e.ruleType!==(null===(r=a.promRule)||void 0===r?void 0:r.type))return!1;if(e.dataSource&&(0,w.Pc)(a.rulerRule)&&!Ie(a.rulerRule,e))return!1;if(e.queryString){var t;const r=e.queryString.toLocaleLowerCase(),n=null===(t=a.name)||void 0===t?void 0:t.toLocaleLowerCase().includes(r),s=(0,Ae.Zh)(e.queryString),l=(0,Ae.eD)(a.labels,s),i=a.promRule&&a.promRule.type===H.pz.Alerting&&a.promRule.alerts&&a.promRule.alerts.some((e=>(0,Ae.eD)(e.labels,s)));if(!(n||l||i))return!1}return!!(!e.alertState||a.promRule&&(0,w.x_)(a.promRule)&&a.promRule.state===e.alertState)}));return t.length&&a.push(Object.assign({},r,{rules:t})),a},Ie=(e,a)=>!a.dataSource||!!e.grafana_alert.data.find((e=>{if(!e.datasourceUid)return!1;const r=(0,T.getDataSourceSrv)().getInstanceSettings(e.datasourceUid);return(null==r?void 0:r.name)===a.dataSource}));var Ge,Be,Le,Ee=r(85464);const Oe={groups:e=>{let{namespaces:a,expandAll:r}=e;const[t,n]=(0,l.useMemo)((()=>{const e=a.map((e=>Object.assign({},e,{groups:e.groups.sort(((e,a)=>e.name.localeCompare(a.name)))}))).sort(((e,a)=>e.name.localeCompare(a.name)));return[e.filter((e=>(0,S.HY)(e.rulesSource))),e.filter((e=>(0,S.jq)(e.rulesSource)))]}),[a]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(k.q,{actions:[$.bW.AlertingRuleRead],children:(0,h.jsx)(xe,{namespaces:t,expandAll:r})}),(0,h.jsx)(k.q,{actions:[$.bW.AlertingRuleExternalRead],children:(0,h.jsx)(ue,{namespaces:n,expandAll:r})})]})},state:e=>{let{namespaces:a}=e;const r=(0,y.lC)((0,d.K)()[0]),t=(0,l.useMemo)((()=>{const e={[H.x_.Firing]:[],[H.x_.Inactive]:[],[H.x_.Pending]:[]};return a.forEach((a=>a.groups.forEach((a=>a.rules.forEach((a=>{a.promRule&&(0,w.x_)(a.promRule)&&e[a.promRule.state].push(a)})))))),Object.values(e).forEach((e=>e.sort(((e,a)=>e.name.localeCompare(a.name))))),e}),[a]);return(0,h.jsxs)(h.Fragment,{children:[(!r.alertState||r.alertState===H.x_.Firing)&&(0,h.jsx)(fe,{state:H.x_.Firing,rules:t[H.x_.Firing]}),(!r.alertState||r.alertState===H.x_.Pending)&&(0,h.jsx)(fe,{state:H.x_.Pending,rules:t[H.x_.Pending]}),(!r.alertState||r.alertState===H.x_.Inactive)&&(0,h.jsx)(fe,{defaultCollapsed:r.alertState!==H.x_.Inactive,state:H.x_.Inactive,rules:t[H.x_.Inactive]})]})}},Me=(0,u.withErrorBoundary)((()=>{const e=(0,i.useDispatch)(),a=(0,u.useStyles2)(qe),r=(0,l.useMemo)(S.mA,[]),t=(0,o.TH)(),[n,s]=(0,l.useState)(!1),[g]=(0,d.K)(),v=(0,y.lC)(g),f=Object.values(v).some((e=>void 0!==e)),{canCreateGrafanaRules:j,canCreateCloudRules:w}=(0,m.B)(),N=Oe[g.view]?g.view:"groups",R=Oe[N];(0,l.useEffect)((()=>{e((0,L.ei)());const a=setInterval((()=>e((0,L.ei)())),Ee.p4);return()=>{clearInterval(a)}}),[e]);const $=(0,b._)((e=>e.promRules)),k=(0,b._)((e=>e.rulerRules)),_=r.some((e=>{var a,r;return(null===(a=$[e])||void 0===a?void 0:a.dispatched)||(null===(r=k[e])||void 0===r?void 0:r.dispatched)})),F=r.some((e=>{var a,r;return(null===(a=$[e])||void 0===a?void 0:a.loading)||(null===(r=k[e])||void 0===r?void 0:r.loading)})),A=r.some((e=>{var a,r,t,n,s;return(null===(a=$[e])||void 0===a||null===(r=a.result)||void 0===r?void 0:r.length)&&!(null!==(t=$[e])&&void 0!==t&&t.error)||Object.keys((null===(n=k[e])||void 0===n?void 0:n.result)||{}).length&&!(null!==(s=k[e])&&void 0!==s&&s.error)})),P=_&&!F&&!A,T=(e=>{const[a]=(0,d.K)(),r=(0,y.lC)(a);return(0,l.useMemo)((()=>e.filter((e=>{let{rulesSource:a}=e;return!r.dataSource||!(0,S.jq)(a)||a.name===r.dataSource})).reduce(Pe(r),[])),[e,r])})((0,he.Zo)());return(0,h.jsxs)(p.J,{pageId:"alert-list",isLoading:F&&!A,children:[Ge||(Ge=(0,h.jsx)(C,{})),!P&&(0,h.jsxs)(h.Fragment,{children:[Be||(Be=(0,h.jsx)(Fe,{})),(0,h.jsx)("div",{className:a.break}),(0,h.jsxs)("div",{className:a.buttonsContainer,children:[(0,h.jsxs)("div",{className:a.statsContainer,children:["groups"===N&&f&&(0,h.jsx)(u.Button,{className:a.expandAllButton,icon:n?"angle-double-up":"angle-double-down",variant:"secondary",onClick:()=>s(!n),children:n?"Collapse all":"Expand all"}),(0,h.jsx)(Q,{showInactive:!0,showRecording:!0,namespaces:T})]}),(j||w)&&(0,h.jsx)(u.LinkButton,{href:c.urlUtil.renderUrl("alerting/new",{returnTo:t.pathname+t.search}),icon:"plus",children:"New alert rule"})]})]}),P&&(Le||(Le=(0,h.jsx)(x,{}))),A&&(0,h.jsx)(R,{expandAll:n,namespaces:T})]})}),{style:"page"}),qe=e=>({break:s.css`
    width: 100%;
    height: 0;
    margin-bottom: ${e.spacing(2)};
    border-bottom: solid 1px ${e.colors.border.medium};
  `,buttonsContainer:s.css`
    margin-bottom: ${e.spacing(2)};
    display: flex;
    justify-content: space-between;
  `,statsContainer:s.css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `,expandAllButton:s.css`
    margin-right: ${e.spacing(1)};
  `}),ze=Me},40256:(e,a,r)=>{r.d(a,{J:()=>i});r(68404);var t=r(18745),n=r(69371),s=r(8674),l=r(45916);const i=e=>{let{children:a,pageId:r,isLoading:i}=e;const o=(0,s.h)((0,t.useSelector)((e=>e.navIndex)),r);return(0,l.jsx)(n.T,{navModel:o,children:(0,l.jsx)(n.T.Contents,{isLoading:i,children:a})})}},53262:(e,a,r)=>{r.d(a,{q:()=>s});r(68404);var t=r(61959),n=r(45916);const s=e=>{let{actions:a,children:r,fallback:s=!0}=e;return a.some((e=>t.Vt.hasAccess(e,s)))?(0,n.jsx)(n.Fragment,{children:r}):null}},29721:(e,a,r)=>{r.d(a,{F:()=>o});var t=r(36636),n=(r(68404),r(3490)),s=r(9019),l=r(45916);const i=["renderExpandedContent"];const o=e=>{let{renderExpandedContent:a}=e,r=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,i);const o=(0,n.useStyles2)(c);return(0,l.jsx)(s.t,Object.assign({renderExpandedContent:a?(e,r,n)=>(0,l.jsxs)(l.Fragment,{children:[!(r===n.length-1)&&(0,l.jsx)("div",{className:(0,t.cx)(o.contentGuideline,o.guideline)}),a(e,r,n)]}):void 0,renderPrefixHeader:()=>(0,l.jsx)("div",{className:o.relative,children:(0,l.jsx)("div",{className:(0,t.cx)(o.headerGuideline,o.guideline)})}),renderPrefixCell:(e,a,r)=>(0,l.jsxs)("div",{className:o.relative,children:[(0,l.jsx)("div",{className:(0,t.cx)(o.topGuideline,o.guideline)}),!(a===r.length-1)&&(0,l.jsx)("div",{className:(0,t.cx)(o.bottomGuideline,o.guideline)})]})},r))},c=e=>({relative:t.css`
    position: relative;
    height: 100%;
  `,guideline:t.css`
    left: -19px;
    border-left: 1px solid ${e.colors.border.medium};
    position: absolute;

    ${e.breakpoints.down("md")} {
      display: none;
    }
  `,topGuideline:t.css`
    width: 18px;
    border-bottom: 1px solid ${e.colors.border.medium};
    top: 0;
    bottom: 50%;
  `,bottomGuideline:t.css`
    top: 50%;
    bottom: 0;
  `,contentGuideline:t.css`
    top: 0;
    bottom: 0;
    left: -49px !important;
  `,headerGuideline:t.css`
    top: -25px;
    bottom: 0;
  `})},85598:(e,a,r)=>{r.d(a,{V:()=>l});r(68404);var t,n=r(3490),s=r(45916);const l=e=>{let{namespace:a,group:r}=e;return r?(0,s.jsxs)(s.Fragment,{children:[a," ",t||(t=(0,s.jsx)(n.Icon,{name:"angle-right"}))," ",r]}):(0,s.jsx)(s.Fragment,{children:a})}},3799:(e,a,r)=>{r.d(a,{A:()=>l});r(68404);var t=r(3490),n=r(45916);const s=["tooltip","icon","to","target","onClick","className","tooltipPlacement"];const l=e=>{let{tooltip:a,icon:r,to:l,target:i,onClick:o,className:c,tooltipPlacement:u="top"}=e,d=function(e,a){if(null==e)return{};var r,t,n={},s=Object.keys(e);for(t=0;t<s.length;t++)r=s[t],a.indexOf(r)>=0||(n[r]=e[r]);return n}(e,s);const p="string"==typeof a?a:void 0;return(0,n.jsx)(t.Tooltip,{content:a,placement:u,children:l?(0,n.jsx)(t.LinkButton,Object.assign({variant:"secondary",fill:"text",icon:r,href:l,size:"sm",target:i},d,{"aria-label":p})):(0,n.jsx)(t.Button,Object.assign({className:c,variant:"secondary",fill:"text",size:"sm",icon:r,type:"button",onClick:o},d,{"aria-label":p}))})}},61263:(e,a,r)=>{r.d(a,{i:()=>T});var t=r(36636),n=r(68404),s=r(3490),l=r(65747),i=r(26980),o=r(85464),c=r(86647),u=r(9019),d=r(29721),p=r(73358),g=r(85598),m=r(94410),h=r(90923),x=r(91470),v=r(45916);function f(e){let{rule:a}=e;const r=(0,s.useStyles2)(j),{exceedsLimit:t}=(0,x.f)(a.group.interval);return t?(0,v.jsx)(s.Tooltip,{theme:"error",content:(0,v.jsxs)("div",{children:["A minimum evaluation interval of"," ",(0,v.jsx)("span",{className:r.globalLimitValue,children:h.config.unifiedAlerting.minInterval})," has been configured in Grafana and will be used instead of the ",a.group.interval," interval configured for the Rule Group."]}),children:(0,v.jsx)(s.Icon,{name:"stopwatch-slash",className:r.icon})}):null}function j(e){return{globalLimitValue:t.css`
      font-weight: ${e.typography.fontWeightBold};
    `,icon:t.css`
      fill: ${e.colors.warning.text};
    `}}var b=r(94322),S=r(52510),y=r(83039),w=r(97292),C=r(79842),N=r(85351),R=r(12135);const $=e=>{let{rule:a}=e;const r=(0,s.useStyles2)(_),{namespace:{rulesSource:t}}=a,n=Object.entries(a.annotations).filter((e=>{let[a,r]=e;return!!r.trim()}));return(0,v.jsxs)("div",{children:[(0,v.jsx)(y.f,{rule:a,rulesSource:t}),(0,v.jsxs)("div",{className:r.wrapper,children:[(0,v.jsxs)("div",{className:r.leftSide,children:[(0,v.jsx)(k,{rule:a}),!!a.labels&&!!Object.keys(a.labels).length&&(0,v.jsx)(S.C,{label:"Labels",horizontal:!0,children:(0,v.jsx)(b.s,{labels:a.labels})}),(0,v.jsx)(N.C,{rulesSource:t,rule:a,annotations:n}),(0,v.jsx)(w.J,{annotations:n})]}),(0,v.jsx)("div",{className:r.rightSide,children:(0,v.jsx)(C.C,{rulesSource:t,rule:a})})]}),(0,v.jsx)(R.M,{rule:a,itemsDisplayLimit:15})]})},k=e=>{let a,{rule:r}=e,t=r.group.interval;var n;(0,c.yF)(r.rulerRule)||(a=null===(n=r.rulerRule)||void 0===n?void 0:n.for);return(0,v.jsxs)(v.Fragment,{children:[t&&(0,v.jsxs)(S.C,{label:"Evaluate",horizontal:!0,children:["Every ",t]}),a&&(0,v.jsx)(S.C,{label:"For",horizontal:!0,children:a})]})},_=e=>({wrapper:t.css`
    display: flex;
    flex-direction: row;

    ${e.breakpoints.down("md")} {
      flex-direction: column;
    }
  `,leftSide:t.css`
    flex: 1;
  `,rightSide:t.css`
    ${e.breakpoints.up("md")} {
      padding-left: 90px;
      width: 300px;
    }
  `});var F,A=r(82434),P=r(18181);const T=e=>{let{rules:a,className:r,showGuidelines:i=!1,emptyMessage:o="No rules found.",showGroupColumn:c=!1,showSummaryColumn:p=!1}=e;const g=(0,s.useStyles2)(I),m=(0,t.cx)(g.wrapper,r,{[g.wrapperMargin]:i}),h=(0,n.useMemo)((()=>{const e=[];return a.map(((a,r)=>{var t;let n=JSON.stringify([null===(t=a.promRule)||void 0===t?void 0:t.type,a.labels,a.query,a.name,a.annotations]);return e.includes(n)&&(n+=`-${r}`),e.push(n),{id:n,data:a}}))}),[a]),x=G(p,c);if(!a.length)return(0,v.jsx)("div",{className:(0,t.cx)(m,g.emptyMessage),children:o});const f=i?d.F:u.t;return(0,v.jsx)("div",{className:m,"data-testid":"rules-table",children:(0,v.jsx)(f,{cols:x,isExpandable:!0,items:h,renderExpandedContent:e=>{let{data:a}=e;return(0,v.jsx)($,{rule:a})},pagination:{itemsPerPage:l.gN},paginationStyles:g.pagination})})},I=e=>({wrapperMargin:t.css`
    ${e.breakpoints.up("md")} {
      margin-left: 36px;
    }
  `,emptyMessage:t.css`
    padding: ${e.spacing(1)};
  `,wrapper:t.css`
    width: auto;
    border-radius: ${e.shape.borderRadius()};
  `,pagination:t.css`
    display: flex;
    margin: 0;
    padding-top: ${e.spacing(1)};
    padding-bottom: ${e.spacing(.25)};
    justify-content: center;
    border-left: 1px solid ${e.colors.border.strong};
    border-right: 1px solid ${e.colors.border.strong};
    border-bottom: 1px solid ${e.colors.border.strong};
  `});function G(e,a){const{hasRuler:r,rulerRulesLoaded:t}=(0,i.h)();return(0,n.useMemo)((()=>{const n=[{id:"state",label:"State",renderCell:e=>{let{data:a}=e;const{namespace:n}=a,{rulesSource:s}=n,{promRule:l,rulerRule:i}=a,o=!(!(r(s)&&t(s)&&l)||i),c=!(!(r(s)&&t(s)&&i)||l);return(0,v.jsx)(P.p,{rule:a,isDeleting:o,isCreating:c})},size:"165px"},{id:"name",label:"Name",renderCell:e=>{let{data:a}=e;return a.name},size:5},{id:"provisioned",label:"",renderCell:e=>{let{data:a}=e;const r=a.rulerRule;if(!(0,c.Pc)(r))return null;return r.grafana_alert.provenance?F||(F=(0,v.jsx)(p.C0,{})):null},size:"100px"},{id:"warnings",label:"",renderCell:e=>{let{data:a}=e;return(0,v.jsx)(f,{rule:a})},size:"45px"},{id:"health",label:"Health",renderCell:e=>{let{data:{promRule:a,group:r}}=e;return a?(0,v.jsx)(A.V,{rule:a}):null},size:"75px"}];return e&&n.push({id:"summary",label:"Summary",renderCell:e=>{var a;let{data:r}=e;return(0,v.jsx)(m.Z,{input:null!==(a=r.annotations[o.q6.summary])&&void 0!==a?a:""})},size:5}),a&&n.push({id:"group",label:"Group",renderCell:e=>{let{data:a}=e;const{namespace:r,group:t}=a;return"default"===t.name?(0,v.jsx)(g.V,{namespace:r.name}):(0,v.jsx)(g.V,{namespace:r.name,group:t.name})},size:5}),n}),[r,t,e,a])}},26980:(e,a,r)=>{r.d(a,{h:()=>l});var t=r(68404),n=r(19462),s=r(33899);function l(){const e=(0,s._)((e=>e.rulerRules));return{hasRuler:(0,t.useCallback)((a=>{var r;const t="string"==typeof a?a:a.name;return t===n.GC||!(null===(r=e[t])||void 0===r||!r.result)}),[e]),rulerRulesLoaded:(0,t.useCallback)((a=>{var r;const t=(0,n.EG)(a),s=null===(r=e[t])||void 0===r?void 0:r.result;return Boolean(s)}),[e])}}},69450:(e,a,r)=>{r.d(a,{B:()=>s});var t=r(68404),n=r(82969);function s(){return(0,t.useMemo)((()=>(0,n.Rv)()),[])}}}]);
//# sourceMappingURL=AlertRuleListIndex.b1c11e9b64c4fc8e4bbf.js.map