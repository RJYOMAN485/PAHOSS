(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[2],{"013f":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"row flex flex-center q-gutter-md custombg",staticStyle:{"min-height":"100vh"}},[e("q-card",{staticClass:"my-card q-pa-md col",staticStyle:{"max-width":"600px",border:"3px solid #26A69A"}},[e("q-card-section",{staticClass:"bg-grey-8 text-white"},[e("div",{staticClass:"text-h6 text-center"},[t._v("User Login")])]),e("q-card-section",[e("q-form",{staticClass:"q-gutter-md",on:{submit:function(a){return a.preventDefault(),t.submitForm(a)}}},[e("q-input",{attrs:{rules:[function(t){return t&&t.length>0||"Please type something"}],color:"purple-12",label:"Email",type:"email"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"email"}})]},proxy:!0}]),model:{value:t.formData.email,callback:function(a){t.$set(t.formData,"email",a)},expression:"formData.email"}}),e("q-input",{attrs:{rules:[function(t){return t&&t.length>0||"Please type something"}],type:"password",color:"purple-12",label:"Password"},scopedSlots:t._u([{key:"prepend",fn:function(){return[e("q-icon",{attrs:{name:"lock"}})]},proxy:!0}]),model:{value:t.formData.password,callback:function(a){t.$set(t.formData,"password",a)},expression:"formData.password"}}),e("q-btn",{staticClass:"full-width",attrs:{label:"Login",type:"submit",color:"secondary"}})],1),e("div",{staticClass:"text-green q-mt-md",staticStyle:{"max-width":"430px",display:"flex"}},[e("small",{},[e("q-icon",{attrs:{name:"info",size:"xs"}}),t._v("Already have an account ?\n          "),e("q-btn",{attrs:{size:"xs",to:"/register",flat:"",color:"blue",dense:"",label:"Register"}}),t._v("\n          page instead\n        ")],1)])],1)],1)],1)},o=[],n={mounted(){this.$axios.defaults.withCredentials=!0,this.$axios.get("https://pahoss.herokuapp.com/api/user",this.formData).then((t=>{console.log("auth 1",t.data)})).catch((t=>{console.log(t.message)}))},data(){return{name:null,age:null,loading:!1,accept:!1,errors:[],formData:{email:"rj@gmail.com",password:"password",roles:"user"},error:{},url:"http://127.0.0.1:8000"}},methods:{async submitForm(){this.$axios.defaults.withCredentials=!0,this.loading=!0,console.log("submitted"),this.$axios.get("https://pahoss.herokuapp.com/api/user",this.formData).then((t=>{console.log("auth1",t.data)})).catch((t=>{console.log("mounted",t.message)})),await this.$axios.get("https://pahoss.herokuapp.com/sanctum/csrf-cookie").then((t=>{this.$axios.post("https://pahoss.herokuapp.com/login",this.formData).then((t=>{console.log(t.data)})).catch((t=>{console.log("not auth",t.message)}))})),this.$axios.get("https://pahoss.herokuapp.com/api/user",this.formData).then((t=>{console.log("auth2",t.data)})).catch((t=>{console.log("not auth2",t.message)}))}}},r=n,i=(e("32f5"),e("2877")),l=e("f09f"),c=e("a370"),u=e("0378"),p=e("27f9"),m=e("0016"),h=e("9c40"),d=e("eebe"),f=e.n(d),g=Object(i["a"])(r,s,o,!1,null,"79ad3bfa",null);a["default"]=g.exports;f()(g,"components",{QCard:l["a"],QCardSection:c["a"],QForm:u["a"],QInput:p["a"],QIcon:m["a"],QBtn:h["a"]})},"32f5":function(t,a,e){"use strict";e("81da")},"81da":function(t,a,e){}}]);