webpackJsonp([4],{Joco:function(t,e){},bTqT:function(t,e){},yK50:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("4YfN"),n=s.n(a),o=s("6iV/"),r=s.n(o),i=s("9rMa"),c=s("3Yup"),d={data:function(){return{searchInput:"",searchType:"表决中",addVoteInput:"",isShowDrawer:!1,isAddDrawer:!1,typeList:[{title:"全部",vals:4},{title:"表决中",vals:0},{title:"已通过",vals:1},{title:"未通过",vals:2}],pStyle:{fontSize:"16px",color:"rgba(0,0,0,0.85)",lineHeight:"24px",display:"block",marginBottom:"16px"},voteList:[]}},computed:n()({},Object(i.b)({Address:function(t){return t.web3.coinbase}})),methods:{takeVote:function(){var t=this;if(""!=this.addVoteInput){var e=this;this.$store.state.userInstance().methods.addVoteList(0,this.Address,this.Address,0,this.addVoteInput).send({from:this.Address}).on("transactionHash",function(t){e.$Spin.show()}).then(function(e){var s=e.events.createVote.returnValues.codes;t.$Spin.hide();var a={only:t.$route.query.only,type:0,content:t.addVoteInput,address:t.Address,keyname:s};t.$axios({method:"post",url:"/index.php/cn/home/node_su/meeting",data:r.a.stringify(a)}).then(function(e){return 0==e.data.state?(t.$Notice.info({title:"会议提交成功！"}),t.mountedRefreshList(),t.isAddDrawer=!t.isAddDrawer,t.addVoteInput="",!0):(t.$Notice.warning({title:"无该成员信息！"}),t.$router.push({path:"/"}),!1)})})}else this.$Notice.warning({title:"表决内容不能为空！"})},userVote:function(t,e,s){var a=this,n=this,o=1==t;console.log(s,o),this.$store.state.userInstance().methods.setVoteList(s,o).send({from:this.Address}).on("transactionHash",function(t){n.$Spin.show()}).then(function(s){a.$Spin.hide();var n={only:a.$route.query.only,state:t,id:e,address:a.Address};a.$axios({method:"post",url:"/index.php/cn/home/node_su/vote",data:r.a.stringify(n)}).then(function(t){return 0==t.data.state?(a.$Notice.info({title:"投票成功！"}),a.changeSearchType(a.searchType),!0):(a.$Notice.warning({title:"无该成员信息！"}),a.$router.push({path:"/"}),!1)})})},searchVote:function(){var t=4==u(title)?0:1,e={only:this.$route.query.only,address:this.Address,search:this.searchInput,state:u(this.searchType),condition:t};this.searchList(e)},changeSearchType:function(t){var e=4==u(t)?0:1,s={only:this.$route.query.only,address:this.Address,state:u(t),condition:e};this.searchList(s)},searchList:function(t){var e=this,s=t;this.$axios({method:"post",url:"/index.php/cn/home/node_se/meeting_list",data:r.a.stringify(s)}).then(function(t){if(0==t.data.state){for(var s=t.data.info,a=0;a<s.length;a++)if(s[a].start_time=c.a.timestampToTime(s[a].start_time)+"(剩余约"+s[a].remnant.toFixed(2)+"个小时)",s[a].F=s[a].surname+s[a].name,s[a].id=s[a].id,s[a].no_proportion=Number(s[a].no_proportion),s[a].yes_proportion=Number(s[a].yes_proportion),s[a].btn_show=!1,0==s[a].state&&0==s[a].throw&&(s[a].btn_show=!0),s[a].state=u(s[a].state),s[a].keyname=s[a].keyname,0!=s[a].type){var n=1==s[a].type?"增发":"转账";console.log(s[a].number),s[a].content="给"+s[a].surname_t+s[a].name_t+n+s[a].number+"枚Token"}return e.voteList=s,!0}return e.$Notice.warning({title:"无该成员信息！"}),e.$router.push({path:"/"}),!1})},mountedRefreshList:function(){var t={only:this.$route.query.only,address:this.Address,state:0};this.searchList(t)}},created:function(){this.mountedRefreshList()}};function u(t){switch(t){case"表决中":t=0;break;case"已通过":t=1;break;case"未通过":t=2;break;case"全部":t=4;break;case"0":t="表决中";break;case"1":t="已通过";break;case"2":t="未通过";break;case"4":t="全部"}return t}var l={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Breadcrumb",{staticClass:"bread"},[s("div",{staticClass:"title"},[t._v("虚拟会议室")]),t._v(" "),s("div",{staticClass:"b_func"},[s("div",{staticClass:"searchForm"},[s("RadioGroup",{staticClass:"radio",on:{"on-change":function(e){t.changeSearchType(t.searchType)}},model:{value:t.searchType,callback:function(e){t.searchType=e},expression:"searchType"}},t._l(t.typeList,function(t){return s("Radio",{attrs:{label:t.title,value:t.vals}})})),t._v(" "),s("div",[s("Input",{staticStyle:{width:"300px"},attrs:{placeholder:"会议查询"},model:{value:t.searchInput,callback:function(e){t.searchInput=e},expression:"searchInput"}},[s("Button",{attrs:{slot:"append"},on:{click:function(e){t.searchVote()}},slot:"append"},[s("Icon",{attrs:{type:"ios-search",size:"16"}})],1)],1)],1)],1),t._v(" "),s("div",{staticClass:"addVote"},[s("Button",{attrs:{type:"primary",size:"large",icon:"md-barcode"},on:{click:function(e){t.isAddDrawer=!t.isAddDrawer}}},[t._v("发起决议")])],1)])]),t._v(" "),t.voteList.length>0?s("Row",t._l(t.voteList,function(e){return s("Col",{attrs:{xs:24,sm:12,lg:8}},[s("Card",{staticClass:"voteItem",attrs:{bordered:!1}},[s("p",{attrs:{slot:"title"},slot:"title"},[s("Tooltip",{attrs:{"max-width":"300",content:e.content}},[s("p",{staticClass:"tooltip-msg"},[t._v(t._s(e.content))])])],1),t._v(" "),s("div",{staticClass:"msgBoard"},[s("p",[s("b",[t._v("发起时间")]),t._v(t._s(e.start_time))]),t._v(" "),s("p",[s("b",[t._v("表决状态")]),t._v(t._s(e.state))]),t._v(" "),s("p",[s("b",[t._v("决议发起人")]),t._v(t._s(e.name))]),t._v(" "),s("p",[s("b",[t._v("同意"),s("span",[t._v("("+t._s(e.quorum)+"%可通过审核)")])]),t._v(" "),s("Progress",{attrs:{percent:e.yes_proportion,status:"active"}})],1),t._v(" "),s("p",[s("b",[t._v("否决")]),t._v(" "),s("Progress",{staticClass:"warningProgress",attrs:{percent:e.no_proportion}})],1),t._v(" "),e.btn_show?s("div",{staticClass:"btn"},[s("Button",{attrs:{type:"success",size:"large",icon:"md-albums"},on:{click:function(s){t.userVote(1,e.id,e.keyname)}}},[t._v("同意")]),t._v(" "),s("Button",{attrs:{type:"info",size:"large",icon:"md-albums"},on:{click:function(s){t.userVote(2,e.id,e.keyname)}}},[t._v("否决")])],1):t._e()])])],1)})):s("div",{staticClass:"mouldBoard"},[s("Card",{staticClass:"mouldItem",attrs:{bordered:!1}},[s("div",{staticClass:"msgBoard"},[s("p",[t._v("暂无表决记录，立即发起表决")]),t._v(" "),s("Button",{attrs:{type:"primary",size:"large",icon:"md-barcode"},on:{click:function(e){t.addVote()}}},[t._v("发起决议")])],1)])],1),t._v(" "),s("Drawer",{staticClass:"newVoteBoard",attrs:{title:"新的表决",width:"350",closable:!1},model:{value:t.isAddDrawer,callback:function(e){t.isAddDrawer=e},expression:"isAddDrawer"}},[s("div",[s("p",[t._v("决议内容")]),t._v(" "),s("Input",{attrs:{type:"textarea",autosize:{minRows:3,maxRows:5},placeholder:"请填写决议内容"},model:{value:t.addVoteInput,callback:function(e){t.addVoteInput=e},expression:"addVoteInput"}}),t._v(" "),s("div",{staticClass:"btn"},[s("Button",{attrs:{type:"success",long:""},on:{click:t.takeVote}},[t._v("发起决议")])],1)],1)])],1)},staticRenderFns:[]};var p=s("C7Lr")(d,l,!1,function(t){s("Joco"),s("zwsc"),s("bTqT")},"data-v-4a0677d3",null);e.default=p.exports},zwsc:function(t,e){}});
//# sourceMappingURL=4.6d806805520dfb091bcf.js.map