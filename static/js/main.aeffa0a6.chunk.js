(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,n){e.exports=n(33)},28:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},33:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(9),c=n.n(o),s=n(10),i=n(8),l=n(17),u=n(18),h=(n(28),n(3)),d=n(4),m=n(6),b=n(5),p=n(7),E=(n(29),function(e){var t=e.name,n=e.email,a=e.id;return r.a.createElement("div",{className:"card tc bg-light-green br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{className:"robot",alt:"robots",src:"https://robohash.org/".concat(a)}),r.a.createElement("div",null,r.a.createElement("h2",{className:"name"},t),r.a.createElement("p",{className:"email"},n)))}),f=function(e,t){var n=e.length>t?"...":"";return e.substring(0,t)+n},g=function(e){var t=e.robots;return r.a.createElement("div",null,t.map(function(e,n){return r.a.createElement(E,{key:n,id:t[n].id,name:f(t[n].name.replace(/\s/g,""),15),email:t[n].email})}))},O=function(e){e.searchfield;var t=e.searchChange;return r.a.createElement("div",{className:"pa2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:t}))},v=(n(30),function(e){return r.a.createElement("div",{className:"scroll"},e.children)}),j=function(e){function t(e){var n;return Object(h.a)(this,t),(n=Object(m.a)(this,Object(b.a)(t).call(this,e))).state={hasError:!1},n}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null," Oops. There is a problem!"):this.props.children}}]),t}(a.Component),y=function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"shouldComponentUpdate",value:function(e,t){return!1}},{key:"render",value:function(){return r.a.createElement("h1",{className:"f1"},"RoboFriends")}}]),t}(a.Component),R=(n(31),function(e){function t(){return Object(h.a)(this,t),Object(m.a)(this,Object(b.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.onRequestRobots()}},{key:"render",value:function(){var e=this.props,t=e.searchField,n=e.onSearchChange,a=e.robots,o=e.isPending,c=a.filter(function(e){return e.name.toLowerCase().includes(t.toLowerCase())});return o?r.a.createElement("h1",{className:"tc f1"},"Loading"):r.a.createElement("div",{className:"tc"},r.a.createElement("div",{className:"header"},r.a.createElement(y,null),r.a.createElement(O,{className:"search",searchChange:n})),r.a.createElement("div",{className:"spacer"}),r.a.createElement(v,null,r.a.createElement(j,null,r.a.createElement(g,{className:"cardList",robots:c}))))}}]),t}(a.Component)),S=Object(s.b)(function(e){return{searchField:e.searchRobots.searchField,robots:e.requestRobots.robots,isPending:e.requestRobots.isPending,error:e.requestRobots.error}},function(e){return{onSearchChange:function(t){return e({type:"CHANGE_SEARCH_FIELD",payload:t.target.value})},onRequestRobots:function(){return e(function(e){e({type:"REQUEST_ROBOTS_PENDING"}),fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(t){return e({type:"REQUEST_ROBOTS_SUCCESS",payload:t})}).catch(function(t){return e({type:"REQUEST_ROBOTS_FAILED",payload:t})})})}}})(R);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(32);var C={searchField:""},N={isPending:!1,robots:[],error:""},w=Object(l.createLogger)(),_=Object(i.c)({searchRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"CHANGE_SEARCH_FIELD":return Object.assign({},e,{searchField:t.payload});default:return e}},requestRobots:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};switch(t.type){case"REQUEST_ROBOTS_PENDING":return Object.assign({},e,{isPending:!0});case"REQUEST_ROBOTS_SUCCESS":return Object.assign({},e,{robots:t.payload,isPending:!1});case"REQUEST_ROBOTS_FAILED":return Object.assign({},e,{error:t.payload,isPending:!1});default:return e}}}),T=Object(i.d)(_,Object(i.a)(u.a,w));c.a.render(r.a.createElement(s.a,{store:T},r.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[19,1,2]]]);
//# sourceMappingURL=main.aeffa0a6.chunk.js.map