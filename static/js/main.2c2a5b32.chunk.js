(this.webpackJsonpMSPR=this.webpackJsonpMSPR||[]).push([[0],{19:function(e){e.exports=JSON.parse('{"a":"https://api.tisamo.fr"}')},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},30:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a(1),r=a.n(s),c=a(11),i=a.n(c),o=a(10),l=a(2),d=(a(26),a.p+"static/media/logo-home.7edc4290.png");var b=function(){var e,t=localStorage.getItem("lang");return null===t&&(localStorage.setItem("lang","en-us"),t=localStorage.getItem("lang")),e=sessionStorage.getItem("userAuthenticated")&&sessionStorage.getItem("userAuthenticated").match("true")?Object(n.jsxs)("a",{className:"btn btn-outline-danger navbarText nav-link dropdown-toggle",id:"navbarDropdownMenuLink","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false",children:[sessionStorage.getItem("firstName")," "]}):Object(n.jsx)("a",{className:"btn btn-outline-danger navbarText",href:"/login",role:"button",children:"Log In"}),Object(n.jsxs)("nav",{id:"nav",className:"navbar navbar-expand-lg navbar-dark bg-secondary",children:[Object(n.jsx)("a",{className:"navbar-brand",href:"/",children:Object(n.jsx)("div",{className:"logo",children:Object(n.jsx)("img",{src:d,alt:"logo"})})}),Object(n.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(n.jsx)("span",{className:"navbar-toggler-icon"})}),Object(n.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarText",children:[Object(n.jsxs)("ul",{className:"navbar-nav mr-auto",children:[Object(n.jsx)("li",{className:"nav-item active",children:Object(n.jsx)("a",{className:"nav-link",href:"/",children:"Home"})}),Object(n.jsx)("li",{className:"nav-item active",children:Object(n.jsx)("a",{className:"nav-link",href:"/about",children:"About"})})]}),Object(n.jsxs)("div",{className:"nav-item dropdown button-dp",children:[e,Object(n.jsxs)("div",{className:"dropdown-menu dropdown-menu-right","aria-labelledby":"navbarDropdownMenuLink",children:[Object(n.jsx)("a",{className:"dropdown-item",href:"/profile",children:"Profile"}),Object(n.jsx)("a",{className:"dropdown-item",href:"","data-toggle":"modal","data-target":"#exampleModal",children:"Log out"})]})]})]}),Object(n.jsx)("div",{className:"modal fade ",id:"exampleModal",tabIndex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",children:Object(n.jsx)("div",{className:"modal-dialog",children:Object(n.jsxs)("div",{className:"modal-content",children:[Object(n.jsxs)("div",{className:"modal-header",children:[Object(n.jsx)("h5",{className:"modal-title",id:"exampleModalLabel",children:"Warning"}),Object(n.jsx)("button",{type:"button",className:"close","data-dismiss":"modal","aria-label":"Close",children:Object(n.jsx)("span",{"aria-hidden":"true",children:"\xd7"})})]}),Object(n.jsx)("div",{className:"modal-body",children:"Are you sure that you want to log out ?"}),Object(n.jsxs)("div",{className:"modal-footer",children:[Object(n.jsx)("button",{type:"button",className:"btn btn-dark","data-dismiss":"modal",children:"Cancel"}),Object(n.jsx)("button",{onClick:function(e){return sessionStorage.clear(),void window.location.reload()},className:"btn btn-dark bg-danger border-danger",children:"Logging out"})]})]})})})]})};a(27);var j=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"Voici la page d'accueil du site constructeur"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Ce site a \xe9t\xe9 cr\xe9\xe9 dans le cas d'une mise en situation reconstitu\xe9e concernant le constructeur Yamaha Motors."}),Object(n.jsx)("p",{children:"Le but n'est aucunement d'usurper leur identit\xe9."})]})]})};a(28);var u=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)("div",{children:Object(n.jsx)("h1",{children:"MSPR Gestion des donn\xe9es"})}),Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"CHANUT Guillaume"}),Object(n.jsx)("p",{children:"RACINE Eliot"}),Object(n.jsx)("p",{children:"SALMON Valentin"}),Object(n.jsx)("p",{children:"TOMASI Hugo"})]})]})},m=a(14),h=a.n(m),g=a(9),p=a(18),x=a(19);a(30);function O(){return(O=Object(p.a)(h.a.mark((function e(t,a){var n,s,r,c,i;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({function:"login",email:t,password:a})},e.prev=1,e.next=4,fetch(x.a+"/mspr",n);case 4:return s=e.sent,e.next=7,s.json();case 7:return r=e.sent,e.abrupt("return",r);case 11:return e.prev=11,e.t0=e.catch(1),c=new Response(JSON.stringify({statusCode:201,data:"Oops, something went wrong with your system"})),e.next=16,c.json();case 16:return i=e.sent,e.abrupt("return",i);case 18:case"end":return e.stop()}}),e,null,[[1,11]])})))).apply(this,arguments)}function v(e,t){""!==e&&""!==t?(function(e,t){return O.apply(this,arguments)}(e,t).then((function(e){200===e.statusCode?(sessionStorage.setItem("userAuthenticated","true"),sessionStorage.setItem("email",e.data.user.email),sessionStorage.setItem("firstName",e.data.user.firstName),sessionStorage.setItem("lastName",e.data.user.lastName),sessionStorage.setItem("department",e.data.user.department),sessionStorage.setItem("privilege",e.data.user.privilege),window.location.reload()):alert(e.data)})),console.log("Connecting...")):alert("Some fields were left empty")}var f=function(){var e=Object(s.useState)("Submit"),t=Object(g.a)(e,2),a=t[0],r=t[1],c=Object(s.useState)("bg-danger border-danger"),i=Object(g.a)(c,2),o=i[0],d=i[1],b=Object(s.useState)(""),j=Object(g.a)(b,2),u=j[0],m=j[1],h=Object(s.useState)(""),p=Object(g.a)(h,2),x=p[0],O=p[1];return sessionStorage.getItem("userAuthenticated")&&sessionStorage.getItem("userAuthenticated").match("true")?Object(n.jsx)(l.a,{to:"/profile"}):Object(n.jsx)("div",{children:Object(n.jsx)("div",{className:"accordion",id:"accordionExample",children:Object(n.jsxs)("div",{className:"card",children:[Object(n.jsx)("div",{className:"card-header bg-secondary",id:"headingOne",children:Object(n.jsx)("h2",{className:"mb-0",children:Object(n.jsx)("button",{className:"btn btn-dark bg-danger text-left border-danger",type:"button","data-toggle":"collapse","data-target":"#collapseOne","aria-expanded":"true","aria-controls":"collapseOne",children:"Authenticate"})})}),Object(n.jsx)("div",{id:"collapseOne",className:"collapse show","aria-labelledby":"headingOne","data-parent":"#accordionExample",children:Object(n.jsxs)("div",{className:"card-body",children:[Object(n.jsxs)("form",{children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"exampleInputEmail1",children:"Email address"}),Object(n.jsx)("input",{type:"email",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",value:u,onChange:function(e){return m(e.target.value)},required:!0})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"exampleInputPassword1",children:"Password"}),Object(n.jsx)("input",{type:"password",className:"form-control",id:"exampleInputPassword1",value:x,onChange:function(e){return O(e.target.value)},required:!0})]})]}),Object(n.jsx)("div",{className:"col-md-4 col-lg-2",children:Object(n.jsx)("button",{onClick:function(){r("Hold on..."),d("bg-light border-light"),v(u,x)},className:"btn btn-dark ".concat(o," btn-block"),children:a})})]})})]})})})};a(36);var N=function(){return sessionStorage.getItem("userAuthenticated")&&sessionStorage.getItem("userAuthenticated").match("true")?Object(n.jsxs)("div",{className:"Profile",children:[Object(n.jsxs)("p",{children:["Votre mail est : ",sessionStorage.getItem("email")]}),Object(n.jsxs)("p",{children:["Identit\xe9e: ",sessionStorage.getItem("firstName")," ",sessionStorage.getItem("lastName")]}),Object(n.jsxs)("p",{children:["Department : ",sessionStorage.getItem("department")]}),Object(n.jsxs)("p",{children:["Privilege level : ",sessionStorage.getItem("privilege")]})]}):Object(n.jsx)(l.a,{to:"/login"})};a(37);var S=function(){return Object(n.jsx)("div",{className:"footer-div bg-secondary",children:Object(n.jsxs)("div",{children:[Object(n.jsx)("p",{children:"Ce site a \xe9t\xe9 cr\xe9\xe9 dans le cas d'une mise en situation reconstitu\xe9e concernant le constructeur Yamaha Motors."}),Object(n.jsx)("p",{children:"Le but n'est aucunement d'usurper leur identit\xe9."})]})})};i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(b,{})}),document.getElementById("navbar")),i.a.render(Object(n.jsx)(o.a,{children:Object(n.jsxs)(l.d,{children:[Object(n.jsx)(l.b,{exact:!0,path:"/",component:j}),Object(n.jsx)(l.b,{path:"/about",component:u}),Object(n.jsx)(l.b,{path:"/login",component:f}),Object(n.jsx)(l.b,{path:"/profile",component:N})]})}),document.getElementById("container")),i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(S,{})}),document.getElementById("footer"))}},[[38,1,2]]]);
//# sourceMappingURL=main.2c2a5b32.chunk.js.map