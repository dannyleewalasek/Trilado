(this.webpackJsonptrilado=this.webpackJsonptrilado||[]).push([[0],{26:function(n,e,t){},27:function(n,e,t){},34:function(n,e,t){"use strict";t.r(e);var i,o,c,a,r,s,l,d,b,h,j,p,u,x,f,O=t(0),m=t.n(O),g=t(18),y=t.n(g),v=(t(26),t(7)),k=t(3),w=t(12),E=t(5),C=(t(27),t(10)),I=t(4),L=Object(O.createContext)(),A=t(1),z=I.a.div(i||(i=Object(k.a)(["\n  position: absolute;\n  bottom: 5%;\n  left: 10%;\n  height: 10%;\n  width: 10%;\n  background-color: #774c60;\n  border-radius: 50%;\n  transition: 0.5s;\n"]))),G=I.a.div(o||(o=Object(k.a)(["\n  position: absolute;\n  bottom: 5%;\n  right: 10%;\n  height: 10%;\n  width: 10%;\n  background-color: #774c60;\n  border-radius: 50%;\n  transition: 0.5s;\n  &:hover {\n    background-color: #f83847;\n  }\n"]))),F=I.a.div(c||(c=Object(k.a)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  color: white;\n  font-size: 8px;\n  text-align: left;\n  height: 370px;\n  width: 200px;\n  animation-duration: 2s;\n  animation-name: example;\n  @keyframes example {\n    from {\n      transform: scale(0.95);\n    }\n    to {\n      transform: scale(1);\n    }\n  }\n"]))),M=I.a.div(a||(a=Object(k.a)(["\n  height: 100%;\n  width: 100%;\n  background-image: url(",'");\n  background-size: cover;\n  position: relative;\n  transition: 0.5s;\n  // box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\n\n  @media (max-width: 768px) {\n    width: 40vw;\n    height: 60vw;\n  }\n  @media (min-width: 768px) {\n    &:hover {\n      z-index: 10;\n      filter: drop-shadow(0 0 0.75rem black);\n      ',", "," {\n        transform: scale(1.4);\n      }\n    }\n  }\n"])),(function(n){return'"https://image.tmdb.org/t/p/w300/'+n.poster}),z,G),R=function(n){var e=n.poster,t=(n.name,n.id),i=n.title,o=n.release_date,c=Object(O.useContext)(L).dispatch;return Object(A.jsxs)(F,{children:[Object(A.jsxs)(M,{poster:e,children:[Object(A.jsx)(G,{onClick:function(){c({type:"DISLIKE",payload:{id:t,title:i,release_date:o,poster_path:e}}),c({type:"REMOVEFILM",payload:t})}}),Object(A.jsx)(z,{onClick:function(){return setTimeout((function(){c({type:"LIKE",payload:{id:t,title:i,release_date:o,poster_path:e}}),c({type:"REMOVEFILM",payload:t})}),2e3)}})]}),Object(A.jsx)("h2",{children:i}),Object(A.jsx)("h2",{children:o})]})},H=I.a.div(r||(r=Object(k.a)(["\n@keyframes fadeIn {\n  0% {opacity: 0;}\n  100% {opacity: 1;}\n} \n\n  animation-duration: 1s;\n  animation-name: fadeIn;\n  padding:64px;\n  display: flex;\n  justify-content: flex-end;\n  align-items: stretch\n  flex-direction: row;\n  flex-wrap: wrap;\n  flex-basis: 85%;\n  width: 100vw;\n  gap: 32px;\n  height: 100%;\n  box-sizing: border-box;\n  justify-content: center;\n  align-content: stretch;\n  background-color: #222b30;\n  ",";\n"])),(function(n){return n.modalOpen?"filter: blur(4px)":null})),N=function(n){return console.log(n.films),Object(A.jsx)(C.Fragment,{children:Object(A.jsx)(H,{modalOpen:n.modalOpen,children:n.Films!==[]?n.films.map((function(n){return Object(A.jsx)(R,{id:n.id,title:n.original_title,poster:n.poster_path,release_date:n.release_date},n.id)})):Object(A.jsx)("h1",{children:"LOading"})})})},_=I.a.div(s||(s=Object(k.a)(["\n  height: 80vh;\n  width: 80vw;\n  background-color: #ff4150;\n  position: absolute;\n  top: 10vh;\n  left: 10vw;\n  z-index: 100;\n  border: 1px solid black;\n  border-radius: 8px;\n  display: flex;\n  justify-content: center;\n  align-items: flex-end;\n  padding: 64px;\n  box-sizing: border-box;\n"]))),P=function(n){var e=n.children;return Object(A.jsx)(_,{children:e})},S=t(16),T=t.n(S),D=t(22),K=function(){var n=Object(D.a)(T.a.mark((function n(e,t){return T.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:""===e?t({type:"SEARCH",payload:[]}):fetch("https://trilado-api.herokuapp.com/search?query=".concat(e)).then((function(n){return n.json()})).then((function(n){t({type:"SEARCH",payload:n})})).catch((function(n){console.log(n)}));case 1:case"end":return n.stop()}}),n)})));return function(e,t){return n.apply(this,arguments)}}(),V=I.a.input(l||(l=Object(k.a)(["\n  width: 100%;\n  height: 100%;\n  background-color: white;\n  border-radius: 8px;\n  position: relative;\n  z-index: 1;\n  border: 0;\n  border-radius: 0;\n  transition: 0.5s;\n  opacity: 0.9;\n  background-color: #ff4150;\n  box-sizing: border-box;\n  flex-basis: 80%;\n  padding: 16px;\n  color: white;\n  &:focus {\n    outline: none;\n  }\n"]))),q=function(){var n=Object(O.useContext)(L).dispatch;return Object(A.jsx)(V,{onChange:function(e){return K(e.target.value,n)},placeholder:"\ud83d\udd0d"})},B=I.a.button(d||(d=Object(k.a)(["\n  width: 300px;\n  height: 50px;\n"]))),J=function(){var n=Object(O.useContext)(L).dispatch;return Object(A.jsxs)(B,{onClick:function(){return n({type:"TOGGLEMODAL"})},children:[" ","Let's find a movie!"]})},Q=I.a.div(b||(b=Object(k.a)(["\n  width: 80vw;\n  height: 80vh;\n  position: absolute;\n  left: 10vw;\n  top: 10vh;\n  background-color: white;\n  z-index: 200;\n"]))),U=function(){return Object(A.jsx)(Q,{children:"recommendations"})},W=t(8),X=I.a.div(h||(h=Object(k.a)(["\n  height: 100vh;\n  flex-basis: 15%;\n  background-color: #191d20;\n  padding: 64px 0 0 0;\n  position: sticky;\n  left: 0;\n  top: 0;\n  box-sizing: border-box;\n  color: white;\n  a {\n    color: white;\n  }\n  &:hover {\n    width: 500px;\n  }\n  }\n"]))),Y=I.a.div(j||(j=Object(k.a)(["\n  boz-sizing: border-box;\n  display: flex;\n  justify-content: center;\n  background-color: #191d20;\n  align-items: center;\n  width: 100%;\n  height: 5vh;\n  transition: 0.5s;\n  &:hover {\n    background-color: #222b30;\n  }\n  background-color: ",";\n  border-left: ",";\n"])),(function(n){return n.selected?"#222b30":"inherit"}),(function(n){return n.selected?"4px solid red":"none"})),Z=function(n){var e=n.page,t=Object(O.useContext)(L).dispatch;return Object(A.jsxs)(X,{children:[Object(A.jsx)(W.b,{to:"/",children:Object(A.jsx)(Y,{selected:"/"===e,onClick:function(){return t({type:"CHANGEPAGE",payload:"/"})},children:"New Releases"})}),Object(A.jsx)(W.b,{to:"/trending",children:Object(A.jsx)(Y,{selected:"/trending"===e,onClick:function(){return t({type:"CHANGEPAGE",payload:"/trending"})},children:"Trending"})}),Object(A.jsx)(W.b,{to:"/recommendations",children:Object(A.jsx)(Y,{selected:"/recommendations"===e,onClick:function(){return t({type:"CHANGEPAGE",payload:"/recommendations"})},children:"Reccomendations"})}),Object(A.jsx)(W.b,{to:"/history",children:Object(A.jsx)(Y,{selected:"/history"===e,onClick:function(){return t({type:"CHANGEPAGE",payload:"/history"})},children:"History"})})]})},$=t(2),nn=function(n,e){switch(e.type){case"LIKE":return Object(E.a)(Object(E.a)({},n),{},{likes:n.likes.includes(e.payload)?n.likes:[].concat(Object(w.a)(n.likes),[e.payload])});case"CHANGEPAGE":return Object(E.a)(Object(E.a)({},n),{},{page:e.payload});case"DISLIKE":return Object(E.a)(Object(E.a)({},n),{},{dislikes:[].concat(Object(w.a)(n.dislikes),[e.payload])});case"FILM":return Object(E.a)(Object(E.a)({},n),{},{films:[].concat(Object(w.a)(n.films),Object(w.a)(e.payload))});case"TOGGLEMODAL":return Object(E.a)(Object(E.a)({},n),{},{modal:!n.modal});case"REMOVEFILM":return Object(E.a)(Object(E.a)({},n),{},{films:n.films.reduce((function(n,t){return t.id!==e.payload?n.concat(t):n}),[])});case"SEARCH":return Object(E.a)(Object(E.a)({},n),{},{searchItems:e.payload})}},en={likes:[],dislikes:[],films:[],modal:!0,searchItems:[],recommendations:void 0,page:"/"},tn=I.a.div(p||(p=Object(k.a)(["\n  display: flex;\n  width: 100%;\n  height: 100%;\n  transition: 0.5s;\n  opacity: 1;\n"]))),on=I.a.div(u||(u=Object(k.a)(["\n  width: 100%;\n  height: 5vh;\n  background-color: #f83847;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n  box-sizing: border-box;\n  display: flex;\n"]))),cn=I.a.div(x||(x=Object(k.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-basis: 15%;\n  color: white;\n"]))),an=I.a.div(f||(f=Object(k.a)(["\n  flex-basis: 85%;\n  background-color: #774c60;\n"])));var rn=function(){var n=Object(O.useReducer)(nn,en),e=Object(v.a)(n,2),t=e[0],i=e[1];return Object(O.useEffect)((function(){fetch("https://trilado-api.herokuapp.com/frequent").then((function(n){return n.json()})).then((function(n){console.log(n),i({type:"FILM",payload:void 0!==n?n:[]})})).catch((function(n){console.log(n)}))}),[]),Object(A.jsx)("div",{className:"App",children:Object(A.jsx)(L.Provider,{value:{dispatch:i},children:Object(A.jsxs)(C.Fragment,{children:[t.modal?Object(A.jsx)(P,{children:10===t.likes.length?Object(A.jsx)(U,{}):Object(A.jsx)(J,{})}):null,Object(A.jsxs)(on,{children:[Object(A.jsx)(cn,{children:"Trilado"}),Object(A.jsx)(an,{children:Object(A.jsx)(q,{})})]}),Object(A.jsxs)(tn,{children:[Object(A.jsx)(Z,{page:t.page}),Object(A.jsxs)($.c,{children:[Object(A.jsx)($.a,{path:"/",element:Object(A.jsx)(N,{films:t.searchItems.length>0?t.searchItems:t.films,title:"New Releases",modalOpen:t.modal})}),Object(A.jsx)($.a,{exact:!0,path:"/trending",element:Object(A.jsx)(N,{films:t.searchItems.length>0?t.searchItems:t.films,title:"New Releases",modalOpen:t.modal})}),Object(A.jsx)($.a,{exact:!0,path:"/recommendations",element:Object(A.jsx)("h1",{children:"recommendations"})}),Object(A.jsx)($.a,{exact:!0,path:"/history",element:Object(A.jsx)(N,{films:t.likes,title:"History"})})]})]})]})})})},sn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,35)).then((function(e){var t=e.getCLS,i=e.getFID,o=e.getFCP,c=e.getLCP,a=e.getTTFB;t(n),i(n),o(n),c(n),a(n)}))};y.a.render(Object(A.jsxs)(W.a,{children:[Object(A.jsx)(m.a.StrictMode,{children:Object(A.jsx)(rn,{})}),","]}),document.getElementById("root")),sn()}},[[34,1,2]]]);
//# sourceMappingURL=main.d3525876.chunk.js.map