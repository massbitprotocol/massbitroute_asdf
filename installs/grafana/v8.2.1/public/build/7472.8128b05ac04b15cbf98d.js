"use strict";(self.webpackChunkgrafana=self.webpackChunkgrafana||[]).push([[7472],{"./public/app/plugins/datasource/dashboard/module.ts":(e,a,r)=>{r.r(a),r.d(a,{plugin:()=>u});var s=r("./packages/grafana-data/src/index.ts");class t extends s.DataSourceApi{constructor(e){super(e)}getCollapsedText(e){return`Dashboard Reference: ${e.panelId}`}query(e){return Promise.reject("This should not be called directly")}testDatasource(){return Promise.resolve({})}}const u=new s.DataSourcePlugin(t)}}]);
//# sourceMappingURL=7472.8128b05ac04b15cbf98d.js.map