(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,s){},15:function(t,e,s){"use strict";s.r(e);var r=s(3),n=s.n(r),o=s(6),a=s(4),c=s(5),i=s(8),l=s(7),u=s(1),b=s.n(u),d=(s(13),s(0)),h=function(t){var e=t.goodslist;return Object(d.jsx)("ul",{className:"list",children:e.map((function(t){return Object(d.jsx)("li",{className:"list__item",children:t},t)}))})},p=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(t){Object(i.a)(s,t);var e=Object(l.a)(s);function s(){var t;Object(a.a)(this,s);for(var r=arguments.length,n=new Array(r),c=0;c<r;c++)n[c]=arguments[c];return(t=e.call.apply(e,[this].concat(n))).state={goods:p,isVisible:!1,isReversed:!1,sortedBy:""},t.start=function(){t.setState({isVisible:!0})},t.reverse=function(){t.setState((function(t){return{isReversed:!t.isReversed}}))},t.sortedByAlphabet=function(){t.setState({sortedBy:"alphabet"})},t.sortedByLength=function(){t.setState({sortedBy:"length"})},t.reset=function(){t.setState({isReversed:!1,sortedBy:""})},t.prepareGoods=function(){var e=t.state,s=e.goods,r=e.isReversed,n=e.sortedBy,a=Object(o.a)(s);return a.sort((function(t,e){switch(n){case"alphabet":return t.localeCompare(e);case"length":return t.length-e.length;default:return 0}})),r&&a.reverse(),a},t}return Object(c.a)(s,[{key:"render",value:function(){var t=this.state.isVisible,e=this.prepareGoods();return Object(d.jsxs)("div",{className:"App",children:[!t&&Object(d.jsx)("button",{type:"button",className:"start-button",onClick:this.start,children:"Start"}),t&&Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)(h,{goodslist:e}),Object(d.jsx)("button",{type:"button",className:"reverse-button",onClick:this.reverse,children:"Reverse"}),Object(d.jsx)("button",{type:"button",className:"sortedByAlphabet-button",onClick:this.sortedByAlphabet,children:"Sort alphabetically"}),Object(d.jsx)("button",{type:"button",className:"ortedByLength-button",onClick:this.sortedByLength,children:"Sort by length"}),Object(d.jsx)("button",{type:"button",className:"reset-button",onClick:this.reset,children:"Reset"})]})]})}}]),s}(b.a.Component),y=j;n.a.render(Object(d.jsx)(y,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.d9eb0cc1.chunk.js.map