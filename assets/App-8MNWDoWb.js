import{r as n,j as e,L as h,N as s,O as m}from"./index-CuwQp6cx.js";import{B as r}from"./button-W9CHfXWs.js";function p(){const[c,a]=n.useState(!1),d=n.useRef(),[t,o]=n.useState(!1);n.useEffect(()=>{const l=()=>{console.log(window.scrollY),window.scrollY>0?a(!0):a(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[]),n.useEffect(()=>{const l=()=>{window.innerWidth>=800&&t&&o(!1)};return window.addEventListener("scroll",l),()=>{window.removeEventListener("scroll",l)}},[t]),n.useEffect(()=>{t?document.body.style.overflow="hidden":document.body.style.overflow="auto"},[t]);function i(){o(!1)}return e.jsxs(e.Fragment,{children:[e.jsxs("header",{ref:d,className:`${c&&"fixed inset-0"} bg-white/80 w-full  sm:h-24 sticky h-20 z-50 flex justify-between items-center px-4 sm:px-6 lg:py-6 lg:px-16`,children:[e.jsx(h,{to:"/healthcare-system/",children:e.jsx("div",{className:"font-bold tracking-widest text-lg",children:"TheCure"})}),e.jsx("nav",{onClick:()=>o(!t),className:"md:hidden",children:e.jsx("button",{className:"cursor-pointer",children:e.jsx("i",{className:"fa-solid fa-bars text-3xl"})})}),e.jsxs("nav",{className:"hidden md:flex gap-6 lg:gap-8",children:[e.jsxs("ul",{className:"flex gap-4 items-center text-gray-500 font-semibold",children:[e.jsx("li",{className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(s,{to:"/healthcare-system/",children:"Home"})}),e.jsx("li",{className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(s,{to:"/healthcare-system/staff",children:"Our doctor staff"})}),e.jsx("li",{className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(s,{to:"/healthcare-system/communication",children:"Communication"})}),e.jsx("li",{className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(s,{to:"/healthcare-system/appointments",children:"Appointments"})})]}),e.jsx(s,{to:"/healthcare-system/appointment",children:e.jsxs(r,{className:"bg-skin-button-accent hover:bg-skin-button-accent-hover py-6 transition-colors duration-100",children:[e.jsx("span",{className:"lg:inline hidden",children:"Book An Appointment"}),e.jsx("span",{className:"lg:hidden inline",children:"New Appointment"})]})})]})]}),e.jsxs("div",{className:`${t?"sm:h-[calc(100vh-96px)] h-[calc(100vh-80px)] pointer-events-auto opacity-100 -translate-y-0":"h-0 pointer-events-none opacity-0 -translate-y-full overflow-hidden"}  sticky z-30 left-0 sm:top-[96px] top-[80px] flex flex-col items-center justify-center gap-5  bg-blue-200 transition-all duration-300 md:hidden`,children:[e.jsxs("ul",{className:" flex flex-col gap-4 items-center text-gray-500 font-semibold",children:[e.jsx("li",{onClick:i,className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(s,{to:"/healthcare-system/",children:"Home"})}),e.jsx("li",{onClick:i,className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(s,{to:"/healthcare-system/staff",children:"Our doctor staff"})}),e.jsx("li",{onClick:i,className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(s,{to:"/healthcare-system/communication",children:"Communication"})}),e.jsx("li",{onClick:i,className:"hover:text-blue-400 transition-colors duration-100",children:e.jsx(s,{to:"/healthcare-system/appointments",children:"Appointments"})})]}),e.jsx(s,{onClick:i,to:"/healthcare-system/appointment",children:e.jsxs(r,{className:" bg-skin-button-accent hover:bg-skin-button-accent-hover py-6 transition-colors duration-100 mb-36",children:[e.jsx("span",{className:"lg:inline hidden",children:"Book An Appointment"}),e.jsx("span",{className:"lg:hidden inline",children:"New Appointment"})]})})]}),e.jsx(m,{})]})}export{p as default};
