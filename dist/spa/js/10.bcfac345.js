(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[10],{"72d8":function(t,s,e){"use strict";e.r(s);var a=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"q-pa-md"},[e("q-dialog",{model:{value:t.confirm,callback:function(s){t.confirm=s},expression:"confirm"}},[e("q-card",[e("q-card-section",{staticClass:"row items-center"},[e("q-avatar",{attrs:{icon:"warning",color:"secondary","text-color":"white"}}),e("span",{staticClass:"q-ml-sm"},[t._v("Are you sure you want to delete ?")])],1),e("q-card-actions",{attrs:{align:"right"}},[e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel",color:"secondary"}}),e("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{label:"Confirm",color:"red-5"},on:{click:function(s){return t.deleteUser()}}})],1)],1)],1),e("q-markup-table",{attrs:{flat:"",bordered:""}},[e("thead",{staticClass:"bg-teal"},[e("tr",[e("th",{attrs:{colspan:"7"}},[e("div",{staticClass:"row no-wrap items-center"},[e("div",{staticClass:"text-h5 q-ml-md text-white"},[t._v("Clients")])])])]),e("tr",{staticStyle:{color:"#444"}},[e("th",{staticClass:"text-left"},[t._v("Name")]),e("th",{staticClass:"text-right"},[t._v("Contact")]),e("th",{staticClass:"text-right"},[t._v("Email")]),e("th",{staticClass:"text-right"},[t._v("Gender")]),e("th",{staticClass:"text-right"},[t._v("Car type")]),e("th",{staticClass:"text-right"},[t._v("Address")]),e("th",{staticClass:"text-right"},[t._v("Actions")])])]),e("tbody",{staticClass:"bg-grey-3",staticStyle:{color:"#555555"}},t._l(t.formDatas,(function(s){return e("tr",{key:s.email},[e("td",{staticClass:"text-left"},[t._v(t._s(s.name))]),e("td",{staticClass:"text-right"},[t._v(t._s(s.contact))]),e("td",{staticClass:"text-right"},[t._v(t._s(s.email))]),e("th",{staticClass:"text-right"},[t._v(t._s(s.gender))]),e("td",{staticClass:"text-right"},[t._v(t._s(s.car_type))]),e("td",{staticClass:"text-right"},[t._v(t._s(s.address))]),e("td",{staticClass:"text-right"},[e("q-btn",{staticClass:"bg-grey-3 customBtn",attrs:{size:"sm",round:"",flat:"",color:"red-3",icon:"delete"},on:{click:function(e){return t.showConfrim(s.id)}}})],1)])})),0)])],1)},i=[],r={mounted(){this.getClients()},data(){return{edit:!1,formDatas:[],confirm:!1,del:{id:null}}},methods:{getClients(){this.$axios.get("clients").then((t=>{this.formDatas=t.data})).catch((t=>{console.log("error",t.message)}))},showConfrim(t){this.del.id=t,this.confirm=!0},deleteUser(){this.$axios.post("user/delete",this.del).then((t=>{this.getClients()})).catch((t=>{console.log("error",t.message),this.$q.notify({message:t.message,color:"red-4",position:"top",icon:"warning"})}))}}},o=r,c=e("2877"),l=e("24e8"),n=e("f09f"),d=e("a370"),h=e("cb32"),m=e("4b7e"),C=e("9c40"),g=e("2bb1"),p=e("7f67"),u=e("eebe"),f=e.n(u),v=Object(c["a"])(o,a,i,!1,null,null,null);s["default"]=v.exports;f()(v,"components",{QDialog:l["a"],QCard:n["a"],QCardSection:d["a"],QAvatar:h["a"],QCardActions:m["a"],QBtn:C["a"],QMarkupTable:g["a"]}),f()(v,"directives",{ClosePopup:p["a"]})}}]);