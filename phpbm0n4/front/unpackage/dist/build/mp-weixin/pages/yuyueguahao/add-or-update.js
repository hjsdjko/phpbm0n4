(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yuyueguahao/add-or-update"],{"650d":function(e,n,r){"use strict";(function(e){r("7f01");t(r("66fd"));var n=t(r("7f34"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"7f34":function(e,n,r){"use strict";r.r(n);var t=r("ef45"),i=r("d40a");for(var a in i)"default"!==a&&function(e){r.d(n,e,(function(){return i[e]}))}(a);r("c726");var u,o=r("f0c5"),s=Object(o["a"])(i["default"],t["b"],t["c"],!1,null,"7ff81abe",null,!1,t["a"],u);n["default"]=s.exports},ae7c:function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(r("a34a"));function i(e){return e&&e.__esModule?e:{default:e}}function a(e,n,r,t,i,a,u){try{var o=e[a](u),s=o.value}catch(c){return void r(c)}o.done?n(s):Promise.resolve(s).then(t,i)}function u(e){return function(){var n=this,r=arguments;return new Promise((function(t,i){var u=e.apply(n,r);function o(e){a(u,t,i,o,s,"next",e)}function s(e){a(u,t,i,o,s,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("3152"))}.bind(null,r)).catch(r.oe)},s={data:function(){return{cross:"",ruleForm:{keshimingcheng:"",keshileixing:"",keshitupian:"",yishengbianhao:"",yishengxingming:"",zhicheng:"",yuyueshijian:"",yuyueshuoming:"",zhanghao:"",xingming:"",sfsh:"",shhf:"",userid:""},user:{},ro:{keshimingcheng:!1,keshileixing:!1,keshitupian:!1,yishengbianhao:!1,yishengxingming:!1,zhicheng:!1,yuyueshijian:!1,yuyueshuoming:!1,zhanghao:!1,xingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:o},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var r=this;return u(t.default.mark((function i(){var a,u,o,s;return t.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return r.ruleForm.yuyueshijian=r.$utils.getCurDateTime(),a=e.getStorageSync("nowTable"),i.next=4,r.$api.session(a);case 4:if(u=i.sent,r.user=u.data,r.ruleForm.zhanghao=r.user.zhanghao,r.ro.zhanghao=!0,r.ruleForm.xingming=r.user.xingming,r.ro.xingming=!0,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){i.next=18;break}return r.ruleForm.id=n.id,i.next=16,r.$api.info("yuyueguahao",r.ruleForm.id);case 16:u=i.sent,r.ruleForm=u.data;case 18:if(r.cross=n.cross,!n.cross){i.next=70;break}o=e.getStorageSync("crossObj"),i.t0=t.default.keys(o);case 22:if((i.t1=i.t0()).done){i.next=70;break}if(s=i.t1.value,"keshimingcheng"!=s){i.next=28;break}return r.ruleForm.keshimingcheng=o[s],r.ro.keshimingcheng=!0,i.abrupt("continue",22);case 28:if("keshileixing"!=s){i.next=32;break}return r.ruleForm.keshileixing=o[s],r.ro.keshileixing=!0,i.abrupt("continue",22);case 32:if("keshitupian"!=s){i.next=36;break}return r.ruleForm.keshitupian=o[s],r.ro.keshitupian=!0,i.abrupt("continue",22);case 36:if("yishengbianhao"!=s){i.next=40;break}return r.ruleForm.yishengbianhao=o[s],r.ro.yishengbianhao=!0,i.abrupt("continue",22);case 40:if("yishengxingming"!=s){i.next=44;break}return r.ruleForm.yishengxingming=o[s],r.ro.yishengxingming=!0,i.abrupt("continue",22);case 44:if("zhicheng"!=s){i.next=48;break}return r.ruleForm.zhicheng=o[s],r.ro.zhicheng=!0,i.abrupt("continue",22);case 48:if("yuyueshijian"!=s){i.next=52;break}return r.ruleForm.yuyueshijian=o[s],r.ro.yuyueshijian=!0,i.abrupt("continue",22);case 52:if("yuyueshuoming"!=s){i.next=56;break}return r.ruleForm.yuyueshuoming=o[s],r.ro.yuyueshuoming=!0,i.abrupt("continue",22);case 56:if("zhanghao"!=s){i.next=60;break}return r.ruleForm.zhanghao=o[s],r.ro.zhanghao=!0,i.abrupt("continue",22);case 60:if("xingming"!=s){i.next=64;break}return r.ruleForm.xingming=o[s],r.ro.xingming=!0,i.abrupt("continue",22);case 64:if("userid"!=s){i.next=68;break}return r.ruleForm.userid=o[s],r.ro.userid=!0,i.abrupt("continue",22);case 68:i.next=22;break;case 70:r.styleChange();case 71:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},yuyueshijianConfirm:function(e){console.log(e),this.ruleForm.yuyueshijian=e.result,this.$forceUpdate()},keshitupianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.keshitupian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return u(t.default.mark((function r(){var i,a,u,o,s,c,h,g,l,f;return t.default.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(!n.cross){r.next=16;break}if(o=e.getStorageSync("statusColumnName"),s=e.getStorageSync("statusColumnValue"),""==o){r.next=16;break}if(c=e.getStorageSync("crossObj"),o.startsWith("[")){r.next=12;break}for(h in c)h==o&&(c[h]=s);return g=e.getStorageSync("crossTable"),r.next=10,n.$api.update("".concat(g),c);case 10:r.next=16;break;case 12:i=Number(e.getStorageSync("userid")),a=c["id"],u=e.getStorageSync("statusColumnName"),u=u.replace(/\[/,"").replace(/\]/,"");case 16:if(!a||!i){r.next=38;break}return n.ruleForm.crossuserid=i,n.ruleForm.crossrefid=a,l={page:1,limit:10,crossuserid:i,crossrefid:a},r.next=22,n.$api.list("yuyueguahao",l);case 22:if(f=r.sent,!(f.data.total>=u)){r.next=28;break}return n.$utils.msg(e.getStorageSync("tips")),r.abrupt("return",!1);case 28:if(!n.ruleForm.id){r.next=33;break}return r.next=31,n.$api.update("yuyueguahao",n.ruleForm);case 31:r.next=35;break;case 33:return r.next=35,n.$api.add("yuyueguahao",n.ruleForm);case 35:n.$utils.msgBack("提交成功");case 36:r.next=46;break;case 38:if(!n.ruleForm.id){r.next=43;break}return r.next=41,n.$api.update("yuyueguahao",n.ruleForm);case 41:r.next=45;break;case 43:return r.next=45,n.$api.add("yuyueguahao",n.ruleForm);case 45:n.$utils.msgBack("提交成功");case 46:case"end":return r.stop()}}),r)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,i=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,i=i>9?i:"0"+i,"".concat(r,"-").concat(t,"-").concat(i)},toggleTab:function(e){this.$refs[e].show()}}};n.default=s}).call(this,r("543d")["default"])},c726:function(e,n,r){"use strict";var t=r("cd2e"),i=r.n(t);i.a},cd2e:function(e,n,r){},d40a:function(e,n,r){"use strict";r.r(n);var t=r("ae7c"),i=r.n(t);for(var a in t)"default"!==a&&function(e){r.d(n,e,(function(){return t[e]}))}(a);n["default"]=i.a},ef45:function(e,n,r){"use strict";r.d(n,"b",(function(){return i})),r.d(n,"c",(function(){return a})),r.d(n,"a",(function(){return t}));var t={wPicker:function(){return Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(r.bind(null,"3152"))}},i=function(){var e=this,n=e.$createElement;e._self._c},a=[]}},[["650d","common/runtime","common/vendor"]]]);