webpackJsonp([10],{"He/f":function(t,e){},WBkb:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("6iV/"),s=a.n(n),i=a("9rMa"),o={data:function(){return{companyName:"",loading:!1,isClick:!1,balanceOf:0}},computed:Object(i.b)({Address:function(t){return t.web3.coinbase}}),methods:{openOrganization:function(){var t=this,e={only:this.companyName,address:this.Address};this.$axios({method:"post",url:"/index.php/cn/home/node_se/company_individual",data:s.a.stringify(e)}).then(function(e){0==e.data.state?e.data.info.company.creator?2==e.data.info.company.state?t.$router.push({path:"../home/Overview",query:{only:t.companyName}}):2==e.data.info.chain.state?t.$router.push({path:"companyIdent",query:{only:t.companyName}}):t.$router.push({path:"UserIdent",query:{only:t.companyName}}):t.$router.push({path:"UserIdent",query:{only:t.companyName}}):2==e.data.state?t.$Notice.warning({title:"暂无当前组织！"}):4==e.data.state&&t.$router.push({path:"UserIdent",query:{only:t.companyName}})})},createOrganization:function(){null==this.Address||""==this.Address?this.$Notice.warning({title:"请先登录metamask钱包，刷新后进行操作！"}):this.$router.push({path:"UserIdent"})},takeRopstenToken:function(){var t=this;this.$store.state.tokenInstance().methods.balanceOf(this.Address).call({from:this.Address}).then(function(e){if(t.balanceOf=e/Math.pow(10,18),t.balanceOf>=1e5)t.$Notice.warning({title:"已经获取足够Token，请勿重新获取！"});else{var a=""+1e5+String(Math.pow(10,18)).split("").slice(1).join("");t.$store.state.tokenInstance().methods.mint(t.Address,a).send({from:t.Address}).on("transactionHash",function(t){_this.$Spin.show()}).then(function(e){t.$Spin.hide(),t.$Notice.warning({title:"测试Token已发出，请注意收取！"})})}})}},watch:{companyName:function(){this.isClick=""!=this.companyName}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"index-board"},[a("div",{staticClass:"inner"},[a("h2",[t._v("欢迎来到LittleBeeX")]),t._v(" "),a("p",{staticClass:"node"},[t._v("\n\t\t\t当前节点：以太坊测试网(Ropsten)\n\t\t\t"),a("span",{staticClass:"hint"},[t._v("需解锁Metamask钱包，并选择所需的服务器节点")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.takeRopstenToken}},[t._v("获取测试Token")])],1),t._v(" "),a("div",{staticClass:"config-item"},[a("label",[t._v("创建一个新组织，并开始KYC组织认证")]),t._v(" "),a("Button",{attrs:{type:"primary"},on:{click:t.createOrganization}},[t._v("开始创建")])],1),t._v(" "),a("div",{staticClass:"config-item"},[a("label",[t._v("打开现有组织")]),t._v(" "),a("p",[a("Input",{attrs:{size:"large",maxlength:20,type:"text"},model:{value:t.companyName,callback:function(e){t.companyName=e},expression:"companyName"}})],1),t._v(" "),a("Button",{staticClass:"open",attrs:{type:"primary",disabled:!t.isClick,loading:t.loading},on:{click:t.openOrganization}},[t._v("打开组织")])],1)])])},staticRenderFns:[]};var c=a("C7Lr")(o,r,!1,function(t){a("He/f")},"data-v-65c4da40",null);e.default=c.exports}});
//# sourceMappingURL=10.46311827cfb9567f4125.js.map