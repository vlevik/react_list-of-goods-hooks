(this["webpackJsonpreact_list-of-goods-hooks"]=this["webpackJsonpreact_list-of-goods-hooks"]||[]).push([[0],{14:function(t,e,n){},16:function(t,e,n){"use strict";n.r(e);var c,s=n(7),o=n.n(s),i=n(6),r=n(8),a=n(1),u=(n(13),n(14),n(4)),l=n.n(u),b=n(0),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"];!function(t){t.DEFAULT="DEFAULT",t.ALPHABET="ALPHABET",t.LENGTH="LENGTH"}(c||(c={}));var j=function(){var t=Object(a.useState)(c.DEFAULT),e=Object(i.a)(t,2),n=e[0],s=e[1],o=Object(a.useState)(!1),u=Object(i.a)(o,2),j=u[0],d=u[1],E=function(t,e,n){var s=Object(r.a)(t);switch(e){case c.ALPHABET:s.sort((function(t,e){return t.localeCompare(e)}));break;case c.LENGTH:s.sort((function(t,e){return t.length-e.length}))}return n&&s.reverse(),s}(h,n,j);return Object(b.jsxs)("div",{className:"section content",children:[Object(b.jsxs)("div",{className:"buttons",children:[Object(b.jsx)("button",{type:"button",className:l()("button is-info",{"is-light":n!==c.ALPHABET}),onClick:function(){return s(c.ALPHABET)},children:"Sort alphabetically"}),Object(b.jsx)("button",{type:"button",className:l()("button is-success",{"is-light":n!==c.LENGTH}),onClick:function(){return s(c.LENGTH)},children:"Sort by length"}),Object(b.jsx)("button",{type:"button",className:l()("button is-warning",{"is-light":!j}),onClick:function(){return d(!j)},children:"Reverse"}),(n!==c.DEFAULT||j)&&Object(b.jsx)("button",{type:"button",className:"button is-danger is-light",onClick:function(){s(c.DEFAULT),d(!1)},children:"Reset"})]}),Object(b.jsx)("ul",{children:E.map((function(t){return Object(b.jsx)("li",{"data-cy":"Good",children:t},t)}))})]})};o.a.render(Object(b.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.e6f613d3.chunk.js.map