(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,a){},106:function(e,t,a){},185:function(e,t,a){},248:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(15),c=a.n(r),i=(a(104),a(96)),s=a(51),l=a(32),u=a(49),m=a(87),p=a(88),f=a(97),v=a(89),d=a(98),h=a(48),E=a.n(h),y=a(93),b=a.n(y),g=a(50),w=a.n(g),V=a(95),j=a.n(V),N=a(90),O=a.n(N),k=a(92),S=a.n(k),C=(a(106),function(e){var t=e.historyList,a=e.onHistoryItemPress;return o.a.createElement("div",{className:"convert-history"},t.length>0&&o.a.createElement("div",null,"\u5386\u53f2\u8f6c\u6362"),t.map(function(e,t){return o.a.createElement("div",{key:t,className:"convert-history-item"},o.a.createElement("div",null,"\u628a\xa0",e.from,"\xa0\u8fdb\u5236\u7684\xa0",e.inputVal,"\xa0\u8f6c\u6362\u4e3a\xa0",e.to,"\xa0\u8fdb\u5236"),o.a.createElement(O.a,{"aria-label":"Delete",onClick:function(){return a(e)},color:"primary"},o.a.createElement(S.a,{fontSize:"large"})))}))}),I=a(94),L=a.n(I),P=(a(185),"0123456789abcdefghijklmnopqrstuvwxyz".split("")),x=function(e){function t(){var e,a;Object(m.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(v.a)(t)).call.apply(e,[this].concat(r)))).state={from:10,to:10,inputVal:"",ouputVal:0,historyList:[]},a.componentDidUpdate=function(e,t){var n=a.state,o=n.from,r=n.to;t.from!==o&&a.setState({inputVal:"",ouputVal:0}),t.to!==r&&a.setState({ouputVal:0})},a.setPos=function(e){return function(t){a.setState(function(a){return Object(u.a)({},a,Object(l.a)({},e,t.target.value))})}},a.inputChange=function(e){var t=[].concat(Object(s.a)(P.slice(0,a.state.from)),["."]),n=e.target.value.toLowerCase();(""===n||t.includes(n.slice(-1)))&&a.setState({inputVal:n})},a.updateVal=function(){var e=a.state,t=e.from,n=e.inputVal,o=e.historyList,r=e.to,c=n.split("."),l=Object(i.a)(c,2),u=l[0],m=l[1],p=0;if(u){var f=u.split(""),v=f.length;f.forEach(function(e,a){p+=P.findIndex(function(t){return t===e})*Math.pow(t,v-(a+1))})}m&&m.split("").forEach(function(e,a){p+=P.findIndex(function(t){return t===e})*Math.pow(t,-(a+1))}),a.setState({ouputVal:p,historyList:[].concat(Object(s.a)(o),[{from:t,to:r,inputVal:n}])})},a.options=function(){return P.map(function(e,t){return o.a.createElement(b.a,{value:t+1,key:t,classes:{root:"root-menu-item"}},t+1)})},a.select=function(e,t){return o.a.createElement(E.a,{onChange:a.setPos(e),value:t},a.options())},a.onHistoryItemPress=function(e){a.setState(Object(u.a)({},e,{ouputVal:0}),a.updateVal)},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.state,t=e.from,a=e.to,n=e.inputVal,r=e.ouputVal,c=e.historyList;return o.a.createElement("div",{className:"main"},o.a.createElement("div",{className:"converter-container"},o.a.createElement("div",{className:"converter-comp converter-title"},"\u652f\u6301\u5c0f\u6570\u7684\u5728\u7ebf\u8fdb\u4f4d\u5236\u8f6c\u6362\xa0",o.a.createElement(L.a,{fontSize:"large",color:"primary"})),o.a.createElement("div",{className:"converter-comp"},"\u4ece\xa0\xa0\xa0",this.select("from",t),"\xa0\xa0\xa0\u8fdb\u5236"),o.a.createElement("div",{className:"converter-comp"},"\u5230\xa0\xa0\xa0",this.select("to",a),"\xa0\xa0\xa0\u8fdb\u5236"),o.a.createElement("div",{className:"converter-comp"},"\u8f93\u5165\xa0\xa0\xa0",o.a.createElement(w.a,{onChange:this.inputChange,value:n})),o.a.createElement("div",{className:"converter-comp"},o.a.createElement(j.a,{variant:"contained",onClick:this.updateVal,color:"primary"},"\u8f6c\u6362")),o.a.createElement("div",{className:"converter-comp"},"\u8f93\u51fa\xa0\xa0\xa0",o.a.createElement(w.a,{value:0===r?"":r.toString(Number(a)),disabled:!0}))),o.a.createElement(C,{historyList:c,onHistoryItemPress:this.onHistoryItemPress}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},99:function(e,t,a){e.exports=a(248)}},[[99,2,1]]]);
//# sourceMappingURL=main.2a098d14.chunk.js.map