(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{9293:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"row q-pa-md q-col-gutter-sm justify-start"},t._l(t.feedbacks,(function(e){return s("div",{key:e.message,staticClass:"col-md-4 col-sm-4 col-xs-6 col-lg-3"},[s("q-card",{staticClass:"my-card bg-grey-2 text-weight-light"},[s("q-card-section",{staticClass:"text-right "},[s("div",{staticClass:"text-subtitle2 text-caption"},[t._v("-"+t._s(e.name))])]),s("q-card-section",{staticClass:"q-pt-none "},[t._v("\n       "+t._s(e.message)+"\n      ")])],1)],1)})),0)},c=[],n={data(){return{feedbacks:[]}},mounted(){this.getFeedbacks()},methods:{getFeedbacks(){this.$axios.get("feedbacks",this.formData).then((t=>{this.feedbacks=t.data})).catch((t=>{console.log(t.message),this.$q.notify({message:t.message,color:"red-4",position:"top",icon:"warning"})}))}}},i=n,o=s("2877"),l=s("f09f"),r=s("a370"),d=s("eebe"),g=s.n(d),m=Object(o["a"])(i,a,c,!1,null,null,null);e["default"]=m.exports;g()(m,"components",{QCard:l["a"],QCardSection:r["a"]})}}]);