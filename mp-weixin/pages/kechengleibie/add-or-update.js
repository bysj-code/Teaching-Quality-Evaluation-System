(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/kechengleibie/add-or-update"],{"0872":function(e,t,n){"use strict";(function(e){n("1eff");r(n("66fd"));var t=r(n("8f8b"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"0aa8":function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a(n("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,t,n,r,a,i,u){try{var c=e[i](u),o=c.value}catch(s){return void n(s)}c.done?t(o):Promise.resolve(o).then(r,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,a){var u=e.apply(t,n);function c(e){i(u,r,a,c,o,"next",e)}function o(e){i(u,r,a,c,o,"throw",e)}c(void 0)}))}}var c=function(){Promise.all([n.e("common/vendor"),n.e("components/w-picker/w-picker")]).then(function(){return resolve(n("a787"))}.bind(null,n)).catch(n.oe)},o={data:function(){return{cross:"",ruleForm:{kechengleibie:""},user:{},ro:{kechengleibie:!1}}},components:{wPicker:c},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(t){var n=this;return u(r.default.mark((function a(){var i,u,c,o;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=e.getStorageSync("nowTable"),a.next=3,n.$api.session(i);case 3:if(u=a.sent,n.user=u.data,n.ruleForm.userid=e.getStorageSync("userid"),t.refid&&(n.ruleForm.refid=t.refid,n.ruleForm.nickname=e.getStorageSync("nickname")),!t.id){a.next=13;break}return n.ruleForm.id=t.id,a.next=11,n.$api.info("kechengleibie",n.ruleForm.id);case 11:u=a.sent,n.ruleForm=u.data;case 13:if(n.cross=t.cross,!t.cross){a.next=25;break}c=e.getStorageSync("crossObj"),a.t0=r.default.keys(c);case 17:if((a.t1=a.t0()).done){a.next=25;break}if(o=a.t1.value,"kechengleibie"!=o){a.next=23;break}return n.ruleForm.kechengleibie=c[o],n.ro.kechengleibie=!0,a.abrupt("continue",17);case 23:a.next=17;break;case 25:n.styleChange();case 26:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var t=this;return u(r.default.mark((function n(){var a,i,u,c,o,s,l,f,d,g;return r.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!t.cross){n.next=16;break}if(c=e.getStorageSync("statusColumnName"),o=e.getStorageSync("statusColumnValue"),""==c){n.next=16;break}if(s=e.getStorageSync("crossObj"),c.startsWith("[")){n.next=12;break}for(l in s)l==c&&(s[l]=o);return f=e.getStorageSync("crossTable"),n.next=10,t.$api.update("".concat(f),s);case 10:n.next=16;break;case 12:a=Number(e.getStorageSync("userid")),i=s["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!i||!a){n.next=38;break}return t.ruleForm.crossuserid=a,t.ruleForm.crossrefid=i,d={page:1,limit:10,crossuserid:a,crossrefid:i},n.next=22,t.$api.list("kechengleibie",d);case 22:if(g=n.sent,!(g.data.total>=u)){n.next=28;break}return t.$utils.msg(e.getStorageSync("tips")),n.abrupt("return",!1);case 28:if(!t.ruleForm.id){n.next=33;break}return n.next=31,t.$api.update("kechengleibie",t.ruleForm);case 31:n.next=35;break;case 33:return n.next=35,t.$api.add("kechengleibie",t.ruleForm);case 35:t.$utils.msgBack("提交成功");case 36:n.next=46;break;case 38:if(!t.ruleForm.id){n.next=43;break}return n.next=41,t.$api.update("kechengleibie",t.ruleForm);case 41:n.next=45;break;case 43:return n.next=45,t.$api.add("kechengleibie",t.ruleForm);case 45:t.$utils.msgBack("提交成功");case 46:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var t=new Date,n=t.getFullYear(),r=t.getMonth()+1,a=t.getDate();return"start"===e?n-=60:"end"===e&&(n+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(n,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};t.default=o}).call(this,n("543d")["default"])},"6d69":function(e,t,n){"use strict";n.r(t);var r=n("0aa8"),a=n.n(r);for(var i in r)"default"!==i&&function(e){n.d(t,e,(function(){return r[e]}))}(i);t["default"]=a.a},"7be6":function(e,t,n){"use strict";var r=n("f0a5"),a=n.n(r);a.a},"8f8b":function(e,t,n){"use strict";n.r(t);var r=n("b6dc2"),a=n("6d69");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("7be6");var u,c=n("f0c5"),o=Object(c["a"])(a["default"],r["b"],r["c"],!1,null,"44d41155",null,!1,r["a"],u);t["default"]=o.exports},b6dc2:function(e,t,n){"use strict";var r;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return r}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},f0a5:function(e,t,n){}},[["0872","common/runtime","common/vendor"]]]);