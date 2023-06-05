import{au as ye,at as B,t as Ee,aJ as Ce,ap as x,aK as X,an as te,s as Y,ae as W,aq as J,a7 as we,j as _e,a2 as ze,r as S,a4 as Ae,c,aO as Te,I as Ne,H as Oe,n as me,h as E,x as Re,S as H,g as Ie,aP as ae,aQ as ne,_ as Pe,aC as De,J as Me,aR as Le,K as Be,w as qe,o as Fe,L as ke,a1 as Ue,M as xe,O as Ge,R as q,V as oe,U as He,f as I,Q as Qe,m as ie,aD as $e,aE as le}from"./index.f005976b.js";import{Q as re}from"./QResizeObserver.252c4d9c.js";import{Q as Ve}from"./QScrollObserver.0a4bb571.js";import{g as se,s as ce}from"./touch.70a9dd44.js";import{c as je}from"./selection.32122480.js";import{b as G}from"./format.a33550d6.js";import{Q as Xe}from"./QPage.4777da84.js";import{u as Ye}from"./use-quasar.03956383.js";import{a as Je}from"./index.2885cb15.js";import{u as Ke}from"./vue-i18n.runtime.esm-bundler.8759bef3.js";function K(e,r,s){const v=W(e);let t,n=v.left-r.event.x,i=v.top-r.event.y,a=Math.abs(n),f=Math.abs(i);const d=r.direction;d.horizontal===!0&&d.vertical!==!0?t=n<0?"left":"right":d.horizontal!==!0&&d.vertical===!0?t=i<0?"up":"down":d.up===!0&&i<0?(t="up",a>f&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.down===!0&&i>0?(t="down",a>f&&(d.left===!0&&n<0?t="left":d.right===!0&&n>0&&(t="right"))):d.left===!0&&n<0?(t="left",a<f&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down"))):d.right===!0&&n>0&&(t="right",a<f&&(d.up===!0&&i<0?t="up":d.down===!0&&i>0&&(t="down")));let y=!1;if(t===void 0&&s===!1){if(r.event.isFirst===!0||r.event.lastDir===void 0)return{};t=r.event.lastDir,y=!0,t==="left"||t==="right"?(v.left-=n,a=0,n=0):(v.top-=i,f=0,i=0)}return{synthetic:y,payload:{evt:e,touch:r.event.mouse!==!0,mouse:r.event.mouse===!0,position:v,direction:t,isFirst:r.event.isFirst,isFinal:s===!0,duration:Date.now()-r.event.time,distance:{x:a,y:f},offset:{x:n,y:i},delta:{x:v.left-r.event.lastX,y:v.top-r.event.lastY}}}}let Ze=0;var ue=ye({name:"touch-pan",beforeMount(e,{value:r,modifiers:s}){if(s.mouse!==!0&&B.has.touch!==!0)return;function v(n,i){s.mouse===!0&&i===!0?we(n):(s.stop===!0&&Y(n),s.prevent===!0&&te(n))}const t={uid:"qvtp_"+Ze++,handler:r,modifiers:s,direction:se(s),noop:Ee,mouseStart(n){ce(n,t)&&Ce(n)&&(x(t,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),t.start(n,!0))},touchStart(n){if(ce(n,t)){const i=n.target;x(t,"temp",[[i,"touchmove","move","notPassiveCapture"],[i,"touchcancel","end","passiveCapture"],[i,"touchend","end","passiveCapture"]]),t.start(n)}},start(n,i){if(B.is.firefox===!0&&X(e,!0),t.lastEvt=n,i===!0||s.stop===!0){if(t.direction.all!==!0&&(i!==!0||t.modifiers.mouseAllDir!==!0)){const d=n.type.indexOf("mouse")>-1?new MouseEvent(n.type,n):new TouchEvent(n.type,n);n.defaultPrevented===!0&&te(d),n.cancelBubble===!0&&Y(d),Object.assign(d,{qKeyEvent:n.qKeyEvent,qClickOutside:n.qClickOutside,qAnchorHandled:n.qAnchorHandled,qClonedBy:n.qClonedBy===void 0?[t.uid]:n.qClonedBy.concat(t.uid)}),t.initialEvent={target:n.target,event:d}}Y(n)}const{left:a,top:f}=W(n);t.event={x:a,y:f,time:Date.now(),mouse:i===!0,detected:!1,isFirst:!0,isFinal:!1,lastX:a,lastY:f}},move(n){if(t.event===void 0)return;const i=W(n),a=i.left-t.event.x,f=i.top-t.event.y;if(a===0&&f===0)return;t.lastEvt=n;const d=t.event.mouse===!0,y=()=>{v(n,d),s.preserveCursor!==!0&&(document.documentElement.style.cursor="grabbing"),d===!0&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),je(),t.styleCleanup=g=>{if(t.styleCleanup=void 0,s.preserveCursor!==!0&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),d===!0){const C=()=>{document.body.classList.remove("no-pointer-events--children")};g!==void 0?setTimeout(()=>{C(),g()},50):C()}else g!==void 0&&g()}};if(t.event.detected===!0){t.event.isFirst!==!0&&v(n,t.event.mouse);const{payload:g,synthetic:C}=K(n,t,!1);g!==void 0&&(t.handler(g)===!1?t.end(n):(t.styleCleanup===void 0&&t.event.isFirst===!0&&y(),t.event.lastX=g.position.left,t.event.lastY=g.position.top,t.event.lastDir=C===!0?void 0:g.direction,t.event.isFirst=!1));return}if(t.direction.all===!0||d===!0&&t.modifiers.mouseAllDir===!0){y(),t.event.detected=!0,t.move(n);return}const b=Math.abs(a),m=Math.abs(f);b!==m&&(t.direction.horizontal===!0&&b>m||t.direction.vertical===!0&&b<m||t.direction.up===!0&&b<m&&f<0||t.direction.down===!0&&b<m&&f>0||t.direction.left===!0&&b>m&&a<0||t.direction.right===!0&&b>m&&a>0?(t.event.detected=!0,t.move(n)):t.end(n,!0))},end(n,i){if(t.event!==void 0){if(J(t,"temp"),B.is.firefox===!0&&X(e,!1),i===!0)t.styleCleanup!==void 0&&t.styleCleanup(),t.event.detected!==!0&&t.initialEvent!==void 0&&t.initialEvent.target.dispatchEvent(t.initialEvent.event);else if(t.event.detected===!0){t.event.isFirst===!0&&t.handler(K(n===void 0?t.lastEvt:n,t).payload);const{payload:a}=K(n===void 0?t.lastEvt:n,t,!0),f=()=>{t.handler(a)};t.styleCleanup!==void 0?t.styleCleanup(f):f()}t.event=void 0,t.initialEvent=void 0,t.lastEvt=void 0}}};e.__qtouchpan=t,s.mouse===!0&&x(t,"main",[[e,"mousedown","mouseStart",`passive${s.mouseCapture===!0?"Capture":""}`]]),B.has.touch===!0&&x(t,"main",[[e,"touchstart","touchStart",`passive${s.capture===!0?"Capture":""}`],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,r){const s=e.__qtouchpan;s!==void 0&&(r.oldValue!==r.value&&(typeof value!="function"&&s.end(),s.handler=r.value),s.direction=se(r.modifiers))},beforeUnmount(e){const r=e.__qtouchpan;r!==void 0&&(r.event!==void 0&&r.end(),J(r,"main"),J(r,"temp"),B.is.firefox===!0&&X(e,!1),r.styleCleanup!==void 0&&r.styleCleanup(),delete e.__qtouchpan)}});const de=["vertical","horizontal"],Z={vertical:{offset:"offsetY",scroll:"scrollTop",dir:"down",dist:"y"},horizontal:{offset:"offsetX",scroll:"scrollLeft",dir:"right",dist:"x"}},ve={prevent:!0,mouse:!0,mouseAllDir:!0},he=e=>e>=250?50:Math.ceil(e/5);var We=_e({name:"QScrollArea",props:{...ze,thumbStyle:Object,verticalThumbStyle:Object,horizontalThumbStyle:Object,barStyle:[Array,String,Object],verticalBarStyle:[Array,String,Object],horizontalBarStyle:[Array,String,Object],contentStyle:[Array,String,Object],contentActiveStyle:[Array,String,Object],delay:{type:[String,Number],default:1e3},visible:{type:Boolean,default:null},tabindex:[String,Number],onScroll:Function},setup(e,{slots:r,emit:s}){const v=S(!1),t=S(!1),n=S(!1),i={vertical:S(0),horizontal:S(0)},a={vertical:{ref:S(null),position:S(0),size:S(0)},horizontal:{ref:S(null),position:S(0),size:S(0)}},{proxy:f}=Ie(),d=Ae(e,f.$q);let y,b;const m=S(null),g=c(()=>"q-scrollarea"+(d.value===!0?" q-scrollarea--dark":""));a.vertical.percentage=c(()=>{const o=a.vertical.size.value-i.vertical.value;if(o<=0)return 0;const u=G(a.vertical.position.value/o,0,1);return Math.round(u*1e4)/1e4}),a.vertical.thumbHidden=c(()=>(e.visible===null?n.value:e.visible)!==!0&&v.value===!1&&t.value===!1||a.vertical.size.value<=i.vertical.value+1),a.vertical.thumbStart=c(()=>a.vertical.percentage.value*(i.vertical.value-a.vertical.thumbSize.value)),a.vertical.thumbSize=c(()=>Math.round(G(i.vertical.value*i.vertical.value/a.vertical.size.value,he(i.vertical.value),i.vertical.value))),a.vertical.style=c(()=>({...e.thumbStyle,...e.verticalThumbStyle,top:`${a.vertical.thumbStart.value}px`,height:`${a.vertical.thumbSize.value}px`})),a.vertical.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.vertical.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--v absolute-right"+(a.vertical.thumbHidden.value===!0?" q-scrollarea__bar--invisible":"")),a.horizontal.percentage=c(()=>{const o=a.horizontal.size.value-i.horizontal.value;if(o<=0)return 0;const u=G(a.horizontal.position.value/o,0,1);return Math.round(u*1e4)/1e4}),a.horizontal.thumbHidden=c(()=>(e.visible===null?n.value:e.visible)!==!0&&v.value===!1&&t.value===!1||a.horizontal.size.value<=i.horizontal.value+1),a.horizontal.thumbStart=c(()=>a.horizontal.percentage.value*(i.horizontal.value-a.horizontal.thumbSize.value)),a.horizontal.thumbSize=c(()=>Math.round(G(i.horizontal.value*i.horizontal.value/a.horizontal.size.value,he(i.horizontal.value),i.horizontal.value))),a.horizontal.style=c(()=>({...e.thumbStyle,...e.horizontalThumbStyle,left:`${a.horizontal.thumbStart.value}px`,width:`${a.horizontal.thumbSize.value}px`})),a.horizontal.thumbClass=c(()=>"q-scrollarea__thumb q-scrollarea__thumb--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__thumb--invisible":"")),a.horizontal.barClass=c(()=>"q-scrollarea__bar q-scrollarea__bar--h absolute-bottom"+(a.horizontal.thumbHidden.value===!0?" q-scrollarea__bar--invisible":""));const C=c(()=>a.vertical.thumbHidden.value===!0&&a.horizontal.thumbHidden.value===!0?e.contentStyle:e.contentActiveStyle),Q=[[ue,o=>{N(o,"vertical")},void 0,{vertical:!0,...ve}]],F=[[ue,o=>{N(o,"horizontal")},void 0,{horizontal:!0,...ve}]];function P(){const o={};return de.forEach(u=>{const h=a[u];o[u+"Position"]=h.position.value,o[u+"Percentage"]=h.percentage.value,o[u+"Size"]=h.size.value,o[u+"ContainerSize"]=i[u].value}),o}const D=Te(()=>{const o=P();o.ref=f,s("scroll",o)},0);function M(o,u,h){if(de.includes(o)===!1){console.error("[QScrollArea]: wrong first param of setScrollPosition (vertical/horizontal)");return}(o==="vertical"?ne:ae)(m.value,u,h)}function T({height:o,width:u}){let h=!1;i.vertical.value!==o&&(i.vertical.value=o,h=!0),i.horizontal.value!==u&&(i.horizontal.value=u,h=!0),h===!0&&z()}function k({position:o}){let u=!1;a.vertical.position.value!==o.top&&(a.vertical.position.value=o.top,u=!0),a.horizontal.position.value!==o.left&&(a.horizontal.position.value=o.left,u=!0),u===!0&&z()}function L({height:o,width:u}){a.horizontal.size.value!==u&&(a.horizontal.size.value=u,z()),a.vertical.size.value!==o&&(a.vertical.size.value=o,z())}function N(o,u){const h=a[u];if(o.isFirst===!0){if(h.thumbHidden.value===!0)return;b=h.position.value,t.value=!0}else if(t.value!==!0)return;o.isFinal===!0&&(t.value=!1);const _=Z[u],l=i[u].value,p=(h.size.value-l)/(l-h.thumbSize.value),be=o.distance[_.dist],Se=b+(o.direction===_.dir?1:-1)*be*p;U(Se,u)}function O(o,u){const h=a[u];if(h.thumbHidden.value!==!0){const _=o[Z[u].offset];if(_<h.thumbStart.value||_>h.thumbStart.value+h.thumbSize.value){const l=_-h.thumbSize.value/2;U(l/i[u].value*h.size.value,u)}h.ref.value!==null&&h.ref.value.dispatchEvent(new MouseEvent(o.type,o))}}function $(o){O(o,"vertical")}function w(o){O(o,"horizontal")}function z(){v.value===!0?clearTimeout(y):v.value=!0,y=setTimeout(()=>{v.value=!1},e.delay),e.onScroll!==void 0&&D()}function U(o,u){m.value[Z[u].scroll]=o}function V(){n.value=!0}function j(){n.value=!1}let R=null;return Ne(()=>{R={top:a.vertical.position.value,left:a.horizontal.position.value}}),Oe(()=>{if(R===null)return;const o=m.value;o!==null&&(ae(o,R.left),ne(o,R.top))}),me(D.cancel),Object.assign(f,{getScrollTarget:()=>m.value,getScroll:P,getScrollPosition:()=>({top:a.vertical.position.value,left:a.horizontal.position.value}),getScrollPercentage:()=>({top:a.vertical.percentage.value,left:a.horizontal.percentage.value}),setScrollPosition:M,setScrollPercentage(o,u,h){M(o,u*(a[o].size.value-i[o].value),h)}}),()=>E("div",{class:g.value,onMouseenter:V,onMouseleave:j},[E("div",{ref:m,class:"q-scrollarea__container scroll relative-position fit hide-scrollbar",tabindex:e.tabindex!==void 0?e.tabindex:void 0},[E("div",{class:"q-scrollarea__content absolute",style:C.value},Re(r.default,[E(re,{debounce:0,onResize:L})])),E(Ve,{axis:"both",onScroll:k})]),E(re,{debounce:0,onResize:T}),E("div",{class:a.vertical.barClass.value,style:[e.barStyle,e.verticalBarStyle],"aria-hidden":"true",onMousedown:$}),E("div",{class:a.horizontal.barClass.value,style:[e.barStyle,e.horizontalBarStyle],"aria-hidden":"true",onMousedown:w}),H(E("div",{ref:a.vertical.ref,class:a.vertical.thumbClass.value,style:a.vertical.style.value,"aria-hidden":"true"}),Q),H(E("div",{ref:a.horizontal.ref,class:a.horizontal.thumbClass.value,style:a.horizontal.style.value,"aria-hidden":"true"}),F)])}}),ge="false",ee={initialize:function(){this.bindEvents()},bindEvents:function(){document.addEventListener("deviceready",this.onDeviceReady,!1)},onDeviceReady:function(){ee.receivedEvent("deviceready"),console.log(0,window.Media),fe(),et()},onPause:function(){console.log("Paused"),tt()},onResume:function(){console.log("Resumed"),fe()},receivedEvent:function(e){console.log("Received Event: "+e)}};function et(){A("com.symbol.datawedge.api.GET_VERSION_INFO","")}function A(e,r){console.log("Sending Command: "+e+", "+JSON.stringify(r));var s={};s[e]=r,s.SEND_RESULT=ge,window.plugins.intentShim.sendBroadcast({action:"com.symbol.datawedge.api.ACTION",extras:s},function(){},function(){})}function fe(){window.plugins.intentShim.registerBroadcastReceiver({filterActions:["com.zebra.cordovademo.ACTION","com.symbol.datawedge.api.RESULT_ACTION"],filterCategories:["android.intent.category.DEFAULT"]},function(e){if(console.log("Received Intent: "+JSON.stringify(e.extras)),e.extras.hasOwnProperty("RESULT_INFO")){var r=e.extras.RESULT+" ("+e.extras.COMMAND.substring(e.extras.COMMAND.lastIndexOf(".")+1,e.extras.COMMAND.length)+")";it(r.toLowerCase())}if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_VERSION_INFO")){var s=e.extras["com.symbol.datawedge.api.RESULT_GET_VERSION_INFO"];console.log("Version Info: "+JSON.stringify(s));var v=s.DATAWEDGE;v=v.padStart(5,"0"),console.log("Datawedge version: "+v),v>="006.3"&&at(),v>="006.4"&&nt(),v>="006.5"&&ot()}else if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS")){var t=e.extras["com.symbol.datawedge.api.RESULT_ENUMERATE_SCANNERS"];lt(t)}else if(e.extras.hasOwnProperty("com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE")){var n=e.extras["com.symbol.datawedge.api.RESULT_GET_ACTIVE_PROFILE"];rt(n)}else e.extras.hasOwnProperty("RESULT_INFO")||st(e,new Date().toLocaleString())})}function tt(){window.plugins.intentShim.unregisterBroadcastReceiver()}function at(){console.log("Datawedge 6.3 APIs are available"),A("com.symbol.datawedge.api.CREATE_PROFILE","ZebraCordovaDemo"),A("com.symbol.datawedge.api.GET_ACTIVE_PROFILE",""),A("com.symbol.datawedge.api.ENUMERATE_SCANNERS","")}function nt(){console.log("Datawedge 6.4 APIs are available");var e={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"BARCODE",RESET_CONFIG:"true",PARAM_LIST:{}},APP_LIST:[{PACKAGE_NAME:"org.greaterwms.app",ACTIVITY_LIST:["*"]}]};A("com.symbol.datawedge.api.SET_CONFIG",e);var r={PROFILE_NAME:"wms",PROFILE_ENABLED:"true",CONFIG_MODE:"UPDATE",PLUGIN_CONFIG:{PLUGIN_NAME:"INTENT",RESET_CONFIG:"true",PARAM_LIST:{intent_output_enabled:"true",intent_action:"com.zebra.cordovademo.ACTION",intent_delivery:"2"}}};A("com.symbol.datawedge.api.SET_CONFIG",r),setTimeout(function(){A("com.symbol.datawedge.api.GET_ACTIVE_PROFILE","")},1e3)}function ot(){console.log("Datawedge 6.5 APIs are available"),ge="true"}function it(e){console.log("commandReceived:",e)}function lt(e){for(var r="",s=0;s<e.length;s++)console.log("Scanner found: name= "+e[s].SCANNER_NAME+", id="+e[s].SCANNER_INDEX+", connected="+e[s].SCANNER_CONNECTION_STATE),r+=e[s].SCANNER_NAME,s<e.length-1&&(r+=", ");console.log("enumerateScanners:",r)}function rt(e){console.log("activeProfile:",e)}function st(e,r){var s=e.extras["com.symbol.datawedge.data_string"];console.log("scaned Data:"+s),document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=s,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input"))}function ct(){document.addEventListener("deviceready",pe,!1)}function pe(){window.addEventListener("getcodedata",ut,!1)}function ut(e){document.getElementById("scannedBarcodes").value="",document.getElementById("scannedBarcodes").value=e.data,document.getElementById("scannedBarcodes").dispatchEvent(new Event("input"))}const dt=De({name:"ScanAPP",data(){return{wholewidth:this.screenwidth-20+"px",wholeheight:this.screenheight-165+"px",handlewidth:this.screenwidth-22+"px",handleheight:this.screenheight-225+"px"}},setup(){const e=Me(),r=Le();Be();const s=Ye(),v=S(""),{t}=Ke(),n=c({get:()=>e.state.fabchange.fab1}),i=c({get:()=>e.state.fabchange.fab2}),a=c({get:()=>e.state.fabchange.fab3}),f=c({get:()=>e.state.fabchange.fab4}),d=c({get:()=>e.state.linkchange.oldlink,set:l=>{e.commit("linkchange/OldLinkChanged",l)}}),y=c({get:()=>e.state.linkchange.newlink,set:l=>{e.commit("linkchange/NewLinkChanged",l)}}),b=c({get:()=>e.state.screenchange.screenwidth,set:l=>{e.commit("screenchange/screenwidthChanged",l)}}),m=c({get:()=>e.state.screenchange.screenheight,set:l=>{e.commit("screenchange/screenheightChanged",l)}}),g=c({get:()=>e.state.screenchange.screenscroll,set:l=>{e.commit("screenchange/screenScrollChanged",l)}}),C=c({get:()=>e.state.loginauth.authin}),Q=c({get:()=>e.state.loginauth.login_name}),F=c({get:()=>e.state.loginauth.operator}),P=c({get:()=>e.state.settings.openid}),D=c({get:()=>e.state.langchange.lang}),M=c({get:()=>e.state.settings.server}),T=c({get:()=>e.state.scanchanged.scandata,set:l=>{e.commit("scanchanged/ScanChanged",l)}}),k=c({get:()=>e.state.scanchanged.datadetail,set:l=>{e.commit("scanchanged/ScanDataChanged",l)}}),L=c({get:()=>e.state.scanchanged.asndata,set:l=>{e.commit("scanchanged/ASNDataChanged",l)}}),N=c({get:()=>e.state.scanchanged.dndata,set:l=>{e.commit("scanchanged/DNDataChanged",l)}}),O=c({get:()=>e.state.scanchanged.bindata,set:l=>{e.commit("scanchanged/BinDataChanged",l)}}),$=c({get:()=>e.state.scanchanged.tablelist,set:l=>{e.commit("scanchanged/TableDataChanged",l)}}),w=c({get:()=>e.state.scanchanged.scanmode,set:l=>{e.commit("scanchanged/ScanModeChanged",l)}}),z=c({get:()=>e.state.scanchanged.bar_scanned,set:l=>{e.commit("scanchanged/BarScannedChanged",l)}}),U=c({get:()=>e.state.scanchanged.apiurl,set:l=>{e.commit("scanchanged/ApiUrlChanged",l)}}),V=c({get:()=>e.state.scanchanged.apiurlnext,set:l=>{e.commit("scanchanged/ApiUrlNextChanged",l)}}),j=c({get:()=>e.state.scanchanged.apiurlprevious,set:l=>{e.commit("scanchanged/ApiUrlPreviousChanged",l)}}),R=c({get:()=>e.state.appversion.device_auth,set:l=>{e.commit("appversion/DeviceAuthChanged",l)}});function o(l){g.value=l.verticalPercentage}function u(l){Je.get(M.value+"/scanner/list/"+l+"/",{headers:{"Content-Type":'application/json, charset="utf-8"',token:P.value,language:D.value,operator:F.value}}).then(p=>{p.data.detail?s.notify({type:"negative",message:t("notice.mobile_scan.notice2")}):(T.value="",k.value="",w.value="",L.value="",N.value="",O.value="",T.value=p.data.code,w.value=p.data.mode,z.value=p.data.request_time,w.value==="ASN"?L.value=p.data.code:w.value==="DN"?N.value=p.data.code:w.value==="GOODS"?T.value=p.data.code:w.value==="BINSET"&&(O.value=p.data.code))}).catch(p=>{s.notify({type:"negative",message:t("notice.mobile_scan.notice3")})})}function h(){cordova.plugins.barcodeScanner.scan(function(l){v.value=l.text,navigator.vibrate(100)},function(l){navigator.vibrate(100)},{preferFrontCamera:!1,showFlipCameraButton:!0,showTorchButton:!0,disableSuccessBeep:!1})}function _(){let l=s.screen.width,p=s.screen.height;b.value=l,m.value=p}return qe(v,(l,p)=>{l!==p&&(C.value==="0"?s.notify({type:"negative",message:t("notice.mobile_userlogin.notice9")}):u(l))}),Fe(()=>{_(),window.device&&(window.device.manufacturer==="Zebra Technologies"?ee.initialize():window.device.manufacturer==="SEUIC"&&ct())}),me(()=>{window.device&&(window.device.manufacturer==="Zebra Technologies"?window.removeEventListener("deviceready",ee.onDeviceReady,!1):window.device.manufacturer==="SEUIC"&&window.removeEventListener("deviceready",pe,!1))}),{t,fab1:n,fab2:i,fab3:a,fab4:f,oldlink:d,newlink:y,screenwidth:b,screenheight:m,screenscroll:g,onScroll:o,authin:C,login_name:Q,openid:P,operator:F,lang:D,baseurl:M,apiurl:U,apiurlnext:V,apiurlprevious:j,scandata:T,datadetail:k,tablelist:$,asndata:L,dndata:N,bindata:O,scanmode:w,bar_scanned:z,bar_check:v,device_auth:R,thumbStyle:{right:"4px",borderRadius:"5px",backgroundColor:"#027be3",width:"5px",opacity:.75},barStyle:{right:"2px",borderRadius:"9px",backgroundColor:"#027be3",width:"9px",opacity:.2},StartScan(){window.device?h():s.notify({type:"negative",message:t("notice.mobile_scan.notice4")})},BackButton(){r.push({name:d.value})}}}});function vt(e,r,s,v,t,n){const i=ke("router-view");return H((xe(),Ge(Xe,{class:"flex flex-top"},{default:q(()=>[oe("div",{style:le({width:e.wholewidth,height:e.wholeheight,marginTop:"10px",marginLeft:"10px"})},[H(oe("input",{id:"scannedBarcodes","onUpdate:modelValue":r[0]||(r[0]=a=>e.bar_check=a),type:"text",style:{display:"none"}},null,512),[[He,e.bar_check]]),I($e,{dense:"",outlined:"",square:"",readonly:"",disable:"",debounce:"500",modelValue:e.scandata,"onUpdate:modelValue":r[1]||(r[1]=a=>e.scandata=a),label:e.$t("scan.scan")},{append:q(()=>[I(Qe,{name:"search"})]),after:q(()=>[I(ie,{round:"",dense:"",flat:"",icon:"border_horizontal",onClick:e.StartScan},null,8,["onClick"])]),before:q(()=>[I(ie,{round:"",dense:"",flat:"",icon:"keyboard_return",onClick:e.BackButton},null,8,["onClick"])]),_:1},8,["modelValue","label"]),I(We,{onScroll:e.onScroll,delay:500,"thumb-style":e.thumbStyle,"bar-style":e.barStyle,style:le({maxWidth:e.handlewidth,width:e.handlewidth,height:e.handleheight,marginTop:"10px"})},{default:q(()=>[I(i)]),_:1},8,["onScroll","thumb-style","bar-style","style"])],4)]),_:1},512)),[[Ue,!e.fab1&&!e.fab2&&!e.fab3&&!e.fab4]])}var wt=Pe(dt,[["render",vt]]);export{wt as default};
