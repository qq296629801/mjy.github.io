(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["groupChatList"],{"0189":function(t,e,a){},"164b":function(t,e,a){"use strict";var n=a("ab7b"),s=a.n(n);s.a},"56da":function(t,e,a){"use strict";var n=a("0189"),s=a.n(n);s.a},a810:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group-chat-index"},[a("mt-search",{staticClass:"search-box",model:{value:t.value,callback:function(e){t.value=e},expression:"value"}}),t._l(t.list,function(e,n){return[a("group-chat-item",{key:n,attrs:{item:e},on:{toChat:function(a){return t.handleToChat(e)}}})]}),a("div",{staticClass:"goup-chat-num"},[t._v(t._s(t.list.length)+"个群聊")])],2)},s=[],i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"group-chat-item my-border",on:{click:function(e){return t.$emit("toChat")}}},[a("img",{attrs:{src:t.item.avator,alt:""}}),a("div",{staticClass:"right-box"},[t._v(t._s(t.item.chatName))])])},r=[],u={name:"GroupChatItem",props:{item:{type:Object,required:!0}}},o=u,c=(a("56da"),a("2877")),l=Object(c["a"])(o,i,r,!1,null,null,null),h=l.exports,p={name:"ChatList",components:{GroupChatItem:h},data:function(){var t=localStorage.getItem("user");return{user:t&&JSON.parse(t)||{},value:null,list:[],dataList:[]}},watch:{value:function(t){this.getGroups(t)}},created:function(){this.getGroups("")},methods:{getGroups:function(t){var e=this;this.$socket.getGroups(t,this.user.id,function(t){e.list=t.groups})},handleToChat:function(t){this.$router.push("/groupChat"),localStorage.setItem("chatItem",JSON.stringify(t))}}},m=p,f=(a("164b"),Object(c["a"])(m,n,s,!1,null,null,null));e["default"]=f.exports},ab7b:function(t,e,a){}}]);
//# sourceMappingURL=groupChatList.2c275a0e.js.map