(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{13:function(e,t,l){},14:function(e,t,l){"use strict";l.r(t);var a=l(0),n=l.n(a),r=l(7),c=l.n(r),o=(l(13),l(1)),s=l(2),i=l(4),m=l(3),u=(l(6),function(e){Object(i.a)(l,e);var t=Object(m.a)(l);function l(e){var a;return Object(o.a)(this,l),(a=t.call(this,e)).changeText=function(){var e=a.state,t=e.headerTextList,l=e.headerTextPos,n=e.headerText,r=e.headerTextDel,c=t[l];a.setState({headerText:r?c.substring(0,n.length-1):c.substring(0,n.length+1)}),r||n!==c||a.setState({headerTextDel:""!==n}),r&&""===n&&a.setState({headerTextPos:l<t.length-1?l+1:0,headerTextDel:!1}),setTimeout(a.changeText,n!==c||r?180:3e3)},a.state={headerTextList:["Web Developer","Dreamer","Creative"],headerTextPos:0,headerText:"",headerTextDel:!1},a}return Object(s.a)(l,[{key:"componentDidMount",value:function(){this.changeText()}},{key:"render",value:function(){return n.a.createElement("header",{id:"header",className:"header scroll scroll-1"},n.a.createElement("div",{className:"header-top"}),n.a.createElement("div",{className:"header-title"},n.a.createElement("div",{className:"name"},n.a.createElement("h1",null,"WISNU NUGROHO")),n.a.createElement("div",{className:"name-changed"},n.a.createElement("span",null,"I AM"),n.a.createElement("span",{className:"changed-text"},this.state.headerText),n.a.createElement("div",{className:"blink"})),n.a.createElement("span",null,"SIMPLE BUT PERFECT")),n.a.createElement("div",{className:"scroll-icon-wrapper"},n.a.createElement("span",{className:"scroll-icon"},n.a.createElement("span",{className:"scroll-icon-outer"},n.a.createElement("span",{className:"scroll-icon-inner"})))))}}]),l}(a.Component)),d=function(e){Object(i.a)(l,e);var t=Object(m.a)(l);function l(e){var a;return Object(o.a)(this,l),(a=t.call(this,e)).scroll=function(){document.getElementById("root").addEventListener("scroll",a.scrolling)},a.scrolling=function(){if(!a._scrollingPage){a._scrollingPage=!0;var e;e=document.getElementById("root").scrollTop>a._pos?"down":"up",a._direction=e,a.scrollTo(e)}},a.scrollTo=function(e){var t=a._scrollName.replace("scroll-",""),l="down"===e?parseInt(t)+1:parseInt(t)-1;l>a._scrollMax&&(l=a._scrollMax),l<1&&(l=1),a._scrollName="scroll-"+l;var n=document.querySelectorAll("."+a._scrollName)[0].offsetTop;a.smoothScroll(n)},a.smoothScroll=function(e){var t=document.getElementById("root"),l=setInterval((function(){var n;t.scrollTop!==e?("down"===a._direction?(n=t.scrollTop+t.scrollTop/a._step)>e&&(n=e):(n=t.scrollTop-t.scrollTop/a._step)<e&&(n=e),t.scrollTo(0,n)):(clearInterval(l),a._scrollingPage=!1,a._pos=e)}),a._time)},a.checkScroll=function(){a._scrollMax=document.querySelectorAll(".scroll").length},a._pos=0,a._direction="",a._scrollName="scroll-1",a._scrollMax=0,a._scrollingPage=!1,a._step=10,a._time=15,a}return Object(s.a)(l,[{key:"componentDidMount",value:function(){this.checkScroll(),this.scroll()}},{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(u,null),n.a.createElement("section",{id:"menu",className:"menu scroll scroll-2"},n.a.createElement("div",{className:"title"},"SPACE TO EXPLORE"),n.a.createElement("ul",null,n.a.createElement("li",null),n.a.createElement("li",null),n.a.createElement("li",null),n.a.createElement("li",null),n.a.createElement("li",null),n.a.createElement("li",null)),n.a.createElement("div",{className:"credit"},"WISNU - 2020")))}}]),l}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(d,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},6:function(e,t,l){},8:function(e,t,l){e.exports=l(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.8f505af0.chunk.js.map