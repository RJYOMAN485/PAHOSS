(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[5],{"713b":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-layout",{attrs:{view:"lHh Lpr lFf"}},[a("q-header",{staticClass:"bg-cyan-8",attrs:{elevated:""}},[a("q-toolbar",["admin"==t.roles?a("q-btn",{attrs:{flat:"",dense:"",round:"",icon:"menu","aria-label":"Menu"},on:{click:function(e){t.leftDrawerOpen=!t.leftDrawerOpen}}}):t._e(),a("router-link",{staticStyle:{"text-decoration":"none",color:"rgb(236 227 227)"},attrs:{to:"/dashboard"}},[a("q-toolbar-title",[a("q-avatar",[a("img",{attrs:{src:"https://seeklogo.com/images/I/indian-government-logo-1C3F1925AA-seeklogo.com.png"}})]),t._v("\n            PAHOSS")],1)],1),a("q-space"),"user"==t.roles?a("q-item",{staticClass:"q-ml-md",attrs:{to:"/mybookings",clickable:""}},[a("q-item-section",[a("q-item-label",[t._v("Bookings")])],1)],1):t._e(),"user"==t.roles?a("q-item",{staticClass:"q-ml-md",attrs:{to:"/contact",clickable:""}},[a("q-item-section",[a("q-item-label",[t._v("Contact us")])],1)],1):t._e(),a("q-btn-dropdown",{attrs:{rounded:"",flat:"",icon:"account_circle",color:"white"}},[a("q-list",{staticClass:"q-pa-sm"},[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticStyle:{"min-height":"0!important"},attrs:{to:"/profile",clickable:""}},[a("q-item-section",[a("q-item-label",[t._v("Profile")])],1)],1),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],staticStyle:{"min-height":"0!important"},attrs:{clickable:""},on:{click:t.logout}},[a("q-item-section",[a("q-item-label",[t._v("Logout")])],1)],1)],1)],1)],1)],1),"admin"==t.roles?a("div",[a("q-drawer",{staticStyle:{color:"#444"},attrs:{"show-if-above":"",bordered:"","content-class":"bg-grey-1"},model:{value:t.leftDrawerOpen,callback:function(e){t.leftDrawerOpen=e},expression:"leftDrawerOpen"}},[a("q-list",[a("q-item-label",{staticClass:"text-grey-8",attrs:{header:""}},[t._v("\n          Essential Links\n        ")]),t._l(t.essentialLinks,(function(e){return a("EssentialLink",t._b({key:e.title},"EssentialLink",e,!1))})),a("q-expansion-item",{attrs:{"expand-separator":"",icon:"perm_identity",label:"Bookings"}},[a("q-item",{staticClass:"q-ml-md",attrs:{to:"/booking/today",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"person"}})],1),a("q-item-section",[a("q-item-label",[t._v("Today's Booking")])],1)],1),a("q-item",{staticClass:"q-ml-md",attrs:{to:"/booking/active",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"person"}})],1),a("q-item-section",[a("q-item-label",[t._v("Active Booking")])],1)],1),a("q-item",{staticClass:"q-ml-md",attrs:{to:"/bookings",clickable:""}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"person"}})],1),a("q-item-section",[a("q-item-label",[t._v("Bookings")])],1)],1)],1),a("q-item",{attrs:{clickable:"",to:"/feedback"}},[a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:"mail"}})],1),a("q-item-section",[a("q-item-label",[t._v("Feedback")])],1)],1)],2)],1)],1):t._e(),a("q-page-container",[a("router-view")],1)],1)},o=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("q-item",{attrs:{clickable:"",to:t.link}},[t.icon?a("q-item-section",{attrs:{avatar:""}},[a("q-icon",{attrs:{name:t.icon}})],1):t._e(),a("q-item-section",[a("q-item-label",[t._v(t._s(t.title))]),a("q-item-label",{attrs:{caption:""}},[t._v("\n      "+t._s(t.caption)+"\n    ")])],1)],1)},s=[],l={name:"EssentialLink",props:{title:{type:String,required:!0},caption:{type:String,default:""},link:{type:String,default:"#"},icon:{type:String,default:""}}},r=l,c=a("2877"),m=a("66e5"),p=a("4074"),u=a("0016"),q=a("0170"),b=a("eebe"),d=a.n(b),k=Object(c["a"])(r,n,s,!1,null,null,null),g=k.exports;d()(k,"components",{QItem:m["a"],QItemSection:p["a"],QIcon:u["a"],QItemLabel:q["a"]});const v=[{title:"Home",icon:"home",link:"/admin"},{title:"Parking Zones",icon:"directions_car",link:"/parking-zones"},{title:"Clients",icon:"person",link:"/clients"}];var h={beforeMount(){"/"==this.$route.fullPath&&this.$router.push("/dashboard"),console.log("before mount")},created(){"/"==this.$route.fullPath&&this.$router.push("/dashboard"),this.roles=this.$store.state.store.userDetails.roles,console.log("roles",this.roles)},name:"MainLayout",components:{EssentialLink:g},data(){return{leftDrawerOpen:!1,essentialLinks:v,roles:""}},methods:{logout(){this.$axios.post("http://127.0.0.1:8000/logout").then((t=>{this.$router.push("/login/user")})).catch((t=>{console.log(t)}))}}},f=h,_=a("4d5a"),w=a("e359"),Q=a("65c6"),y=a("9c40"),L=a("6ac5"),C=a("cb32"),S=a("2c91"),I=a("f20b"),x=a("1c1c"),D=a("9404"),O=a("3b73"),$=a("09e3"),E=a("7f67"),B=Object(c["a"])(f,i,o,!1,null,null,null);e["default"]=B.exports;d()(B,"components",{QLayout:_["a"],QHeader:w["a"],QToolbar:Q["a"],QBtn:y["a"],QToolbarTitle:L["a"],QAvatar:C["a"],QSpace:S["a"],QItem:m["a"],QItemSection:p["a"],QItemLabel:q["a"],QBtnDropdown:I["a"],QList:x["a"],QDrawer:D["a"],QExpansionItem:O["a"],QIcon:u["a"],QPageContainer:$["a"]}),d()(B,"directives",{ClosePopup:E["a"]})}}]);