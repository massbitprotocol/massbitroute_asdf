"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7537],{94115:(e,n,a)=>{a.r(n),a.d(n,{plugin:()=>v});var l,s,t=a(43215),r=a(68404),i=a(90923),o=a(3490),u=a(78837),h=a(29937),c=a(45916);function d(e){var n;let{value:a,onChange:l}=e;const[s,t]=(0,r.useState)(""),[i,u]=(0,r.useState)(null!==(n=a.query)&&void 0!==n?n:"");(0,r.useEffect)((()=>{t(JSON.stringify(Object.assign({},{query:"*",location:"",ds_uid:"",sort:"",tags:[],kind:[],explain:!1,facet:[{field:"kind"},{field:"tags"}],from:0,limit:20},a),null,2))}),[a]);const h=e=>{i!==a.query&&l(Object.assign({},a,{query:i}))},d=e=>{try{var n;const a=JSON.parse(e);l(a),u(null!==(n=a.query)&&void 0!==n?n:"")}catch(n){console.log("UNABLE TO parse search",e,n)}};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(o.InlineFieldRow,{children:(0,c.jsx)(o.InlineField,{label:"Query",grow:!0,labelWidth:12,children:(0,c.jsx)(o.Input,{placeholder:"Everything",value:i,onChange:e=>u(e.currentTarget.value),onKeyDown:e=>{"Enter"===e.key&&h()},onBlur:h,spellCheck:!1})})}),(0,c.jsx)(o.CodeEditor,{height:300,language:"json",value:s,onBlur:d,onSave:d,showMiniMap:!1,showLineNumbers:!0})]})}function f(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}class p extends r.PureComponent{constructor(e){super(e),f(this,"state",{channels:[],channelFields:{}}),f(this,"queryTypes",[{label:"Random Walk",value:h.hR.RandomWalk,description:"Random signal within the selected time range"},{label:"Live Measurements",value:h.hR.LiveMeasurements,description:"Stream real-time measurements from Grafana"},{label:"List public files",value:h.hR.List,description:"Show directory listings for public resources"}]),f(this,"onQueryTypeChange",(e=>{const{onChange:n,query:a,onRunQuery:l}=this.props;n(Object.assign({},a,{queryType:e.value})),l(),this.loadChannelInfo()})),f(this,"onChannelChange",(e=>{const{onChange:n,query:a,onRunQuery:l}=this.props;n(Object.assign({},a,{channel:null==e?void 0:e.value})),l()})),f(this,"onFieldNamesChange",(e=>{var n,a;const{onChange:l,query:s,onRunQuery:t}=this.props;let r=[];if(Array.isArray(e)?r=e.map((e=>e.value)):e.value&&(r=[e.value]),1===r.length&&(null===(n=s.filter)||void 0===n||null===(a=n.fields)||void 0===a||!a.length)&&s.channel){var i;const e=(null!==(i=this.state.channelFields[s.channel])&&void 0!==i?i:[]).find((e=>"time"===e.value||"Time"===e.value));e&&e.value&&e.value!==r[0]&&(r=[e.value,...r])}l(Object.assign({},s,{filter:Object.assign({},s.filter,{fields:r})})),t()})),f(this,"checkAndUpdateValue",((e,n)=>{const{onChange:a,query:l,onRunQuery:s}=this.props;if("buffer"===e){let e;if(n)try{e=1e3*t.rangeUtil.intervalToSeconds(n)}catch(e){console.warn("ERROR",e)}a(Object.assign({},l,{buffer:e}))}else a(Object.assign({},l,{[e]:n}));s()})),f(this,"handleEnterKey",(e=>{"Enter"===e.key&&this.checkAndUpdateValue("buffer",e.target.value)})),f(this,"handleBlur",(e=>{this.checkAndUpdateValue("buffer",e.target.value)})),f(this,"onFolderChanged",(e=>{const{onChange:n,query:a,onRunQuery:l}=this.props;n(Object.assign({},a,{path:null==e?void 0:e.value})),l()})),f(this,"onSearchChange",(e=>{const{query:n,onChange:a,onRunQuery:l}=this.props;a(Object.assign({},n,{search:e})),l()})),i.config.featureToggles.panelTitleSearch&&u.Oh&&this.queryTypes.push({label:"Search",value:h.hR.Search,description:"Search for grafana resources"})}loadChannelInfo(){(0,i.getBackendSrv)().fetch({url:"api/live/list"}).subscribe({next:e=>{var n;const a=null===(n=e.data)||void 0===n?void 0:n.channels;if(null!=a&&a.length){const e={},n=a.map((n=>{if(n.data){const a=new Set,l=(0,t.dataFrameFromJSON)(n.data);for(const e of l.fields)a.add(e.name);e[n.channel]=Array.from(a).map((e=>({value:e,label:e})))}return{value:n.channel,label:n.channel+" ["+n.minute_rate+" msg/min]"}}));this.setState({channelFields:e,channels:n})}}})}loadFolderInfo(){const e={targets:[{queryType:h.hR.List,refId:"A"}]};(0,i.getDataSourceSrv)().get("-- Grafana --").then((n=>{n.query(e).subscribe({next:e=>{if(e.data.length){const n=e.data[0].fields[0].values.toArray().map((e=>({value:e,label:e})));this.setState({folders:n})}}})}))}componentDidMount(){this.loadChannelInfo()}renderMeasurementsQuery(){var e;let{channel:n,filter:a,buffer:s}=this.props.query,{channels:r,channelFields:i}=this.state,u=r.find((e=>e.value===n));n&&!u&&(u={value:n,label:n,description:`Connected to ${n}`},r=[u,...r]);const h=new Set,d=n&&null!==(e=i[n])&&void 0!==e?e:[];if(null!=a&&a.fields)for(const e of a.fields)h.has(e)||(d.push({value:e,label:`${e} (not loaded)`,description:"Configured, but not found in the query results"}),h.add(e));let f="";return s&&(f=t.rangeUtil.secondsToHms(s/1e3)),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"gf-form",children:(0,c.jsx)(o.InlineField,{label:"Channel",grow:!0,labelWidth:12,children:(0,c.jsx)(o.Select,{options:r,value:u||"",onChange:this.onChannelChange,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"Select measurements channel",isClearable:!0,noOptionsMessage:"Enter channel name",formatCreateLabel:e=>`Connect to: ${e}`})})}),n&&(0,c.jsxs)("div",{className:"gf-form",children:[(0,c.jsx)(o.InlineField,{label:"Fields",grow:!0,labelWidth:12,children:(0,c.jsx)(o.Select,{options:d,value:(null==a?void 0:a.fields)||[],onChange:this.onFieldNamesChange,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"All fields",isClearable:!0,noOptionsMessage:"Unable to list all fields",formatCreateLabel:e=>`Field: ${e}`,isSearchable:!0,isMulti:!0})}),(0,c.jsx)(o.InlineField,{label:"Buffer",children:(0,c.jsx)(o.Input,{placeholder:"Auto",width:12,defaultValue:f,onKeyDown:this.handleEnterKey,onBlur:this.handleBlur,spellCheck:!1})})]}),l||(l=(0,c.jsx)(o.Alert,{title:"Grafana Live - Measurements",severity:"info",children:"This supports real-time event streams in Grafana core. This feature is under heavy development. Expect the interfaces and structures to change as this becomes more production ready."}))]})}renderListPublicFiles(){let{path:e}=this.props.query,{folders:n}=this.state;n||(n=[],this.loadFolderInfo());const a=n.find((n=>n.value===e));return e&&!a&&(n=[...n,{value:e,label:e}]),(0,c.jsx)(o.InlineFieldRow,{children:(0,c.jsx)(o.InlineField,{label:"Path",grow:!0,labelWidth:12,children:(0,c.jsx)(o.Select,{options:n,value:a||"",onChange:this.onFolderChanged,allowCustomValue:!0,backspaceRemovesValue:!0,placeholder:"Select folder",isClearable:!0,formatCreateLabel:e=>`Folder: ${e}`})})})}render(){var e;const n=Object.assign({},h.wi,this.props.query),{queryType:a}=n;return(0,c.jsxs)(c.Fragment,{children:[a===h.hR.Search&&(s||(s=(0,c.jsx)(o.Alert,{title:"Grafana Search",severity:"info",children:"Using this datasource to call the new search system is experimental, and subject to change at any time without notice."}))),(0,c.jsx)(o.InlineFieldRow,{children:(0,c.jsx)(o.InlineField,{label:"Query type",grow:!0,labelWidth:12,children:(0,c.jsx)(o.Select,{options:this.queryTypes,value:this.queryTypes.find((e=>e.value===a))||this.queryTypes[0],onChange:this.onQueryTypeChange})})}),a===h.hR.LiveMeasurements&&this.renderMeasurementsQuery(),a===h.hR.List&&this.renderListPublicFiles(),a===h.hR.Search&&(0,c.jsx)(d,{value:null!==(e=n.search)&&void 0!==e?e:{},onChange:this.onSearchChange})]})}}var g=a(63686);const v=new t.DataSourcePlugin(g.k).setQueryEditor(p)}}]);
//# sourceMappingURL=grafanaPlugin.63ddd9cf95fa996dd9f5.js.map