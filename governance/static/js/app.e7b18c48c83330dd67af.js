webpackJsonp([15],{0:function(e,t){},1:function(e,t){},"1hgp":function(e,t){e.exports={"1.3.132.0.10":"secp256k1","1.3.132.0.33":"p224","1.2.840.10045.3.1.1":"p192","1.2.840.10045.3.1.7":"p256","1.3.132.0.34":"p384","1.3.132.0.35":"p521"}},2:function(e,t){},3:function(e,t){},"3Yup":function(e,t,a){"use strict";t.a={getCookie:function(e){var t=window.document.cookie.match("(^|;) ?"+e+"=([^;]*)(;|$)");return t?t[2]:null},setCookie:function(e,t,a){var n=new Date;n.setTime(n.getTime()+864e5*a),window.document.cookie=e+"="+t+";path=/;expires="+n.toGMTString()},delCookie:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"user";this.setCookie(e,"",-1)},getSection:function(e){return sessionStorage.getItem(e)},setSection:function(e,t){sessionStorage.setItem(e,t)},timestampToTime:function(e){var t=new Date(1e3*e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+(t.getDate()+" ")}}},"4qou":function(e,t){e.exports={name:"web3",namespace:"ethereum",version:"1.0.0-beta.37",description:"Ethereum JavaScript API",repository:"https://github.com/ethereum/web3.js/tree/master/packages/web3",license:"LGPL-3.0",main:"src/index.js",bugs:{url:"https://github.com/ethereum/web3.js/issues"},keywords:["Ethereum","JavaScript","API"],author:"ethereum.org",authors:[{name:"Fabian Vogelsteller",email:"fabian@ethereum.org",homepage:"http://frozeman.de"},{name:"Marek Kotewicz",email:"marek@parity.io",url:"https://github.com/debris"},{name:"Marian Oancea",url:"https://github.com/cubedro"},{name:"Gav Wood",email:"g@parity.io",homepage:"http://gavwood.com"},{name:"Jeffery Wilcke",email:"jeffrey.wilcke@ethereum.org",url:"https://github.com/obscuren"}],dependencies:{"web3-bzz":"1.0.0-beta.37","web3-core":"1.0.0-beta.37","web3-eth":"1.0.0-beta.37","web3-eth-personal":"1.0.0-beta.37","web3-net":"1.0.0-beta.37","web3-shh":"1.0.0-beta.37","web3-utils":"1.0.0-beta.37"},__npminstall_done:"Thu Dec 20 2018 17:36:32 GMT+0800 (GMT+08:00)",_from:"web3@1.0.0-beta.37",_resolved:"http://registry.npm.taobao.org/web3/download/web3-1.0.0-beta.37.tgz"}},"7Jh7":function(e,t){e.exports={sha224WithRSAEncryption:{sign:"rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},"RSA-SHA224":{sign:"ecdsa/rsa",hash:"sha224",id:"302d300d06096086480165030402040500041c"},sha256WithRSAEncryption:{sign:"rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},"RSA-SHA256":{sign:"ecdsa/rsa",hash:"sha256",id:"3031300d060960864801650304020105000420"},sha384WithRSAEncryption:{sign:"rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},"RSA-SHA384":{sign:"ecdsa/rsa",hash:"sha384",id:"3041300d060960864801650304020205000430"},sha512WithRSAEncryption:{sign:"rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA512":{sign:"ecdsa/rsa",hash:"sha512",id:"3051300d060960864801650304020305000440"},"RSA-SHA1":{sign:"rsa",hash:"sha1",id:"3021300906052b0e03021a05000414"},"ecdsa-with-SHA1":{sign:"ecdsa",hash:"sha1",id:""},sha256:{sign:"ecdsa",hash:"sha256",id:""},sha224:{sign:"ecdsa",hash:"sha224",id:""},sha384:{sign:"ecdsa",hash:"sha384",id:""},sha512:{sign:"ecdsa",hash:"sha512",id:""},"DSA-SHA":{sign:"dsa",hash:"sha1",id:""},"DSA-SHA1":{sign:"dsa",hash:"sha1",id:""},DSA:{sign:"dsa",hash:"sha1",id:""},"DSA-WITH-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-SHA224":{sign:"dsa",hash:"sha224",id:""},"DSA-WITH-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-SHA256":{sign:"dsa",hash:"sha256",id:""},"DSA-WITH-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-SHA384":{sign:"dsa",hash:"sha384",id:""},"DSA-WITH-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-SHA512":{sign:"dsa",hash:"sha512",id:""},"DSA-RIPEMD160":{sign:"dsa",hash:"rmd160",id:""},ripemd160WithRSA:{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},"RSA-RIPEMD160":{sign:"rsa",hash:"rmd160",id:"3021300906052b2403020105000414"},md5WithRSAEncryption:{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"},"RSA-MD5":{sign:"rsa",hash:"md5",id:"3020300c06082a864886f70d020505000410"}}},GLlW:function(e,t){e.exports={"2.16.840.1.101.3.4.1.1":"aes-128-ecb","2.16.840.1.101.3.4.1.2":"aes-128-cbc","2.16.840.1.101.3.4.1.3":"aes-128-ofb","2.16.840.1.101.3.4.1.4":"aes-128-cfb","2.16.840.1.101.3.4.1.21":"aes-192-ecb","2.16.840.1.101.3.4.1.22":"aes-192-cbc","2.16.840.1.101.3.4.1.23":"aes-192-ofb","2.16.840.1.101.3.4.1.24":"aes-192-cfb","2.16.840.1.101.3.4.1.41":"aes-256-ecb","2.16.840.1.101.3.4.1.42":"aes-256-cbc","2.16.840.1.101.3.4.1.43":"aes-256-ofb","2.16.840.1.101.3.4.1.44":"aes-256-cfb"}},GywH:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("rVsN"),s=a.n(n),i=a("+VlJ"),c=a("jel3"),d=a.n(c),o=a("9rMa"),f=[{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"}],name:"OwnershipRenounced",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"burner",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Burn",type:"event"},{anonymous:!1,inputs:[],name:"MintFinished",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[],name:"Pause",type:"event"},{anonymous:!1,inputs:[],name:"Unpause",type:"event"},{constant:!1,inputs:[{name:"_to",type:"address"}],name:"airdropNum",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_value",type:"uint256"}],name:"burn",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_value",type:"uint256"}],name:"burnFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_subtractedValue",type:"uint256"}],name:"decreaseApproval",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"finishMinting",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_target",type:"address"},{name:"_freeze",type:"bool"}],name:"freeze",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_target",type:"address"},{name:"_timestamp",type:"uint256"}],name:"freezeWithTimestamp",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_addedValue",type:"uint256"}],name:"increaseApproval",outputs:[{name:"success",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"mint",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_targets",type:"address[]"},{name:"_freezes",type:"bool[]"}],name:"multiFreeze",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_targets",type:"address[]"},{name:"_timestamps",type:"uint256[]"}],name:"multiFreezeWithTimestamp",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"pause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[],name:"unpause",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{constant:!1,inputs:[{name:"_amount",type:"uint256"}],name:"withdraw",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{inputs:[],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"cap",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"frozenAccount",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"frozenTimestamp",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"INITIAL_SUPPLY",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"MAX_SUPPLY",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"mintingFinished",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"paused",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],b=[{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"},{indexed:!0,name:"newOwner",type:"address"}],name:"OwnershipTransferred",type:"event"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"_transfer",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"_transferFrom",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_types",type:"uint256"},{name:"_myAddress",type:"address"},{name:"_toAddress",type:"address"},{name:"_numbers",type:"uint256"},{name:"_content",type:"string"}],name:"addVoteList",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_spender",type:"address"},{name:"_value",type:"uint256"}],name:"approve",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_target",type:"address"},{name:"_freeze",type:"bool"}],name:"freeze",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_amount",type:"uint256"}],name:"mint",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{anonymous:!1,inputs:[{indexed:!0,name:"from",type:"address"},{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Transfer",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"to",type:"address"},{indexed:!1,name:"amount",type:"uint256"}],name:"Mint",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"owner",type:"address"},{indexed:!0,name:"spender",type:"address"},{indexed:!1,name:"value",type:"uint256"}],name:"Approval",type:"event"},{anonymous:!1,inputs:[{indexed:!1,name:"myAddress",type:"address"},{indexed:!0,name:"createTime",type:"uint256"},{indexed:!0,name:"content",type:"string"},{indexed:!0,name:"numbers",type:"uint256"},{indexed:!1,name:"codes",type:"uint256"}],name:"createVote",type:"event"},{anonymous:!1,inputs:[{indexed:!0,name:"previousOwner",type:"address"}],name:"OwnershipRenounced",type:"event"},{constant:!1,inputs:[{name:"_name",type:"string"},{name:"_surname",type:"string"},{name:"_sex",type:"string"},{name:"_nationality",type:"string"},{name:"_birDate",type:"string"},{name:"_passports",type:"string"},{name:"_position",type:"uint256"},{name:"_userAddress",type:"address"}],name:"setKycUserMsg",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"code",type:"uint256"},{name:"_isVote",type:"bool"}],name:"setVoteList",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"code",type:"uint256"}],name:"successCode",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transfer",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"_from",type:"address"},{name:"_to",type:"address"},{name:"_value",type:"uint256"}],name:"transferFrom",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"nonpayable",type:"function"},{constant:!1,inputs:[{name:"newOwner",type:"address"}],name:"transferOwnership",outputs:[],payable:!1,stateMutability:"nonpayable",type:"function"},{payable:!0,stateMutability:"payable",type:"fallback"},{inputs:[{name:"_name",type:"string"},{name:"_symbol",type:"string"},{name:"_totalSupply",type:"uint256"},{name:"_support",type:"uint8"},{name:"_quorum",type:"uint8"},{name:"_duration",type:"uint8"},{name:"_createAddress",type:"address"}],payable:!1,stateMutability:"nonpayable",type:"constructor"},{constant:!0,inputs:[{name:"_owner",type:"address"},{name:"_spender",type:"address"}],name:"allowance",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_owner",type:"address"}],name:"balanceOf",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"decimals",outputs:[{name:"",type:"uint8"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"frozenAccount",outputs:[{name:"",type:"bool"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"",type:"address"}],name:"frozenTimestamp",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[{name:"_my",type:"address"}],name:"getPosition",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"INITIAL_SUPPLY",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"name",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"owner",outputs:[{name:"",type:"address"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"symbol",outputs:[{name:"",type:"string"}],payable:!1,stateMutability:"view",type:"function"},{constant:!0,inputs:[],name:"totalSupply",outputs:[{name:"",type:"uint256"}],payable:!1,stateMutability:"view",type:"function"}],p={web3:{isInjected:!1,web3Instance:null,networkId:null,coinbase:null,balance:null,error:null},tokenInstance:null},r=a("aA9S"),u=a.n(r),m=new s.a(function(e,t){var a=window.web3;if(void 0!==a){var n=new d.a(a.currentProvider);e({web3:function(){return n}})}else t(new Error("Unable to connect to Metamask"))}).then(function(e){return new s.a(function(t,a){e.web3().eth.net.getId(function(n,s){n?a(new Error("Unable to retrieve network ID")):(e=u()({},e,{networkId:s}),t(e))})})}).then(function(e){return new s.a(function(t,a){e.web3().eth.getCoinbase(function(n,s){n?a(new Error("Unable to retrieve coinbase")):(e=u()({},e,{coinbase:s}),t(e))})})}).then(function(e){return new s.a(function(t,a){e.web3().eth.getBalance(e.coinbase,function(n,s){n?a(new Error("Unable to retrieve balance for address: "+e.coinbase)):(e=u()({},e,{balance:s}),t(e))})})}),y=new s.a(function(e,t){e({tokenContractInstance:new(new d.a(window.web3.currentProvider).eth.Contract)(f,"0x885ad6b4128027667ed7604e7b5ba400a95108e1")})});i.default.use(o.a);var l=new o.a.Store({strict:!0,state:p,mutations:{registerWeb3Instance:function(e,t){var a=t,n=e.web3;n.coinbase=a.coinbase,n.networkId=a.networkId,n.balance=parseInt(a.balance,10),n.web3Instance=a.web3,e.web3=n},registerAdminContractInstance:function(e,t){e.tokenInstance=function(){return t.tokenContractInstance}},registerUserContractInstance:function(e,t){e.userInstance=function(){return t.userContractInstance}},refreshCoinbase:function(e,t){e.web3.coinbase=t}},actions:{registerWeb3:function(e){var t=e.commit;m.then(function(e){t("registerWeb3Instance",e)}).catch(function(e){console.log("error in action registerWeb3",e)})},getContractInstance:function(e){var t=e.commit;y.then(function(e){t("registerAdminContractInstance",e)}).catch(function(e){return console.log(e)})},getUserContract:function(e,t){var a=e.commit;new s.a(function(e,a){e({userContractInstance:new(new d.a(window.web3.currentProvider).eth.Contract)(b,t.contract)})}).then(function(e){a("registerUserContractInstance",e)}).catch(console.log)}}}),h=a("3Yup"),g=function(e){var t=window.web3,a=void 0,n=new d.a(t.currentProvider);setInterval(function(){n.eth.getCoinbase().then(function(e){a=e}),void 0!==a&&a!==h.a.getSection("myAddress")&&(h.a.setSection("myAddress",a),location.reload())},500)},w={name:"App",mounted:function(){this.$store.dispatch("getContractInstance")},beforeCreate:function(){g(),this.$store.dispatch("registerWeb3")},created:function(){this.$Notice.config({duration:10})}},v={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var M=a("C7Lr")(w,v,!1,function(e){a("GywH")},null,null).exports,_=a("KGCO");i.default.use(_.a);var A=new _.a({scrollBehavior:function(e,t,a){return a||{x:0,y:0}},routes:[{path:"/",redirect:"/index"},{path:"/home",name:"Home",redirect:"/home/overview",component:function(){return Promise.all([a.e(0),a.e(2)]).then(a.bind(null,"0PpB"))},children:[{path:"overview",component:function(){return Promise.all([a.e(0),a.e(3)]).then(a.bind(null,"sC7C"))}},{path:"capTable",component:function(){return Promise.all([a.e(0),a.e(12)]).then(a.bind(null,"fM9J"))}},{path:"mintTransfer",component:function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,"Vjjf"))}},{path:"virtualBoardroom",component:function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,"yK50"))}},{path:"esop",component:function(){return a.e(10).then(a.bind(null,"WWKE"))}},{path:"sto",component:function(){return a.e(13).then(a.bind(null,"c1Qa"))}}]},{path:"/index",redirect:"/index/config",name:"Index",component:function(){return a.e(6).then(a.bind(null,"gwi3"))},children:[{path:"config",component:function(){return Promise.all([a.e(0),a.e(8)]).then(a.bind(null,"WBkb"))}},{path:"userIdent",component:function(){return Promise.all([a.e(0),a.e(5)]).then(a.bind(null,"GPdl"))}},{path:"companyIdent",component:function(){return Promise.all([a.e(0),a.e(7)]).then(a.bind(null,"BUFa"))}},{path:"tokenSet",component:function(){return Promise.all([a.e(0),a.e(1)]).then(a.bind(null,"Z9Fv"))}},{path:"tokenPayment",component:function(){return Promise.all([a.e(0),a.e(9)]).then(a.bind(null,"FoKo"))}}]}]});A.beforeEach(function(e,t,a){null==l.state.web3.coinbase&&l.commit("refreshCoinbase",h.a.getSection("myAddress")),a()});var S=A,k=a("wmI7"),C={en:{locale:"中"},zh:{locale:"EN",tipMsg1:"数据请求中",errorMsg1:"暂无当前组织！",errorMsg2:"请先登录metamask钱包，刷新后进行操作！",errorMsg3:"加载超时！",errorMsg4:"登录超时,请从新登录！",btn1:"上一步",btn2:"下一步",btn3:"提交",index:{msg1:"LittleBeeX 是一个旨在通过使用区块链技术帮助实现公司创建、<br>治理以及资产流通。我们权衡了中心化和非中心化的优势，在保<br>证效率和快速决策的同时，是公司治理透明化、自动化。",msg2:"@2018 LittleBeeX 版权所有",tipMsg1:"您的测试TOKEN已获取成功，<br/>请进入Metamask钱包查看！",errorMsg1:"已经获取足够Token，请勿重新获取！",btn1:"首页",btn2:"公司注册",btn3:"在线治理",btn4:"资产交易",btn5:"注册",btn6:"登录",btn7:"退出",btn8:"注册"},indexConfig:{msg1:"欢迎来到LittleBeeX",msg2:"当前节点：以太坊测试网(Ropsten)",msg3:"请先解锁Metamask钱包，并选择所需的服务器节点",msg4:"创建一个新组织，并开始KYC组织认证",msg5:"你的ETH余额为0，请先获取不少于0.1ETH",msg6:"或打开现有组织",tipMsg1:"您的测试TOKEN已获取成功，<br/>请进入Metamask钱包查看！",errorMsg1:"已经获取足够Token，请勿重新获取！",btn1:"获取测试Token",btn2:"获取(Ropsten)节点Eth",btn3:"开始创建",btn4:"打开组织"},indexUser:{msg1:"名",msg1_1:"请输入名",msg2:"姓",msg2_1:"请输入姓",msg3:"性别",msg3_1:"请选择性别",msg4:"国籍",msg4_1:"请选择国籍",msg5:"出生日期",msg5_1:"请输入出生日期",msg6:"护照号码",msg6_1:"请输入护照号码",msg7:"钱包地址",msg7_1:"请输入钱包地址",msg8:"公司职务",msg8_1:"请选择公司职务",msg9:"护照上传",msg10:"查看图片",tipMsg1:"钱包地址",tipMsg2:"个人信息已重新提交，请等待审核通过！",tipMsg3:"个人认证正在加速审核中，请耐心等耐！",tipMsg4:"个人认证审核未通过，请核对信息后重新提交",tipMsg5:"个人认证审核已经通过",errorMsg1:"请完善你的个人认证信息",errorMsg2:"文件提交错误",errorMsg3:"请上传护照信息",btn1:"确定"}}},x=a("4Q5q"),E=a.n(x),I=(a("XM8x"),a("aozt")),T=a.n(I);i.default.use(k.a);var j=new k.a({locale:"zh",messages:C});i.default.use(E.a),i.default.prototype.$axios=T.a,T.a.defaults.timeout=15e3,T.a.interceptors.request.use(function(e){return E.a.LoadingBar.start(),setTimeout(function(){null!=h.a.getSection("myAddress")&&""!=h.a.getSection("myAddress")||E.a.Notice.warning({title:"请先登录metamask钱包，刷新后进行操作！",duration:0})},1e3),e},function(e){return E.a.LoadingBar.error(),E.a.Notice.warning({title:"加载超时！",duration:0}),s.a.reject(e)}),T.a.interceptors.response.use(function(e){return E.a.LoadingBar.finish(),101==e.data.state||102==e.data.state?(E.a.Notice.warning({title:"登录超时,请从新登录！",duration:0}),S.push({path:"/"}),!1):e},function(e){return E.a.LoadingBar.error(),E.a.Notice.warning({title:"加载失败！",duration:0}),S.push({path:"/"}),s.a.reject(e)}),i.default.config.productionTip=!1;var B=new i.default;new i.default({el:"#app",data:{Bus:B},router:S,i18n:j,store:l,components:{App:M},template:"<App/>"})},UgYt:function(e,t){e.exports={modp1:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a63a3620ffffffffffffffff"},modp2:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece65381ffffffffffffffff"},modp5:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca237327ffffffffffffffff"},modp14:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aacaa68ffffffffffffffff"},modp15:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a93ad2caffffffffffffffff"},modp16:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c934063199ffffffffffffffff"},modp17:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dcc4024ffffffffffffffff"},modp18:{gen:"02",prime:"ffffffffffffffffc90fdaa22168c234c4c6628b80dc1cd129024e088a67cc74020bbea63b139b22514a08798e3404ddef9519b3cd3a431b302b0a6df25f14374fe1356d6d51c245e485b576625e7ec6f44c42e9a637ed6b0bff5cb6f406b7edee386bfb5a899fa5ae9f24117c4b1fe649286651ece45b3dc2007cb8a163bf0598da48361c55d39a69163fa8fd24cf5f83655d23dca3ad961c62f356208552bb9ed529077096966d670c354e4abc9804f1746c08ca18217c32905e462e36ce3be39e772c180e86039b2783a2ec07a28fb5c55df06f4c52c9de2bcbf6955817183995497cea956ae515d2261898fa051015728e5a8aaac42dad33170d04507a33a85521abdf1cba64ecfb850458dbef0a8aea71575d060c7db3970f85a6e1e4c7abf5ae8cdb0933d71e8c94e04a25619dcee3d2261ad2ee6bf12ffa06d98a0864d87602733ec86a64521f2b18177b200cbbe117577a615d6c770988c0bad946e208e24fa074e5ab3143db5bfce0fd108e4b82d120a92108011a723c12a787e6d788719a10bdba5b2699c327186af4e23c1a946834b6150bda2583e9ca2ad44ce8dbbbc2db04de8ef92e8efc141fbecaa6287c59474e6bc05d99b2964fa090c3a2233ba186515be7ed1f612970cee2d7afb81bdd762170481cd0069127d5b05aa993b4ea988d8fddc186ffb7dc90a6c08f4df435c93402849236c3fab4d27c7026c1d4dcb2602646dec9751e763dba37bdf8ff9406ad9e530ee5db382f413001aeb06a53ed9027d831179727b0865a8918da3edbebcf9b14ed44ce6cbaced4bb1bdb7f1447e6cc254b332051512bd7af426fb8f401378cd2bf5983ca01c64b92ecf032ea15d1721d03f482d7ce6e74fef6d55e702f46980c82b5a84031900b1c9e59e7c97fbec7e8f323a97a7e36cc88be0f1d45b7ff585ac54bd407b22b4154aacc8f6d7ebf48e1d814cc5ed20f8037e0a79715eef29be32806a1d58bb7c5da76f550aa3d8a1fbff0eb19ccb1a313d55cda56c9ec2ef29632387fe8d76e3c0468043e8f663f4860ee12bf2d5b0b7474d6e694f91e6dbe115974a3926f12fee5e438777cb6a932df8cd8bec4d073b931ba3bc832b68d9dd300741fa7bf8afc47ed2576f6936ba424663aab639c5ae4f5683423b4742bf1c978238f16cbe39d652de3fdb8befc848ad922222e04a4037c0713eb57a81a23f0c73473fc646cea306b4bcbc8862f8385ddfa9d4b7fa2c087e879683303ed5bdd3a062b3cf5b3a278a66d2a13f83f44f82ddf310ee074ab6a364597e899a0255dc164f31cc50846851df9ab48195ded7ea1b1d510bd7ee74d73faf36bc31ecfa268359046f4eb879f924009438b481c6cd7889a002ed5ee382bc9190da6fc026e479558e4475677e9aa9e3050e2765694dfc81f56e880b96e7160c980dd98edd3dfffffffffffffffff"}}},WOOH:function(e,t){e.exports={name:"websocket",description:"Websocket Client & Server Library implementing the WebSocket protocol as specified in RFC 6455.",keywords:["websocket","websockets","socket","networking","comet","push","RFC-6455","realtime","server","client"],author:"Brian McKelvey <brian@worlize.com> (https://www.worlize.com/)",contributors:["Iñaki Baz Castillo <ibc@aliax.net> (http://dev.sipdoc.net)"],version:"1.0.26",repository:{type:"git",url:"https://github.com/theturtle32/WebSocket-Node.git"},homepage:"https://github.com/theturtle32/WebSocket-Node",engines:{node:">=0.10.0"},dependencies:{debug:"^2.2.0",nan:"^2.3.3","typedarray-to-buffer":"^3.1.2",yaeti:"^0.0.6"},devDependencies:{"buffer-equal":"^1.0.0",faucet:"^0.0.1",gulp:"git+https://github.com/gulpjs/gulp.git#4.0","gulp-jshint":"^2.0.4","jshint-stylish":"^2.2.1",jshint:"^2.0.0",tape:"^4.0.1"},config:{verbose:!1},scripts:{install:"(node-gyp rebuild 2> builderror.log) || (exit 0)",test:"faucet test/unit",gulp:"gulp"},main:"index",directories:{lib:"./lib"},browser:"lib/browser.js",license:"Apache-2.0",_from:"websocket@git://github.com/frozeman/WebSocket-Node.git#browserifyCompatible",_resolved:"https://github.com/frozeman/WebSocket-Node.git#browserifyCompatible",__npminstall_done:"Thu Dec 20 2018 17:36:38 GMT+0800 (GMT+08:00)"}},XM8x:function(e,t){},Zmyt:function(e,t){e.exports={name:"elliptic",version:"6.4.1",description:"EC cryptography",main:"lib/elliptic.js",files:["lib"],scripts:{jscs:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",jshint:"jscs benchmarks/*.js lib/*.js lib/**/*.js lib/**/**/*.js test/index.js",lint:"npm run jscs && npm run jshint",unit:"istanbul test _mocha --reporter=spec test/index.js",test:"npm run lint && npm run unit",version:"grunt dist && git add dist/"},repository:{type:"git",url:"git@github.com:indutny/elliptic"},keywords:["EC","Elliptic","curve","Cryptography"],author:"Fedor Indutny <fedor@indutny.com>",license:"MIT",bugs:{url:"https://github.com/indutny/elliptic/issues"},homepage:"https://github.com/indutny/elliptic",devDependencies:{brfs:"^1.4.3",coveralls:"^2.11.3",grunt:"^0.4.5","grunt-browserify":"^5.0.0","grunt-cli":"^1.2.0","grunt-contrib-connect":"^1.0.0","grunt-contrib-copy":"^1.0.0","grunt-contrib-uglify":"^1.0.1","grunt-mocha-istanbul":"^3.0.1","grunt-saucelabs":"^8.6.2",istanbul:"^0.4.2",jscs:"^2.9.0",jshint:"^2.6.0",mocha:"^2.1.0"},dependencies:{"bn.js":"^4.4.0",brorand:"^1.0.1","hash.js":"^1.0.0","hmac-drbg":"^1.0.0",inherits:"^2.0.1","minimalistic-assert":"^1.0.0","minimalistic-crypto-utils":"^1.0.0"},__npminstall_done:"Thu Dec 20 2018 17:36:33 GMT+0800 (GMT+08:00)",_from:"elliptic@6.4.1",_resolved:"http://registry.npm.taobao.org/elliptic/download/elliptic-6.4.1.tgz"}},gCvn:function(e,t){e.exports={"aes-128-ecb":{cipher:"AES",key:128,iv:0,mode:"ECB",type:"block"},"aes-192-ecb":{cipher:"AES",key:192,iv:0,mode:"ECB",type:"block"},"aes-256-ecb":{cipher:"AES",key:256,iv:0,mode:"ECB",type:"block"},"aes-128-cbc":{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},"aes-192-cbc":{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},"aes-256-cbc":{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},aes128:{cipher:"AES",key:128,iv:16,mode:"CBC",type:"block"},aes192:{cipher:"AES",key:192,iv:16,mode:"CBC",type:"block"},aes256:{cipher:"AES",key:256,iv:16,mode:"CBC",type:"block"},"aes-128-cfb":{cipher:"AES",key:128,iv:16,mode:"CFB",type:"stream"},"aes-192-cfb":{cipher:"AES",key:192,iv:16,mode:"CFB",type:"stream"},"aes-256-cfb":{cipher:"AES",key:256,iv:16,mode:"CFB",type:"stream"},"aes-128-cfb8":{cipher:"AES",key:128,iv:16,mode:"CFB8",type:"stream"},"aes-192-cfb8":{cipher:"AES",key:192,iv:16,mode:"CFB8",type:"stream"},"aes-256-cfb8":{cipher:"AES",key:256,iv:16,mode:"CFB8",type:"stream"},"aes-128-cfb1":{cipher:"AES",key:128,iv:16,mode:"CFB1",type:"stream"},"aes-192-cfb1":{cipher:"AES",key:192,iv:16,mode:"CFB1",type:"stream"},"aes-256-cfb1":{cipher:"AES",key:256,iv:16,mode:"CFB1",type:"stream"},"aes-128-ofb":{cipher:"AES",key:128,iv:16,mode:"OFB",type:"stream"},"aes-192-ofb":{cipher:"AES",key:192,iv:16,mode:"OFB",type:"stream"},"aes-256-ofb":{cipher:"AES",key:256,iv:16,mode:"OFB",type:"stream"},"aes-128-ctr":{cipher:"AES",key:128,iv:16,mode:"CTR",type:"stream"},"aes-192-ctr":{cipher:"AES",key:192,iv:16,mode:"CTR",type:"stream"},"aes-256-ctr":{cipher:"AES",key:256,iv:16,mode:"CTR",type:"stream"},"aes-128-gcm":{cipher:"AES",key:128,iv:12,mode:"GCM",type:"auth"},"aes-192-gcm":{cipher:"AES",key:192,iv:12,mode:"GCM",type:"auth"},"aes-256-gcm":{cipher:"AES",key:256,iv:12,mode:"GCM",type:"auth"}}}},["NHnr"]);
//# sourceMappingURL=app.e7b18c48c83330dd67af.js.map