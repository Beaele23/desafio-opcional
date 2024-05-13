(function(){"use strict";var t={3272:function(t,r,o){var a=o(6848),n=function(){var t=this,r=t._self._c;return r("div",{staticClass:"py-5",attrs:{id:"app"}},[t._m(0),r("main",{staticClass:"container"},[r("section",{staticClass:"row justify-content-center g-3"},t._l(t.productos,(function(o){return r("div",{key:o.id,staticClass:"col-12 col-md-6 col-lg-4"},[r("div",{staticClass:"card"},[r("img",{staticClass:"card-img-top",attrs:{src:o.pathImg,alt:o.nombre}}),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title"},[t._v(t._s(o.nombre))]),r("p",{staticClass:"card-text"},[t._v(" "+t._s(o.descripcionCorta)+" ")]),r("div",[r("button",{staticClass:"btn btn-primary",attrs:{"data-bs-toggle":"modal","data-bs-target":"#miModal","data-producto-id":o.id},on:{click:t.mostrar}},[t._v(" Ver detalles ")])])])])])})),0)]),r("div",{staticClass:"modal fade",attrs:{id:"miModal",tabindex:"-1","aria-labelledby":"miModalLabel","aria-hidden":"true"}},[r("div",{staticClass:"modal-dialog"},[r("div",{staticClass:"modal-content"},[r("div",{staticClass:"modal-header"},[r("h1",{staticClass:"modal-title fs-5",attrs:{id:"miModalLabel"}},[t._v(" "+t._s(t.currentProducto.nombre)+" ")]),r("button",{staticClass:"btn-close",attrs:{type:"button","data-bs-dismiss":"modal","aria-label":"Close"}})]),r("div",{staticClass:"modal-body"},[r("img",{attrs:{src:t.currentProducto.pathImg,alt:t.currentProducto.nombre,width:"80"}}),r("p",[r("span",[t._v("Descripción: ")]),t._v(t._s(t.currentProducto.descripcionLarga)+" ")])]),t._m(1)])])])])},i=[function(){var t=this,r=t._self._c;return r("header",[r("h1",{staticClass:"text-center"},[t._v("Galeria de productos")])])},function(){var t=this,r=t._self._c;return r("div",{staticClass:"modal-footer"},[r("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-bs-dismiss":"modal"}},[t._v(" Close ")])])}],s={name:"App",components:{},data(){return{productos:[{id:1,nombre:"Producto 1",descripcionCorta:"Descripción 1",pathImg:"./assets/img/producto1.png",descripcionLarga:"Producto presentación 1, marca x"},{id:2,nombre:"Producto 2",descripcionCorta:"Descripción 2",pathImg:"./assets/img/producto2.jpeg",descripcionLarga:"Producto presentación 2, marca x"},{id:3,nombre:"Producto 3",descripcionCorta:"Descripción 3",pathImg:"./assets/img/producto3.png",descripcionLarga:"Producto presentación 3, marca x"}],currentProducto:{}}},methods:{mostrar:function(t){let r=t.target,o=r.dataset.productoId,a=this.productos.find((t=>t.id==o));a?this.currentProducto=a:alert("Producto no encontrado.")}}},e=s,c=o(1656),d=(0,c.A)(e,n,i,!1,null,null,null),u=d.exports;a.Ay.config.productionTip=!1,new a.Ay({render:t=>t(u)}).$mount("#app")}},r={};function o(a){var n=r[a];if(void 0!==n)return n.exports;var i=r[a]={exports:{}};return t[a].call(i.exports,i,i.exports,o),i.exports}o.m=t,function(){var t=[];o.O=function(r,a,n,i){if(!a){var s=1/0;for(u=0;u<t.length;u++){a=t[u][0],n=t[u][1],i=t[u][2];for(var e=!0,c=0;c<a.length;c++)(!1&i||s>=i)&&Object.keys(o.O).every((function(t){return o.O[t](a[c])}))?a.splice(c--,1):(e=!1,i<s&&(s=i));if(e){t.splice(u--,1);var d=n();void 0!==d&&(r=d)}}return r}i=i||0;for(var u=t.length;u>0&&t[u-1][2]>i;u--)t[u]=t[u-1];t[u]=[a,n,i]}}(),function(){o.n=function(t){var r=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(r,{a:r}),r}}(),function(){o.d=function(t,r){for(var a in r)o.o(r,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,r){return Object.prototype.hasOwnProperty.call(t,r)}}(),function(){var t={524:0};o.O.j=function(r){return 0===t[r]};var r=function(r,a){var n,i,s=a[0],e=a[1],c=a[2],d=0;if(s.some((function(r){return 0!==t[r]}))){for(n in e)o.o(e,n)&&(o.m[n]=e[n]);if(c)var u=c(o)}for(r&&r(a);d<s.length;d++)i=s[d],o.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return o.O(u)},a=self["webpackChunkdesafio_opcional"]=self["webpackChunkdesafio_opcional"]||[];a.forEach(r.bind(null,0)),a.push=r.bind(null,a.push.bind(a))}();var a=o.O(void 0,[504],(function(){return o(3272)}));a=o.O(a)})();
//# sourceMappingURL=app.186ecf76.js.map