(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),a=c.n(n),o=c(2),s=c(3),i=c(5),r=c(4),l=c(1),u=c.n(l),m=(c(12),c(0)),h=function(t){Object(i.a)(c,t);var e=Object(r.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={time:new Date,timerId:0},t}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.setState({time:new Date});var e=window.setInterval((function(){t.setState({time:new Date}),console.info(t.state.time.toUTCString().slice(-12,-4))}),1e3);this.setState({timerId:e})}},{key:"componentWillUnmount",value:function(){this.state.timerId&&clearInterval(this.state.timerId)}},{key:"render",value:function(){return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:this.state.time.toUTCString().slice(-12,-4)})]})}}]),c}(u.a.Component);function k(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var d=function(t){Object(i.a)(c,t);var e=Object(r.a)(c);function c(){var t;Object(o.a)(this,c);for(var n=arguments.length,a=new Array(n),s=0;s<n;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},t}return Object(s.a)(c,[{key:"componentDidMount",value:function(){var t=this;document.addEventListener("contextmenu",(function(e){e.preventDefault(),t.setState({hasClock:!1})})),document.addEventListener("click",(function(){t.setState({hasClock:!0})})),window.setInterval((function(){t.setState({clockName:k()})}),3300)}},{key:"componentDidUpdate",value:function(t,e){e.clockName!==this.state.clockName&&this.state.hasClock&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.state.clockName))}},{key:"render",value:function(){var t;return this.state.hasClock&&(t=Object(m.jsx)(h,{clockName:this.state.clockName})),Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t]})}}]),c}(u.a.Component);a.a.render(Object(m.jsx)(d,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e3f5e61c.chunk.js.map