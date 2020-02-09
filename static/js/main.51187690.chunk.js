(this.webpackJsonpclock=this.webpackJsonpclock||[]).push([[0],{23:function(e,a,t){e.exports=t.p+"static/media/beep.238acd50.mp3"},36:function(e,a,t){e.exports=t(52)},41:function(e,a,t){},43:function(e,a,t){},52:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(26),c=t.n(l),o=(t(41),t(42),t(43),t(14)),i=t(11),m=t(5),u=t(57),s=t(53),d=t(30),f=t(58),E=function(e){var a=Object(i.f)();return r.a.createElement("div",{className:"clockFooter"},r.a.createElement(s.a,null,r.a.createElement(d.a,{xs:6},r.a.createElement(f.a,{href:"#",onClick:function(){return a.push("/")},variant:"link",size:"lg"},"Clock")),r.a.createElement(d.a,{xs:6},!e.disabledAlarm&&r.a.createElement(f.a,{onClick:function(){return a.push("/alarmList")},href:"#",variant:"link",size:"lg"},"Alarm"))))},h=function(e){Object(i.f)();return r.a.createElement("div",{className:"clockHeader"},r.a.createElement(s.a,null,r.a.createElement(d.a,{xs:3},r.a.createElement(f.a,{onClick:function(){return e.leftFunc?e.leftFunc():""},href:"#",variant:"link",size:"lg"},e.leftTitle,"\xa0")),r.a.createElement(d.a,{xs:6},r.a.createElement("div",{className:"header-title"},e.title)),r.a.createElement(d.a,{xs:3},r.a.createElement(f.a,{onClick:function(){return e.rightFunc?e.rightFunc():""},href:"#",variant:"link",size:"lg"},e.rightTitle))))},v=t(16),p=t.n(v),b=t(23),g=t.n(b),y=[{id:1,name:"Monday",type:"WeekDay"},{id:2,name:"Tuesday",type:"WeekDay"},{id:3,name:"Wednesday",type:"WeekDay"},{id:4,name:"Thursday",type:"WeekDay"},{id:5,name:"Friday",type:"WeekDay"},{id:6,name:"Saturday",type:"Weekend"},{id:7,name:"Sunday",type:"Weekend"}],k=[{id:1,name:"None",sound:""},{id:2,name:"Beep",sound:g.a},{id:3,name:"Razer",sound:g.a}],x=function(){return p()().format("dddd DD MMM, YYYY")},O=function(){return p()().format("HH:mm:ss")},j=function(e,a){var t=y.filter((function(e,t){return e.type.toLowerCase()==a})),n=t.length;return n==e.length&&n==t.filter((function(a,t){return e.includes(a.id.toString())})).length},S=function(e){var a=k[k.findIndex((function(a){return a.id==e}))];return a?a.sound:""},C=t(17),N=function(e){var a=localStorage.getItem(e);return a?JSON.parse(a):[]},I=function(e,a){var t=N(e);t.splice(a,1),localStorage.setItem(e,JSON.stringify(t))},T=function(e){var a=Object(n.useState)(),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(),i=Object(m.a)(o,2),s=i[0],d=i[1],f=function(){d(x())};return Object(n.useEffect)((function(){!function e(){c(O()),setTimeout((function(){e(),f()}),1e3)}(),f()}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{className:"text-center"},r.a.createElement(h,{title:"Clock"}),r.a.createElement(u.a.Body,null,r.a.createElement(u.a.Text,{className:"clock-time"},l),r.a.createElement(u.a.Text,{className:"clock-date"},s))),r.a.createElement(E,null))},A=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(T,{props:e}))},w=t(13),F=t(56),L=t(55),D=function(e){var a=Object(n.useState)([]),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(i.f)();Object(n.useEffect)((function(){f()}),[e.isList]);var f=function(){var e=N("alarm").map((function(e,a){return Object(w.a)({},e,{formatTime:e.hr+":"+e.mm+":"+e.time,index:a})}));E(e)},E=function(e){e.sort((function(e,a){return Date.parse("1970/01/01 "+e.formatTime.slice(0,-2)+" "+e.formatTime.slice(-2))-Date.parse("1970/01/01 "+a.formatTime.slice(0,-2)+" "+a.formatTime.slice(-2))})),c(e)},h=function(e,a){!function(e,a,t){var n=N(e);n[a].is_active=t,localStorage.setItem(e,JSON.stringify(n))}("alarm",a.index,!a.is_active),f()};return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,null,r.a.createElement(F.a,{variant:"flush"},l&&l.length?l.map((function(a,t){return r.a.createElement(F.a.Item,{key:a.index,style:{background:"".concat(0==a.is_active?"#f9f9f9":"transparent")}},r.a.createElement(s.a,{className:"justify-content-md-left"},!e.isList&&r.a.createElement(d.a,{xs:2,className:"text-left"},r.a.createElement("span",{onClick:function(){return e=a.index,I("alarm",e),void f();var e},className:"fa fa-times removeIcon"})),r.a.createElement(d.a,{className:"text-left"},r.a.createElement("div",null,r.a.createElement("strong",null,"".concat(a.hr,":").concat(a.mm)),r.a.createElement("sub",null,a.time)),r.a.createElement("div",null,a.label?a.label:"",", "+((n=a.day).length==y.length?"EveryDay":j(n,"weekend")?"WeeKends":j(n,"weekday")?"Weekdays":y.flatMap((function(e){return n.includes(e.id.toString())?[e.name]:[]})).join(",")))),e.isList?r.a.createElement(d.a,null,r.a.createElement(L.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(L.a.Check,{onChange:function(e){return h(0,a)},value:a.is_active,checked:!!a.is_active,type:"checkbox"}))):r.a.createElement(d.a,{xs:2,className:"text-right"},r.a.createElement("span",{className:"fa fa-arrow-right ",onClick:function(){return o.push("/editAlarm/".concat(+a.index+1))}}))));var n})):r.a.createElement(F.a.Item,null,r.a.createElement("div",{className:"no-alarm"}," No Alarms Set")))))},z=function(e){var a=Object(n.useState)(!0),t=Object(m.a)(a,2),l=t[0],c=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement(h,{leftTitle:l?"Edit":"Done",leftFunc:function(e){c(!l),console.log("sadasdas")},title:"Alarm List",rightTitle:"Add",rightFunc:function(){e.history.push("/addAlarm")}}),r.a.createElement(D,{isList:l}),r.a.createElement(E,{disabledAlarm:!0}))};function W(e){var a={};return e.hr||(a.hr="Hour is required"),e.mm||(a.mm="Minute is required"),e.time||(a.ss="Time is required"),e.day||(a.day="Day is required"),e.sound||(a.sound="Sound is required"),e.label||(a.label="Label is required"),a}var M=t(15),B=function(e,a){var t=Object(n.useState)({}),r=Object(m.a)(t,2),l=r[0],c=r[1],o=Object(n.useState)({}),i=Object(m.a)(o,2),u=i[0],s=i[1],d=Object(n.useState)(!1),f=Object(m.a)(d,2),E=f[0],h=f[1];Object(n.useEffect)((function(){0===Object.keys(u).length&&E?e():h(!1)}),[u]);return{handleChange:function(e){e.persist(),"snooze"==e.target.name?c((function(a){return Object(w.a)({},a,Object(M.a)({},e.target.name,e.target.checked))})):c((function(a){return Object(w.a)({},a,Object(M.a)({},e.target.name,e.target.value))}))},handleSubmit:function(e){e&&e.preventDefault(),s(a(l)),h(!0)},values:l,errors:u,isSubmitting:E,setIsSubmitting:h,setErrors:s,setValues:c}},G=function(e){var a=Object(n.useState)(""),t=Object(m.a)(a,2),l=(t[0],t[1]),c=Object(n.useState)([]),o=Object(m.a)(c,2),i=o[0],E=o[1],v=Object(n.useState)({}),p=Object(m.a)(v,2),b=(p[0],p[1],Object(n.useState)("")),g=Object(m.a)(b,2),x=g[0],O=g[1],j=Object(n.useState)(!1),S=Object(m.a)(j,2),T=S[0],A=S[1];Object(n.useEffect)((function(){var a=e.match.params.id;console.log({id:a}),a&&D(a-1)}),[]);var D=function(e){console.log({index:e});var a=N("alarm")[e];a&&(O(e),A(!0),P((function(e){return{hr:a.hr,mm:a.mm,time:a.time,day:a.day,sound:a.sound,snooze:a.snooze?a.snooze:"",label:a.label?a.label:""}})))},z=function(e){var a=[];a=e.target.checked?[].concat(Object(C.a)(i),[e.target.value]):i.filter((function(a){return a!==e.target.value})),E(a),P((function(e){return Object(w.a)({},e,{day:a})})),a.length>=1?l(1):l("")},M=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=[],n=a;n<=e;n++){var l=n<10?"0"+n:n;t.push(r.a.createElement("option",{key:l,value:l},l))}return t},G=function(e){var a=e.name;return q[a]?r.a.createElement("span",{className:"error"},q[a]):null},J=B((function(){try{_.is_active=1,T?function(e,a,t){var n=N(e);n[a]=t,localStorage.setItem(e,JSON.stringify(n))}("alarm",x,_):function(e,a){var t=N(e),n=[].concat(Object(C.a)(t),[a]);localStorage.setItem(e,JSON.stringify(n))}("alarm",_),e.history.push("/alarmList")}catch(a){alert("Error while adding an alarm")}}),W),_=J.values,q=J.errors,H=J.handleChange,Y=J.handleSubmit,P=J.setValues;J.setErrors,J.setIsSubmitting,J.isSubmitting;return console.log({values:_},"adads"),r.a.createElement(r.a.Fragment,null,r.a.createElement(L.a,{onSubmit:Y,noValidate:!0},r.a.createElement(u.a,null,r.a.createElement(h,{leftTitle:"Cancel",leftFunc:function(){e.history.push("/alarmList")},title:"Add/Edit Alarm"}),r.a.createElement(u.a.Body,null,r.a.createElement(s.a,null,r.a.createElement(d.a,{xs:4},r.a.createElement(L.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(L.a.Control,{value:_.hr||"",name:"hr",onChange:H,as:"select"},r.a.createElement("option",null,"HH"),M(12,1)),r.a.createElement(G,{name:"hr"}))),r.a.createElement(d.a,{xs:4},r.a.createElement(L.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(L.a.Control,{value:_.mm||"",name:"mm",onChange:H,as:"select"},r.a.createElement("option",null,"MM"),M(59)),r.a.createElement(G,{name:"mm"}))),r.a.createElement(d.a,{xs:4},r.a.createElement(L.a.Group,{controlId:"exampleForm.ControlSelect1"},r.a.createElement(L.a.Control,{value:_.time||"",name:"time",onChange:H,as:"select"},r.a.createElement("option",null,"Time"),r.a.createElement("option",{value:"AM"},"AM"),r.a.createElement("option",{value:"PM"},"PM")),r.a.createElement(G,{name:"ss"})))),r.a.createElement(s.a,null,r.a.createElement(d.a,{xs:8,className:"text-left"},r.a.createElement("label",null,"Snooze")),r.a.createElement(d.a,{xs:4},r.a.createElement(L.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(L.a.Check,{name:"snooze",value:_.snooze||"",onChange:H,checked:!!_.snooze,type:"checkbox"})))),r.a.createElement(s.a,null,r.a.createElement(d.a,{xs:4,className:"text-left"},r.a.createElement("label",null,"Label")),r.a.createElement(d.a,{xs:8},r.a.createElement(L.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(L.a.Control,{name:"label",value:_.label||"",onChange:H,type:"text"}),r.a.createElement(G,{name:"label"})))))),r.a.createElement("div",{className:"mt15"},r.a.createElement("div",{className:"alrDiv"},"Repeat Time"),r.a.createElement(G,{name:"day"}),r.a.createElement(u.a,null,r.a.createElement(F.a,{variant:"flush"},y.map((function(e,a){var t=_.day,n=void 0===t?[]:t;return r.a.createElement(F.a.Item,{key:e.id},r.a.createElement(s.a,{className:"justify-content-md-left"},r.a.createElement(d.a,{xs:8,className:"text-left"},e.name),r.a.createElement(d.a,{xs:4},r.a.createElement(L.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(L.a.Check,{name:"day[".concat(a,"]"),value:e.id,onChange:z,type:"checkbox",checked:n.indexOf(e.id.toString())>=0||""})))))}))))),r.a.createElement("div",{className:"mt15"},r.a.createElement("div",{className:"alrDiv"},"Sound"),r.a.createElement(G,{name:"sound"}),r.a.createElement(u.a,null,r.a.createElement(F.a,{variant:"flush"},k.map((function(e,a){var t=_.sound,n=void 0===t?[]:t;return r.a.createElement(F.a.Item,{key:e.id},r.a.createElement(s.a,{className:"justify-content-md-left"},r.a.createElement(d.a,{xs:8,className:"text-left"},e.name),r.a.createElement(d.a,{xs:4},r.a.createElement(L.a.Group,{controlId:"formBasicCheckbox"},r.a.createElement(L.a.Check,{type:"radio",name:"sound",value:e.id,onChange:H,checked:n.indexOf(e.id.toString())>=0||""})))))}))))),r.a.createElement("div",null,r.a.createElement(f.a,{variant:"outline-primary",type:"submit",block:!0},T?"Update":"Save")),r.a.createElement("div",null,r.a.createElement(f.a,{variant:"outline-".concat(T?"danger":"primary"),onClick:function(){T?(I("alarm",x),e.history.push("/alarmList")):e.history.push("/alarmList")},block:!0},T?"Delete":"Cancel"))))},J=[{path:"/",component:A},{path:"/alarmList",component:z},{path:"/addAlarm",component:G},{path:"/editAlarm/:id",component:G}],_=t(54),q=function(e){var a=Object(n.useState)({}),t=Object(m.a)(a,2),l=t[0],c=t[1],o=Object(n.useState)(new Audio("")),i=Object(m.a)(o,2),s=i[0],d=i[1],E=Object(n.useState)(),h=Object(m.a)(E,2),v=h[0],b=h[1],g=Object(n.useState)(),k=Object(m.a)(g,2),j=k[0],C=k[1],I=Object(n.useState)(!1),T=Object(m.a)(I,2),A=T[0],w=T[1];Object(n.useEffect)((function(){var e=setInterval((function(){F()}),1e3);return function(){return clearInterval(e)}}),[v]);var F=function(){s&&l&&l.hr&&s.play(),b(O()),C(x()),l.hr||A||L()},L=function(){var e=function(e){var a=p()().format("dddd"),t=p()().format("hh:mm:A"),n=y.filter((function(e,t){return e.name.toLowerCase()==a.toLowerCase()})),r=e.filter((function(e,a){return e.day.includes(n[0].id.toString())&&1==e.is_active})),l="";return r.length&&r.map((function(e,a){e.hr+":"+e.mm+":"+e.time==t&&((l=e).sound=S(parseInt(l.sound)))})),l}(N("alarm"));if(e&&!A){if(e.sound){var a=new Audio(e.sound);d(a)}c(e)}};return r.a.createElement(r.a.Fragment,null,l&&l.hr?r.a.createElement("div",{className:"text-center alaram-card alarm-screen h100"},r.a.createElement("div",{className:" alarm-screen alaram-card alarm-screen-div h100"},r.a.createElement(u.a,{className:"text-center alaram-card h100"},r.a.createElement(u.a.Body,null,r.a.createElement(u.a.Text,null,v),r.a.createElement(u.a.Text,null,j),r.a.createElement(u.a.Text,{className:"alarm-label"},r.a.createElement("span",null,l.label)),r.a.createElement("div",null,l.snooze&&r.a.createElement(f.a,{variant:"outline-primary",onClick:function(){alert("Work in Progress")},block:!0},"Snooze"),r.a.createElement(f.a,{variant:"outline-primary",onClick:function(){return c(""),s&&s.pause(),d(new Audio("")),w(!0),void setTimeout((function(){w(!1)}),6e4)},block:!0},"Stop")))))):null)},H=function(e){return r.a.createElement(_.a,null,r.a.createElement(s.a,null,r.a.createElement(d.a,null),r.a.createElement(d.a,{className:"children",sm:6,xs:12},e.children,r.a.createElement(q,null)),r.a.createElement(d.a,null)))},Y=function(e){return r.a.createElement("div",{className:"App"},r.a.createElement(o.a,{basename:"/alarmclock"},r.a.createElement(n.Suspense,{fallback:r.a.createElement("div",null,"Loading...")},r.a.createElement(i.c,null,r.a.createElement(H,null,J.map((function(e,a){return r.a.createElement(i.a,{key:a,path:e.path,component:e.component,exact:!0})})))))))};var P=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(Y,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[36,1,2]]]);
//# sourceMappingURL=main.51187690.chunk.js.map