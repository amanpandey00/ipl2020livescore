(this.webpackJsonpipl2021livescore=this.webpackJsonpipl2021livescore||[]).push([[0],{57:function(t,e,c){},58:function(t,e,c){},69:function(t,e,c){"use strict";c.r(e);var n=c(0),i=c.n(n),r=c(8),a=c.n(r),s=(c(57),c(26)),o=(c.p,c(58),c(46)),j=c(92),l=c(85),h=c(88),d=c(89),u=c(43),b=c.n(u),O=c(3),x=function(){return Object(O.jsx)(l.a,{position:"static",children:Object(O.jsxs)(h.a,{children:[Object(O.jsx)(d.a,{color:"inherit",children:Object(O.jsx)(b.a,{})}),Object(O.jsx)(o.a,{variant:"h6",children:"IPL 2021"})]})})},f=c(90),m=c(91),p=c(93),g=c(94),y=c(99),v=c(95),S=c(96),T=c(97),C=c(98),L="lfDfM4mqxbMcJ7IzqQVyXfQJT852",k=c.p+"static/media/vs-img.1fee9b0b.png",w=function(t){var e=t.match,c=Object(n.useState)({}),i=Object(s.a)(c,2),r=i[0],a=i[1],l=Object(n.useState)(!1),h=Object(s.a)(l,2),d=h[0],u=h[1],b=function(t){(function(t){var e="https://cricapi.com/api/cricketScore?apikey=".concat(L,"&unique_id=").concat(t);return fetch(e).then((function(t){return t.json()})).catch((function(t){return console.log("Error: ",t)}))})(t).then((function(t){a(t),w()})).catch((function(t){return console.log("Error")}))},x=function(){u(!1)},w=function(){u(!0)};return Object(O.jsxs)(n.Fragment,{children:[Object(O.jsxs)(f.a,{style:{marginTop:20,padding:20},children:[Object(O.jsx)(m.a,{children:Object(O.jsxs)(j.a,{container:!0,justify:"center",spacing:4,alignItems:"center",children:[Object(O.jsx)(j.a,{item:!0,style:{width:150},children:Object(O.jsx)(o.a,{variant:"h5",children:e["team-1"]})}),Object(O.jsx)(j.a,{item:!0,children:Object(O.jsx)("img",{style:{width:95},src:k,alt:"vsImg"})}),Object(O.jsx)(j.a,{item:!0,style:{width:150},children:Object(O.jsx)(o.a,{variant:"h5",children:e["team-2"]})})]})}),Object(O.jsx)(p.a,{children:Object(O.jsxs)(j.a,{container:!0,justify:"center",children:[Object(O.jsxs)(g.a,{style:{marginTop:5},item:!0,variant:"outlined",color:"primary",children:["Start Time: ",new Date(e.dateTimeGMT).toLocaleString()]}),Object(O.jsx)(g.a,{style:{marginLeft:5,marginTop:5},item:!0,variant:"contained",color:"primary",onClick:function(){return b(e.unique_id)},children:"Show Detail"})]})})]}),Object(O.jsxs)(y.a,{open:d,onClose:x,children:[Object(O.jsx)(v.a,{id:"alert-dialog-title",children:"Match Detail..."}),Object(O.jsx)(S.a,{children:Object(O.jsxs)(T.a,{id:"alert-dialog-description",children:[Object(O.jsx)(o.a,{children:r.stat}),Object(O.jsxs)(o.a,{children:["Match: ",Object(O.jsx)("span",{style:{fontStyle:"italic",fontWeight:"bold"},children:r.matchStarted?"Started":"Still Not Started"})]}),Object(O.jsxs)(o.a,{children:["Score: ",Object(O.jsx)("span",{style:{fontStyle:"italic",fontWeight:"bold"},children:r.score})]})]})}),Object(O.jsx)(C.a,{children:Object(O.jsx)(g.a,{onClick:x,color:"primary",autoFocus:!0,children:"CLOSE"})})]})]})};var F=function(){var t=Object(n.useState)([]),e=Object(s.a)(t,2),c=e[0],i=e[1];return Object(n.useEffect)((function(){(function(){var t="https://cricapi.com/api/matches?apikey=".concat(L);return fetch(t).then((function(t){return t.json()})).catch((function(t){return console.log("Error: ",t)}))})().then((function(t){i(t.matches)})).catch((function(t){return console.log("Could not load Data")}))}),[]),Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(x,{}),Object(O.jsx)(o.a,{variant:"h4",style:{marginTop:20},children:"Welcome To IPL 2021 Live Score"}),Object(O.jsxs)(j.a,{container:!0,children:[Object(O.jsx)(j.a,{sm:"2"}),Object(O.jsx)(j.a,{sm:"8",children:c.map((function(t){return Object(O.jsx)(n.Fragment,{children:""==t.type?Object(O.jsx)(w,{match:t}):""},t.unique_id)}))})]})]})},I=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(e){var c=e.getCLS,n=e.getFID,i=e.getFCP,r=e.getLCP,a=e.getTTFB;c(t),n(t),i(t),r(t),a(t)}))};a.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(F,{})}),document.getElementById("root")),I()}},[[69,1,2]]]);
//# sourceMappingURL=main.c4fcdaca.chunk.js.map