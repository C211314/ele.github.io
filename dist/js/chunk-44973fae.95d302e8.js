(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-44973fae"],{"20c8":function(e,t,s){},"7bb7":function(e,t,s){"use strict";var a=s("20c8"),o=s.n(a);o.a},"7e55":function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"addWarp"},[s("header",[s("router-link",{attrs:{to:"/home"}},[s("i",{staticClass:"el-icon-arrow-left"})]),s("div",[e._v("新增地址")])],1),s("div",{staticClass:"add_div"},[s("section",{staticClass:"add_section"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",placeholder:"请填写你的名字"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),e.isShow_P?s("p",[e._v("请填写你的名字")]):e._e()]),s("section",{staticClass:"add_section"},[s("router-link",{attrs:{to:"/addDetail"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.address,expression:"address"}],attrs:{type:"text",placeholder:"小区/写字楼/学校等"},domProps:{value:e.address},on:{click:e.chooseAddBtn,input:function(t){t.target.composing||(e.address=t.target.value)}}})])],1),s("section",{staticClass:"add_section"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.address1,expression:"address1"}],attrs:{type:"text",placeholder:"请填写详细送餐地址"},domProps:{value:e.address1},on:{input:function(t){t.target.composing||(e.address1=t.target.value)}}})]),s("section",{staticClass:"add_section"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],attrs:{type:"text",placeholder:"请填写能联系到您的手机"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),s("section",{staticClass:"add_section2"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.phone_bk,expression:"phone_bk"}],attrs:{type:"text",placeholder:"备用联系电话(选填)"},domProps:{value:e.phone_bk},on:{input:function(t){t.target.composing||(e.phone_bk=t.target.value)}}})]),s("section",{staticClass:"add_btn",on:{click:e.addLoction}},[e._v("新增地址")])])])},o=[],n=(s("b0c0"),{name:"Add",data:function(){return{isShow_P:!1,name:"",address:"",address1:"",phone:"",phone_bk:"",userId:"",tag:"null",sex:1,tag_type:"3",poi_type:"0"}},created:function(){this.userId=localStorage.getItem("user_id"),this.address=this.$store.state.addressInfo.name,this.name=this.$store.state.userName},methods:{chooseAddBtn:function(){this.$store.state.userName=this.name},addLoction:function(){var e=this;this.axios.post("/v1/users/"+this.userId+"/addresses",{user_id:this.userId,name:this.name,address:this.$store.state.addressInfo.address,address_detail:this.address1,geohash:this.$store.state.addressInfo.geohash,phone:this.phone,tag:this.tag,sex:this.sex,poi_type:this.poi_type,phone_bk:this.phone_bk,tag_type:this.tag_type}).then((function(t){console.log(t),"添加地址成功"===t.success&&(e.$router.push({path:"address"}),e.$store.state.userName="")})).catch((function(e){}))}}}),i=n,d=(s("7bb7"),s("2877")),r=Object(d["a"])(i,a,o,!1,null,"0b9eb019",null);t["default"]=r.exports}}]);
//# sourceMappingURL=chunk-44973fae.95d302e8.js.map