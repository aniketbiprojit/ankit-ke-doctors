(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{19:function(e,t,a){e.exports=a(30)},24:function(e,t,a){},30:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(16),c=a.n(r),l=(a(24),a(3)),s=a(4),o=a(5),m=a(6),d=a(18),u=a(1),h=a(9),v=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={width:window.innerWidth,side:"hidden"},e.side=e.side.bind(Object(h.a)(e)),e}return Object(s.a)(a,[{key:"side",value:function(){var e="visible"===this.state.side?"hidden":"visible";this.setState({side:e}),console.log(this.state)}},{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.setState({width:window.innerWidth})}))}},{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"Nav"},i.a.createElement("div",{className:"wrapper"},i.a.createElement("div",{className:"RelativeOuter container outer"},i.a.createElement("div",{className:"AbsoluteInner inner"},i.a.createElement("div",{className:"flex"},i.a.createElement("div",{className:"left"},"Doctors"),i.a.createElement("div",{className:"right RelativeOuter"},i.a.createElement("div",{className:"AbsoluteInner inner"},i.a.createElement("div",{className:"most"},this.state.width>="992"?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"list flex"},i.a.createElement("p",{className:"list-item"},"About"),i.a.createElement("p",{className:"list-item"},"Contact"),i.a.createElement("p",{className:"list-item"},"Our"),i.a.createElement("div",{className:"user flex"},i.a.createElement("div",{className:"button button-outline"},"Sign In"),i.a.createElement("div",{className:"button button-fill"},"Know More")))):i.a.createElement("div",{className:"list flex"},i.a.createElement("div",{onClick:this.side,className:"ham"})))))))))," "),this.state.width<992?i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{style:{visibility:this.state.side,opacity:"visible"===this.state.side?1:0},className:"SideBar"},i.a.createElement("div",{className:"inner container"},i.a.createElement("div",{className:"item"},"About"),i.a.createElement("div",{className:"item"},"Contact"),i.a.createElement("div",{className:"item"},"Our"),i.a.createElement("div",{className:"button button-outline"},"Sign In"),i.a.createElement("div",{className:"button button-fill"},"Get Started")))):"")}}]),a}(n.Component),E=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("main",{id:"home"},i.a.createElement("div",{className:"container"},i.a.createElement("div",{className:"inner"},i.a.createElement("div",{className:"left"},i.a.createElement("p",{className:"bold"},"No square",i.a.createElement("p",null,"can ever be"),i.a.createElement("p",null,"a round circle.")," "),i.a.createElement("p",{className:"normal"},this.props.width>=440?i.a.createElement(i.a.Fragment,null,"There are almost always one too many variables ",i.a.createElement("br",null),"that need to be considered in most equations for ",i.a.createElement("br",null),"for any thing to not become jargon."):"There are almost always one too many variables that need to be considered in most equations for any thing to not become jargon.")))))}}]),a}(n.Component),b=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement("div",{style:this.props.style,className:"baseline"},i.a.createElement("section",{className:"template container"},i.a.createElement("h1",null,this.props.heading),i.a.createElement("h2",null,this.props.subheading),this.props.children))}}]),a}(n.Component);function p(e){return i.a.createElement("div",{className:"cards"},i.a.createElement("div",{className:"circle"}),i.a.createElement("h1",null,e.head),i.a.createElement("h2",null,e.subhead),i.a.createElement("div",{className:"wrapper"},e.data.map((function(e){return i.a.createElement("div",{className:"data"},i.a.createElement("p",null,e))}))))}var N=[{head:"service 1",subhead:"You need this to do this:",data:["1. Once there was a king","2. He had a beard","3. It was white-ish","4. Meh. Nice. Nice. Nice"]},{head:"service 2",subhead:"You must buy this to do this:",data:["3. It was white-ish","1. Once there was a king","2. He had a beard","4. Meh. Nice. Nice. Nice"]},{head:"service 3",subhead:"You can have this to do this:",data:["4. Meh. Nice. Nice. Nice","1. Once there was a king","2. He had a beard","3. It was white-ish"]}],f=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement("section",{className:"services"},i.a.createElement("div",{className:"outer flex"},N.map((function(e){return i.a.createElement(p,{head:e.head,subhead:e.subhead,data:e.data})})))))}}]),a}(n.Component),w=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).state={width:window.innerWidth},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",(function(){e.setState({width:window.innerWidth})}))}},{key:"render",value:function(){return i.a.createElement("div",{className:"home"},i.a.createElement(v,null),i.a.createElement(E,{width:this.state.width}),i.a.createElement(b,{heading:"What do we do?",subheading:"Simple and Easy Workflow",style:{backgroundColor:"#eef2f5"}},i.a.createElement(f,null)))}}]),a}(n.Component),O=function(e){console.log(e)},g=function(e){Object(m.a)(a,e);var t=Object(o.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return i.a.createElement(i.a.Fragment,null,i.a.createElement(d.a,null,i.a.createElement(u.c,null,i.a.createElement(u.a,{logs:O,path:"/",component:w}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(g,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[19,1,2]]]);
//# sourceMappingURL=main.2bb5c671.chunk.js.map