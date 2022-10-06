"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[1410],{11410:(e,t,s)=>{s.d(t,{n:()=>$});var a,l,i,n,o=s(50539),r=s(68404),c=s(90923),d=s(3490),h=s(53772),u=s(5782),g=s(36636),p=s(82897),b=s(62859),f=s(45916);function v(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}const m=1e3,x=1e4,y=4,w="{}";function j(e){const t=[];for(const s of e)if(s.selected&&s.values&&s.values.length>0){const e=s.values.filter((e=>e.selected)).map((e=>e.name));e.length>1?t.push(`${s.name}=~"${e.map(u.tU).join("|")}"`):1===e.length&&t.push(`${s.name}="${(0,u.U9)(e[0])}"`)}return["{",t.join(","),"}"].join("")}class C extends r.Component{constructor(){super(...arguments),v(this,"state",{labels:[],searchTerm:"",status:"Ready",error:"",validationStatus:""}),v(this,"onChangeSearch",(e=>{this.setState({searchTerm:e.target.value})})),v(this,"onClickRunLogsQuery",(()=>{(0,c.reportInteraction)("grafana_loki_log_browser_closed",{app:this.props.app,closeType:"showLogsButton"});const e=j(this.state.labels);this.props.onChange(e)})),v(this,"onClickRunMetricsQuery",(()=>{(0,c.reportInteraction)("grafana_loki_log_browser_closed",{app:this.props.app,closeType:"showLogsRateButton"});const e=`rate(${j(this.state.labels)}[$__interval])`;this.props.onChange(e)})),v(this,"onClickClear",(()=>{(0,c.reportInteraction)("grafana_loki_log_browser_closed",{app:this.props.app,closeType:"clearButton"}),this.setState((e=>({labels:e.labels.map((e=>Object.assign({},e,{values:void 0,selected:!1,loading:!1,hidden:!1,facets:void 0}))),searchTerm:"",status:"",error:"",validationStatus:""}))),this.props.deleteLastUsedLabels()})),v(this,"onClickLabel",((e,t,s)=>{const a=this.state.labels.find((t=>t.name===e));if(!a)return;const l=!a.selected;let i={selected:l};if(a.values&&!l){const e=a.values.map((e=>Object.assign({},e,{selected:!1})));i=Object.assign({},i,{facets:0,values:e})}this.setState({searchTerm:""}),this.updateLabelState(e,i,"",(()=>this.doFacettingForLabel(e)))})),v(this,"onClickValue",((e,t,s)=>{const a=this.state.labels.find((t=>t.name===e));if(!a||!a.values)return;this.setState({searchTerm:""});const l=a.values.map((e=>Object.assign({},e,{selected:e.name===t?!e.selected:e.selected})));this.updateLabelState(e,{values:l},"",(()=>this.doFacetting(e)))})),v(this,"onClickValidate",(()=>{const e=j(this.state.labels);this.validateSelector(e)})),v(this,"doFacetting",(e=>{const t=j(this.state.labels);if(t===w){const e=this.state.labels.map((e=>Object.assign({},e,{facets:0,values:void 0,hidden:!1})));this.setState({labels:e},(()=>{this.state.labels.forEach((e=>e.selected&&this.fetchValues(e.name,t)))}))}else this.fetchSeries(t,e)}))}updateLabelState(e,t){let s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"",a=arguments.length>3?arguments[3]:void 0;this.setState((a=>{const l=a.labels.map((s=>s.name===e?Object.assign({},s,t):s)),i=s?"":a.error;return{labels:l,status:s,error:i,validationStatus:""}}),a)}componentDidMount(){const{languageProvider:e,autoSelect:t=y,lastUsedLabels:s}=this.props;if(e){const a=s;e.start().then((()=>{let s=e.getLabelKeys();if(s.length>m){const e=`Too many labels found (showing only 1000 of ${s.length})`;s=s.slice(0,m),this.setState({error:e})}const l=s.map(((e,s,l)=>({name:e,selected:l.length<=t&&0===a.length||a.includes(e),loading:!1})));this.setState({labels:l},(()=>{this.state.labels.forEach((e=>{e.selected&&this.fetchValues(e.name,w)}))}))}))}}doFacettingForLabel(e){const t=this.state.labels.find((t=>t.name===e));if(!t)return;const s=this.state.labels.filter((e=>e.selected)).map((e=>e.name));this.props.storeLastUsedLabels(s),t.selected?t.values||this.fetchValues(e,j(this.state.labels)):this.doFacetting()}async fetchValues(e,t){const{languageProvider:s}=this.props;this.updateLabelState(e,{loading:!0},`Fetching values for ${e}`);try{let a=await s.getLabelValues(e);if(t!==j(this.state.labels))return void this.updateLabelState(e,{loading:!1},"");if(a.length>x){const t=`Too many values for ${e} (showing only 10000 of ${a.length})`;a=a.slice(0,x),this.setState({error:t})}const l=a.map((e=>({name:e})));this.updateLabelState(e,{values:l,loading:!1})}catch(e){console.error(e)}}async fetchSeries(e,t){const{languageProvider:s}=this.props;t&&this.updateLabelState(t,{loading:!0},`Facetting labels for ${e}`);try{const a=await s.fetchSeriesLabels(e,!0);if(e!==j(this.state.labels))return void(t&&this.updateLabelState(t,{loading:!1}));if(0===Object.keys(a).length)return void this.setState({error:`Empty results, no matching label for ${e}`});const l=function(e,t,s){return e.map((e=>{const a=t[e.name];if(a){let t;if(e.name===s&&e.values)t=e.values;else{var l;const s=new Set((null===(l=e.values)||void 0===l?void 0:l.filter((e=>e.selected)).map((e=>e.name)))||[]);t=a.map((e=>({name:e,selected:s.has(e)})))}return Object.assign({},e,{loading:!1,values:t,facets:t.length})}return Object.assign({},e,{loading:!1,hidden:!a,values:void 0,facets:0})}))}(this.state.labels,a,t);this.setState({labels:l,error:""}),t&&this.updateLabelState(t,{loading:!1})}catch(e){console.error(e)}}async validateSelector(e){const{languageProvider:t}=this.props;this.setState({validationStatus:`Validating selector ${e}`,error:""});const s=await t.fetchSeries(e);this.setState({validationStatus:`Selector is valid (${s.length} streams found)`})}render(){const{theme:e}=this.props,{labels:t,searchTerm:s,status:o,error:r,validationStatus:c}=this.state;if(0===t.length)return a||(a=(0,f.jsx)(d.LoadingPlaceholder,{text:"Loading labels..."}));const h=(e=>({wrapper:g.css`
    background-color: ${e.colors.background.secondary};
    padding: ${e.spacing(2)};
    width: 100%;
  `,list:g.css`
    margin-top: ${e.spacing(1)};
    display: flex;
    flex-wrap: wrap;
    max-height: 200px;
    overflow: auto;
  `,section:g.css`
    & + & {
      margin: ${e.spacing(2,0)};
    }
    position: relative;
  `,selector:g.css`
    font-family: ${e.typography.fontFamilyMonospace};
    margin-bottom: ${e.spacing(1)};
  `,status:g.css`
    padding: ${e.spacing(.5)};
    color: ${e.colors.text.secondary};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    /* using absolute positioning because flex interferes with ellipsis */
    position: absolute;
    width: 50%;
    right: 0;
    text-align: right;
    transition: opacity 100ms linear;
    opacity: 0;
  `,statusShowing:g.css`
    opacity: 1;
  `,error:g.css`
    color: ${e.colors.error.main};
  `,valueList:g.css`
    margin-right: ${e.spacing(1)};
  `,valueListWrapper:g.css`
    border-left: 1px solid ${e.colors.border.medium};
    margin: ${e.spacing(1,0)};
    padding: ${e.spacing(1,0,1,1)};
  `,valueListArea:g.css`
    display: flex;
    flex-wrap: wrap;
    margin-top: ${e.spacing(1)};
  `,valueTitle:g.css`
    margin-left: -${e.spacing(.5)};
    margin-bottom: ${e.spacing(1)};
  `,validationStatus:g.css`
    padding: ${e.spacing(.5)};
    margin-bottom: ${e.spacing(1)};
    color: ${e.colors.text.maxContrast};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  `}))(e),u=j(this.state.labels),v=u===w;let m=t.filter((e=>e.selected&&e.values));return m=s?m.map((e=>{const t=e.values.filter((e=>{if(e.selected)return e.highlightParts=void 0,!0;const t=(0,d.fuzzyMatch)(e.name.toLowerCase(),s.toLowerCase());return!!t.found&&(e.highlightParts=t.ranges,e.order=t.distance,!0)}));return Object.assign({},e,{values:(0,p.sortBy)(t,(e=>e.selected?-1/0:e.order))})})):this.state.labels.filter((e=>e.selected&&e.values)).map((e=>Object.assign({},e,{values:null!=e&&e.values?e.values.map((e=>Object.assign({},e,{highlightParts:void 0}))):[]}))),(0,f.jsxs)("div",{className:h.wrapper,children:[(0,f.jsxs)("div",{className:h.section,children:[l||(l=(0,f.jsx)(d.Label,{description:"Which labels would you like to consider for your search?",children:"1. Select labels to search in"})),(0,f.jsx)("div",{className:h.list,children:t.map((e=>(0,f.jsx)(d.BrowserLabel,{name:e.name,loading:e.loading,active:e.selected,hidden:e.hidden,facets:e.facets,onClick:this.onClickLabel},e.name)))})]}),(0,f.jsxs)("div",{className:h.section,children:[i||(i=(0,f.jsx)(d.Label,{description:"Choose the label values that you would like to use for the query. Use the search field to find values across selected labels.",children:"2. Find values for the selected labels"})),(0,f.jsx)("div",{children:(0,f.jsx)(d.Input,{onChange:this.onChangeSearch,"aria-label":"Filter expression for values",value:s})}),(0,f.jsx)("div",{className:h.valueListArea,children:m.map((e=>{var t,a;return(0,f.jsxs)("div",{role:"list",className:h.valueListWrapper,children:[(0,f.jsx)("div",{className:h.valueTitle,"aria-label":`Values for ${e.name}`,children:(0,f.jsx)(d.BrowserLabel,{name:e.name,loading:e.loading,active:e.selected,hidden:e.hidden,facets:e.facets||(null===(t=e.values)||void 0===t?void 0:t.length),onClick:this.onClickLabel})}),(0,f.jsx)(b.t7,{height:200,itemCount:(null===(a=e.values)||void 0===a?void 0:a.length)||0,itemSize:28,itemKey:t=>e.values[t].name,width:200,className:h.valueList,children:t=>{var a;let{index:l,style:i}=t;const n=null===(a=e.values)||void 0===a?void 0:a[l];return n?(0,f.jsx)("div",{style:i,children:(0,f.jsx)(d.BrowserLabel,{name:e.name,value:null==n?void 0:n.name,active:null==n?void 0:n.selected,highlightParts:null==n?void 0:n.highlightParts,onClick:this.onClickValue,searchTerm:s})}):null}})]},e.name)}))})]}),(0,f.jsxs)("div",{className:h.section,children:[n||(n=(0,f.jsx)(d.Label,{children:"3. Resulting selector"})),(0,f.jsx)("div",{"aria-label":"selector",className:h.selector,children:u}),c&&(0,f.jsx)("div",{className:h.validationStatus,children:c}),(0,f.jsxs)(d.HorizontalGroup,{children:[(0,f.jsx)(d.Button,{"aria-label":"Use selector as logs button",disabled:v,onClick:this.onClickRunLogsQuery,children:"Show logs"}),(0,f.jsx)(d.Button,{"aria-label":"Use selector as metrics button",variant:"secondary",disabled:v,onClick:this.onClickRunMetricsQuery,children:"Show logs rate"}),(0,f.jsx)(d.Button,{"aria-label":"Validate submit button",variant:"secondary",disabled:v,onClick:this.onClickValidate,children:"Validate selector"}),(0,f.jsx)(d.Button,{"aria-label":"Selector clear button",variant:"secondary",onClick:this.onClickClear,children:"Clear"}),(0,f.jsx)("div",{className:(0,g.cx)(h.status,(o||r)&&h.statusShowing),children:(0,f.jsx)("span",{className:r?h.error:"",children:r||o})})]})]})]})}}const L=(0,d.withTheme2)(C);function S(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function k(e,t){let{typeaheadContext:s,typeaheadText:a}=t;switch(s){case"context-labels":{const t=d.DOMUtil.getNextCharacter();t&&"}"!==t&&","!==t||(e+="=");break}case"context-label-values":{let t="";a.match(/^(!?=~?"|")/)||(t='"'),t+=(0,u.Hk)(e,a),'"'!==d.DOMUtil.getNextCharacter()&&(t+='"'),e=t;break}}return e}class $ extends r.PureComponent{constructor(e){super(e),S(this,"plugins",void 0),S(this,"_isMounted",!1),S(this,"onChangeLabelBrowser",(e=>{this.onChangeQuery(e,!0),this.setState({labelBrowserVisible:!1})})),S(this,"onChangeQuery",((e,t)=>{const{query:s,onChange:a,onRunQuery:l}=this.props;if(a){a(Object.assign({},s,{expr:e})),t&&l&&l()}})),S(this,"onClickChooserButton",(()=>{this.state.labelBrowserVisible?(0,c.reportInteraction)("grafana_loki_log_browser_closed",{app:this.props.app,closeType:"logBrowserButton"}):(0,c.reportInteraction)("grafana_loki_log_browser_opened",{app:this.props.app}),this.setState((e=>({labelBrowserVisible:!e.labelBrowserVisible})))})),S(this,"onTypeahead",(async e=>{const{datasource:t}=this.props;if(!t.languageProvider)return{suggestions:[]};const s=t.languageProvider,{history:a}=this.props,{prefix:l,text:i,value:n,wrapperClasses:o,labelKey:r}=e;return await s.provideCompletionItems({text:i,value:n,prefix:l,wrapperClasses:o,labelKey:r},{history:a})})),this.state={labelsLoaded:!1,labelBrowserVisible:!1},this.plugins=[(0,d.BracesPlugin)(),(0,d.SlatePrism)({onlyIn:e=>"block"===e.object&&"code_block"===e.type,getSyntax:e=>"logql"},Object.assign({},o.languages,{logql:this.props.datasource.languageProvider.getSyntax()}))]}async componentDidMount(){this._isMounted=!0,await this.props.datasource.languageProvider.start(),this._isMounted&&this.setState({labelsLoaded:!0})}componentWillUnmount(){this._isMounted=!1}componentDidUpdate(e){const{range:t,datasource:{languageProvider:s}}=this.props;(0,u.rf)(t,e.range)&&s.fetchLabels()}render(){const{ExtraFieldElement:e,query:t,app:s,datasource:a,placeholder:l="Enter a Loki query (run with Shift+Enter)"}=this.props,{labelsLoaded:i,labelBrowserVisible:n}=this.state,o=a.languageProvider,r=a.languageProvider?o.cleanText:void 0,c=o.getLabelKeys().length>0,u=function(e,t){return e?t?"Log browser":"(No logs found)":"Loading labels..."}(i,c),g=!(i&&c);return(0,f.jsx)(h.G,{storageKey:"grafana.datasources.loki.browser.labels",defaultValue:[],children:(a,i,c)=>(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:"gf-form-inline gf-form-inline--xs-view-flex-column flex-grow-1","data-testid":this.props["data-testid"],children:[(0,f.jsxs)("button",{className:"gf-form-label query-keyword pointer",onClick:this.onClickChooserButton,disabled:g,children:[u,(0,f.jsx)(d.Icon,{name:n?"angle-down":"angle-right"})]}),(0,f.jsx)("div",{className:"gf-form gf-form--grow flex-shrink-1 min-width-15",children:(0,f.jsx)(d.QueryField,{additionalPlugins:this.plugins,cleanText:r,query:t.expr,onTypeahead:this.onTypeahead,onWillApplySuggestion:k,onChange:this.onChangeQuery,onBlur:this.props.onBlur,onRunQuery:this.props.onRunQuery,placeholder:l,portalOrigin:"loki"})})]}),n&&(0,f.jsx)("div",{className:"gf-form",children:(0,f.jsx)(L,{languageProvider:o,onChange:this.onChangeLabelBrowser,lastUsedLabels:a||[],storeLastUsedLabels:i,deleteLastUsedLabels:c,app:s})}),e]})})}}},5782:(e,t,s)=>{function a(e){return t=e/1e3,Math.floor(t/60);var t}function l(e,t){if(e&&t){const s=a(e.from.valueOf())===a(t.from.valueOf()),l=a(e.to.valueOf())===a(t.to.valueOf());return!(s&&l)}return!1}s.d(t,{Hk:()=>r,U9:()=>n,aC:()=>c,rf:()=>l,tU:()=>o});const i=/[*+?()|\\.\[\]{}^$]/g;function n(e){return e.replace(/\\/g,"\\\\").replace(/\n/g,"\\n").replace(/"/g,'\\"')}function o(e){return n(e.replace(i,"\\$&"))}function r(e,t){return function(e){if(e&&(e.includes("=~")||e.includes("!~")))return!0;return!1}(t)?o(e):n(e)}function c(e){const t=new RegExp(`^(?:-?\\d+(?:\\.\\d+)?)(?:${["b","kib","Kib","kb","KB","mib","Mib","mb","MB","gib","Gib","gb","GB","tib","Tib","tb","TB","pib","Pib","pb","PB","eib","Eib","eb","EB"].join("|")})$`);return!!e.match(t)}}}]);
//# sourceMappingURL=1410.3c9d80dcca77c3d48209.js.map