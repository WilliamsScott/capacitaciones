(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0cf654"],{6411:function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},c=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"row justify-content-center"},[n("img",{staticClass:"img-responsive",attrs:{id:"pdf"}})])}],a=n("88b8"),r=n("3d20"),s=n.n(r),i=n("2b0e"),u=n("5f5b");i["default"].use(u["a"]);var l=a["b"].ref(),d={data:function(){return{cheque:{}}},created:function(){var e=this.$route.params.id;console.log(e),document.getElementById("pdf").src="";var t=l.child("archivos/"+e).getDownloadURL().then((function(e){console.log(t);var n=document.getElementById("pdf");n.src=e})).catch((function(e){console.log(e),s.a.fire({title:"Error",text:"No hay imagen asociada",icon:"error"})}))},methods:{onUpdateForm:function(e){var t=this;e.preventDefault(),a["a"].collection("cheques").doc(this.$route.params.id).update(this.cheque).then((function(){console.log("Cheque actualizado"),t.$router.push("/list")})).catch((function(e){console.log(e)})),this.subirImagen()}}},f=d,h=n("2877"),p=Object(h["a"])(f,o,c,!1,null,null,null);t["default"]=p.exports}}]);
//# sourceMappingURL=chunk-2d0cf654.c19f9704.js.map