(this["webpackJsonpprojectx-web"]=this["webpackJsonpprojectx-web"]||[]).push([[0],{10:function(e,t,o){},12:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o.n(n),a=o(3),s=o.n(a),c=(o(9),o.p+"static/media/logo.6ce24c58.svg"),i=(o(10),o(0));var d=function(){return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)("header",{className:"App-header",children:[Object(i.jsx)("img",{src:c,className:"App-logo",alt:"logo"}),Object(i.jsxs)("p",{children:["Edit ",Object(i.jsx)("code",{children:"src/App.js"})," and save to reload."]}),Object(i.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:"Learn React"})]})})},l=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,13)).then((function(t){var o=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;o(e),n(e),r(e),a(e),s(e)}))},u=o(2);function b(e,t,o,n){var r;n&&(r=JSON.stringify(n));var a=localStorage.getItem("token");console.log("Token Passing ",a);var s=new XMLHttpRequest,c="https://projectxweb1.herokuapp.com/api".concat(t);console.log(c,"URL"),s.responseType="json";var i=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var o=document.cookie.split(";"),n=0;n<o.length;n++){var r=o[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");s.open(e,c),s.setRequestHeader("Content-Type","application/json"),a&&s.setRequestHeader("Authorization","Token ".concat(a)),i&&(s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("X-CSRFToken",i)),s.onload=function(){if(403===s.status){var e=s.response.detail;console.log(e),"Authentication credentials were not provided."===e&&-1===window.location.href.indexOf("login")&&(window.location.href="/login/")}o(s.response,s.status)},s.onerror=function(e){console.log("error",e),o({message:"The request was an error"},400)},s.send(r)}function j(e,t){var o;e&&(o=JSON.stringify(e));var n=new XMLHttpRequest;n.responseType="json";var r=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var o=document.cookie.split(";"),n=0;n<o.length;n++){var r=o[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");n.open("POST","https://projectxweb1.herokuapp.com/auth/"),n.setRequestHeader("Content-Type","application/json"),r&&(n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-CSRFToken",r)),n.onload=function(){if(403===n.status){var e=n.response.detail;console.log(e)}t(n.response,n.status)},n.onerror=function(e){console.log("error",e),t({message:"The request was an error"},400)},n.send(o)}function f(e,t,o){b("POST","/books/cart/",o,{action:t,id:e})}function m(e){b("GET","/books/cart/",e)}function p(e){var t=e.book,o=e.index,r=e.isDetail,a=e.inCart,s=e.onRemove,c=e.orderid,d=Object(n.useState)(e.buttonname?e.buttonname:null),l=Object(u.a)(d,2),j=l[0],m=l[1],p=Object(n.useState)(e.className?e.className:null),O=Object(u.a)(p,2),g=O[0],v=O[1],h=function(e,t){console.log("Add To Cart ",e,t),404===t&&"Book Not Available"===e.detail&&alert("Book Not Available"),201===t&&("Add To Cart"===j?(m("Remove"),v("btn btn-danger")):"Remove"===j&&(!0===a?s(o):(m("Add To Cart"),v("btn btn-primary"))))},k=function(e,t){console.log("BUY ",e,t),"Book Not Available"===e.detail&&alert("Book Not Available")},x=function(e,t){console.log("Cart Buy All",e,t),console.log("Buy All Successfull "),201===t&&alert("Order Placed Successfully")},y=function(e,t){console.log(e,t),"Book Not Delivered"===e.detail?alert("Book Not Delivered"):(v("btn btn-secondary disabled"),m("Book Processing for Return"))};return Object(i.jsx)("button",{className:g,onClick:function(o){var n,a,s=j;o.preventDefault(),o.stopPropagation(),"Add To Cart"===j?(s="Add",f(t.id,s,h)):"Remove"===j?(s="Remove",f(t.id,s,h)):"Buy"===j?r?(n=t.name,a=k,b("POST","/books/".concat(n,"/"),a,{action:"Buy"})):window.location.href="".concat(t.name,"/detail/"):"Buy All"===j?function(e,t){var o=[];e.forEach((function(e){o.push({id:e})})),b("POST","/books/cart/",t,{action:"Buy",detail:o})}(e.cartbooks,x):"Return Book"===j&&(!function(e,t){var o={action:"Return",detail:[{orderid:e}]};console.log(o,"Data"),b("POST","/books/owned/",t,o)}(c,y),console.log(c,"order ID OnClick"))},children:j})}function O(e){var t=e.book,o=e.index,r=e.className,a=e.isDetail,s=e.inCart,c=e.onRemove,d=e.owned,l=e.expiry,b=e.orderid,j=e.ordered,f=e.deliveryDate,O=e.delivered,g=Object(n.useState)(!1===O?"btn btn-danger disabled":d?l?"btn btn-secondary disabled":"btn btn-danger":j?"btn btn-danger disabled":"btn btn-primary"),v=Object(u.a)(g,2),h=v[0],k=v[1],x=Object(n.useState)(!1===O?"Book Not Delivered Yet":d?l?"Book Processing for Return":"Return Book":j?"Estimated Delivery Date : ".concat(f):"Add To Cart"),y=Object(u.a)(x,2),R=y[0],S=y[1],w=Object(n.useState)(!0),B=Object(u.a)(w,2),C=B[0],T=B[1],E=function(e,o){403===o||e.usercart_set.forEach((function(e){e.book.id===t.id&&(k("btn btn-danger"),S("Remove"))}));T(!1)};return Object(n.useEffect)((function(){m(E)}),[]),!0===C?"Loading":Object(i.jsx)("div",{className:"".concat(r," mt-3"),children:Object(i.jsxs)("div",{class:"card h-100",style:{width:"18rem"},children:[Object(i.jsx)("img",{class:"card-img-top",src:"...",alt:"Card image cap"}),Object(i.jsxs)("div",{class:"card-body",children:[Object(i.jsx)("h5",{class:"card-title",children:t.name}),Object(i.jsxs)("p",{class:"card-text",children:["Rs ",t.price," Category: ",t.type]}),!d&&!j&&Object(i.jsx)(p,{buttonname:"Buy",className:"btn btn-primary",book:t,isDetail:a}),Object(i.jsx)(p,{buttonname:R,className:h,book:t,inCart:s,onRemove:function(e){c(e)},index:o,orderid:b})]})]})})}function g(e,t){var o;e&&(o=JSON.stringify(e));var n=new XMLHttpRequest;n.responseType="json";var r=function(e){var t=null;if(document.cookie&&""!==document.cookie)for(var o=document.cookie.split(";"),n=0;n<o.length;n++){var r=o[n].trim();if(r.substring(0,e.length+1)===e+"="){t=decodeURIComponent(r.substring(e.length+1));break}}return t}("csrftoken");n.open("POST","https://projectxweb1.herokuapp.com/api/books/users"),n.setRequestHeader("Content-Type","application/json"),r&&(n.setRequestHeader("X-Requested-With","XMLHttpRequest"),n.setRequestHeader("X-CSRFToken",r)),n.onload=function(){if(403===n.status){var e=n.response.detail;console.log(e)}t(n.response,n.status)},n.onerror=function(e){console.log("error",e),t({message:"The request was an error"},400)},n.send(o)}function v(e){var t=Object(n.useState)(""),o=Object(u.a)(t,2),r=o[0],a=o[1],s=Object(n.useState)(""),c=Object(u.a)(s,2),d=c[0],l=c[1],b={username:r,password:d},f=function(e,t){400===t?alert("Wrong Credentials"):200===t&&(console.log(e.token,t),localStorage.setItem("token","".concat(e.token)),window.location.href="/")},m=function(e,t){console.log("Register ",e,t),200===t&&j(b,f),"A user with that username already exists."===e.username[0]&&alert("User Already Exists")},p=function(e){"username"===e.target.name?a(e.target.value):l(e.target.value)};return Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{children:"Login User Form"}),Object(i.jsx)("label",{for:"exampleInputEmail1",children:"Email address"}),Object(i.jsx)("input",{type:"text",class:"form-control ",placeholder:"Enter Username",name:"username",value:b.username,onChange:p}),Object(i.jsx)("label",{for:"exampleInputPassword1",children:"Password"}),Object(i.jsx)("input",{type:"password",class:"form-control ",placeholder:"Password",name:"password",value:b.password,onChange:p}),Object(i.jsx)("button",{onClick:function(e){j(b,f)},className:"btn btn-primary",children:"Login"}),Object(i.jsx)("button",{onClick:function(e){g(b,m)},className:"btn btn-secondary",children:"Register"})]})}var h=document.getElementById("root");h&&s.a.render(Object(i.jsx)(d,{}),h);var k=r.a.createElement,x=document.getElementById("books");x&&s.a.render(k((function(e){var t=Object(n.useState)([]),o=Object(u.a)(t,2),a=o[0],s=o[1],c=Object(n.useState)(!0),d=Object(u.a)(c,2),l=d[0],j=d[1],f=function(e,t){console.log("response",e,t),s(e),j(!1)};return Object(n.useEffect)((function(){b("GET","/books/",f)}),[]),!0===l?"Loading":Object(i.jsx)(r.a.Fragment,{children:a.map((function(e,t){return Object(i.jsx)(O,{book:e},"".concat(t,"-{item.id}"))}))})}),x.dataset),x);var y=document.getElementById("bookdetail");y&&s.a.render(k((function(e){var t=Object(n.useState)(null),o=Object(u.a)(t,2),r=o[0],a=o[1],s=Object(n.useState)(!0),c=Object(u.a)(s,2),d=c[0],l=c[1],j=function(e,t){console.log("Book Detail Lookup",e,t),a(e[0]),l(!1)};return Object(n.useEffect)((function(){var t,o;t=e.bookname,o=j,b("GET","/books/".concat(t,"/"),o)}),[]),!0===d?"Loading":Object(i.jsx)(O,{book:r,isDetail:!0})}),y.dataset),y);var R=document.getElementById("usercart");R&&s.a.render(k((function(e){var t=Object(n.useState)([]),o=Object(u.a)(t,2),r=o[0],a=o[1],s=Object(n.useState)(!0),c=Object(u.a)(s,2),d=c[0],l=c[1],b=0;Object(n.useEffect)((function(){m(j)}),[]);var j=function(e,t){console.log("Cart Lookup ",e.usercart_set,t),a(e.usercart_set),l(!1)},f=function(e){a(r.filter((function(t){return r.indexOf(t)!==e})))},g=r.map((function(e,t){return console.log(e.book.price),b+=e.book.price,e.book.id}));return d?"":0===g.length?Object(i.jsx)("div",{className:"text-muted",children:"Cart Is Empty"}):Object(i.jsxs)("div",{children:[r.map((function(e,t){return Object(i.jsx)(O,{book:e.book,index:t,inCart:!0,onRemove:f},t)})),0!==g.length&&Object(i.jsx)(p,{buttonname:"Buy All",className:"btn btn-primary",cartbooks:g}),0!==g.length&&Object(i.jsxs)("div",{children:["Total Cost ",b]})]})}),R.dataset),R);var S=document.getElementById("ownedBooks");S&&s.a.render(k((function(e){var t=Object(n.useState)([]),o=Object(u.a)(t,2),r=o[0],a=o[1],s=Object(n.useState)(!0),c=Object(u.a)(s,2),d=c[0],l=c[1];Object(n.useEffect)((function(){b("GET","/books/owned/",j),l(!1)}),[]);var j=function(e,t){a(e),console.log(e),console.log("order",r)};return d?"Loading":Object(i.jsxs)("div",{children:[" ",r.map((function(e,t){return Object(i.jsxs)("div",{className:"border border-secondary mt-3 ",children:[Object(i.jsxs)("div",{children:["Order Id : ",e.orderid]}),Object(i.jsx)(O,{book:e.book,owned:!0,expiry:e.expiry,orderid:e.orderid,delivered:e.delivered},t),Object(i.jsxs)("div",{children:["Order Duration :",e.duration]}),Object(i.jsxs)("div",{children:["OwnerFrom : ",e.ownerfrom]}),Object(i.jsxs)("div",{children:["Book Expiry : ",e.expiry]}),Object(i.jsxs)("div",{children:["Book Return Amount : ",e.returnamount]}),Object(i.jsxs)("div",{children:["Book Return Date : ",e.returndate]})]})}))]})}),S.dataset),S);var w=document.getElementById("orderedBooks");w&&s.a.render(k((function(e){var t=Object(n.useState)([]),o=Object(u.a)(t,2),r=o[0],a=o[1],s=Object(n.useState)(!0),c=Object(u.a)(s,2),d=c[0],l=c[1],j=function(e,t){a(e),l(!1)};return Object(n.useEffect)((function(){b("GET","/books/ordered/",j)}),[]),d?"Loading":Object(i.jsx)("div",{children:r.map((function(e,t){return Object(i.jsxs)("div",{className:"border border-secondary",children:[Object(i.jsxs)("div",{children:["Order ID : ",e.id]}),Object(i.jsx)(O,{book:e.book,ordered:!0,deliveryDate:e.deliveryDate},t),Object(i.jsxs)("div",{children:["Delivery Date : ",e.deliveryDate," "]})]})}))})}),w.dataset),w);var B=document.getElementById("login");B&&s.a.render(k((function(e){var t=Object(n.useState)(""),o=Object(u.a)(t,2),r=(o[0],o[1]);return Object(i.jsx)(v,{userLogin:function(e){console.log(e),r(e)}})}),B.dataset),B);var C=document.getElementById("logout");C&&s.a.render(k((function(e){var t=Object(n.useState)("Are You Sure You Want to Logout ? "),o=Object(u.a)(t,2),r=o[0],a=o[1],s=Object(n.useState)(!0),c=Object(u.a)(s,2),d=c[0],l=c[1];return Object(n.useEffect)((function(){var e=localStorage.getItem("token");e?(l(!0),console.log(e,"TOKEN")):l(!1)}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("div",{children:r}),!0===d&&Object(i.jsx)("button",{onClick:function(){localStorage.setItem("token",""),a("Log Out Successfull"),l(!1)},className:"btn btn-danger",children:"Logout"})]})}),C.dataset),C),l()},9:function(e,t,o){}},[[12,1,2]]]);
//# sourceMappingURL=main.21e97435.chunk.js.map