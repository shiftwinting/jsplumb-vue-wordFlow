(function(e){function t(t){for(var n,s,r=t[0],l=t[1],c=t[2],u=0,f=[];u<r.length;u++)s=r[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&f.push(o[s][0]),o[s]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return a.push.apply(a,c||[]),i()}function i(){for(var e,t=0;t<a.length;t++){for(var i=a[t],n=!0,r=1;r<i.length;r++){var l=i[r];0!==o[l]&&(n=!1)}n&&(a.splice(t--,1),e=s(s.s=i[0]))}return e}var n={},o={app:0},a=[];function s(t){if(n[t])return n[t].exports;var i=n[t]={i:t,l:!1,exports:{}};return e[t].call(i.exports,i,i.exports,s),i.l=!0,i.exports}s.m=e,s.c=n,s.d=function(e,t,i){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(s.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(i,n,function(t){return e[t]}.bind(null,n));return i},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],l=r.push.bind(r);r.push=t,r=r.slice();for(var c=0;c<r.length;c++)t(r[c]);var d=l;a.push([0,"chunk-vendors"]),i()})({0:function(e,t,i){e.exports=i("56d7")},2395:function(e,t,i){},"263f":function(e,t,i){},2781:function(e,t,i){e.exports=i.p+"img/6数据校验.cf8bef7c.svg"},"56d7":function(e,t,i){"use strict";i.r(t);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),o=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},a=[],s=(i("7c55"),i("2877")),r={},l=Object(s["a"])(r,o,a,!1,null,null,null),c=l.exports,d=i("8c4f"),u=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"flow_region"},[i("div",{staticClass:"nodes-wrap"},e._l(e.nodeTypeList,(function(t){return i("div",{key:t.type,staticClass:"node",attrs:{draggable:"true"},on:{dragstart:function(i){return e.drag(i,t)}}},[i("div",{staticClass:"log"},[i("img",{attrs:{src:t.logImg,alt:""}})]),i("div",{staticClass:"name"},[e._v(e._s(t.typeName))])])})),0),i("div",{ref:"flowWrap",staticClass:"flow-wrap",attrs:{id:"flowWrap"},on:{drop:function(t){return e.drop(t)},dragover:function(t){return e.allowDrop(t)}}},[i("div",{attrs:{id:"flow"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.auxiliaryLine.isShowXLine,expression:"auxiliaryLine.isShowXLine"}],staticClass:"auxiliary-line-x",style:{width:e.auxiliaryLinePos.width,top:e.auxiliaryLinePos.y+"px",left:e.auxiliaryLinePos.offsetX+"px"}}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.auxiliaryLine.isShowYLine,expression:"auxiliaryLine.isShowYLine"}],staticClass:"auxiliary-line-y",style:{height:e.auxiliaryLinePos.height,left:e.auxiliaryLinePos.x+"px",top:e.auxiliaryLinePos.offsetY+"px"}}),e._l(e.data.nodeList,(function(t){return i("flowNode",{key:t.id,attrs:{id:t.id,node:t},on:{setNodeName:e.setNodeName,deleteNode:e.deleteNode,changeLineState:e.changeLineState}})}))],2)])])},f=[],p=(i("d81d"),i("5530")),h=i("e193"),m=[{type:"start",typeName:"开始",nodeName:"开始",logImg:i("8d76"),log_bg_color:"rgba(0, 128, 0, 0.2)"},{type:"end",typeName:"结束",nodeName:"结束",logImg:i("8cf3"),log_bg_color:"rgba(255, 0, 0, 0.2)"},{type:"dataSet",typeName:"文件",nodeName:"文件",logImg:i("7191"),log_bg_color:"rgba(0, 128, 0, 0.2)"},{type:"encode",typeName:"加密",nodeName:"加密",logImg:i("2781"),log_bg_color:"rgba(163, 117, 233, 0.2)"},{type:"personService",typeName:"个人服务",nodeName:"个人服务",logImg:i("fc27"),log_bg_color:"rgba(132, 166, 251, 0.2)"},{type:"arrange",typeName:"清洗",nodeName:"清洗",logImg:i("ade3"),log_bg_color:"rgba(250, 205, 81, 0.2)"}];console.log(m);var g={grid:[10,10],Anchors:["TopCenter","RightMiddle","BottomCenter","LeftMiddle"],Container:"flow",Connector:["Flowchart",{cornerRadius:5,alwaysRespectStubs:!0,stub:5}],ConnectionsDetachable:!1,DeleteEndpointsOnDetach:!1,Endpoint:["Rectangle",{height:10,width:10}],EndpointStyle:{fill:"rgba(255,255,255,0)",outlineWidth:1},LogEnabled:!1,PaintStyle:{stroke:"#409eff",strokeWidth:2},HoverPaintStyle:{stroke:"#ff00cc",strokeWidth:2},Overlays:[["Arrow",{width:8,length:8,location:1}]],RenderMode:"svg"},b={isSource:!0,isTarget:!0,anchor:["TopCenter","RightMiddle","BottomCenter","LeftMiddle"]},v={filter:".node-anchor",filterExclude:!1,anchor:["TopCenter","RightMiddle","BottomCenter","LeftMiddle"],allowLoopback:!1},y={filter:".node-anchor",filterExclude:!1,anchor:["TopCenter","RightMiddle","BottomCenter","LeftMiddle"],allowLoopback:!1},w=(i("4160"),i("45fc"),i("a434"),i("a9e3"),i("ac1f"),i("1276"),i("159b"),i("7d05")),x=i.n(w);i("d3b7"),i("25f0");function L(e){return Number(Math.random().toString().substr(3,e)+Date.now()).toString(36)}var N={init:function(){var e=this;this.jsPlumb.ready((function(){e.jsPlumb.importDefaults(e.jsplumbSetting),e.jsPlumb.bind("beforeDrop",(function(e){var t=function(){};return t})),e.jsPlumb.bind("connection",(function(t){e.addLine(t)})),e.jsPlumb.bind("dblclick",(function(t,i){e.confirmDelLine(t)})),e.jsPlumb.bind("connectionDetached",(function(t){e.deleLine(t)})),e.loadEasyFlow(),e.jsPlumb.setSuspendDrawing(!1,!0)})),this.initPanZoom()},loadEasyFlow:function(){for(var e=this,t=0;t<this.data.nodeList.length;t++){var i=this.data.nodeList[t];this.jsPlumb.makeSource(i.id,this.jsplumbSourceOptions),this.jsPlumb.makeTarget(i.id,this.jsplumbTargetOptions),this.draggableNode(i.id)}this.jsPlumb.unbind("connection");for(var n=0;n<this.data.lineList.length;n++){var o=this.data.lineList[n];this.jsPlumb.connect({source:o.from,target:o.to},this.jsplumbConnectOptions)}this.jsPlumb.bind("connection",(function(t){var i=t.source.id,n=t.target.id;e.data.lineList.push({from:i,to:n,label:"连线名称",id:L(8),Remark:""})}))},draggableNode:function(e){var t=this;this.jsPlumb.draggable(e,{grid:this.commonGrid,drag:function(i){t.alignForLine(e,i.pos)},start:function(){},stop:function(i){t.auxiliaryLine.isShowXLine=!1,t.auxiliaryLine.isShowYLine=!1,t.changeNodePosition(e,i.pos)}})},alignForLine:function(e,t){var i=this,n=!1,o=!1;this.data.nodeList.some((function(a){a.id!==e&&a.left==t[0]+"px"&&(i.auxiliaryLinePos.x=t[0]+60,o=!0),a.id!==e&&a.top==t[1]+"px"&&(i.auxiliaryLinePos.y=t[1]+20,n=!0)})),this.auxiliaryLine.isShowYLine=o,this.auxiliaryLine.isShowXLine=n},changeNodePosition:function(e,t){this.data.nodeList.some((function(i){return e==i.id&&(i.left=t[0]+"px",i.top=t[1]+"px",!0)}))},drag:function(e,t){this.currentItem=t},drop:function(e){var t=this.jsPlumb.getContainer().getBoundingClientRect(),i=this.getScale(),n=(e.pageX-t.left-60)/i,o=(e.pageY-t.top-20)/i,a=Object(p["a"])(Object(p["a"])({},this.currentItem),{},{id:L(8),top:20*Math.round(o/20)+"px",left:20*Math.round(n/20)+"px"});this.addNode(a)},addLine:function(e){var t=e.source.id,i=e.target.id;this.data.lineList.push({from:t,to:i,label:"连线名称",id:L(8),Remark:""})},confirmDelLine:function(e){var t=this;this.$Modal.confirm({title:"删除连线",content:"<p>确认删除该连线？</p>",onOk:function(){t.jsPlumb.deleteConnection(e)}})},deleLine:function(e){var t=this;this.data.lineList.forEach((function(i,n){i.from===e.sourceId&&i.to===e.targetId&&t.data.lineList.splice(n,1)}))},allowDrop:function(e){e.preventDefault()},getScale:function(){var e;if(this.jsPlumb.pan){var t=this.jsPlumb.pan.getTransform(),i=t.scale;e=i}else{var n=window.getComputedStyle(this.jsPlumb.getContainer()).transform;e=1*n.split(", ")[3]}return this.jsPlumb.setZoom(e),e},addNode:function(e){var t=this;this.data.nodeList.push(e),this.$nextTick((function(){t.jsPlumb.makeSource(e.id,t.jsplumbSourceOptions),t.jsPlumb.makeTarget(e.id,t.jsplumbTargetOptions),t.draggableNode(e.id)}))},initPanZoom:function(){var e=this,t=this.jsPlumb.getContainer(),i=t.parentNode,n=x()(t,{smoothScroll:!1,bounds:!0,zoomDoubleClickSpeed:1,minZoom:.5,maxZoom:2,beforeWheel:function(e){console.log(e)},beforeMouseDown:function(e){var t=e.ctrlKey;return t}});this.jsPlumb.mainContainerWrap=i,this.jsPlumb.pan=n,n.on("zoom",(function(t){var i=t.getTransform(),n=i.x,o=i.y,a=i.scale;e.jsPlumb.setZoom(a),e.auxiliaryLinePos.width=1/a*100+"%",e.auxiliaryLinePos.height=1/a*100+"%",e.auxiliaryLinePos.offsetX=-n/a,e.auxiliaryLinePos.offsetY=-o/a})),n.on("panend",(function(t){var i=t.getTransform(),n=i.x,o=i.y,a=i.scale;e.auxiliaryLinePos.width=1/a*100+"%",e.auxiliaryLinePos.height=1/a*100+"%",e.auxiliaryLinePos.offsetX=-n/a,e.auxiliaryLinePos.offsetY=-o/a})),i.style.cursor="grab",i.addEventListener("mousedown",(function(){this.style.cursor="grabbing",i.addEventListener("mouseout",(function(){this.style.cursor="grab"}))})),i.addEventListener("mouseup",(function(){this.style.cursor="grab"}))},setNodeName:function(e,t){this.data.nodeList.some((function(i){return i.id===e&&(i.nodeName=t,!0)}))},deleteNode:function(e){var t=this;this.data.nodeList.some((function(i,n){return i.id===e.id&&(t.data.nodeList.splice(n,1),t.jsPlumb.remove(i.id),!0)}))},changeLineState:function(e,t){console.log(t);var i=this.jsPlumb.getAllConnections();i.forEach((function(i){i.targetId!==e&&i.sourceId!==e||(t?i.canvas.classList.add("active"):i.canvas.classList.remove("active"))}))},fixNodesPosition:function(){if(this.data.nodeList&&this.$refs.flowWrap){var e=120,t=40,i=this.$refs.flowWrap.getBoundingClientRect(),n=0,o=i.width,a=0,s=i.height,r={left:0,right:0,top:0,bottom:0},l=0,c=0;this.data.nodeList.forEach((function(e){var t=Number(e.top.substring(0,e.top.length-2)),i=Number(e.left.substring(0,e.left.length-2));n=i>n?i:n,o=i<o?i:o,a=t>a?t:a,s=t<s?t:s})),r.left=o,r.right=i.width-n-e,r.top=s,r.bottom=i.height-a-t,l=r.top!==r.bottom?(r.bottom-r.top)/2:0,c=r.left!==r.right?(r.right-r.left)/2:0,this.data.nodeList.map((function(e){var t=Number(e.top.substring(0,e.top.length-2))+l,i=Number(e.left.substring(0,e.left.length-2))+c;e.top=20*Math.round(t/20)+"px",e.left=20*Math.round(i/20)+"px"}))}}},j=N,P=i("f364"),S=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:e.setNotActive,expression:"setNotActive"}],ref:"node",staticClass:"node-item",class:[e.isActive||e.isSelected?"active":""],style:e.flowNodeContainer,on:{click:e.setActive,mouseenter:e.showAnchor,mouseleave:e.hideAnchor,dblclick:function(t){return t.preventDefault(),e.editNode(t)},contextmenu:function(t){return t.preventDefault(),e.onContextmenu(t)}}},[i("div",{staticClass:"log-wrap"},[i("img",{attrs:{src:e.node.logImg,alt:""}})]),i("div",{staticClass:"nodeName"},[e._v(e._s(e.node.nodeName))]),i("div",{directives:[{name:"show",rawName:"v-show",value:e.mouseEnter,expression:"mouseEnter"}],staticClass:"node-anchor anchor-top"}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.mouseEnter,expression:"mouseEnter"}],staticClass:"node-anchor anchor-right"}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.mouseEnter,expression:"mouseEnter"}],staticClass:"node-anchor anchor-bottom"}),i("div",{directives:[{name:"show",rawName:"v-show",value:e.mouseEnter,expression:"mouseEnter"}],staticClass:"node-anchor anchor-left"})])},C=[],O=i("e67d"),k=i.n(O),_={name:"nodeItem",props:{node:Object},directives:{ClickOutside:k.a},computed:{flowNodeContainer:{get:function(){return{top:this.node.top,left:this.node.left}}}},data:function(){return{mouseEnter:!1,isActive:!1,isSelected:!1}},methods:{showAnchor:function(){this.mouseEnter=!0},hideAnchor:function(){this.mouseEnter=!1},onContextmenu:function(){var e=this;this.$contextmenu({items:[{label:"删除",disabled:!1,icon:"",onClick:function(){e.deleteNode()}}],event:event,customClass:"custom-class",zIndex:9999,minWidth:180})},setActive:function(){var e=this;if(window.event.ctrlKey)return this.isSelected=!this.isSelected,!1;this.isActive=!0,this.isSelected=!1,setTimeout((function(){e.$emit("changeLineState",e.node.id,!0)}),0)},setNotActive:function(){window.event.ctrlKey||(this.isSelected=!1),this.isActive&&(this.$emit("changeLineState",this.node.id,!1),this.isActive=!1)},editNode:function(){var e=this;this.newNodeName=this.node.nodeName,this.$Modal.confirm({render:function(t){return t("Input",{props:{value:e.newNodeName,autofocus:!0},on:{input:function(t){e.newNodeName=t}}})},onOk:function(){console.log(e.newNodeName),e.$emit("setNodeName",e.node.id,e.newNodeName)}})},deleteNode:function(){this.$emit("deleteNode",this.node)}}},E=_,T=(i("b6e2"),Object(s["a"])(E,S,C,!1,null,"250849a0",null)),M=T.exports,I={name:"FlowEdit",components:{flowNode:M},data:function(){return{jsPlumb:null,currentItem:null,nodeTypeList:m,nodeTypeObj:{},data:{nodeList:[],lineList:[]},selectedList:[],jsplumbSetting:g,jsplumbConnectOptions:b,jsplumbSourceOptions:v,jsplumbTargetOptions:y,auxiliaryLine:{isShowXLine:!1,isShowYLine:!1},auxiliaryLinePos:{width:"100%",height:"100%",offsetX:0,offsetY:0,x:20,y:20},commonGrid:[5,5],selectModuleFlag:!1,rectAngle:{px:"",py:"",left:0,top:0,height:0,width:0}}},mounted:function(){var e=this;this.jsPlumb=h["jsPlumb"].getInstance(),this.initNodeTypeObj(),this.initNode(),this.fixNodesPosition(),this.$nextTick((function(){e.init()}))},methods:Object(p["a"])(Object(p["a"])({},j),{},{initNodeTypeObj:function(){var e=this;m.map((function(t){e.nodeTypeObj[t.type]=t}))},initNode:function(){var e=this;this.data.lineList=P.lineList,P.nodeList.map((function(t){t.logImg=e.nodeTypeObj[t.type].logImg,t.log_bg_color=e.nodeTypeObj[t.type].log_bg_color,e.data.nodeList.push(t)}))}})},A=I,R=(i("aa08"),i("efc9"),Object(s["a"])(A,u,f,!1,null,"2cd1f554",null)),D=R.exports;n["default"].use(d["a"]);var $=[{path:"/",name:"Home",component:D}],q=new d["a"]({routes:$}),W=q,X=i("2f62");n["default"].use(X["a"]);var Y=new X["a"].Store({state:{},mutations:{},actions:{},modules:{}}),z=i("e5d9"),F=i("f825"),B=i.n(F);i("f8ce"),i("cd22");n["default"].config.productionTip=!1,n["default"].use(z["a"]),n["default"].use(B.a),new n["default"]({router:W,store:Y,render:function(e){return e(c)}}).$mount("#app")},"5a11":function(e,t,i){},7191:function(e,t,i){e.exports=i.p+"img/5文件数据.0b1cab17.svg"},"7c55":function(e,t,i){"use strict";i("2395")},"8cf3":function(e,t,i){e.exports=i.p+"img/2结束.fd7a8681.svg"},"8d76":function(e,t,i){e.exports=i.p+"img/1开始.a75a36c3.svg"},aa08:function(e,t,i){"use strict";i("5a11")},ade3:function(e,t,i){e.exports=i.p+"img/15清洗.588c5af8.svg"},b3a7:function(e,t,i){},b6e2:function(e,t,i){"use strict";i("b3a7")},cd22:function(e,t,i){},efc9:function(e,t,i){"use strict";i("263f")},f364:function(e){e.exports=JSON.parse('{"nodeList":[{"type":"start","typeName":"开始","nodeName":"开始","id":"34v56ha2l9c000","top":"160px","left":"100px"},{"type":"dataSet","typeName":"文件","nodeName":"文件","id":"5sdjugrcqhc000","top":"160px","left":"315px"},{"type":"encode","typeName":"加密","nodeName":"加密","id":"3atqi5p6oa4000","top":"80px","left":"600px"},{"type":"personService","typeName":"个人服务","nodeName":"个人服务","id":"49vcu89p5q0000","top":"245px","left":"600px"},{"type":"arrange","typeName":"清洗","nodeName":"清洗","id":"1jhiilb0t2tc00","top":"180px","left":"880px"},{"type":"end","typeName":"结束","nodeName":"结束","id":"1ogr3wzy6zhc00","top":"180px","left":"1160px"}],"lineList":[{"from":"34v56ha2l9c000","to":"5sdjugrcqhc000","label":"连线名称","id":"5n6pp5xqd6s000","Remark":""},{"from":"5sdjugrcqhc000","to":"3atqi5p6oa4000","label":"连线名称","id":"2a0ya9j1kev400","Remark":""},{"from":"5sdjugrcqhc000","to":"49vcu89p5q0000","label":"连线名称","id":"zoisvo5gpvk00","Remark":""},{"from":"3atqi5p6oa4000","to":"1jhiilb0t2tc00","label":"连线名称","id":"4xkb3dju1g0000","Remark":""},{"from":"49vcu89p5q0000","to":"1jhiilb0t2tc00","label":"连线名称","id":"ldc917l47w000","Remark":""},{"from":"1jhiilb0t2tc00","to":"1ogr3wzy6zhc00","label":"连线名称","id":"478galw3u34000","Remark":""}]}')},fc27:function(e,t,i){e.exports=i.p+"img/8个人服务.ec54f18b.svg"}});