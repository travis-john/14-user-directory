(this["webpackJsonp14-user-directory"]=this["webpackJsonp14-user-directory"]||[]).push([[0],{21:function(e,t,a){e.exports=a(44)},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(18),s=a.n(l),c=a(2),i=a(3),o=a(5),m=a(4),u=a(6),p=a(8),b=a.n(p),h=a(19),v=a(7),E=a(20),d=a.n(E);var f=function(e){return r.a.createElement("div",Object.assign({className:"row flex-row flex-wrap"},e))};var y=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return r.a.createElement("div",Object.assign({className:t},e))};var N=function(e){return r.a.createElement("div",{className:"card mb-4"},r.a.createElement("img",{className:"card-img-top",src:e.image,alt:e.name}),r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},e.name),r.a.createElement("ul",{className:"list-group list-group-flush"},r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Location:")," ",e.location),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Email:")," ",e.email),r.a.createElement("li",{className:"list-group-item"},r.a.createElement("b",null,"Phone:")," ",e.phone))))},g=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={results:[],allResults:[]},a.all=a.all.bind(Object(v.a)(a)),a.sortByName=a.sortByName.bind(Object(v.a)(a)),a.sortByEmail=a.sortByEmail.bind(Object(v.a)(a)),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=Object(h.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("https://randomuser.me/api/?results=60&nat=us");case 2:t=e.sent,this.setState({results:t.data.results}),this.setState({allResults:t.data.results});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"all",value:function(){var e=this.state.allResults;console.log(e),this.setState({state:e})}},{key:"sortByName",value:function(){var e=this.state.results.sort((function(e,t){return e.name.last.toUpperCase()<t.name.last.toUpperCase()?-1:e.name.last.toUpperCase()>t.name.last.toUpperCase()?1:0}));this.setState({state:e})}},{key:"sortByEmail",value:function(){var e=this.state.results.sort((function(e,t){return e.email.toUpperCase()<t.email.toUpperCase()?-1:e.email.toUpperCase()>t.email.toUpperCase()?1:0}));this.setState({state:e})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("label",{htmlFor:"sort-pills"},"Sort by:"),r.a.createElement("ul",{className:"nav nav-pills mb-3",id:"sort-pills"},r.a.createElement("li",{className:"nav-item mr-2"},r.a.createElement("button",{className:"nav-link active",onClick:this.all},"All")),r.a.createElement("li",{className:"nav-item mr-2"},r.a.createElement("button",{className:"nav-link",onClick:this.sortByName},"Name")),r.a.createElement("li",{className:"nav-item mr-2"},r.a.createElement("button",{className:"nav-link",onClick:this.sortByEmail},"Email"))),r.a.createElement(f,null,this.state.results.map((function(e,t){return r.a.createElement(y,{size:"md-4",key:t},r.a.createElement(N,{image:e.picture.large,name:e.name.first+" "+e.name.last,location:e.location.city+", "+e.location.state,email:e.email,phone:e.phone}))}))))}}]),t}(n.Component);var j=function(e){return r.a.createElement("div",Object.assign({className:"container".concat(e.fluid?"-fluid":"")},e))},O=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg bg-dark mb-3"},r.a.createElement(j,null,r.a.createElement("a",{className:"navbar-brand",href:"/"},"User Directory")))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(O,null),r.a.createElement(j,null,r.a.createElement(g,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.44e842b0.chunk.js.map