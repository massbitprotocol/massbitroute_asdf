"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8039],{"./public/app/features/users/UsersListPage.tsx":(e,s,t)=>{t.r(s),t.d(s,{UsersListPage:()=>T,default:()=>$});var n=t("./node_modules/react/index.js"),r=t("./node_modules/react-redux/es/index.js"),a=t("./packages/grafana-data/src/index.ts"),i=t("./packages/grafana-ui/src/index.ts"),l=t("./public/app/core/components/Page/Page.tsx"),o=t("./public/app/features/users/state/reducers.ts");const c=e=>{const s=new RegExp(e.searchQuery,"i");return e.users.filter((e=>s.test(e.login)||s.test(e.email)||s.test(e.name)))},d=e=>{const s=new RegExp(e.searchQuery,"i");return e.invitees.filter((e=>s.test(e.name)||s.test(e.email)))},h=e=>e.invitees.length,u=e=>e.searchQuery,p=e=>e.searchPage;var x,g=t("./public/app/core/core.ts"),m=t("./public/app/types/index.ts"),v=t("./node_modules/react/jsx-runtime.js");class j extends n.PureComponent{render(){const{canInvite:e,externalUserMngLinkName:s,externalUserMngLinkUrl:t,searchQuery:n,pendingInvitesCount:r,setUsersSearchQuery:a,onShowInvites:l,showInvites:o}=this.props,c=[{label:"Users",value:"users"},{label:`Pending Invites (${r})`,value:"invites"}],d=g.Vt.hasPermission(m.bW.OrgUsersAdd);return(0,v.jsxs)("div",{className:"page-action-bar",children:[(0,v.jsx)("div",{className:"gf-form gf-form--grow",children:(0,v.jsx)(i.FilterInput,{value:n,onChange:a,placeholder:"Search user by login, email or name"})}),r>0&&(0,v.jsx)("div",{style:{marginLeft:"1rem"},children:(0,v.jsx)(i.RadioButtonGroup,{value:o?"invites":"users",options:c,onChange:l})}),e&&d&&(x||(x=(0,v.jsx)(i.LinkButton,{href:"org/users/invite",children:"Invite"}))),t&&(0,v.jsx)(i.LinkButton,{href:t,target:"_blank",rel:"noopener",children:s})]})}}const f={setUsersSearchQuery:o.oX},b=(0,r.connect)((function(e){return{searchQuery:u(e.users),pendingInvitesCount:h(e.users),externalUserMngLinkName:e.users.externalUserMngLinkName,externalUserMngLinkUrl:e.users.externalUserMngLinkUrl,canInvite:e.users.canInvite}}),f)(j);var U=t("./public/app/features/users/UsersTable.tsx"),I=t("./packages/grafana-runtime/src/index.ts");function w(){return async e=>{const s=await(0,I.getBackendSrv)().get("/api/org/users");e((0,o.eT)(s))}}function y(){return async e=>{if(!g.Vt.hasPermission(m.bW.OrgUsersAdd))return;const s=await(0,I.getBackendSrv)().get("/api/org/invites");e((0,o.Ol)(s))}}const k={revokeInvite:function(e){return async s=>{await(0,I.getBackendSrv)().patch(`/api/org/invites/${e}/revoke`,{}),s(y())}}},P=(0,r.connect)(null,k);class C extends n.PureComponent{render(){const{invitee:e,revokeInvite:s}=this.props;return(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{children:e.email}),(0,v.jsx)("td",{children:e.name}),(0,v.jsxs)("td",{className:"text-right",children:[(0,v.jsx)(i.ClipboardButton,{variant:"secondary",size:"sm",getText:()=>e.url,children:"Copy Invite"})," "]}),(0,v.jsx)("td",{children:(0,v.jsx)(i.Button,{variant:"destructive",size:"sm",icon:"times",onClick:()=>s(e.code)})})]})}}const N=P(C);var M,S,L;class R extends n.PureComponent{render(){const{invitees:e}=this.props;return(0,v.jsxs)("table",{className:"filter-table form-inline",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[M||(M=(0,v.jsx)("th",{children:"Email"})),S||(S=(0,v.jsx)("th",{children:"Name"})),L||(L=(0,v.jsx)("th",{})),(0,v.jsx)("th",{style:{width:"34px"}})]})}),(0,v.jsx)("tbody",{children:e.map(((e,s)=>(0,v.jsx)(N,{invitee:e},`${e.id}-${s}`)))})]})}}var B=t("./public/app/core/selectors/navModel.ts");function O(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const Q={loadUsers:w,loadInvitees:y,setUsersSearchQuery:o.oX,setUsersSearchPage:o.TQ,updateUser:function(e){return async s=>{await(0,I.getBackendSrv)().patch(`/api/org/users/${e.userId}`,{role:e.role}),s(w())}},removeUser:function(e){return async s=>{await(0,I.getBackendSrv)().delete(`/api/org/users/${e}`),s(w())}}},_=(0,r.connect)((function(e){return{navModel:(0,B.h)(e.navIndex,"users"),users:c(e.users),searchQuery:u(e.users),searchPage:p(e.users),invitees:d(e.users),externalUserMngInfo:e.users.externalUserMngInfo,hasFetched:e.users.hasFetched}}),Q);class T extends n.PureComponent{constructor(e){super(e),O(this,"onRoleChange",((e,s)=>{const t=Object.assign({},s,{role:e});this.props.updateUser(t)})),O(this,"onShowInvites",(()=>{this.setState((e=>({showInvites:!e.showInvites})))})),O(this,"getPaginatedUsers",(e=>{const s=30*(this.props.searchPage-1);return e.slice(s,s+30)})),this.props.externalUserMngInfo&&(this.externalUserMngInfoHtml=(0,a.renderMarkdown)(this.props.externalUserMngInfo)),this.state={showInvites:!1}}componentDidMount(){this.fetchUsers(),this.fetchInvitees()}async fetchUsers(){return await this.props.loadUsers()}async fetchInvitees(){return await this.props.loadInvitees()}renderTable(){const{invitees:e,users:s,setUsersSearchPage:t}=this.props,n=this.getPaginatedUsers(s),r=Math.ceil(s.length/30);return this.state.showInvites?(0,v.jsx)(R,{invitees:e}):(0,v.jsxs)(i.VerticalGroup,{spacing:"md",children:[(0,v.jsx)(U.Z,{users:n,onRoleChange:(e,s)=>this.onRoleChange(e,s),onRemoveUser:e=>this.props.removeUser(e.userId)}),(0,v.jsx)(i.HorizontalGroup,{justify:"flex-end",children:(0,v.jsx)(i.Pagination,{onNavigate:t,currentPage:this.props.searchPage,numberOfPages:r,hideWhenSinglePage:!0})})]})}render(){const{navModel:e,hasFetched:s}=this.props,t=this.externalUserMngInfoHtml;return(0,v.jsx)(l.Z,{navModel:e,children:(0,v.jsx)(l.Z.Contents,{isLoading:!s,children:(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(b,{onShowInvites:this.onShowInvites,showInvites:this.state.showInvites}),t&&(0,v.jsx)("div",{className:"grafana-info-box",dangerouslySetInnerHTML:{__html:t}}),s&&this.renderTable()]})})})}}const $=_(T)},"./public/app/features/users/UsersTable.tsx":(e,s,t)=>{t.d(s,{Z:()=>g});var n,r,a,i,l,o,c=t("./node_modules/react/index.js"),d=t("./public/app/types/index.ts"),h=t("./public/app/features/admin/OrgRolePicker.tsx"),u=t("./packages/grafana-ui/src/index.ts"),p=t("./public/app/core/core.ts"),x=t("./node_modules/react/jsx-runtime.js");const g=e=>{const{users:s,onRoleChange:t,onRemoveUser:g}=e,m=p.Vt.hasPermission(d.bW.OrgUsersRoleUpdate),v=p.Vt.hasPermission(d.bW.OrgUsersRemove),[j,f]=(0,c.useState)(!1);return(0,x.jsxs)("table",{className:"filter-table form-inline",children:[(0,x.jsx)("thead",{children:(0,x.jsxs)("tr",{children:[n||(n=(0,x.jsx)("th",{})),r||(r=(0,x.jsx)("th",{children:"Login"})),a||(a=(0,x.jsx)("th",{children:"Email"})),i||(i=(0,x.jsx)("th",{children:"Name"})),l||(l=(0,x.jsx)("th",{children:"Seen"})),o||(o=(0,x.jsx)("th",{children:"Role"})),(0,x.jsx)("th",{style:{width:"34px"}})]})}),(0,x.jsx)("tbody",{children:s.map(((e,s)=>(0,x.jsxs)("tr",{children:[(0,x.jsx)("td",{className:"width-2 text-center",children:(0,x.jsx)("img",{className:"filter-table__avatar",src:e.avatarUrl,alt:"User avatar"})}),(0,x.jsx)("td",{className:"max-width-6",children:(0,x.jsx)("span",{className:"ellipsis",title:e.login,children:e.login})}),(0,x.jsx)("td",{className:"max-width-5",children:(0,x.jsx)("span",{className:"ellipsis",title:e.email,children:e.email})}),(0,x.jsx)("td",{className:"max-width-5",children:(0,x.jsx)("span",{className:"ellipsis",title:e.name,children:e.name})}),(0,x.jsx)("td",{className:"width-1",children:e.lastSeenAtAge}),(0,x.jsx)("td",{className:"width-8",children:(0,x.jsx)(h.A,{"aria-label":"Role",value:e.role,disabled:!m,onChange:s=>t(s,e)})}),v&&(0,x.jsxs)("td",{children:[(0,x.jsx)(u.Button,{size:"sm",variant:"destructive",onClick:()=>f(e.login),icon:"times","aria-label":"Delete user"}),(0,x.jsx)(u.ConfirmModal,{body:`Are you sure you want to delete user ${e.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>f(!1),isOpen:e.login===j,onConfirm:()=>{g(e)}})]})]},`${e.userId}-${s}`)))})]})}}}]);
//# sourceMappingURL=UsersListPage.8128b05ac04b15cbf98d.js.map