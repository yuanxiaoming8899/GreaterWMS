(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[92],{c2e4:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e._self._c;return t("div",{staticStyle:{"margin-top":"42px"}},[t("transition",{attrs:{appear:"","enter-active-class":"animated fadeIn"}},[t("q-table",{staticClass:"shadow-24",attrs:{data:e.table_list,"row-key":"id",separator:e.separator,loading:e.loading,columns:e.columns,"hide-bottom":"",pagination:e.pagination,"no-data-label":"No data","no-results-label":"No data you want","table-style":{height:e.height},flat:"",bordered:""},on:{"update:pagination":function(t){e.pagination=t}},scopedSlots:e._u([{key:"top",fn:function(){return[t("q-btn-group",{attrs:{push:""}},[t("q-btn",{attrs:{label:e.$t("refresh"),icon:"refresh"},on:{click:function(t){return e.reFresh()}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("refreshtip")))])],1)],1),t("q-space"),t("q-input",{attrs:{outlined:"",rounded:"",dense:"",debounce:"300",color:"primary",placeholder:e.$t("search")},on:{input:function(t){return e.getSearchList()}},scopedSlots:e._u([{key:"append",fn:function(){return[t("q-icon",{attrs:{name:"search"},on:{click:function(t){return e.getSearchList()}}})]},proxy:!0}]),model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}})]},proxy:!0},{key:"body",fn:function(a){return[t("q-tr",{attrs:{props:a}},[t("q-td",{key:"goods_code",attrs:{props:a}},[e._v(e._s(a.row.goods_code))]),t("q-td",{key:"bin_name",attrs:{props:a}},[e._v(e._s(a.row.bin_name))]),t("q-td",{key:"goods_desc",attrs:{props:a}},[e._v(e._s(a.row.goods_desc))]),t("q-td",{key:"mode_code",attrs:{props:a}},[e._v(e._s(a.row.mode_code))]),t("q-td",{key:"goods_qty",attrs:{props:a}},[e._v(e._s(a.row.goods_qty))]),t("q-td",{key:"creater",attrs:{props:a}},[e._v(e._s(a.row.creater))]),t("q-td",{key:"create_time",attrs:{props:a}},[e._v(e._s(a.row.create_time))]),t("q-td",{key:"update_time",attrs:{props:a}},[e._v(e._s(a.row.update_time))])],1)]}}])})],1),[t("div",{staticClass:"q-pa-lg flex flex-center"},[t("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_previous,expression:"pathname_previous"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("previous"),icon:"navigate_before"},on:{click:function(t){return e.getListPrevious()}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("previous")))])],1),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:e.pathname_next,expression:"pathname_next"}],attrs:{flat:"",push:"",color:"purple",label:e.$t("next"),"icon-right":"navigate_next"},on:{click:function(t){return e.getListNext()}}},[t("q-tooltip",{attrs:{"content-class":"bg-amber text-black shadow-4",offset:[10,10],"content-style":"font-size: 12px"}},[e._v(e._s(e.$t("next")))])],1),t("q-btn",{directives:[{name:"show",rawName:"v-show",value:!e.pathname_previous&&!e.pathname_next,expression:"!pathname_previous && !pathname_next"}],attrs:{flat:"",push:"",color:"dark",label:e.$t("no_data")}})],1)]],2)},o=[],n=a("3004"),i=a("18d6"),r={name:"PageInbAndOutb",data(){return{login_name:"",authin:"0",pathname:"dashboard/",pathname_previous:"",pathname_next:"",separator:"cell",loading:!1,height:"",table_list:[],filter:"",staff_type_list:["Manager","Inbound","Outbound","Supervisor","StockControl","Customer","Supplier"],columns:[{name:"goods_code",label:this.$t("dashboards.view_tradelist.goods_code"),field:"goods_code",align:"left"},{name:"bin_name",label:this.$t("dashboards.view_tradelist.bin_name"),field:"bin_name",align:"center"},{name:"goods_desc",label:this.$t("goods.view_goodslist.goods_desc"),field:"goods_desc",align:"center"},{name:"mode_code",required:!0,label:this.$t("dashboards.view_tradelist.mode_code"),align:"center",field:"mode_code"},{name:"goods_qty",label:this.$t("dashboards.view_tradelist.goods_qty"),field:"goods_qty",align:"center"},{name:"creater",label:this.$t("dashboards.view_tradelist.creater"),field:"creater",align:"center"},{name:"create_time",label:this.$t("dashboards.view_tradelist.create_time"),field:"create_time",align:"center"},{name:"update_time",label:this.$t("dashboards.view_tradelist.update_time"),field:"update_time",align:"right"}],pagination:{page:1,rowsPerPage:"30"}}},methods:{getList(){var e=this;Object(n["e"])("cyclecount/qtyrecorviewset/",{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getSearchList(){var e=this;Object(n["e"])("cyclecount/qtyrecorviewset/?goods_code__icontains="+e.filter,{}).then((t=>{e.table_list=t.results,e.pathname_previous=t.previous,e.pathname_next=t.next})).catch((t=>{e.$q.notify({message:t.detail,icon:"close",color:"negative"})}))},getListPrevious(){this.$q.localStorage.has("auth")&&Object(n["e"])(this.pathname_previous,{}).then((e=>{this.table_list=e.results,this.pathname_previous=e.previous,this.pathname_next=e.next})).catch((e=>{this.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},getListNext(){this.$q.localStorage.has("auth")&&Object(n["e"])(this.pathname_next,{}).then((e=>{this.table_list=e.results,this.pathname_previous=e.previous,this.pathname_next=e.next})).catch((e=>{this.$q.notify({message:e.detail,icon:"close",color:"negative"})}))},reFresh(){this.table_list=[],this.getList()}},created(){var e=this;i["a"].has("openid")?e.openid=i["a"].getItem("openid"):(e.openid="",i["a"].set("openid","")),i["a"].has("login_name")?e.login_name=i["a"].getItem("login_name"):(e.login_name="",i["a"].set("login_name","")),i["a"].has("auth")?(e.authin="1",e.getList()):e.authin="0"},mounted(){this.$q.platform.is.electron?this.height=String(this.$q.screen.height-290)+"px":this.height=this.$q.screen.height-290+"px"}},l=r,c=a("42e1"),d=a("eaac"),p=a("e7a9"),h=a("9c40"),_=a("05c0"),u=a("2c91"),m=a("27f9"),g=a("0016"),b=a("bd08"),v=a("db86"),f=a("eebe"),w=a.n(f),q=Object(c["a"])(l,s,o,!1,null,null,null);t["default"]=q.exports;w()(q,"components",{QTable:d["a"],QBtnGroup:p["a"],QBtn:h["a"],QTooltip:_["a"],QSpace:u["a"],QInput:m["a"],QIcon:g["a"],QTr:b["a"],QTd:v["a"]})}}]);