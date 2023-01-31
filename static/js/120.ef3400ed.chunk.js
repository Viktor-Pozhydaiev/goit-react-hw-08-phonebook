"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[120],{120:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var r=t(9439),a=t(2791),s=t(9434),c=t(3634),o=t(6916),i=function(e){return e.contacts.items},l=function(e){return e.contacts.isLoading},u=function(e){return e.contacts.error},d=function(e){return e.filter},m=(0,o.P1)([i,d],(function(e,n){return n?e.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())})):e})),x=t(4808),f=t(184),h=function(){var e=(0,s.I0)(),n=(0,s.v9)(d);return(0,f.jsxs)("label",{className:"m-2",children:[(0,f.jsx)("p",{children:"Find contacts by name"}),(0,f.jsx)("input",{className:"border-2 border-green-700",type:"text",name:"filter",value:n,onChange:function(n){return e((0,x.p)(n.currentTarget.value))}})]})},b=t(3433),p=t(5562),g=t.n(p),j=function(e){var n=e.id,t=e.number,r=e.name,a=(0,s.I0)();return(0,f.jsxs)("li",{className:"m-1",children:[(0,f.jsxs)("span",{className:"p-2 text-center text-xl text-violet-500 ",children:[r,": ",t]}),(0,f.jsx)("button",{className:"left-10 bg-cyan-500 m-1 ",onClick:function(){a((0,c._f)(n)),g().Notify.warning("You deleted contact ".concat(r,". "))},type:"button",children:"Delete"})]})},v=function(){var e=(0,s.v9)(m),n=(0,b.Z)(e).reverse();return(0,f.jsx)(f.Fragment,{children:n.length>0&&(0,f.jsx)("div",{children:(0,f.jsx)("ul",{className:"flex flex-col  p-0 items-baseline",children:n.map((function(e){var n=e.id,t=e.number,r=e.name;return(0,f.jsx)(j,{id:n,name:r,number:t},n)}))})})})},N=t(3402),y=function(){var e=(0,s.I0)(),n=(0,s.v9)(i),t=(0,a.useState)(""),o=(0,r.Z)(t,2),l=o[0],u=o[1],d=(0,a.useState)(""),m=(0,r.Z)(d,2),x=m[0],h=m[1],b=function(e){var n=e.target,t=n.name,r=n.value;switch(t){case"name":u(r);break;case"number":h(r);break;default:g().Notify.warning("You wrote something wrong, please try again!")}};return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("div",{children:(0,f.jsxs)("form",{className:"flex flex-col p-10 border-2 border-rose-600",onSubmit:function(t){t.preventDefault(),n.find((function(e){return e.name.toLowerCase()===l.toLowerCase()}))?N.Am.error("".concat(l," is already  in contacts.")):n.find((function(e){return e.number===x}))?N.Am.error("Contact number ".concat(x," is already  in contacts.")):(e((0,c.el)({name:l,number:x})),N.Am.success("You added new contact ".concat(l,". "))),u(""),h("")},children:[(0,f.jsx)("p",{className:"text-center",children:" Name"}),(0,f.jsx)("input",{className:"border-2 border-green-600",type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",id:"name",value:l,onChange:b,placeholder:"Enter name..",required:!0}),(0,f.jsx)("p",{className:"text-center",children:"Phone"}),(0,f.jsx)("input",{className:"border-2 border-green-600",type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",placeholder:"Enter number..",value:x,onChange:b,id:"number",required:!0}),(0,f.jsx)("button",{className:"bg-green-500 mt-2 text-base ",type:"submit",children:"Add contact"})]})})})},w=t(6992);function C(){var e=(0,s.I0)(),n=(0,s.v9)(l),t=(0,s.v9)(i),o=(0,s.v9)(u),d=(0,a.useState)(!1),m=(0,r.Z)(d,2),x=m[0],b=m[1];return(0,a.useEffect)((function(){e((0,c.yF)())}),[e]),(0,f.jsxs)("div",{className:"flex justify-center flex-col items-center",children:[(0,f.jsxs)("div",{className:"flex flex-row items-center",children:[(0,f.jsx)("h2",{className:"text-green-500 text-2xl m-5",children:"Contact"}),!1===x&&(0,f.jsx)("button",{className:"bg-cyan-500",type:"button",onClick:function(){return b(!0)},children:(0,f.jsx)(w.kPb,{})}),!0===x&&(0,f.jsx)("button",{className:" bg-red-500",type:"button",onClick:function(){return b(!1)},children:(0,f.jsx)(w.S1K,{})})]}),(0,f.jsx)("div",{children:n&&"Request in progress..."}),o&&(0,f.jsx)("div",{children:"Sorry, something went wrong...."}),x&&(0,f.jsx)(y,{}),t.length>0&&(0,f.jsx)(h,{}),t.length>0&&!n&&(0,f.jsx)(v,{})]})}}}]);
//# sourceMappingURL=120.ef3400ed.chunk.js.map