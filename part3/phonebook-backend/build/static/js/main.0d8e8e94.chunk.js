(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){"use strict";t.r(n);var r=t(15),c=t.n(r),o=t(6),a=t(3),u=t(2),i=t(4),d=t.n(i),s="/api/persons",l={getAll:function(){return d.a.get(s).then((function(e){return e.data}))},create:function(e){return d.a.post(s,e).then((function(e){return e.data}))},update:function(e,n){return d.a.put("".concat(s,"/").concat(e),n).then((function(e){return e.data}))},remove:function(e){return d.a.delete("".concat(s,"/").concat(e)).then((function(e){return e.data}))}},f=t(0),b=function(e){var n=e.filter,t=e.handleFilterChange;return Object(f.jsxs)("div",{children:["filter shown with ",Object(f.jsx)("input",{value:n,onChange:t})]})},h=function(e){var n=e.addPerson,t=e.newName,r=e.handleNameChange,c=e.newNumber,o=e.handleNumberChange;return Object(f.jsxs)("form",{onSubmit:n,children:[Object(f.jsxs)("div",{children:["name: ",Object(f.jsx)("input",{value:t,onChange:r})]}),Object(f.jsxs)("div",{children:["number: ",Object(f.jsx)("input",{value:c,onChange:o})]}),Object(f.jsx)("div",{children:Object(f.jsx)("button",{type:"submit",children:"add"})})]})},j=function(e){var n=e.persons,t=e.removePerson;return Object(f.jsx)(f.Fragment,{children:n.map((function(e){return Object(f.jsxs)("div",{children:[e.name," ",e.number,Object(f.jsx)("button",{onClick:function(){return t(e.id)},children:"delete"})]},e.id)}))})},m=function(e){var n=e.message;if(null===n)return null;var t={color:"error"===n.type?"red":"green",background:"lightgrey",fontSize:20,borderRadius:5,borderStyle:"solid",borderColor:"error"===n.type?"red":"green",borderWidth:5,padding:10,marginBottom:10};return Object(f.jsx)("div",{className:n.type,style:t,children:n.text})},p=function(){var e=Object(u.useState)([]),n=Object(a.a)(e,2),t=n[0],r=n[1],c=Object(u.useState)(""),i=Object(a.a)(c,2),d=i[0],s=i[1],p=Object(u.useState)(""),O=Object(a.a)(p,2),v=O[0],g=O[1],x=Object(u.useState)(""),w=Object(a.a)(x,2),y=w[0],C=w[1],N=Object(u.useState)(null),k=Object(a.a)(N,2),S=k[0],P=k[1];Object(u.useEffect)((function(){l.getAll().then((function(e){r(e)}))}),[]);var T=""===y?t:t.filter((function(e){return e.name.toUpperCase().includes(y.toUpperCase())}));return Object(f.jsxs)("div",{children:[Object(f.jsx)("h2",{children:"Phonebook"}),Object(f.jsx)(m,{message:S}),Object(f.jsx)(b,{filter:y,handleFilterChange:function(e){C(e.target.value)}}),Object(f.jsx)("h2",{children:"add a new"}),Object(f.jsx)(h,{addPerson:function(e){if(e.preventDefault(),0===d.length)return window.alert("Name cannot be blank");var n={name:d,number:v},c=t.find((function(e){return e.name.toUpperCase()===d.toUpperCase()}));if(c){if(!window.confirm("".concat(d," is already added to phonebook, replace the old number with a new one?")))return;var a=Object(o.a)(Object(o.a)({},c),{},{number:v});return l.update(c.id,a).then((function(e){r(t.map((function(n){return n.id===c.id?e:n}))),P({type:"success",text:"Information for ".concat(e.name," updated successfully")}),setTimeout((function(){P(null)}),5e3)})).catch((function(e){P({type:"error",text:"Information for for ".concat(a.name," has already been removed from server")}),setTimeout((function(){P(null)}),5e3),r(t.filter((function(e){return e.id!==c.id})))}))}l.create(n).then((function(e){r(t.concat(e)),s(""),g(""),P({type:"success",text:"Added ".concat(e.name)}),setTimeout((function(){P(null)}),5e3)}))},newName:d,handleNameChange:function(e){s(e.target.value)},newNumber:v,handleNumberChange:function(e){g(e.target.value)}}),Object(f.jsx)("h2",{children:"Numbers"}),Object(f.jsx)(j,{persons:T,removePerson:function(e){var n=t.find((function(n){return n.id===e}));window.confirm("Delete ".concat(n.name,"?"))&&l.remove(e).then((function(){r(t.filter((function(n){return n.id!==e})))})).catch((function(c){P({type:"error",text:"".concat(n.name," already removed from server")}),setTimeout((function(){P(null)}),5e3),r(t.filter((function(n){return n.id!==e})))}))}})]})};c.a.render(Object(f.jsx)(p,{}),document.getElementById("root"))}},[[39,1,2]]]);
//# sourceMappingURL=main.0d8e8e94.chunk.js.map