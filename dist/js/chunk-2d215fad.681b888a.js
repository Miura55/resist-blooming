(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d215fad"],{c109:function(a,e,t){"use strict";t.r(e);var r=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",[t("h1",[a._v("ようこそ "+a._s(a.userName)+" さん")]),t("br"),t("button",{staticClass:"btn btn-danger mb-1",attrs:{id:"logout"},on:{click:a.logout}},[a._v("ログアウト")]),t("form",{attrs:{name:"form",id:"form"}},[t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"name"}},[a._v("氏名")]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.familyName,expression:"reqParam.familyName"}],staticClass:"form-control",attrs:{type:"text",id:"familyName",placeholder:"姓"},domProps:{value:a.reqParam.familyName},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"familyName",e.target.value)}}})]),t("div",{staticClass:"col-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.firstName,expression:"reqParam.firstName"}],staticClass:"form-control",attrs:{type:"text",id:"firstName",placeholder:"名"},domProps:{value:a.reqParam.firstName},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"firstName",e.target.value)}}})])])]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"yomi"}},[a._v("ふりがな")]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.familyNameCap,expression:"reqParam.familyNameCap"}],staticClass:"form-control",attrs:{type:"text",id:"familyNameCap",placeholder:"せい"},domProps:{value:a.reqParam.familyNameCap},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"familyNameCap",e.target.value)}}})]),t("div",{staticClass:"col-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.firstNameCap,expression:"reqParam.firstNameCap"}],staticClass:"form-control",attrs:{type:"text",id:"firstNameCap",placeholder:"めい"},domProps:{value:a.reqParam.firstNameCap},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"firstNameCap",e.target.value)}}})])])]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"control-label",attrs:{for:"birthday"}},[a._v("生年月日")]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.bYear,expression:"reqParam.bYear"}],staticClass:"form-control",attrs:{type:"tel",name:"year",id:"bYear",maxlength:"4",placeholder:"年"},domProps:{value:a.reqParam.bYear},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"bYear",e.target.value)}}})]),t("div",{staticClass:"col-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.bMonth,expression:"reqParam.bMonth"}],staticClass:"form-control",attrs:{type:"tel",name:"month",id:"bMonth",maxlength:"2",placeholder:"月"},domProps:{value:a.reqParam.bMonth},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"bMonth",e.target.value)}}})]),t("div",{staticClass:"col-3"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.bDay,expression:"reqParam.bDay"}],staticClass:"form-control",attrs:{type:"tel",name:"day",id:"bDay",maxlength:"2",placeholder:"日"},domProps:{value:a.reqParam.bDay},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"bDay",e.target.value)}}})])])]),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"bloodType"}},[a._v("血液型")]),t("select",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.bloodType,expression:"reqParam.bloodType"}],staticClass:"form-control col-4",attrs:{name:"bloodType",id:"bloodType"},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.$set(a.reqParam,"bloodType",e.target.multiple?t:t[0])}}},[t("option",{attrs:{value:""}},[a._v("選択してください")]),t("option",{attrs:{value:"A"}},[a._v("A")]),t("option",{attrs:{value:"B"}},[a._v("B")]),t("option",{attrs:{value:"O"}},[a._v("O")]),t("option",{attrs:{value:"AB"}},[a._v("AB")])])]),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"job"}},[a._v("職業")]),t("select",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.job,expression:"reqParam.job"}],staticClass:"form-control col-4",attrs:{name:"job",id:"job"},on:{change:function(e){var t=Array.prototype.filter.call(e.target.options,(function(a){return a.selected})).map((function(a){var e="_value"in a?a._value:a.value;return e}));a.$set(a.reqParam,"job",e.target.multiple?t:t[0])}}},[t("option",{attrs:{value:""}},[a._v("選択してください")]),t("option",{attrs:{value:"公務員"}},[a._v("公務員")]),t("option",{attrs:{value:"経営者・役員"}},[a._v("経営者・役員")]),t("option",{attrs:{value:"会社員"}},[a._v("会社員")]),t("option",{attrs:{value:"自営業"}},[a._v("自営業")]),t("option",{attrs:{value:"自由業"}},[a._v("自由業")]),t("option",{attrs:{value:"専業主婦"}},[a._v("専業主婦")]),t("option",{attrs:{value:"パート・アルバイト"}},[a._v("パート・アルバイト")]),t("option",{attrs:{value:"学生"}},[a._v("学生")]),t("option",{attrs:{value:"その他"}},[a._v("その他")])])]),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"zipcode"}},[a._v("郵便番号(数字のみ)")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.zipcode,expression:"reqParam.zipcode"}],staticClass:"form-control col-4",attrs:{type:"tel",name:"zipcode",id:"zipcode"},domProps:{value:a.reqParam.zipcode},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"zipcode",e.target.value)}}})]),t("div",{staticClass:"form-group"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"region"}},[a._v("住所")]),t("div",{staticClass:"row justify-content-center"},[t("div",{staticClass:"col-4"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.region,expression:"reqParam.region"}],staticClass:"form-control",attrs:{type:"text",name:"region",id:"region",placeholder:"都道府県"},domProps:{value:a.reqParam.region},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"region",e.target.value)}}})]),t("div",{staticClass:"col-7"},[t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.city,expression:"reqParam.city"}],staticClass:"form-control",attrs:{type:"text",name:"city",id:"city",placeholder:"市区町村以下"},domProps:{value:a.reqParam.city},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"city",e.target.value)}}})])])]),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"phoneNumber"}},[a._v("電話番号")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.phoneNumber,expression:"reqParam.phoneNumber"}],staticClass:"form-control col-4",attrs:{type:"tel",name:"phoneNumber",id:"phoneNumber"},domProps:{value:a.reqParam.phoneNumber},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"phoneNumber",e.target.value)}}})]),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"startDate"}},[a._v("開始希望日")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.startDate,expression:"reqParam.startDate"}],staticClass:"form-control col-5",attrs:{type:"date",name:"startDate",id:"startDate"},domProps:{value:a.reqParam.startDate},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"startDate",e.target.value)}}})]),t("div",{staticClass:"form-group row"},[t("label",{staticClass:"col-4 control-label",attrs:{for:"endDate"}},[a._v("終了希望日")]),t("input",{directives:[{name:"model",rawName:"v-model",value:a.reqParam.endDate,expression:"reqParam.endDate"}],staticClass:"form-control col-5",attrs:{type:"date",name:"endDate",id:"endDate"},domProps:{value:a.reqParam.endDate},on:{input:function(e){e.target.composing||a.$set(a.reqParam,"endDate",e.target.value)}}})])]),t("button",{staticClass:"btn btn-primary col-4",on:{click:a.send}},[a._v("登録")])])},o=[],s={data:function(){return{inClient:!1,userName:"",reqParam:{familyName:"",firstName:"",firstNameCap:"",familyNameCap:"",bYear:"",bMonth:"",bDay:"",bloodType:"",job:"",zipcode:"",region:"",city:"",phoneNumber:"",startDate:"",endDate:""}}},created:function(){this.initializeLiff()},methods:{initializeLiff:function(){var a=this;liff.init({liffId:"1653851902-lV2nJOb2"},(function(e){a.loginCheck()}),(function(a){console.log("LIFF initialization failed",a)}))},loginCheck:function(){var a=this;liff.isInClient()?(document.getElementById("logout").style.display="none",liff.getProfile().then((function(e){a.userName=e.displayName,console.log(a.userName)})).catch((function(a){console.log("error",a)}))):liff.isLoggedIn()?liff.getProfile().then((function(e){a.userName=e.displayName,console.log(a.userName),a.$swal("ログインしました")})).catch((function(a){console.log("error",a)})):this.$router.push({name:"Login"})},logout:function(){liff.isLoggedIn()&&(liff.logout(),this.$router.push({name:"Login"}))},send:function(){var a=this;if(console.log(this.reqParam),!this.reqParam.familyName||!this.reqParam.firstName||!this.reqParam.bYear||!this.reqParam.bDay||!this.reqParam.bMonth||!this.reqParam.bloodType||!this.reqParam.job||!this.reqParam.zipcode||!this.reqParam.phoneNumber||!this.reqParam.startDate||!this.reqParam.endDate)return this.$swal("入力不備があります"),!0;this.axios.post("https://8457ede6.us-south.apigw.appdomain.cloud/blooming/resist",this.reqParam).then((function(e){console.log(e),liff.isInClient()&&liff.closeWindow(),a.$swal("送信しました")})).catch((function(a){console.log(a)}))}}},i=s,l=t("2877"),n=Object(l["a"])(i,r,o,!1,null,null,null);e["default"]=n.exports}}]);
//# sourceMappingURL=chunk-2d215fad.681b888a.js.map