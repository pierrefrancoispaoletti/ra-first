(this["webpackJsonpgoodcloud-app"]=this["webpackJsonpgoodcloud-app"]||[]).push([[0],{367:function(e,t,r){},502:function(e,t,r){"use strict";r.r(t);r(0);var c=r(15),s=r.n(c),n=(r(367),r(587)),a=r(586),o=r(312),j=r(36),i=r(589),u=r(596),b=r(588),l=r(579),O=r(580),d=r(581),x=r(504),m=r(10),h=function(e){var t=Object(x.a)((function(e){return e.breakpoints.down("sm")}));return Object(m.jsx)(i.a,Object(j.a)(Object(j.a)({},e),{},{children:t?Object(m.jsx)(u.a,{primaryText:function(e){return e.name},secondaryText:function(e){return e.email},tertiaryText:function(e){return e.phone}}):Object(m.jsxs)(b.a,{rowClick:"edit",children:[Object(m.jsx)(l.a,{source:"id"}),Object(m.jsx)(l.a,{source:"name"}),Object(m.jsx)(l.a,{source:"username"}),Object(m.jsx)(O.a,{source:"email"}),Object(m.jsx)(l.a,{source:"address.street"}),Object(m.jsx)(l.a,{source:"phone"}),Object(m.jsx)(d.a,{source:"website"}),Object(m.jsx)(l.a,{source:"company.name"})]})}))},f=r(601),p=r(583),g=r(597),v=r(582),y=r(592),P=r(600),I=function(e){return Object(m.jsxs)(g.a,Object(j.a)(Object(j.a)({},e),{},{children:[Object(m.jsx)(v.a,{label:"Search",source:"q",alwaysOn:!0}),Object(m.jsx)(y.a,{label:"User",source:"userId",reference:"users",allowEmpty:!0,children:Object(m.jsx)(P.a,{optionText:"name"})})]}))},T=function(e){var t=Object(x.a)((function(e){return e.breakpoints.down("sm")}));return Object(m.jsx)(i.a,Object(j.a)(Object(j.a)({filters:Object(m.jsx)(I,{})},e),{},{children:t?Object(m.jsx)(u.a,{primaryText:function(e){return e.title},secondaryText:function(e){return e.id}}):Object(m.jsxs)(b.a,{children:[Object(m.jsx)(l.a,{source:"id"}),Object(m.jsx)(f.a,{label:"User",source:"userId",reference:"users",children:Object(m.jsx)(l.a,{source:"name"})}),Object(m.jsx)(l.a,{source:"title"}),Object(m.jsx)(l.a,{source:"body"}),Object(m.jsx)(p.a,{})]})}))},w=r(591),k=r(590),S=function(e){var t=e.record;return Object(m.jsxs)("span",{children:["Post ",t?'"'.concat(t.title,'"'):""]})},C=function(e){return Object(m.jsx)(w.a,Object(j.a)(Object(j.a)({title:Object(m.jsx)(S,{})},e),{},{children:Object(m.jsxs)(k.a,{children:[Object(m.jsx)(v.a,{disabled:!0,source:"id"}),Object(m.jsx)(y.a,{source:"userId",reference:"users",children:Object(m.jsx)(P.a,{optionText:"username"})}),Object(m.jsx)(v.a,{source:"title"}),Object(m.jsx)(v.a,{multiline:!0,source:"body"})]})}))},F=r(593),B=function(e){return Object(m.jsx)(F.a,Object(j.a)(Object(j.a)({},e),{},{children:Object(m.jsxs)(k.a,{children:[Object(m.jsx)(y.a,{source:"userId",reference:"users",children:Object(m.jsx)(P.a,{optionText:"username"})}),Object(m.jsx)(v.a,{source:"title"}),Object(m.jsx)(v.a,{multiline:!0,source:"body"})]})}))},E=r(325),L=r.n(E),J=r(326),U=r.n(J),q=r(571),z=r(585),A=r(577),D=function(){return Object(m.jsxs)(q.a,{children:[Object(m.jsx)(z.a,{title:"Bienvenue chez GoodCloud"}),Object(m.jsx)(A.a,{children:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe perferendis magnam odio?"})]})},G={login:function(e){var t=e.username;return localStorage.setItem("username",t),Promise.resolve()},logout:function(){return localStorage.removeItem("username"),Promise.resolve()},checkError:function(e){var t=e.status;return 401===t||403===t?(localStorage.removeItem("username"),Promise.reject()):Promise.resolve()},checkAuth:function(){return localStorage.getItem("username")?Promise.resolve():Promise.reject()},getPermissions:function(){return Promise.resolve()}},H=Object(o.a)("https://jsonplaceholder.typicode.com"),K=function(){return Object(m.jsxs)(n.a,{dashboard:D,authProvider:G,dataProvider:H,children:[Object(m.jsx)(a.a,{name:"posts",list:T,edit:C,create:B,icon:L.a}),Object(m.jsx)(a.a,{name:"users",list:h,icon:U.a})]})},M=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,605)).then((function(t){var r=t.getCLS,c=t.getFID,s=t.getFCP,n=t.getLCP,a=t.getTTFB;r(e),c(e),s(e),n(e),a(e)}))};s.a.render(Object(m.jsx)(K,{}),document.getElementById("root")),M()}},[[502,1,2]]]);
//# sourceMappingURL=main.17b3b045.chunk.js.map