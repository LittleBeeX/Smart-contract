webpackJsonp([1],{"+B7V":function(t,e,n){var o=n("8Nvm"),r=Math.floor;t.exports=function(t){return!o(t)&&isFinite(t)&&r(t)===t}},"2Tkx":function(t,e,n){var o=n("FITv");o(o.S,"Number",{isInteger:n("+B7V")})},"4Xi4":function(t,e,n){t.exports={default:n("OPii"),__esModule:!0}},NFj4:function(t,e){},OPii:function(t,e,n){n("2Tkx"),t.exports=n("AKd3").Number.isInteger},Z9Fv:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("4Xi4"),r=n.n(o),a=n("6iV/"),s=n.n(a),u={data:function(){return{tokenIdent:{support:"",quorum:"",duration:"",token_name:"",token_symbol:"",token_number:""},approve:{type:!1,text:"当前公司信息审核中"},ruleInline:{support:[{required:!0,message:"请输入支持占比",trigger:"blur"},{validator:i,trigger:"blur"}],quorum:[{required:!0,message:"请输入法定人数",trigger:"blur"},{validator:i,trigger:"blur"}],duration:[{required:!0,message:"请输入持续时间",trigger:"blur"}],token_name:[{required:!0,message:"请输入令牌名称",trigger:"blur"}],token_symbol:[{required:!0,message:"请输入令牌符号",trigger:"blur"}],token_number:[{required:!0,message:"请输入令牌数量",trigger:"blur"},{validator:i,trigger:"blur"}]}}},methods:{backConfig:function(){this.$router.push({path:"CompanyIdent",query:{only:this.$route.query.only}})},goTokenPayment:function(t){var e=this;this.$refs[t].validate(function(t){if(t){var n={only:e.$route.query.only,support:e.tokenIdent.support,quorum:e.tokenIdent.quorum,duration:e.tokenIdent.duration,token_name:e.tokenIdent.token_name,token_symbol:e.tokenIdent.token_symbol,token_number:e.tokenIdent.token_number};e.$axios({method:"post",url:"/index.php/cn/home/node_su/token",data:s.a.stringify(n)}).then(function(t){0==t.data.state&&e.$router.push({path:"TokenPayment",query:{only:e.$route.query.only}})})}else e.$Notice.warning({title:"请正确输入表单信息！"})})}},mounted:function(){var t=this;if("undefined"!=this.$route.query.only){var e={address:this.$store.state.web3.coinbase,only:this.$route.query.only};this.$axios({method:"post",url:"/index.php/cn/home/node_se/company_individual",data:s.a.stringify(e)}).then(function(e){var n=e.data.info.company;0==e.data.state&&(t.tokenIdent.support=n.support,t.tokenIdent.quorum=n.quorum,t.tokenIdent.duration=n.duration,t.tokenIdent.token_name=n.token_name,t.tokenIdent.token_symbol=n.token_symbol,t.tokenIdent.token_number=n.token_number)})}else this.$Notice.warning({title:"组织名称不能为空！"}),this.$router.push({path:"/"})}},i=function(t,e,n){r()(+e)?n():n(new Error("请输入数字值"))},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"index-board"},[n("div",{staticClass:"inner"},[n("h3",[t._v("令牌设置")]),t._v(" "),n("div",[n("Form",{ref:"tokenIdent",attrs:{model:t.tokenIdent,"label-position":"left","label-width":75,inline:"",rules:t.ruleInline}},[n("FormItem",{attrs:{label:"支持占比",prop:"support"}},[n("Input",{attrs:{max:100,size:"large",placeholder:"请输入支持占比"},model:{value:t.tokenIdent.support,callback:function(e){t.$set(t.tokenIdent,"support",e)},expression:"tokenIdent.support"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("%")])])],1),t._v(" "),n("FormItem",{attrs:{label:"法定人数",prop:"quorum"}},[n("Input",{attrs:{size:"large",placeholder:"请输入法定人数"},model:{value:t.tokenIdent.quorum,callback:function(e){t.$set(t.tokenIdent,"quorum",e)},expression:"tokenIdent.quorum"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("%")])])],1),t._v(" "),n("FormItem",{attrs:{label:"持续时间",prop:"duration"}},[n("Input",{attrs:{size:"large",placeholder:"请输入持续时间"},model:{value:t.tokenIdent.duration,callback:function(e){t.$set(t.tokenIdent,"duration",e)},expression:"tokenIdent.duration"}},[n("span",{attrs:{slot:"append"},slot:"append"},[t._v("H")])])],1),t._v(" "),n("FormItem",{attrs:{label:"令牌名称",prop:"token_name"}},[n("Input",{attrs:{size:"large",placeholder:"请输入令牌名称"},model:{value:t.tokenIdent.token_name,callback:function(e){t.$set(t.tokenIdent,"token_name",e)},expression:"tokenIdent.token_name"}})],1),t._v(" "),n("FormItem",{attrs:{label:"令牌符号",prop:"token_symbol"}},[n("Input",{attrs:{size:"large",placeholder:"请输入令牌名称"},model:{value:t.tokenIdent.token_symbol,callback:function(e){t.$set(t.tokenIdent,"token_symbol",e)},expression:"tokenIdent.token_symbol"}})],1),t._v(" "),n("FormItem",{attrs:{label:"令牌数量",prop:"token_number"}},[n("Input",{attrs:{size:"large",placeholder:"请输入令牌名称"},model:{value:t.tokenIdent.token_number,callback:function(e){t.$set(t.tokenIdent,"token_number",e)},expression:"tokenIdent.token_number"}})],1)],1),t._v(" "),n("div",{staticClass:"btn-con"},[n("Button",{staticClass:"fl",attrs:{type:"primary"},on:{click:function(e){t.backConfig()}}},[n("Icon",{attrs:{type:"ios-arrow-back"}}),t._v("\n\t\t\t\t\t上一步\n\t\t\t\t")],1),t._v(" "),n("Button",{staticClass:"fr",attrs:{type:"primary"},on:{click:function(e){t.goTokenPayment("tokenIdent")}}},[t._v("\n\t\t\t\t\t下一步\n\t\t\t\t\t"),n("Icon",{attrs:{type:"ios-arrow-forward"}})],1)],1)],1)])])},staticRenderFns:[]};var d=n("C7Lr")(u,l,!1,function(t){n("rbtt"),n("NFj4")},"data-v-10c1c5fa",null);e.default=d.exports},rbtt:function(t,e){}});
//# sourceMappingURL=1.ed0618ca162958e26b59.js.map