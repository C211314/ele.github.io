(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-330a7b56"],{"0d5f":function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"city_container"},[s("header",{attrs:{id:"head_top"}},[s("section",{staticClass:"head_goback"},[s("router-link",{attrs:{to:"/home"}},[s("i",{staticClass:"el-icon-arrow-left"})])],1),s("section",{staticClass:"title_head ellipsis"},[s("span",[t._v(t._s(t.cityInfo?t.cityInfo.name:""))])]),s("router-link",{attrs:{to:"/home"}},[t._v("切换城市")])],1),s("div",{staticClass:"city_form"},[s("div",[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputV,expression:"inputV"}],staticClass:"city_input input_style",attrs:{type:"search",placeholder:"输入学校、商务楼、地址"},domProps:{value:t.inputV},on:{input:function(e){e.target.composing||(t.inputV=e.target.value)}}})]),s("div",[s("input",{staticClass:"city_submit input_style",attrs:{type:"submit",placeholder:"提交"},on:{click:t.searchPlace}})])]),t.isShowHistoryHeader?s("header",{staticClass:"pois_search_history"},[t._v("搜索历史")]):t._e(),s("ul",{staticClass:"getpois_ul"},t._l(t.placeArr,(function(e){return s("li",{key:e.geohash,on:{click:function(s){return t.choosePlace(e)}}},[s("h4",{staticClass:"pois_name ellipsis"},[t._v(t._s(e.name))]),s("p",{staticClass:"pois_address ellipsis"},[t._v(t._s(e.address))])])})),0),t.isShowClearBtn?s("div",{staticClass:"clear_all_history",on:{click:t.clearAllPlace}},[t._v("清空所有")]):t._e()])},i=[],o=(s("4de4"),s("b0c0"),{name:"City",data:function(){return{cityId:0,cityInfo:null,inputV:"",placeArr:[],isShowHistoryHeader:!0,isShowClearBtn:!1,cateBtn:[]}},created:function(){var t=this;this.cityId=this.$route.params.cityId,this.axios.get("/v1/cities/"+this.cityId).then((function(e){console.log(e),t.cityInfo=e})).catch((function(t){})),localStorage.getItem("placeHistory")&&(this.placeArr=JSON.parse(localStorage.getItem("placeHistory")),this.isShowClearBtn=!0)},methods:{searchPlace:function(){var t=this;this.axios.get("/v1/pois",{params:{city_id:this.cityInfo.id,keyword:this.inputV,type:"search"}}).then((function(e){t.placeArr=e,t.isShowHistoryHeader=!1})).catch((function(t){}))},choosePlace:function(t){if(console.log(t),localStorage.getItem("placeHistory")){var e=JSON.parse(localStorage.getItem("placeHistory")),s=e.filter((function(e){return e.name==t.name}));s.length||(e.push(t),localStorage.setItem("placeHistory",JSON.stringify(e)))}else{var a=[];a.push(t),localStorage.setItem("placeHistory",JSON.stringify(a))}localStorage.setItem("geohashId",t.geohash),localStorage.setItem("cityName",t.name),this.$router.push({path:"/msite"})},clearAllPlace:function(){localStorage.removeItem("placeHistory"),this.placeArr=[],this.isShowClearBtn=!1}}}),c=o,l=(s("d643"),s("2877")),r=Object(l["a"])(c,a,i,!1,null,"871680ea",null);e["default"]=r.exports},b1d8:function(t,e,s){},d643:function(t,e,s){"use strict";var a=s("b1d8"),i=s.n(a);i.a}}]);
//# sourceMappingURL=chunk-330a7b56.3113abe9.js.map