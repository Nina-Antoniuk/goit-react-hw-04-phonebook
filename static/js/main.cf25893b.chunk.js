(this["webpackJsonpgoit-react-hw-04-phonebook"]=this["webpackJsonpgoit-react-hw-04-phonebook"]||[]).push([[0],{10:function(e,t,n){e.exports={list:"Contacts_list__l3FS6"}},17:function(e,t,n){},18:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(9),s=n.n(r),o=(n(17),n(12)),i=n(11),l=n(2),u=n(24),m=(n(18),n(8)),b=n.n(m),d=n(0);var j=function(e){var t=e.onSubmit,n=Object(a.useState)(""),c=Object(l.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(""),i=Object(l.a)(o,2),u=i[0],m=i[1],j=function(e){var t=e.target,n=t.name,a=t.value;switch(n){case"name":s(a);break;case"number":m(a);break;default:console.log("oops")}},f=function(){s(""),m("")};return Object(d.jsxs)("form",{className:b.a.form,onSubmit:function(e){e.preventDefault(),t({name:r,number:u}),f()},children:[Object(d.jsx)("label",{className:"label",htmlFor:"nameId",children:"Name"}),Object(d.jsx)("input",{id:"nameId",className:"input",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,autoComplete:"off",value:r,onChange:j}),Object(d.jsx)("label",{className:"label",htmlFor:"numberId",children:"Number"}),Object(d.jsx)("input",{id:"numberId",className:"input",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0438\u0437 \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435,  \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,autoComplete:"off",value:u,onChange:j}),Object(d.jsx)("button",{className:b.a.button,type:"submit",children:"Add contact"})]})};var f=function(e){var t=e.id,n=e.value,a=e.onChange;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("label",{className:"label",htmlFor:t,children:"Find contacts by name"}),Object(d.jsx)("input",{id:t,className:"input",name:"filter",type:"text",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0438\u043c\u044f \u043a\u043e\u0442\u043e\u0440\u043e\u0435 \u0438\u0449\u0438\u0442\u0435",autoComplete:"off",value:n,onChange:a})]})},p=n(5),O=n.n(p),h=n(10),x=n.n(h),v=n(6),_=n.n(v);var C=function(e){var t=e.id,n=e.name,a=e.number,c=e.onClick;return Object(d.jsxs)("li",{className:_.a.listItem,id:t,children:[Object(d.jsxs)("span",{className:_.a.name,children:[n,":"]})," ",a,Object(d.jsx)("button",{className:_.a.deleteBtn,type:"button",onClick:c,children:"Delete"})]})};C.PropTypes={names:O.a.arrayOf(O.a.object),onClick:O.a.func};var g=function(e){var t=e.names,n=e.onClick;return Object(d.jsx)("ul",{className:x.a.list,children:t().map((function(e){return Object(d.jsx)(C,{id:e.id,name:e.name,number:e.number,onClick:n},e.id)}))})};var N=function(){var e=Object(a.useState)([]),t=Object(l.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(l.a)(r,2),m=s[0],b=s[1];return Object(a.useEffect)((function(){if(localStorage.getItem("contacts")){var e=JSON.parse(localStorage.getItem("contacts"));c(e)}}),[]),Object(a.useEffect)((function(){localStorage.setItem("contacts",JSON.stringify(n))}),[n]),Object(d.jsxs)("div",{className:"App",children:[Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h2",{children:"Phonebook"}),Object(d.jsx)(j,{onSubmit:function(e){if(n.find((function(t){return t.name===e.name})))return alert("".concat(e.name," is already in contacts"));c([Object(o.a)({id:Object(u.a)()},e)].concat(Object(i.a)(n)))}})]}),Object(d.jsxs)("div",{className:"wrapper",children:[Object(d.jsx)("h2",{children:"Contacts"}),Object(d.jsx)(f,{id:Object(u.a)(),value:m,onChange:function(e){b(e.target.value)}}),Object(d.jsx)(g,{names:function(){var e=m.toLocaleLowerCase();return n.filter((function(t){return t.name.toLowerCase().includes(e)}))},onClick:function(e){return c((function(){return n.filter((function(t){return t.id!==e.target.parentNode.id}))}))}})]})]})};s.a.render(Object(d.jsx)(c.a.StrictMode,{children:Object(d.jsx)(N,{})}),document.getElementById("root"))},6:function(e,t,n){e.exports={listItem:"ContactsListElement_listItem__b2IoV",name:"ContactsListElement_name__3q31J",deleteBtn:"ContactsListElement_deleteBtn__26xTg"}},8:function(e,t,n){e.exports={form:"Form_form__WS4Pn",button:"Form_button__3GWyu",input:"Form_input__3qZpx",deleteBtn:"Form_deleteBtn__GQuPp"}}},[[22,1,2]]]);
//# sourceMappingURL=main.cf25893b.chunk.js.map