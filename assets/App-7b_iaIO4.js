import{r as s,j as e,L as a,N as t,O as l}from"./index-BzbfpbUp.js";import{B as c}from"./button-DLcxGn-q.js";function h(){const[n,i]=s.useState(!1),r=s.useRef();return s.useEffect(()=>{const o=()=>{window.scrollY>45?i(!0):i(!1)};return window.addEventListener("scroll",o),()=>{window.removeEventListener("scroll",o)}},[]),e.jsxs(e.Fragment,{children:[n&&e.jsx("div",{style:{height:"96px"}}),e.jsxs("header",{ref:r,className:`${n&&"fixed"} bg-white/80 w-full top-0 flex justify-between items-center py-6 px-16`,children:[e.jsx(a,{to:"/",children:e.jsx("div",{className:"font-bold tracking-widest text-lg",children:"TheCure"})}),e.jsxs("nav",{className:"flex gap-10",children:[e.jsxs("ul",{className:"flex gap-5 items-center text-gray-500 font-semibold",children:[e.jsx("li",{className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(t,{activeClassName:"active",to:"/",children:"Home"})}),e.jsx("li",{className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(t,{to:"/staff",children:"Our doctor staff"})}),e.jsx("li",{className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(t,{to:"/communication",children:"Communication"})}),e.jsx("li",{className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(t,{to:"/appointments",children:"Appointments"})})]}),e.jsx(t,{to:"/appointment",children:e.jsx(c,{className:"bg-skin-button-accent hover:bg-skin-button-accent-hover py-6 transition-colors duration-100",children:"Book An Appointment"})})]})]}),e.jsx(l,{})]})}export{h as default};
