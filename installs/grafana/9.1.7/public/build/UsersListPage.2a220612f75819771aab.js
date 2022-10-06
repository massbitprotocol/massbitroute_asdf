"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[8039],{86129:(e,s,t)=>{t.r(s),t.d(s,{UsersListPage:()=>$,default:()=>D});var n=t(68404),r=t(18745),i=t(43215),a=t(3490),l=t(69371),o=t(98163),c=t(69778),h=t(45916);const d={revokeInvite:c.GY},u=(0,r.connect)(null,d);class x extends n.PureComponent{render(){const{invitee:e,revokeInvite:s}=this.props;return(0,h.jsxs)("tr",{children:[(0,h.jsx)("td",{children:e.email}),(0,h.jsx)("td",{children:e.name}),(0,h.jsxs)("td",{className:"text-right",children:[(0,h.jsx)(a.ClipboardButton,{icon:"copy",variant:"secondary",size:"sm",getText:()=>e.url,children:"Copy Invite"})," "]}),(0,h.jsx)("td",{children:(0,h.jsx)(a.Button,{variant:"destructive",size:"sm",icon:"times",onClick:()=>s(e.code),"aria-label":"Revoke Invite"})})]})}}const g=u(x);var m,v,p;class j extends n.PureComponent{render(){const{invitees:e}=this.props;return(0,h.jsxs)("table",{className:"filter-table form-inline",children:[(0,h.jsx)("thead",{children:(0,h.jsxs)("tr",{children:[m||(m=(0,h.jsx)("th",{children:"Email"})),v||(v=(0,h.jsx)("th",{children:"Name"})),p||(p=(0,h.jsx)("th",{})),(0,h.jsx)("th",{style:{width:"34px"}})]})}),(0,h.jsx)("tbody",{"data-testid":"InviteesTable-body",children:e.map(((e,s)=>(0,h.jsx)(g,{invitee:e},`${e.id}-${s}`)))})]})}}var f=t(98335),I=t(73931);const{selectAll:b,selectById:U,selectTotal:w}=I.wl,y=(0,f.P1)([b,(e,s)=>s],((e,s)=>{const t=new RegExp(s,"i");return e.filter((e=>t.test(e.name)||t.test(e.email)))}));var C=t(47570),P=t(28911);const k=e=>{const s=new RegExp(e.searchQuery,"i");return e.users.filter((e=>s.test(e.login)||s.test(e.email)||s.test(e.name)))},N=e=>e.searchQuery,R=e=>e.searchPage;var S;class M extends n.PureComponent{render(){const{canInvite:e,externalUserMngLinkName:s,externalUserMngLinkUrl:t,searchQuery:n,pendingInvitesCount:r,setUsersSearchQuery:i,onShowInvites:l,showInvites:c}=this.props,d=[{label:"Users",value:"users"},{label:`Pending Invites (${r})`,value:"invites"}],u=o.Vt.hasAccess(C.bW.OrgUsersAdd,e);return(0,h.jsxs)("div",{className:"page-action-bar","data-testid":"users-action-bar",children:[(0,h.jsx)("div",{className:"gf-form gf-form--grow",children:(0,h.jsx)(a.FilterInput,{value:n,onChange:i,placeholder:"Search user by login, email or name"})}),r>0&&(0,h.jsx)("div",{style:{marginLeft:"1rem"},children:(0,h.jsx)(a.RadioButtonGroup,{value:c?"invites":"users",options:d,onChange:l})}),u&&(S||(S=(0,h.jsx)(a.LinkButton,{href:"org/users/invite",children:"Invite"}))),t&&(0,h.jsx)(a.LinkButton,{href:t,target:"_blank",rel:"noopener",children:s})]})}}const L={setUsersSearchQuery:P.oX},B=(0,r.connect)((function(e){return{searchQuery:N(e.users),pendingInvitesCount:w(e.invites),externalUserMngLinkName:e.users.externalUserMngLinkName,externalUserMngLinkUrl:e.users.externalUserMngLinkUrl,canInvite:e.users.canInvite}}),L)(M);var A=t(50641),T=t(90923),V=t(66728);function W(){return async e=>{const s=await(0,T.getBackendSrv)().get("/api/org/users",(0,V.y)());e((0,P.eT)(s))}}function E(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}const O={loadUsers:W,fetchInvitees:c.nW,setUsersSearchQuery:P.oX,setUsersSearchPage:P.TQ,updateUser:function(e){return async s=>{await(0,T.getBackendSrv)().patch(`/api/org/users/${e.userId}`,{role:e.role}),s(W())}},removeUser:function(e){return async s=>{await(0,T.getBackendSrv)().delete(`/api/org/users/${e}`),s(W())}}},Q=(0,r.connect)((function(e){const s=N(e.users);return{users:k(e.users),searchQuery:N(e.users),searchPage:R(e.users),invitees:y(e.invites,s),externalUserMngInfo:e.users.externalUserMngInfo,hasFetched:e.users.hasFetched}}),O);class $ extends n.PureComponent{constructor(e){super(e),E(this,"onRoleChange",((e,s)=>{const t=Object.assign({},s,{role:e});this.props.updateUser(t)})),E(this,"onShowInvites",(()=>{this.setState((e=>({showInvites:!e.showInvites})))})),E(this,"getPaginatedUsers",(e=>{const s=30*(this.props.searchPage-1);return e.slice(s,s+30)})),this.props.externalUserMngInfo&&(this.externalUserMngInfoHtml=(0,i.renderMarkdown)(this.props.externalUserMngInfo)),this.state={showInvites:!1}}componentDidMount(){this.fetchUsers(),this.fetchInvitees()}async fetchUsers(){return await this.props.loadUsers()}async fetchInvitees(){return await this.props.fetchInvitees()}renderTable(){const{invitees:e,users:s,setUsersSearchPage:t}=this.props,n=this.getPaginatedUsers(s),r=Math.ceil(s.length/30);return this.state.showInvites?(0,h.jsx)(j,{invitees:e}):(0,h.jsxs)(a.VerticalGroup,{spacing:"md",children:[(0,h.jsx)(A.Z,{users:n,orgId:o.Vt.user.orgId,onRoleChange:(e,s)=>this.onRoleChange(e,s),onRemoveUser:e=>this.props.removeUser(e.userId)}),(0,h.jsx)(a.HorizontalGroup,{justify:"flex-end",children:(0,h.jsx)(a.Pagination,{onNavigate:t,currentPage:this.props.searchPage,numberOfPages:r,hideWhenSinglePage:!0})})]})}render(){const{hasFetched:e}=this.props,s=this.externalUserMngInfoHtml;return(0,h.jsx)(l.T,{navId:"users",children:(0,h.jsx)(l.T.Contents,{isLoading:!e,children:(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(B,{onShowInvites:this.onShowInvites,showInvites:this.state.showInvites}),s&&(0,h.jsx)("div",{className:"grafana-info-box",dangerouslySetInnerHTML:{__html:s}}),e&&this.renderTable()]})})})}}const D=Q($)},50641:(e,s,t)=>{t.d(s,{Z:()=>p});var n,r,i,a,l,o,c=t(68404),h=t(3490),d=t(57497),u=t(77058),x=t(98163),g=t(47570),m=t(8936),v=t(45916);const p=e=>{const{users:s,orgId:t,onRoleChange:p,onRemoveUser:j}=e,[f,I]=(0,c.useState)(null),[b,U]=(0,c.useState)([]),[w,y]=(0,c.useState)({});return(0,c.useEffect)((()=>{x.Vt.licensedAccessControlEnabled()&&async function(){try{if(x.Vt.hasPermission(g.bW.ActionRolesList)){let e=await(0,u.ul)(t);U(e)}if(x.Vt.accessControlBuiltInRoleAssignmentEnabled()&&x.Vt.hasPermission(g.bW.ActionBuiltinRolesList)){const e=await(0,u.fh)(t);y(e)}}catch(e){console.error("Error loading options")}}()}),[t]),(0,v.jsxs)(v.Fragment,{children:[(0,v.jsxs)("table",{className:"filter-table form-inline",children:[(0,v.jsx)("thead",{children:(0,v.jsxs)("tr",{children:[n||(n=(0,v.jsx)("th",{})),r||(r=(0,v.jsx)("th",{children:"Login"})),i||(i=(0,v.jsx)("th",{children:"Email"})),a||(a=(0,v.jsx)("th",{children:"Name"})),l||(l=(0,v.jsx)("th",{children:"Seen"})),o||(o=(0,v.jsx)("th",{children:"Role"})),(0,v.jsx)("th",{style:{width:"34px"}})]})}),(0,v.jsx)("tbody",{children:s.map(((e,s)=>(0,v.jsxs)("tr",{children:[(0,v.jsx)("td",{className:"width-2 text-center",children:(0,v.jsx)("img",{className:"filter-table__avatar",src:e.avatarUrl,alt:"User avatar"})}),(0,v.jsx)("td",{className:"max-width-6",children:(0,v.jsx)("span",{className:"ellipsis",title:e.login,children:e.login})}),(0,v.jsx)("td",{className:"max-width-5",children:(0,v.jsx)("span",{className:"ellipsis",title:e.email,children:e.email})}),(0,v.jsx)("td",{className:"max-width-5",children:(0,v.jsx)("span",{className:"ellipsis",title:e.name,children:e.name})}),(0,v.jsx)("td",{className:"width-1",children:e.lastSeenAtAge}),(0,v.jsx)("td",{className:"width-8",children:x.Vt.licensedAccessControlEnabled()?(0,v.jsx)(d.R,{userId:e.userId,orgId:t,roleOptions:b,builtInRoles:w,builtInRole:e.role,onBuiltinRoleChange:s=>p(s,e),builtinRolesDisabled:!x.Vt.hasPermissionInMetadata(g.bW.OrgUsersWrite,e)}):(0,v.jsx)(m.A,{"aria-label":"Role",value:e.role,disabled:!x.Vt.hasPermissionInMetadata(g.bW.OrgUsersWrite,e),onChange:s=>p(s,e)})}),x.Vt.hasPermissionInMetadata(g.bW.OrgUsersRemove,e)&&(0,v.jsx)("td",{children:(0,v.jsx)(h.Button,{size:"sm",variant:"destructive",onClick:()=>{I(e)},icon:"times","aria-label":"Delete user"})})]},`${e.userId}-${s}`)))})]}),Boolean(f)&&(0,v.jsx)(h.ConfirmModal,{body:`Are you sure you want to delete user ${null==f?void 0:f.login}?`,confirmText:"Delete",title:"Delete",onDismiss:()=>{I(null)},isOpen:!0,onConfirm:()=>{f&&(j(f),I(null))}})]})}}}]);
//# sourceMappingURL=UsersListPage.2a220612f75819771aab.js.map