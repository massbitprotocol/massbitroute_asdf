"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[3778],{"./public/app/features/folders/FolderLibraryPanelsPage.tsx":(e,s,a)=>{a.r(s),a.d(s,{FolderLibraryPanelsPage:()=>h,default:()=>b});var n=a("./node_modules/react/index.js"),i=a("./node_modules/react-redux/es/index.js"),r=a("./node_modules/react-use/esm/useAsync.js"),t=a("./public/app/core/selectors/navModel.ts"),o=a("./public/app/features/folders/state/navModel.ts"),l=a("./public/app/core/components/Page/Page.tsx"),d=a("./public/app/features/library-panels/components/LibraryPanelsSearch/LibraryPanelsSearch.tsx"),c=a("./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx"),u=a("./public/app/features/folders/state/actions.ts"),p=a("./node_modules/react/jsx-runtime.js");const f={getFolderByUid:u.Pb};function h({navModel:e,getFolderByUid:s,folderUid:a,folder:i}){const{loading:t}=(0,r.Z)((async()=>await s(a)),[s,a]),[o,u]=(0,n.useState)(void 0);return(0,p.jsx)(l.Z,{navModel:e,children:(0,p.jsxs)(l.Z.Contents,{isLoading:t,children:[(0,p.jsx)(d.N,{onClick:u,currentFolderId:i.id,showSecondaryActions:!0,showSort:!0,showPanelFilter:!0}),o?(0,p.jsx)(c.b,{onDismiss:()=>u(void 0),libraryPanel:o}):null]})})}const b=(0,i.connect)(((e,s)=>{const a=s.match.params.uid;return{navModel:(0,t.h)(e.navIndex,`folder-library-panels-${a}`,(0,o._)(1)),folderUid:a,folder:e.folder}}),f)(h)},"./public/app/features/folders/state/actions.ts":(e,s,a)=>{a.d(s,{Pb:()=>c,OD:()=>u,Go:()=>p,a:()=>f,v7:()=>b,Uk:()=>m,pz:()=>v,W7:()=>g});var n=a("./packages/grafana-data/src/index.ts"),i=a("./packages/grafana-runtime/src/index.ts"),r=a("./public/app/core/services/backend_srv.ts"),t=a("./public/app/core/actions/index.ts"),o=a("./public/app/features/folders/state/navModel.ts"),l=a("./public/app/core/app_events.ts"),d=a("./public/app/features/folders/state/reducers.ts");function c(e){return async s=>{const a=await r.ae.getFolderByUid(e);s((0,d.G3)(a)),s((0,t.RL)((0,o.B)(a)))}}function u(e){return async s=>{const a=await r.ae.put(`/api/folders/${e.uid}`,{title:e.title,version:e.version});l.Z.emit(n.AppEvents.alertSuccess,["Folder saved"]),i.locationService.push(`${a.url}/settings`)}}function p(e){return async s=>{await r.ae.delete(`/api/folders/${e}?forceDeleteRules=true`),i.locationService.push("/dashboards")}}function f(e){return async s=>{const a=await r.ae.get(`/api/folders/${e}/permissions`);s((0,d.R7)(a))}}function h(e){return{userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}}function b(e,s){return async(a,n)=>{const i=n().folder,t=[];for(const a of i.permissions){if(a.inherited)continue;const n=h(a);e===a&&(n.permission=s),t.push(n)}await r.ae.post(`/api/folders/${i.uid}/permissions`,{items:t}),await a(f(i.uid))}}function m(e){return async(s,a)=>{const n=a().folder,i=[];for(const s of n.permissions)s.inherited||s===e||i.push(h(s));await r.ae.post(`/api/folders/${n.uid}/permissions`,{items:i}),await s(f(n.uid))}}function v(e){return async(s,a)=>{const n=a().folder,i=[];for(const e of n.permissions)e.inherited||i.push(h(e));i.push({userId:e.userId,teamId:e.teamId,role:e.role,permission:e.permission}),await r.ae.post(`/api/folders/${n.uid}/permissions`,{items:i}),await s(f(n.uid))}}function g(e){return async()=>{const s=await(0,i.getBackendSrv)().post("/api/folders",{title:e});l.Z.emit(n.AppEvents.alertSuccess,["Folder Created","OK"]),i.locationService.push(n.locationUtil.stripBaseFromUrl(s.url))}}},"./public/app/features/folders/state/navModel.ts":(e,s,a)=>{function n(e){const s={icon:"folder",id:"manage-folder",subTitle:"Manage folder dashboards and permissions",url:"",text:e.title,breadcrumbs:[{title:"Dashboards",url:"dashboards"}],children:[{active:!1,icon:"apps",id:`folder-dashboards-${e.uid}`,text:"Dashboards",url:e.url}]};return s.children.push({active:!1,icon:"library-panel",id:`folder-library-panels-${e.uid}`,text:"Panels",url:`${e.url}/library-panels`}),e.canAdmin&&s.children.push({active:!1,icon:"lock",id:`folder-permissions-${e.uid}`,text:"Permissions",url:`${e.url}/permissions`}),e.canSave&&s.children.push({active:!1,icon:"cog",id:`folder-settings-${e.uid}`,text:"Settings",url:`${e.url}/settings`}),s}function i(e){const s=n({id:1,uid:"loading",title:"Loading",url:"url",canSave:!0,canEdit:!0,canAdmin:!0,version:0});return s.children[e].active=!0,{main:s,node:s.children[e]}}a.d(s,{B:()=>n,_:()=>i})},"./public/app/features/library-panels/components/OpenLibraryPanelModal/OpenLibraryPanelModal.tsx":(e,s,a)=>{a.d(s,{b:()=>p});var n,i=a("./node_modules/react/index.js"),r=a("./node_modules/@emotion/css/dist/emotion-css.esm.js"),t=a("./packages/grafana-ui/src/index.ts"),o=a("./packages/grafana-data/src/index.ts"),l=a("./packages/grafana-runtime/src/index.ts"),d=a("./public/app/features/library-panels/state/api.ts"),c=a("./node_modules/lodash/lodash.js"),u=a("./node_modules/react/jsx-runtime.js");function p({libraryPanel:e,onDismiss:s}){const a=(0,t.useStyles2)(f),[r,p]=(0,i.useState)(!1),[h,b]=(0,i.useState)(0),[m,v]=(0,i.useState)(void 0);(0,i.useEffect)((()=>{(async()=>{const s=await(0,d.Ef)(e.uid);b(s.length)})()}),[e.uid]);const g=(0,i.useCallback)((s=>async function(e,s,a){a(!0);const n=(await(0,d.E8)(e)).filter((e=>e.title.toLowerCase().includes(s.toLowerCase()))).map((e=>({label:e.title,value:e})));return a(!1),n}(e.uid,s,p)),[e.uid]),y=(0,i.useMemo)((()=>(0,c.debounce)(g,300,{leading:!0,trailing:!0})),[g]);return(0,u.jsxs)(t.Modal,{title:"View panel in dashboard",onDismiss:s,onClickBackdrop:s,isOpen:!0,children:[(0,u.jsxs)("div",{className:a.container,children:[0===h?n||(n=(0,u.jsx)("span",{children:"Panel is not linked to a dashboard. Add the panel to a dashboard and retry."})):null,h>0?(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("p",{children:["This panel is being used in"," ",(0,u.jsxs)("strong",{children:[h," ",h>1?"dashboards":"dashboard"]}),".Please choose which dashboard to view the panel in:"]}),(0,u.jsx)(t.AsyncSelect,{menuShouldPortal:!0,isClearable:!0,isLoading:r,defaultOptions:!0,loadOptions:y,onChange:v,placeholder:"Start typing to search for dashboard",noOptionsMessage:"No dashboards found"})]}):null]}),(0,u.jsxs)(t.Modal.ButtonRow,{children:[(0,u.jsx)(t.Button,{variant:"secondary",onClick:s,fill:"outline",children:"Cancel"}),(0,u.jsx)(t.Button,{onClick:e=>{var s;e.preventDefault(),l.locationService.push(o.urlUtil.renderUrl(`/d/${null==m||null===(s=m.value)||void 0===s?void 0:s.uid}`,{}))},disabled:!Boolean(m),children:m?`View panel in ${null==m?void 0:m.label}...`:"View panel in dashboard..."})]})]})}function f(e){return{container:r.css``}}}}]);
//# sourceMappingURL=FolderLibraryPanelsPage.8128b05ac04b15cbf98d.js.map