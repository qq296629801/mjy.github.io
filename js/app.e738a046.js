(function(e){function t(t){for(var r,a,s=t[0],c=t[1],u=t[2],d=0,p=[];d<s.length;d++)a=s[d],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);f&&f(t);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({FixName:"FixName",chat:"chat",chatList:"chatList",groupChatList:"groupChatList",login:"login",maxCard:"maxCard",member:"member",mine:"mine"}[e]||e)+"."+{FixName:"74957bff",chat:"950f6332",chatList:"da4e75d8",groupChatList:"2c275a0e",login:"1622179c",maxCard:"6bd4a77c",member:"6affe42f",mine:"a54d8234"}[e]+".js"}function c(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={FixName:1,chat:1,chatList:1,groupChatList:1,login:1,maxCard:1,member:1,mine:1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise(function(t,n){for(var r="css/"+({FixName:"FixName",chat:"chat",chatList:"chatList",groupChatList:"groupChatList",login:"login",maxCard:"maxCard",member:"member",mine:"mine"}[e]||e)+"."+{FixName:"e4143d52",chat:"a8d5d6f1",chatList:"44b2f580",groupChatList:"ab78670b",login:"b44f7caa",maxCard:"d1d0b6d3",member:"6ee6b572",mine:"a6cc9fa4"}[e]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return t()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],d=u.getAttribute("data-href");if(d===r||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(f)}).then(function(){a[e]=0}));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise(function(t,n){r=o[e]=[t,n]});t.push(r[2]=i);var u,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var p=new Error;u=function(t){d.onerror=d.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[e]=void 0}};var f=setTimeout(function(){u({type:"timeout",target:d})},12e4);d.onerror=d.onload=u,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=r,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)c.d(n,r,function(t){return e[t]}.bind(null,r));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=t,u=u.slice();for(var p=0;p<u.length;p++)t(u[p]);var f=d;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"15be":function(e,t,n){},"3e0c":function(e,t,n){"use strict";var r=n("15be"),a=n.n(r);a.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("a026"),a=n("76a0"),o=n.n(a),i=(n("aa35"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view"),n("lg-preview")],1)}),s=[],c={name:"App"},u=c,d=(n("7c55"),n("2877")),p=Object(d["a"])(u,i,s,!1,null,null,null),f=p.exports,l=n("8c4f"),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home"},[n("mt-header",{attrs:{fixed:"",title:e.$route.name}},[n("mt-button",{attrs:{slot:"left",icon:"back"},on:{click:function(t){return e.$router.go(-1)}},slot:"left"},[e._v("返回")]),n("mt-button",{attrs:{slot:"right",icon:"more"},slot:"right"})],1),n("router-view"),n("mt-tabbar",{directives:[{name:"show",rawName:"v-show",value:e.isShow,expression:"isShow"}],attrs:{fixed:!0},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},e._l(e.tabList,function(t,r){return n("mt-tab-item",{key:r,attrs:{id:r},nativeOn:{click:function(n){return e.$router.push(t.path)}}},[n("i",{class:"iconfont "+t.icon,attrs:{slot:"icon"},slot:"icon"}),e._v(e._s(t.name)+"\n    ")])}),1)],1)},h=[],v=(n("7f7f"),n("6762"),n("2fdb"),n("d9a0"),{name:"Home",data:function(){return{active:0,path:["/chatList","/groupList","/mine"],tabList:[{icon:"icon-conversation_icon",path:"/chatList",name:"聊天",index:0},{icon:"icon-qunliao",path:"/groupList",name:"群聊",index:1},{icon:"icon-wode",path:"/mine",name:"我的",index:2}]}},created:function(){this.getActive()},computed:{isShow:function(){return this.path.includes(this.$route.path)}},methods:{getActive:function(){var e=this;this.path.includes(this.$route.path)&&(this.active=this.tabList.filter(function(t){return t.name===e.$route.name})[0].index)}}}),g=v,b=(n("3e0c"),Object(d["a"])(g,m,h,!1,null,null,null)),w=b.exports,y=function(){return n.e("chat").then(n.bind(null,"34c7"))},L=function(){return n.e("chat").then(n.bind(null,"e17f"))},x=function(){return n.e("chatList").then(n.bind(null,"b1d2"))},k=function(){return n.e("groupChatList").then(n.bind(null,"a810"))},C=function(){return n.e("mine").then(n.bind(null,"b5b1"))},O=function(){return n.e("mine").then(n.bind(null,"ba91"))},S=function(){return n.e("mine").then(n.bind(null,"5fd1"))},I=function(){return n.e("mine").then(n.bind(null,"dbf9"))},j=function(){return n.e("mine").then(n.bind(null,"0629"))},N=function(){return n.e("login").then(n.bind(null,"9ed6"))},T=function(){return n.e("member").then(n.bind(null,"72cb"))},P=function(){return n.e("FixName").then(n.bind(null,"5884"))},_=function(){return n.e("maxCard").then(n.bind(null,"1549"))};r["default"].use(l["a"]);var E=[{path:"/",name:"home",component:w,redirect:"/groupChat",children:[{path:"/login",name:"登录",component:N},{path:"/groupInfo",name:"群聊详情",component:T},{path:"/chatList",name:"聊天",component:x},{path:"/groupList",name:"群聊",component:k},{path:"/mine",name:"我的",component:C},{path:"/pointRecords",name:"积分纪录",component:j},{path:"/aboutUs",name:"关于我们",component:I},{path:"/peronInfo",name:"个人信息",component:O},{path:"/accountSet",name:"账户设置",component:S},{path:"/groupChat",name:"群聊天",component:y},{path:"/editName/:name",name:"编辑名称",component:P},{path:"/groupNotice",name:"群公告",component:_},{path:"/friendChat",name:"好友聊天",component:L}]}],R=new l["a"]({mode:"hash",base:"",routes:E}),$=n("2f62");r["default"].use($["a"]);var M,A,U={namespaced:!0,state:{},getters:{},mutations:{},actions:{}},F=new $["a"].Store({modules:{store:U}}),G=(n("28a5"),n("4917"),n("6b54"),{encode:function(e){var t=q(JSON.stringify(e)),n=new ArrayBuffer(11+t.length);if(n.byteLength!==11+t.length)return console.log("编码分配内存失败，内存不足"),null;var r=new DataView(n);r.setInt32(0,305419896),r.setInt8(4,e.version),r.setInt8(5,1),r.setInt8(6,e.command),r.setInt32(7,t.length);for(var a=11;a<t.length+11;a++)r.setUint8(a,t[a-11]);return r.buffer},decode:function(e){for(var t=new DataView(e),n=t.getInt32(7),r=[],a=11;a<n+11;a++)r[a-11]=t.getUint8(a);var o=D(r);return JSON.parse(o)}}),q=function(e){var t,n,r=[];t=e.length;for(var a=0;a<t;a++)n=e.charCodeAt(a),n>=65536&&n<=1114111?(r.push(n>>18&7|240),r.push(n>>12&63|128),r.push(n>>6&63|128),r.push(63&n|128)):n>=2048&&n<=65535?(r.push(n>>12&15|224),r.push(n>>6&63|128),r.push(63&n|128)):n>=128&&n<=2047?(r.push(n>>6&31|192),r.push(63&n|128)):r.push(255&n);return r},D=function(e){if("string"===typeof e)return e;for(var t="",n=e,r=0;r<n.length;r++){var a=n[r].toString(2),o=a.match(/^1+?(?=0)/);if(o&&8===a.length){for(var i=o[0].length,s=n[r].toString(2).slice(7-i),c=1;c<i;c++)s+=n[c+r].toString(2).slice(2);t+=String.fromCharCode(parseInt(s,2)),r+=i-1}else t+=String.fromCharCode(n[r])}return t},B=G,J=function(){this.listeners={}},W={close:function(){void 0!==M&&M.readyState===WebSocket.OPEN&&M.close()},open:function(){A=new J,M=new WebSocket("ws://47.105.74.119:9999/chat"),M.binaryType="arraybuffer",M.onmessage=function(e){var t=B.decode(e.data);H(t.command),A.dispatchEvent(t.command,z(t))},M.onopen=function(e){},M.onclose=function(e){},M.onerror=function(e){}},login:function(e,t,n){var r={username:e,password:t,version:1,command:1};V(r),A.addListener("2",n)},sendToFriend:function(e,t,n,r,a){var o={userId:t,toUserId:e,msgType:r,message:n,version:1,command:3};V(o),A.addListener("4",a)},logout:function(e){var t={version:1,command:5};V(t),A.addListener("6",e)},createGroup:function(e){var t={userIdList:e.split(","),version:1,command:7};V(t)},getGroupMembers:function(e,t,n){var r={groupId:e,userId:t,version:1,command:9};V(r),A.addListener("10",n)},joinGroup:function(e){var t={groupId:e,version:1,command:11};V(t)},quitGroup:function(e){var t={groupId:e,version:1,command:13};V(t)},getGroups:function(e,t,n){var r={condition:e,userId:t,version:1,command:25};V(r),A.addListener("26",n)},sendToGroup:function(e,t,n,r,a){var o={toGroupId:e,userId:t,msgType:r,message:n,version:1,command:15};V(o),A.addListener("16",a)},getFriendMessages:function(e,t,n,r){var a={userId:t,pageNum:n,toUserId:e,pageSize:5,version:1,command:27};V(a),A.addListener("28",r)},getGroupMessages:function(e,t,n,r){var a={toGroupId:e,pageNum:n,pageSize:5,userId:t,version:1,command:23};V(a),A.addListener("24",r)},chats:function(e,t){var n={userId:e,version:1,command:19};V(n),A.addListener("20",t)},updateUser:function(e,t,n,r){var a={userId:e,avatar:t,nickName:n,version:1,command:21};V(a),A.addListener("22",r)},openChat:function(e,t,n,r){var a={userId:t,chatId:e,chatType:n,version:1,command:39};V(a),A.addListener("40",r)},getMoneys:function(e,t,n){var r={pageNum:t,pageSiz:5,userId:e,version:1,command:41};V(r),A.addListener("42",n)}};function z(e){return JSON.parse(JSON.stringify(e))}J.prototype.addListener=function(e,t,n){var r=[];this.listeners[e]=r;var a={func:t,context:n};return r.push(a),a},J.prototype.removeListener=function(e,t,n){var r=this.listeners[e];if(void 0!==r)for(var a=r.length,o=0;o<a;o++){var i=r[o];if(i.func===t&&i.context===n)return void r.splice(o,1)}},J.prototype.dispatchEvent=function(e,t){var n=this.listeners[e];if(void 0!==n)for(var r=n.length,a=0;a<r;a++){var o=n[a],i=o.func,s=o.context;null!=s?i.call(s,t):i(t)}};var H=function(e){var t="";switch(e){case 2:t="登录";break;case 4:t="一对一消息";break;case 6:t="退出登录";break;case 8:t="创建群组";break;case 10:t="群组成员列表";break;case 12:t="加入群组";break;case 14:t="退出群组";break;case 16:t="群消息";break;case 18:t="心跳检测回应";break;case 20:t="聊天列表";break;case 24:t="聊天记录";break;case 26:t="群列表";break;default:break}console.log("指令 = "+e+", 指令功能 = "+t)},V=function(e){window.WebSocket?void 0!==M&&M.readyState===WebSocket.OPEN?M.send(B.encode(e)):W.open():alert("当前浏览器不支持WebSocket")},X=W,K=(n("96cf"),n("3b8d")),Q=n("bc3a"),Y=n.n(Q),Z=Y.a.create();Z.defaults.timeout=5e3,Z.interceptors.request.use(function(e){return e.headers.Authentication=localStorage.getItem("token")||"",e},function(e){return Object(a["Toast"])("加载超时"),Promise.reject(e)}),Z.interceptors.response.use(function(e){if(200===e.status)return e},function(e){if(e.response){var t=(null===e.response.data?"很抱歉，系统内部出现异常":e.response.data.message)||"很抱歉，系统内部出现异常";switch(e.response.status){case 404:Object(a["Toast"])("很抱歉，资源未找到");break;case 403:case 401:Object(a["Toast"])("很抱歉，您无法访问该资源，可能是因为没有相应权限或者登录已失效");break;default:Object(a["Toast"])(t);break}}return Promise.reject(e)});var ee=Z,te=n("4328"),ne=n.n(te),re={get:function(){var e=Object(K["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ee.get(t,{params:n});case 2:return r=e.sent,o=r.data,i=o.success,s=o.data,c=o.errorMessage,e.abrupt("return",new Promise(function(e,t){i?e(s):(Object(a["Toast"])(c),t(s))}));case 8:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),formData:function(){var e=Object(K["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ee.post(t,ne.a.stringify(n));case 2:return r=e.sent,o=r.data,i=o.success,s=o.data,c=o.errorMessage,e.abrupt("return",new Promise(function(e,t){i?e(s):(Object(a["Toast"])(c),t(s))}));case 8:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),post:function(){var e=Object(K["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ee.post(t,n);case 2:return r=e.sent,o=r.data,i=o.success,s=o.data,c=o.errorMessage,e.abrupt("return",new Promise(function(e,t){i?e(s):(Object(a["Toast"])(c),t(s))}));case 8:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}(),download:function(){var e=Object(K["a"])(regeneratorRuntime.mark(function e(t,n){var r,o,i,s,c;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,ee({method:"post",url:t,data:n,responseType:"blob",headers:{"Content-Type":"application/octet-stream","X-Requested-With":"XMLHttpRequest"}});case 2:return r=e.sent,o=r.data,i=o.success,s=o.data,c=o.errorMessage,e.abrupt("return",new Promise(function(e,t){if(i){var r=s.headers["content-disposition"].split("filename=")[1];r=decodeURI(r),n.success(s.data);var o=new Blob([s.data],{type:"application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"});if("download"in document.createElement("a")){var u=document.createElement("a"),d=URL.createObjectURL(o);u.download=r,u.style.display="none",u.href=d,document.body.appendChild(u),u.click(),URL.revokeObjectURL(d),document.body.removeChild(u)}else navigator.msSaveBlob(o,r);e()}else Object(a["Toast"])(c),t(s)}));case 8:case"end":return e.stop()}},e)}));function t(t,n){return e.apply(this,arguments)}return t}()},ae=re,oe=(n("499a"),n("ef2e")),ie=n.n(oe),se=n("3a34"),ce=n.n(se);r["default"].use(ie.a),r["default"].use(o.a),r["default"].config.productionTip=!1,r["default"].prototype.$get=ae.get,r["default"].prototype.$post=ae.post,r["default"].prototype.$formData=ae.formData,r["default"].prototype.$download=ae.download,r["default"].prototype.$socket=X,r["default"].prototype.$vConsole=new ce.a,new r["default"]({router:R,store:F,render:function(e){return e(f)}}).$mount("#app")},"5c48":function(e,t,n){},"7c55":function(e,t,n){"use strict";var r=n("5c48"),a=n.n(r);a.a},d9a0:function(e,t,n){}});
//# sourceMappingURL=app.e738a046.js.map