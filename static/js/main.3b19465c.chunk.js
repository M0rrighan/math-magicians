(this["webpackJsonpmath-magicians"]=this["webpackJsonpmath-magicians"]||[]).push([[0],{12:function(t,n,e){},13:function(t,n,e){"use strict";e.r(n);var a=e(5),o=e.n(a),c=e(2),r=e(6),l=e(0),i=function(t){var n=t.resultString;return Object(l.jsx)("div",{className:"display",children:n})},u=function(t){var n=t.updateCalculator,e=t.buttonName;return Object(l.jsx)("button",{type:"button",className:"btn",onClick:function(){n(e)},children:e})},s=function(t){var n=t.updateCalculator,e=["AC","+/-","%","\xf7","7","8","9","x","4","5","6","-","1","2","3","+","0",".","="].map((function(t){return Object(l.jsx)(u,{buttonName:t,updateCalculator:n},t)}));return Object(l.jsx)("div",{className:"buttons",children:e})},x=e(1),j=e(4),b=e.n(j);function p(t,n,e){var a=b()(t),o=b()(n);if("+"===e)return a.plus(o).toString();if("-"===e)return a.minus(o).toString();if("x"===e)return a.times(o).toString();if("\xf7"===e)try{return a.div(o).toString()}catch(c){return"Can't divide by 0."}if("%"===e)return a.mod(o).toString();throw Error("Unknown operation '".concat(e,"'"))}var O=function(){var t=Object(c.useState)({total:null,next:null,operation:null}),n=Object(r.a)(t,2),e=n[0],a=n[1],o=e.total,u=e.next,j=e.operation,b="";return o?b="".concat(o," ").concat(j||""," ").concat(u||""):u&&(b="".concat(u," ").concat(j||"")),Object(l.jsxs)("div",{className:"calculator",children:[Object(l.jsx)(i,{resultString:b||0}),Object(l.jsx)(s,{updateCalculator:function(t){a((function(){return n=e,"AC"===(a=t)?{total:null,next:null,operation:null}:a.match(/[0-9]+/)?"0"===a&&"0"===n.next?{}:n.operation?n.next?Object(x.a)(Object(x.a)({},n),{},{next:n.next+a}):Object(x.a)(Object(x.a)({},n),{},{next:a}):n.next?{next:n.next+a,total:null}:{next:a,total:null}:"."===a?n.next?n.next.includes(".")?Object(x.a)({},n):Object(x.a)(Object(x.a)({},n),{},{next:"".concat(n.next,".")}):n.operation?{next:"0."}:n.total?n.total.includes(".")?{}:{total:"".concat(n.total,".")}:{total:"0."}:"="===a?n.next&&n.operation?{total:p(n.total,n.next,n.operation),next:null,operation:null}:{}:"+/-"===a?n.next?Object(x.a)(Object(x.a)({},n),{},{next:(-1*parseFloat(n.next)).toString()}):n.total?Object(x.a)(Object(x.a)({},n),{},{total:(-1*parseFloat(n.total)).toString()}):{}:n.next||!n.total||n.operation?n.operation?n.total&&!n.next?Object(x.a)(Object(x.a)({},n),{},{operation:a}):{total:p(n.total,n.next,n.operation),next:null,operation:a}:n.next?{total:n.next,next:null,operation:a}:{operation:a}:Object(x.a)(Object(x.a)({},n),{},{operation:a});var n,a}))}})]})},d=function(){return Object(l.jsx)("div",{className:"calc-container",children:Object(l.jsx)(O,{})})};e(12);o.a.render(Object(l.jsx)(d,{}),document.getElementById("root"))}},[[13,1,2]]]);
//# sourceMappingURL=main.3b19465c.chunk.js.map