"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[319],{23665:(e,a,t)=>{t.r(a),t.d(a,{plugin:()=>Te});var n,r=t(43215),l=t(68404),s=t(45916);class i extends l.PureComponent{render(){return n||(n=(0,s.jsx)("div",{}))}}var o=t(17614),d=t(16695),u=t(3490);const c=[{label:"Speed (ms)",id:"speed",placeholder:"value",min:10,step:10},{label:"Spread",id:"spread",placeholder:"value",min:.5,step:.1},{label:"Noise",id:"noise",placeholder:"value",min:0,step:.1},{label:"Bands",id:"bands",placeholder:"bands",min:0,step:1}],p=[{value:"signal",label:"Signal"},{value:"logs",label:"Logs"},{value:"fetch",label:"Fetch"}],m=e=>{var a,t,n;let{onChange:r,query:l}=e;const i=e=>{const{name:a,value:t}=e.target;r({target:{name:a,value:Number(t)}})};return(0,s.jsxs)(u.InlineFieldRow,{children:[(0,s.jsx)(u.InlineField,{label:"Type",labelWidth:14,children:(0,s.jsx)(u.Select,{width:32,onChange:e=>{let{value:a}=e;r({target:{name:"type",value:a}})},defaultValue:p[0],options:p})}),"signal"===(null==l||null===(a=l.stream)||void 0===a?void 0:a.type)&&c.map((e=>{var a;let{label:t,id:n,min:r,step:o,placeholder:d}=e;return(0,s.jsx)(u.InlineField,{label:t,labelWidth:14,children:(0,s.jsx)(u.Input,{width:32,type:"number",id:`stream.${n}-${l.refId}`,name:n,min:r,step:o,value:null===(a=l.stream)||void 0===a?void 0:a[n],placeholder:d,onChange:i})},n)})),"fetch"===(null==l||null===(t=l.stream)||void 0===t?void 0:t.type)&&(0,s.jsx)(u.InlineField,{label:"URL",labelWidth:14,grow:!0,children:(0,s.jsx)(u.Input,{type:"text",name:"url",id:`stream.url-${l.refId}`,value:null==l||null===(n=l.stream)||void 0===n?void 0:n.url,placeholder:"Fetch URL",onChange:r})})]})},h=[{label:"Series count",id:"seriesCount",placeholder:"1",min:1,step:1},{label:"Start value",id:"startValue",placeholder:"auto",step:1},{label:"Min",id:"min",placeholder:"none",step:.1},{label:"Max",id:"max",placeholder:"none",step:.1},{label:"Spread",id:"spread",placeholder:"1",min:.5,step:.1},{label:"Noise",id:"noise",placeholder:"0",min:0,step:.1},{label:"Drop (%)",id:"drop",placeholder:"0",min:0,max:100,step:1,tooltip:"Exclude some percent (chance) points"}],v=d.wl.components.DataSource.TestData.QueryTab,g=e=>{let{onChange:a,query:t}=e;return(0,s.jsx)(u.InlineFieldRow,{children:h.map((e=>{let{label:n,id:r,min:l,step:i,placeholder:o,tooltip:d}=e;const c=null==v?void 0:v[r];return(0,s.jsx)(u.InlineField,{label:n,labelWidth:14,"aria-label":c,tooltip:d,children:(0,s.jsx)(u.Input,{width:32,name:r,type:"number",id:`randomWalk-${r}-${t.refId}`,min:l,step:i,value:t[r]||o,placeholder:o,onChange:a})},r)}))})},b=e=>{var a;let{onChange:t,query:n}=e;const r=e=>{t(Object.assign({},n,{csvContent:e}))};return(0,s.jsx)(u.CodeEditor,{height:300,language:"csv",value:null!==(a=n.csvContent)&&void 0!==a?a:"",onBlur:r,onSave:r,showMiniMap:!1,showLineNumbers:!0})},y=e=>{let{onChange:a,query:t}=e;const n=["flight_info_by_state.csv","population_by_state.csv","gdp_per_capita.csv","js_libraries.csv","ohlc_dogecoin.csv","weight_height.csv","browser_marketshare.csv"].map((e=>({label:e,value:e})));return(0,s.jsx)(u.InlineFieldRow,{children:(0,s.jsx)(u.InlineField,{label:"File",labelWidth:14,children:(0,s.jsx)(u.Select,{width:32,onChange:e=>{let{value:n}=e;a(Object.assign({},t,{csvFileName:n}))},placeholder:"Select csv file",options:n,value:n.find((e=>e.value===t.csvFileName))})})})},f={timeStep:60,onCount:3,onValue:2,offCount:3,offValue:1},F=[{timeStep:60,valuesCSV:"0,0,2,2,1,1"}],x={scenarioId:"random_walk",refId:""};function w(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}const j=e=>{const{wave:a,last:t,index:n,onAdd:r,onChange:i}=e,[o,d]=(0,l.useState)(a.valuesCSV||""),[c,p]=(0,l.useState)(a.labels||""),[m,h]=(0,l.useState)(a.name||""),v=(e,t)=>{i(n,Object.assign({},a,{[e]:t}))};return(0,s.jsxs)(u.InlineFieldRow,{children:[(0,s.jsx)(u.InlineField,{label:"Values",grow:!0,tooltip:"Comma separated values. Each value may be an int, float, or null and must not be empty. Whitespace and trailing commas are removed",children:(0,s.jsx)(u.Input,{value:o,placeholder:"CSV values",onChange:e=>d(e.currentTarget.value),autoFocus:!0,onBlur:()=>v("valuesCSV",o),onKeyDown:e=>{"Enter"===e.key&&v("valuesCSV",o)}})}),(0,s.jsx)(u.InlineField,{label:"Step",tooltip:"The number of seconds between datapoints.",children:(0,s.jsx)(u.Input,{value:a.timeStep,type:"number",placeholder:"60",width:10,onChange:e=>v("timeStep",e.currentTarget.valueAsNumber)})}),(0,s.jsx)(u.InlineField,{label:"Name",children:(0,s.jsx)(u.Input,{value:m,placeholder:"name",width:10,onChange:e=>h(e.currentTarget.value),onBlur:()=>v("name",m)})}),(0,s.jsx)(u.InlineField,{label:"Labels",children:(0,s.jsx)(u.Input,{value:c,placeholder:"labels",width:12,onChange:e=>p(e.currentTarget.value),onBlur:()=>v("labels",c)})}),(0,s.jsx)(u.Button,{icon:t?"plus":"minus",variant:"secondary",onClick:()=>{t?r():i(n,void 0)}})]})};class I extends l.PureComponent{constructor(){super(...arguments),w(this,"onChange",((e,a)=>{var t;let n=[...null!==(t=this.props.waves)&&void 0!==t?t:F];a?n[e]=Object.assign({},a):n.splice(e,1),this.props.onChange(n)})),w(this,"onAdd",(()=>{var e;const a=[...null!==(e=this.props.waves)&&void 0!==e?e:F];a.push(Object.assign({},F[0])),this.props.onChange(a)}))}render(){var e;let a=null!==(e=this.props.waves)&&void 0!==e?e:F;return a.length||(a=F),(0,s.jsx)(s.Fragment,{children:a.map(((e,t)=>(0,s.jsx)(j,{wave:e,index:t,onAdd:this.onAdd,onChange:this.onChange,last:t===a.length-1},`${t}/${e.valuesCSV}`)))})}}const C=[{label:"Server panic",value:"server_panic"},{label:"Frontend exception",value:"frontend_exception"},{label:"Frontend observable",value:"frontend_observable"}],S=e=>{let{query:a,onChange:t}=e;return(0,s.jsx)(u.InlineFieldRow,{children:(0,s.jsx)(u.InlineField,{labelWidth:14,label:"Error type",children:(0,s.jsx)(u.Select,{options:C,value:a.errorType,onChange:e=>{t(Object.assign({},a,{errorType:e.value}))}})})})},T=[{label:"random-2s-stream",value:"random-2s-stream",description:"Random stream with points every 2s"},{label:"random-flakey-stream",value:"random-flakey-stream",description:"Stream that returns data in random intervals"},{label:"random-labeled-stream",value:"random-labeled-stream",description:"Value with moving labels"},{label:"random-20Hz-stream",value:"random-20Hz-stream",description:"Random stream with points in 20Hz"}],N=e=>{let{onChange:a,query:t}=e;return(0,s.jsx)(u.InlineFieldRow,{children:(0,s.jsx)(u.InlineField,{label:"Channel",labelWidth:14,children:(0,s.jsx)(u.Select,{width:32,onChange:e=>{let{value:n}=e;a(Object.assign({},t,{channel:n}))},placeholder:"Select channel",options:T,value:T.find((e=>e.value===t.channel))})})})};function _(e){var a,t;let{query:n,onChange:r}=e;const l=(null===(a=n.nodes)||void 0===a?void 0:a.type)||"random";return(0,s.jsxs)(u.InlineFieldRow,{children:[(0,s.jsx)(u.InlineField,{label:"Data type",labelWidth:14,children:(0,s.jsx)(u.Select,{options:D.map((e=>({label:e,value:e}))),value:D.find((e=>e===l)),onChange:e=>r(Object.assign({},n.nodes,{type:e.value})),width:32})}),"random"===l&&(0,s.jsx)(u.InlineField,{label:"Count",labelWidth:14,children:(0,s.jsx)(u.Input,{type:"number",name:"count",value:null===(t=n.nodes)||void 0===t?void 0:t.count,width:32,onChange:e=>r(Object.assign({},n.nodes,{count:e.currentTarget.value?parseInt(e.currentTarget.value,10):0})),placeholder:"10"})})]})}const D=["random","response"],k=[{label:"Step",id:"timeStep",placeholder:"60",tooltip:"The number of seconds between datapoints."},{label:"On Count",id:"onCount",placeholder:"3",tooltip:"The number of values within a cycle, at the start of the cycle, that should have the onValue."},{label:"Off Count",id:"offCount",placeholder:"6",tooltip:"The number of offValues within the cycle."},{label:"On Value",id:"onValue",placeholder:"1",tooltip:'The value for "on values", may be an int, float, or null.'},{label:"Off Value",id:"offValue",placeholder:"1",tooltip:'The value for "off values", may be a int, float, or null.'}],O=e=>{let{onChange:a,query:t}=e;const n=e=>{const{name:t,value:n}=e.target;a({target:{name:t,value:Number(n)}})};return(0,s.jsx)(u.InlineFieldRow,{children:k.map((e=>{var a;let{label:r,id:l,placeholder:i,tooltip:o}=e;return(0,s.jsx)(u.InlineField,{label:r,labelWidth:14,tooltip:o,children:(0,s.jsx)(u.Input,{width:32,type:"number",name:l,id:`pulseWave.${l}-${t.refId}`,value:null===(a=t.pulseWave)||void 0===a?void 0:a[l],placeholder:i,onChange:n})},l)}))})};var q=t(82897),A=t(90923);const M=e=>{var a;let{onChange:t,query:n}=e;const[i,o]=(0,l.useState)(),[d,c]=(0,l.useState)(),p=e=>{try{const l=JSON.parse(e);if((0,q.isArray)(l))return o(void 0),c(void 0),void t(Object.assign({},n,{rawFrameContent:e}));let s;if((0,q.isArray)(l.series)&&l.state)s=l.series.map((e=>(0,r.toDataFrameDTO)((0,r.toDataFrame)(e))));else{var a;const e=(0,A.toDataQueryResponse)({data:l});null!==(a=e.data)&&void 0!==a&&a.length&&!e.error&&(s=e.data.map((e=>(0,r.dataFrameToJSON)(e))))}if(s)return console.log("Original",l),console.log("Save",s),o(void 0),c("Converted to direct frame result"),void t(Object.assign({},n,{rawFrameContent:JSON.stringify(s,null,2)}));o("Unable to read dataframes in text")}catch(e){console.log("Error parsing json",e),o("Enter JSON array of data frames (or raw query results body)"),c(void 0)}};return(0,s.jsxs)(s.Fragment,{children:[i&&(0,s.jsx)(u.Alert,{title:i,severity:"error"}),d&&(0,s.jsx)(u.Alert,{title:d,severity:"warning"}),(0,s.jsx)(u.CodeEditor,{height:300,language:"json",value:null!==(a=n.rawFrameContent)&&void 0!==a?a:"[]",onBlur:p,onSave:p,showMiniMap:!0,showLineNumbers:!0})]})};var V=t(36636);const $=(e,a,t)=>{var n;switch(e.type){case"number":return(0,s.jsx)(u.Input,{type:"number",defaultValue:null==t?void 0:t[e.name],onChange:n=>{const r=n.currentTarget.valueAsNumber;a(Object.assign({},t,{[e.name]:r}))}});case"boolean":return(0,s.jsx)(u.InlineSwitch,{value:null===(n=null==t?void 0:t[e.name])||void 0===n||n,onChange:()=>{a(Object.assign({},t,{[e.name]:!t[e.name]}))}});default:return(0,s.jsx)(u.Input,{type:"string",value:null==t?void 0:t[e.name],onChange:n=>{const r=n.target.value;a(Object.assign({},t,{[e.name]:r}))}})}},G=e=>({jsonView:V.css`
      margin-bottom: ${e.spacing(1)};
    `}),E=e=>{let{config:a,schema:t,onChange:n}=e;const[r,i]=(0,l.useState)(!1),o=(0,u.useStyles2)(G);return(0,s.jsxs)(u.FieldSet,{label:"Config",children:[(0,s.jsx)(u.InlineSwitch,{className:o.jsonView,label:"JSON View",showLabel:!0,value:r,onChange:()=>i(!r)}),r?(0,s.jsx)(u.TextArea,{defaultValue:JSON.stringify(a,null,2),rows:7,onChange:e=>{const a=e.target;n(JSON.parse(a.value))}}):(0,s.jsx)(s.Fragment,{children:t.fields.map((e=>(0,s.jsx)(u.InlineField,{label:e.name,labelWidth:14,children:$(e,n,a)},e.name)))})]})},W=e=>{var a,t,n,r,i,d;let{onChange:c,query:p,ds:m}=e;const h=null!==(a=p.sim)&&void 0!==a?a:{},v=null!==(t=h.key)&&void 0!==t?t:{},[g,b]=(0,l.useState)({}),y=(0,o.Z)((async()=>{const e=await m.getResource("sims");return{sims:e,options:e.map((e=>({label:e.name,value:e.type,description:e.description})))}}),[m]),f=(0,l.useMemo)((()=>{const e=v.type;return e&&y.value?{details:y.value.sims.find((a=>a.type===e)),option:y.value.options.find((a=>a.value===e))}:{}}),[y.value,null==v?void 0:v.type]);let F=(0,o.Z)((async()=>{var e;let a=v.type+"/"+v.tick+"hz";v.uid&&(a+="/"+v.uid);let t=null===(e=await m.getResource("sim/"+a))||void 0===e?void 0:e.config;return b(t.value),t}),[v.type,v.tick,v.uid]);const x=e=>{c(Object.assign({},p,{sim:Object.assign({},h,{key:e})}))};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(u.InlineFieldRow,{children:(0,s.jsx)(u.InlineField,{labelWidth:14,label:"Simulation",tooltip:"",children:(0,s.jsx)(u.Select,{isLoading:y.loading,options:null!==(n=null===(r=y.value)||void 0===r?void 0:r.options)&&void 0!==n?n:[],value:f.option,onChange:e=>{x(Object.assign({},v,{type:e.value}))},width:32})})}),(0,s.jsxs)(u.InlineFieldRow,{children:[(0,s.jsx)(u.InlineField,{labelWidth:14,label:"Stream",tooltip:"connect to the live channel",children:(0,s.jsx)(u.InlineSwitch,{value:Boolean(h.stream),onChange:()=>{c(Object.assign({},p,{sim:Object.assign({},h,{stream:!h.stream})}))}})}),(0,s.jsx)(u.InlineField,{label:"Interval",tooltip:"the rate a simulation will spit out events",children:(0,s.jsx)(u.Input,{width:10,type:"number",value:v.tick,onChange:e=>{const a=e.currentTarget.valueAsNumber;x(Object.assign({},v,{tick:a}))},min:.1,max:50,suffix:"hz"})}),(0,s.jsx)(u.InlineField,{label:"Last",tooltip:"Only return the last value",children:(0,s.jsx)(u.Label,{children:(0,s.jsx)(u.InlineSwitch,{value:Boolean(h.last),onChange:()=>{c(Object.assign({},p,{sim:Object.assign({},h,{last:!h.last})}))}})})}),(0,s.jsx)(u.InlineField,{label:"UID",tooltip:"A UID will allow multiple simulations to run at the same time",children:(0,s.jsx)(u.Input,{type:"text",placeholder:"optional",value:h.key.uid,onChange:e=>{const{value:a}=e.target;x(Object.assign({},v,{uid:null!=a?a:void 0}))}})})]}),(0,s.jsx)(E,{onChange:e=>{let a=v.type+"/"+v.tick+"hz";v.uid&&(a+="/"+v.uid),m.postResource("sim/"+a,e).then((e=>{b(e.config)}))},config:null!=g?g:F.value,schema:null!==(i=null===(d=f.details)||void 0===d?void 0:d.config.schema)&&void 0!==i?i:{fields:[]}})]})};function R(e){let{query:a,onChange:t}=e;return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(u.InlineFieldRow,{children:[(0,s.jsx)(u.InlineField,{labelWidth:14,label:"Mode",children:(0,s.jsx)(u.Select,{options:L,onChange:e=>{t(Object.assign({},a,{mode:e.value}))},width:32,value:L.find((e=>e.value===a.mode))})}),(0,s.jsx)(u.InlineField,{label:"Period",children:(0,s.jsx)(u.Input,{value:a.period,placeholder:"30m",onChange:e=>{t(Object.assign({},a,{period:e.currentTarget.value}))}})})]}),(0,s.jsxs)(u.InlineFieldRow,{children:[(0,s.jsx)(u.InlineField,{labelWidth:14,label:"Fields",children:(0,s.jsx)(u.MultiSelect,{options:Q,onChange:e=>{t(Object.assign({},a,{fields:e.map((e=>e.value))}))},width:32,placeholder:"all",value:a.fields})}),(0,s.jsx)(u.InlineField,{label:"States",grow:!0,children:(0,s.jsx)(u.MultiSelect,{options:U,onChange:e=>{t(Object.assign({},a,{states:e.map((e=>e.value))}))},placeholder:"all",value:a.states})})]})]})}const L=["values-as-rows","values-as-fields","values-as-labeled-fields","timeseries","timeseries-wide"].map((e=>({label:e,value:e}))),Q=["foo","bar","baz"].map((e=>({label:e,value:e}))),U=["AL","AK","AZ","AR","CA","CO","CT","DE","DC","FL","GA","HI","ID","IL","IN","IA","KS","KY","LA","ME","MT","NE","NV","NH","NJ","NM","NY","NC","ND","OH","OK","OR","MD","MA","MI","MN","MS","MO","PA","RI","SC","SD","TN","TX","UT","VT","VA","WA","WV","WI","WY"].map((e=>({label:e,value:e})));var H=t(16976),P=t(80965),z=t(19323);let B=0;function J(){return B=(B+Math.floor(5*Math.random()))%K.length,K[B]}const K=["At","vero","eos","et","accusamus","et","iusto","odio","dignissimos","ducimus","qui","blanditiis","praesentium","voluptatum","deleniti","atque","corrupti","quos","dolores","et","quas","molestias","excepturi","sint","occaecati","cupiditate","non","provident","similique","sunt","in","culpa","qui","officia","deserunt","mollitia","animi","id","est","laborum","et","dolorum","fuga","Et","harum","quidem","rerum","facilis","est","et","expedita","distinctio","Nam","libero","tempore","cum","soluta","nobis","est","eligendi","optio","cumque","nihil","impedit","quo","minus","id","quod","maxime","placeat","facere","possimus","omnis","voluptas","assumenda","est","omnis","dolor","repellendus","Temporibus","autem","quibusdam","et","aut","officiis","debitis","aut","rerum","necessitatibus","saepe","eveniet","ut","et","voluptates","repudiandae","sint","et","molestiae","non","recusandae","Itaque","earum","rerum","hic","tenetur","a","sapiente","delectus","ut","aut","reiciendis","voluptatibus","maiores","alias","consequatur","aut","perferendis","doloribus","asperiores","repellat"],Z={type:"signal",speed:250,spread:3.5,noise:2.2,bands:1};function Y(e,a){const t=(0,q.defaults)(e.stream,Z);if("signal"===t.type)return function(e,a,t){return new H.y((n=>{var l;const s=`signal-${t.panelId}-${e.refId}`,i=t.maxDataPoints||1e3,o={refId:e.refId,fields:[{name:"time",type:r.FieldType.time},{name:null!==(l=e.alias)&&void 0!==l?l:"value",type:r.FieldType.number}]},{spread:d,speed:u,bands:c=0,noise:p}=a;for(let e=0;e<c;e++){const a=c>1?` ${e+1}`:"";o.fields.push({name:"Min"+a,type:r.FieldType.number}),o.fields.push({name:"Max"+a,type:r.FieldType.number})}const m=z.Av.fromDataFrameJSON({schema:o},{maxLength:i});let h=100*Math.random(),v=null,g=-1;const b=e=>{h+=(Math.random()-.5)*d;const a={values:[[e],[h]]};let t=h,n=h;for(let e=0;e<c;e++)t-=Math.random()*p,n+=Math.random()*p,a.values.push([t]),a.values.push([n]);const r={data:a};return m.push(r)};{let e=Date.now()-i*u;for(let a=0;a<i;a++)b(e),e+=u}const y=()=>{b(Date.now());(P.A.lastUpdate-g>1e3||P.A.ok)&&(n.next({data:[m],key:s,state:r.LoadingState.Streaming}),g=P.A.lastUpdate),v=setTimeout(y,u)};return setTimeout(y,5),()=>{console.log("unsubscribing to stream "+s),clearTimeout(v)}}))}(e,t,a);if("logs"===t.type)return function(e,a,t){return new H.y((n=>{const l=`logs-${t.panelId}-${e.refId}`,s=t.maxDataPoints||1e3,i=new r.CircularDataFrame({append:"tail",capacity:s});i.refId=e.refId,i.name=e.alias||"Logs "+e.refId,i.addField({name:"line",type:r.FieldType.string}),i.addField({name:"time",type:r.FieldType.time}),i.meta={preferredVisualisationType:"logs"};const{speed:o}=a;let d=null;const u=()=>{i.fields[0].values.add(Date.now()),i.fields[1].values.add(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:60,a=J();for(;a.length<e;)a+=" "+J();return a}()),n.next({data:[i],key:l}),d=setTimeout(u,o)};return setTimeout(u,5),()=>{console.log("unsubscribing to stream "+l),clearTimeout(d)}}))}(e,t,a);if("fetch"===t.type)return function(e,a,t){return new H.y((n=>{const l=`fetch-${t.panelId}-${e.refId}`,s=t.maxDataPoints||1e3;let i,o=new r.CircularDataFrame({append:"tail",capacity:s});o.refId=e.refId,o.name=e.alias||"Fetch "+e.refId;const d=new r.CSVReader({callback:{onHeader:a=>{o.fields.length&&(o=new r.CircularDataFrame({append:"tail",capacity:s}),o.refId=e.refId,o.name="Fetch "+e.refId);for(const e of a)o.addField(e)},onRow:e=>{o.add(e)}}}),u=e=>{if(e.value){const a=(new TextDecoder).decode(e.value);d.readCSV(a)}return n.next({data:[o],key:l,state:e.done?r.LoadingState.Done:r.LoadingState.Streaming}),e.done?(console.log("Finished stream"),void n.complete()):i.read().then(u)};if(!a.url)throw new Error("query.url is not defined");return fetch(new Request(a.url)).then((e=>{e.body&&(i=e.body.getReader(),i.read().then(u))})),()=>{console.log("unsubscribing to stream "+l)}}))}(e,t,a);throw new Error(`Unknown Stream Type: ${t.type}`)}var X,ee,ae,te;const ne=["random_walk","predictable_pulse"],re=[{value:"datasources",label:"Data Sources"},{value:"search",label:"Search"},{value:"annotations",label:"Annotations"}],le=d.wl.components.DataSource.TestData.QueryTab;var se;class ie extends l.PureComponent{constructor(e){super(e)}render(){return se||(se=(0,s.jsxs)("div",{children:["See github for more information about setting up a reproducible test environment.",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(u.LinkButton,{variant:"secondary",href:"https://github.com/grafana/grafana/tree/main/devenv",target:"_blank",rel:"noopener noreferrer",children:"GitHub"}),(0,s.jsx)("br",{})]}))}}var oe=t(71808),de=t(3321),ue=t(86558),ce=t(94396),pe=t(56676),me=t(5970);function he(e,a){const t=["A","B","C"],n=[];if(a>5)return[];for(const r of t){const t=`${e}${r}`;n.push({name:t,children:he(t,a+1)})}return n}function ve(e,a,t){if(t>=a.length)return e;if("*"===a[t])return e;const n=a[t];let r=[],l=[n];n.startsWith("{")&&(l=n.replace(/\{|\}/g,"").split(","));for(const n of e)for(const e of l)if(-1!==e.indexOf("*")){const l=e.replace("*","");new RegExp(`^${l}.*`,"gi").test(n.name)&&(r=r.concat(ve([n],a,t+1)))}else n.name===e&&(r=r.concat(ve(n.children,a,t+1)));return r}function ge(e){if(0===e.indexOf("value"))return[{name:e,children:[]}];return ve(he("",0),e.split("."),0)}const be={fields:[{name:r.NodeGraphDataFrameFieldNames.id,type:r.FieldType.string,config:{links:[{title:"Traces/All",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}"))'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/OK",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { ok = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Errors",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { error = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Faults",url:"",internal:{query:{queryType:"getTraceSummaries",query:'service(id(name: "${__data.fields.name}", type: "${__data.fields.type}")) { fault = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}}]},values:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]},{name:r.NodeGraphDataFrameFieldNames.title,type:r.FieldType.string,config:{displayName:"Name"},values:["auth","products","customers","orders","products","orders","api","shipping","orders","execute-api","shipping","www","api","www","products"]},{name:r.NodeGraphDataFrameFieldNames.subTitle,type:r.FieldType.string,config:{displayName:"Type"},values:["Compute","SQL","SQL","SQL","remote","Function","Compute","Function","Function","remote","Function","Compute","client","client","Compute"]},{name:r.NodeGraphDataFrameFieldNames.mainStat,type:r.FieldType.number,config:{unit:"ms/t",displayName:"Average response time"},values:[3.5394042646735553,15.906441318223264,4.913011921591567,7.4163203042094095,1092,22.85961441405067,56.135855729084696,4.45946191601527,12.818300278280843,4.25,12.565442646791492,77.63447512700567,40.387096774193544,77.63447512700567,27.648950187374872]},{name:r.NodeGraphDataFrameFieldNames.secondaryStat,type:r.FieldType.number,config:{unit:"t/min",displayName:"Transactions per minute"},values:[50.56317154501667,682.4,512.8416666666667,125.64444444444445,.005585812037424941,137.59722222222223,300.0527777777778,30.582348853370394,125.77222222222223,.028706417080318163,30.582348853370394,165.675,.100021510002151,165.675,162.33055555555555]},{name:r.NodeGraphDataFrameFieldNames.arc+"success",type:r.FieldType.number,config:{color:{mode:r.FieldColorModeId.Fixed,fixedColor:"green"},displayName:"Sucesss"},values:[.9338865684765882,1,1,1,.5,1,.9901128505170387,.9069260134520997,1,0,.9069260134520997,.9624432037288534,0,.9624432037288534,.9824945669843769]},{name:r.NodeGraphDataFrameFieldNames.arc+"faults",type:r.FieldType.number,config:{color:{mode:r.FieldColorModeId.Fixed,fixedColor:"red"},displayName:"Faults"},values:[0,0,0,0,.5,0,.009479813736472288,0,0,0,0,.017168821152524185,0,.017168821152524185,.01750543301562313]},{name:r.NodeGraphDataFrameFieldNames.arc+"errors",type:r.FieldType.number,config:{color:{mode:r.FieldColorModeId.Fixed,fixedColor:"semi-dark-yellow"},displayName:"Errors"},values:[.06611343152341174,0,0,0,0,0,.0004073357464890436,.09307398654790038,0,1,.09307398654790038,.02038797511862247,1,.02038797511862247,0]},{name:r.NodeGraphDataFrameFieldNames.arc+"throttled",type:r.FieldType.number,config:{color:{mode:r.FieldColorModeId.Fixed,fixedColor:"purple"},displayName:"Throttled"},values:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}],meta:{preferredVisualisationType:"nodeGraph"},name:"nodes"},ye={fields:[{name:r.NodeGraphDataFrameFieldNames.id,type:r.FieldType.string,config:{links:[{title:"Traces/All",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}")'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/OK",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { ok = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Errors",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { error = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}},{title:"Traces/Faults",url:"",internal:{query:{queryType:"getTraceSummaries",query:'edge("${__data.fields.sourceName}", "${__data.fields.targetName}") { fault = true }'},datasourceUid:"Ax4erxHGz",datasourceName:"Trace data source"}}]},values:["0__2","5__8","6__0","6__5","6__9","6__2","6__14","6__4","8__3","10__7","11__0","11__6","12__6","13__11","14__1","14__2","14__10"]},{name:r.NodeGraphDataFrameFieldNames.source,type:r.FieldType.string,config:{},values:[0,5,6,6,6,6,6,6,8,10,11,11,12,13,14,14,14]},{name:"sourceName",type:r.FieldType.string,config:{},values:["auth","orders","api","api","api","api","api","api","orders","shipping","www","www","api","www","products","products","products"]},{name:r.NodeGraphDataFrameFieldNames.target,type:r.FieldType.string,config:{},values:[2,8,0,5,9,2,14,4,3,7,0,6,6,11,1,2,10]},{name:"targetName",type:r.FieldType.string,config:{},values:["customers","orders","auth","orders","execute-api","customers","products","products","orders","shipping","auth","api","api","www","products","customers","shipping"]},{name:r.NodeGraphDataFrameFieldNames.mainStat,type:r.FieldType.string,config:{displayName:"Response percentage"},values:["Success 100.00%","Success 100.00%","Success 100.00%","Success 100.00%","Errors 100.00%","Success 100.00%","Faults 1.75%","Faults 50.00%","Success 100.00%","Errors 9.31%","Errors 6.62%","Faults 1.13%","Errors 100.00%","Faults 1.72%","Success 100.00%","Success 100.00%","Faults 9.30%"]},{name:r.NodeGraphDataFrameFieldNames.secondaryStat,type:r.FieldType.number,config:{unit:"t/min",displayName:"Transactions per minute"},values:[50.56317154501667,125.77222222222223,.03333333333333333,137.59722222222223,.022222222222222223,299.96666666666664,162.33055555555555,.005555555555555556,125.64444444444445,30.582348853370394,50.51111111111111,299.9166666666667,.100021510002151,165.675,682.4,162.33055555555555,30.558333333333334]}],meta:{preferredVisualisationType:"nodeGraph"},name:"edges"};function fe(e){const a=Math.random(),t=1-a;return{id:e.toString(),title:`service:${e}`,subTitle:"service",success:a,error:t,stat1:Math.random(),stat2:Math.random(),edges:[]}}class Fe extends r.StandardVariableSupport{toDataQuery(e){return{refId:"TestDataDataSource-QueryVariable",stringInput:e.query,scenarioId:"variables-query",csvWave:void 0}}}class xe extends A.DataSourceWithBackend{constructor(e){let a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:(0,A.getTemplateSrv)();var t,n,r;super(e),r=void 0,(n="scenariosCache")in(t=this)?Object.defineProperty(t,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[n]=r,this.templateSrv=a,this.variables=new Fe}query(e){const a=[],t=[];for(const n of e.targets)if(!n.hide)switch(this.resolveTemplateVariables(n,e.scopedVars),n.scenarioId){case"live":t.push(Ie(n,e));break;case"streaming_client":t.push(Y(n,e));break;case"grafana_api":t.push(we(n,e));break;case"annotations":t.push(this.annotationDataTopicTest(n,e));break;case"variables-query":t.push(this.variablesQuery(n,e));break;case"node_graph":t.push(this.nodesQuery(n,e));break;case"raw_frame":t.push(this.rawFrameQuery(n,e));break;case"server_error_500":const r=this.serverErrorQuery(n,e);r?t.push(r):a.push(n);break;case"manual_entry":{let e="Time,Value\n";if(n.points)for(const a of n.points)e+=`${a[1]},${a[0]}\n`;n.scenarioId="csv_content",n.csvContent=e}default:a.push(n)}if(a.length){const n=Object.assign({},e,{targets:a});t.push(super.query(n))}return 0===t.length?(0,oe.of)({data:[]}):(0,de.T)(...t)}resolveTemplateVariables(e,a){e.labels&&(e.labels=this.templateSrv.replace(e.labels,a)),e.alias&&(e.alias=this.templateSrv.replace(e.alias,a)),e.scenarioId&&(e.scenarioId=this.templateSrv.replace(e.scenarioId,a)),e.stringInput&&(e.stringInput=this.templateSrv.replace(e.stringInput,a)),e.csvContent&&(e.csvContent=this.templateSrv.replace(e.csvContent,a)),e.rawFrameContent&&(e.rawFrameContent=this.templateSrv.replace(e.rawFrameContent,a))}annotationDataTopicTest(e,a){const t=this.buildFakeAnnotationEvents(a.range,50),n=new r.ArrayDataFrame(t);return n.meta={dataTopic:r.DataTopic.Annotations},(0,oe.of)({key:e.refId,data:[n]}).pipe((0,pe.g)(100))}buildFakeAnnotationEvents(e,a){let t=e.from.valueOf();const n=[],r=(e.to.valueOf()-t)/a;for(let e=0;e<a;e++)n.push({time:t,text:'This is the text, <a href="https://grafana.com">Grafana.com</a>',tags:["text","server"]}),t+=r;return n}annotationQuery(e){return Promise.resolve(this.buildFakeAnnotationEvents(e.range,10))}getQueryDisplayText(e){var a;const t=null!==(a=e.scenarioId)&&void 0!==a?a:"Default scenario";return e.alias?t+" as "+e.alias:t}testDatasource(){return Promise.resolve({status:"success",message:"Data source is working"})}getScenarios(){return this.scenariosCache||(this.scenariosCache=this.getResource("scenarios")),this.scenariosCache}variablesQuery(e,a){var t;const n=null!==(t=e.stringInput)&&void 0!==t?t:"",l=ge(this.templateSrv.replace(n,(0,me._6)({query:n,wildcardChar:"*",options:a.scopedVars}))).map((e=>({value:e.name,text:e.name}))),s=new r.ArrayDataFrame(l);return(0,oe.of)({data:[s]}).pipe((0,pe.g)(100))}nodesQuery(e,a){var t,n;const l=(null===(t=e.nodes)||void 0===t?void 0:t.type)||"random";let s;switch(l){case"random":s=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10;const a=[],t={id:"0",title:"root",subTitle:"client",success:1,error:0,stat1:Math.random(),stat2:Math.random(),edges:[]};a.push(t);const n=[t],l=3;for(let t=1;t<e;t++){const e=fe(t);a.push(e);const r=Math.floor(Math.random()*Math.floor(n.length-1)),s=n[r];s.edges.push(e.id),s.edges.length>=l&&n.splice(r,1),n.push(e)}const s=Math.floor(e/2);for(let e=0;e<=s;e++){const e=Math.floor(Math.random()*Math.floor(a.length-1));e!==Math.floor(Math.random()*Math.floor(a.length-1))&&"0"!==a[e].id&&"0"!==a[e].id&&a[e].edges.push(a[e].id)}const i={[r.NodeGraphDataFrameFieldNames.id]:{values:new r.ArrayVector,type:r.FieldType.string},[r.NodeGraphDataFrameFieldNames.title]:{values:new r.ArrayVector,type:r.FieldType.string},[r.NodeGraphDataFrameFieldNames.subTitle]:{values:new r.ArrayVector,type:r.FieldType.string},[r.NodeGraphDataFrameFieldNames.mainStat]:{values:new r.ArrayVector,type:r.FieldType.number,config:{displayName:"Transactions per second"}},[r.NodeGraphDataFrameFieldNames.secondaryStat]:{values:new r.ArrayVector,type:r.FieldType.number,config:{displayName:"Average duration"}},[r.NodeGraphDataFrameFieldNames.arc+"success"]:{values:new r.ArrayVector,type:r.FieldType.number,config:{color:{fixedColor:"green",mode:r.FieldColorModeId.Fixed},displayName:"Success"}},[r.NodeGraphDataFrameFieldNames.arc+"errors"]:{values:new r.ArrayVector,type:r.FieldType.number,config:{color:{fixedColor:"red",mode:r.FieldColorModeId.Fixed},displayName:"Errors"}}},o=new r.MutableDataFrame({name:"nodes",fields:Object.keys(i).map((e=>Object.assign({},i[e],{name:e}))),meta:{preferredVisualisationType:"nodeGraph"}}),d={[r.NodeGraphDataFrameFieldNames.id]:{values:new r.ArrayVector,type:r.FieldType.string},[r.NodeGraphDataFrameFieldNames.source]:{values:new r.ArrayVector,type:r.FieldType.string},[r.NodeGraphDataFrameFieldNames.target]:{values:new r.ArrayVector,type:r.FieldType.string}},u=new r.MutableDataFrame({name:"edges",fields:Object.keys(d).map((e=>Object.assign({},d[e],{name:e}))),meta:{preferredVisualisationType:"nodeGraph"}}),c=new Set;for(const e of a){i.id.values.add(e.id),i.title.values.add(e.title),i[r.NodeGraphDataFrameFieldNames.subTitle].values.add(e.subTitle),i[r.NodeGraphDataFrameFieldNames.mainStat].values.add(e.stat1),i[r.NodeGraphDataFrameFieldNames.secondaryStat].values.add(e.stat2),i.arc__success.values.add(e.success),i.arc__errors.values.add(e.error);for(const a of e.edges){const t=`${e.id}--${a}`;c.has(t)||(c.add(t),d.id.values.add(`${e.id}--${a}`),d.source.values.add(e.id),d.target.values.add(a))}}return[o,u]}(null===(n=e.nodes)||void 0===n?void 0:n.count);break;case"response":s=[new r.MutableDataFrame(be),new r.MutableDataFrame(ye)];break;default:throw new Error(`Unknown node_graph sub type ${l}`)}return(0,oe.of)({data:s}).pipe((0,pe.g)(100))}rawFrameQuery(e,a){try{var t;const a=JSON.parse(null!==(t=e.rawFrameContent)&&void 0!==t?t:"[]").map((a=>{const t=(0,r.toDataFrame)(a);return t.refId=e.refId,t}));return(0,oe.of)({data:a,state:r.LoadingState.Done}).pipe((0,pe.g)(100))}catch(e){return(0,oe.of)({data:[],error:e instanceof Error?e:new Error("Unkown error")}).pipe((0,pe.g)(100))}}serverErrorQuery(e,a){var t;const{errorType:n}=e;if(console.log("we're here!",e),"server_panic"===n)return null;if(""===(null!==(t=e.stringInput)&&void 0!==t?t:"")){if("frontend_exception"===n)throw new Error("Scenario threw an exception in the frontend because the input was empty.");return(0,ue._)((()=>new Error("Scenario returned an error because the input was empty.")))}return null}}function we(e,a){const t=`/api/${e.stringInput}`;return(0,ce.D)((0,A.getBackendSrv)().get(t).then((e=>{const a=new r.ArrayDataFrame(e);return{state:r.LoadingState.Done,data:[a]}})))}let je=1e3;function Ie(e,a){if(!e.channel)throw new Error("Missing channel config");return(0,A.getGrafanaLiveSrv)().getDataStream({addr:{scope:r.LiveChannelScope.Plugin,namespace:"testdata",path:e.channel},key:"testStream."+je++})}function Ce(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}class Se{constructor(){Ce(this,"annotation",void 0)}}Ce(Se,"template","<h2>Annotation scenario</h2>");const Te=new r.DataSourcePlugin(xe).setConfigEditor(i).setQueryEditor((e=>{var a,t;let{query:n,datasource:r,onChange:i,onRunQuery:d}=e;n=Object.assign({},x,n);const{loading:c,value:p}=(0,o.Z)((async()=>{if("manual_entry"===n.scenarioId&&n.points){let e="Time,Value\n";for(const a of n.points)e+=`${a[1]},${a[0]}\n`;i({refId:n.refId,datasource:n.datasource,scenarioId:"csv_content",csvContent:e})}const e=await r.getScenarios(),a=["simulation"];return e.map((e=>Object.assign({},e,{hideAliasField:a.includes(e.id)})))}),[]),h=e=>{i(e),d()},v=(0,l.useMemo)((()=>null==p?void 0:p.find((e=>e.id===n.scenarioId))),[p,n]),w=null==v?void 0:v.id,j=null==v?void 0:v.description,C=e=>{const{name:a,value:t,type:r}=e.target;let l=t;"number"===r&&(l=Number(t)),"levelColumn"===a&&(l=e.target.checked),h(Object.assign({},n,{[a]:l}))},T=e=>a=>{const{name:t,value:r,type:l}=a.target;let s=r;"number"===l&&(s=Number(r)),h(Object.assign({},n,{[e]:Object.assign({},n[e],{[t]:s})}))},D=T("stream"),k=T("pulseWave"),q=(0,l.useMemo)((()=>(p||[]).map((e=>({label:e.name,value:e.id}))).sort(((e,a)=>e.label.localeCompare(a.label)))),[p]),A=(0,l.useMemo)((()=>{var e;return ne.includes(null!==(e=n.scenarioId)&&void 0!==e?e:"")}),[n]);return c?null:(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(u.InlineFieldRow,{"aria-label":le.scenarioSelectContainer,children:[(0,s.jsx)(u.InlineField,{labelWidth:14,label:"Scenario",children:(0,s.jsx)(u.Select,{inputId:`test-data-scenario-select-${n.refId}`,options:q,value:q.find((e=>e.value===n.scenarioId)),onChange:e=>{const a=null==p?void 0:p.find((a=>a.id===e.value));if(!a)return;const t={scenarioId:e.value,refId:n.refId,alias:n.alias,datasource:n.datasource};switch(a.stringInput&&(t.stringInput=a.stringInput),a.id){case"grafana_api":t.stringInput="datasources";break;case"streaming_client":t.stream=Z;break;case"live":t.channel="random-2s-stream";break;case"simulation":t.sim={key:{type:"flight",tick:10}};break;case"predictable_pulse":t.pulseWave=f;break;case"predictable_csv_wave":t.csvWave=F;break;case"usa":t.usa={mode:L[0].value}}h(t)},width:32})}),(null==v?void 0:v.stringInput)&&(0,s.jsx)(u.InlineField,{label:"String Input",children:(0,s.jsx)(u.Input,{width:32,id:`stringInput-${n.refId}`,name:"stringInput",placeholder:n.stringInput,value:n.stringInput,onChange:C})}),Boolean(!(null!=v&&v.hideAliasField))&&(0,s.jsx)(u.InlineField,{label:"Alias",labelWidth:14,children:(0,s.jsx)(u.Input,{width:32,id:`alias-${n.refId}`,type:"text",placeholder:"optional",pattern:'[^<>&\\\\"]+',name:"alias",value:n.alias,onChange:C})}),A&&(0,s.jsx)(u.InlineField,{label:"Labels",labelWidth:14,tooltip:(0,s.jsxs)(s.Fragment,{children:["Set labels using a key=value syntax:",X||(X=(0,s.jsx)("br",{})),'{ key = "value", key2 = "value" }',ee||(ee=(0,s.jsx)("br",{})),'key="value", key2="value"',ae||(ae=(0,s.jsx)("br",{})),"key=value, key2=value",te||(te=(0,s.jsx)("br",{}))]}),children:(0,s.jsx)(u.Input,{width:32,id:`labels-${n.refId}`,name:"labels",onChange:C,value:null===(a=n)||void 0===a?void 0:a.labels,placeholder:"key=value, key2=value2"})})]}),"random_walk"===w&&(0,s.jsx)(g,{onChange:C,query:n,ds:r}),"streaming_client"===w&&(0,s.jsx)(m,{onChange:D,query:n,ds:r}),"live"===w&&(0,s.jsx)(N,{onChange:h,query:n,ds:r}),"simulation"===w&&(0,s.jsx)(W,{onChange:h,query:n,ds:r}),"raw_frame"===w&&(0,s.jsx)(M,{onChange:h,query:n,ds:r}),"csv_file"===w&&(0,s.jsx)(y,{onChange:h,query:n,ds:r}),"csv_content"===w&&(0,s.jsx)(b,{onChange:h,query:n,ds:r}),"logs"===w&&(0,s.jsxs)(u.InlineFieldRow,{children:[(0,s.jsx)(u.InlineField,{label:"Lines",labelWidth:14,children:(0,s.jsx)(u.Input,{type:"number",name:"lines",value:n.lines,width:32,onChange:C,placeholder:"10"})}),(0,s.jsx)(u.InlineField,{label:"Level",labelWidth:14,children:(0,s.jsx)(u.InlineSwitch,{onChange:C,name:"levelColumn",value:!!n.levelColumn})})]}),"usa"===w&&(0,s.jsx)(R,{onChange:e=>{h(Object.assign({},n,{usa:e}))},query:null!==(t=n.usa)&&void 0!==t?t:{}}),"grafana_api"===w&&(0,s.jsx)(u.InlineField,{labelWidth:14,label:"Endpoint",children:(0,s.jsx)(u.Select,{options:re,onChange:e=>{let{value:a}=e;h(Object.assign({},n,{stringInput:a}))},width:32,value:re.find((e=>e.value===n.stringInput))})}),"arrow"===w&&(0,s.jsx)(u.InlineField,{grow:!0,children:(0,s.jsx)(u.TextArea,{name:"stringInput",value:n.stringInput,rows:10,placeholder:"Copy base64 text data from query result",onChange:C})}),"predictable_pulse"===w&&(0,s.jsx)(O,{onChange:k,query:n,ds:r}),"predictable_csv_wave"===w&&(0,s.jsx)(I,{onChange:e=>{h(Object.assign({},n,{csvWave:e}))},waves:n.csvWave}),"node_graph"===w&&(0,s.jsx)(_,{onChange:e=>i(Object.assign({},n,{nodes:e})),query:n}),"server_error_500"===w&&(0,s.jsx)(S,{onChange:h,query:n,ds:r}),j&&(0,s.jsx)("p",{children:j})]})})).setAnnotationQueryCtrl(Se).addConfigPage({title:"Setup",icon:"list-ul",body:ie,id:"setup"})}}]);
//# sourceMappingURL=testDataDSPlugin.3df66fa06d01b82a0c34.js.map