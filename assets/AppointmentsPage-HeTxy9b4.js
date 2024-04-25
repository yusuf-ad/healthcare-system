import{r as o,j as e,c as j,e as N,L as g,k as i}from"./index-CuwQp6cx.js";import{c as r,d as y,B as v}from"./button-W9CHfXWs.js";import{P as x,E as m,F as u,C as w}from"./popover-B_SrT-FE.js";import"./index-CFx3mkeq.js";const h=o.forwardRef(({className:t,...a},s)=>e.jsx("div",{className:"relative w-full overflow-auto",children:e.jsx("table",{ref:s,className:r("w-full caption-bottom text-sm",t),...a})}));h.displayName="Table";const f=o.forwardRef(({className:t,...a},s)=>e.jsx("thead",{ref:s,className:r("[&_tr]:border-b",t),...a}));f.displayName="TableHeader";const b=o.forwardRef(({className:t,...a},s)=>e.jsx("tbody",{ref:s,className:r("[&_tr:last-child]:border-0",t),...a}));b.displayName="TableBody";const T=o.forwardRef(({className:t,...a},s)=>e.jsx("tfoot",{ref:s,className:r("border-t bg-muted/50 font-medium [&>tr]:last:border-b-0",t),...a}));T.displayName="TableFooter";const d=o.forwardRef(({className:t,...a},s)=>e.jsx("tr",{ref:s,className:r("border-b transition-colors hover:bg-muted/50 data-[state=selected]:bg-muted",t),...a}));d.displayName="TableRow";const l=o.forwardRef(({className:t,...a},s)=>e.jsx("th",{ref:s,className:r("h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",t),...a}));l.displayName="TableHead";const c=o.forwardRef(({className:t,...a},s)=>e.jsx("td",{ref:s,className:r("p-4 align-middle [&:has([role=checkbox])]:pr-0",t),...a}));c.displayName="TableCell";const R=o.forwardRef(({className:t,...a},s)=>e.jsx("caption",{ref:s,className:r("mt-4 text-sm text-muted-foreground",t),...a}));R.displayName="TableCaption";const k=y("inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",{variants:{variant:{default:"border-transparent bg-primary text-primary-foreground hover:bg-primary/80",secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",destructive:"border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",outline:"text-foreground"}},defaultVariants:{variant:"default"}});function n({className:t,variant:a,...s}){return e.jsx("div",{className:r(k({variant:a}),t),...s})}function C(t){const a=t.split(":"),s=parseInt(a[0],10),p=parseInt(a[1],10);return s*60+p}function D(t){const a=new Date(t.date),s=C(t.time);return a.setMinutes(a.getMinutes()+s),a<new Date(Date.now())||t.status==="cancelled"?e.jsx(n,{className:"bg-red-600 hover:bg-red-600 py-2 px-3",children:"cancelled"}):t.status==="completed"?e.jsx(n,{className:"bg-green-600 hover:bg-green-600 py-2 px-3",children:"completed"}):e.jsx(n,{className:"bg-gray-600 hover:bg-gray-600 py-2 px-3",children:"scheduled"})}function H(){const{appointments:t}=j(s=>s.appointment),a=N();return t.length===0?e.jsx("section",{className:"py-12",children:e.jsxs("div",{className:"max-w-5xl mx-auto font-bold  px-8 xl:px-0",children:[e.jsx("p",{className:"",children:"There is no appointments yet. "}),e.jsx(v,{className:"mt-6 py-6 bg-skin-button-accent hover:bg-skin-button-accent-hover",asChild:!0,children:e.jsx(g,{to:"/healthcare-system/appointment/info",children:"Book an appointment Now"})})]})}):e.jsx("section",{className:"py-12",children:e.jsxs("div",{className:"max-w-5xl mx-auto px-8 xl:px-0 ",children:[e.jsx("h2",{className:"text-2xl font-bold mb-3",children:"Your appointments"}),e.jsx("div",{className:"h-[2px] w-full bg-slate-300/50 "}),e.jsx("div",{className:"mt-4",children:e.jsxs(h,{children:[e.jsx(f,{children:e.jsxs(d,{children:[e.jsx(l,{className:"text-left"}),e.jsx(l,{className:"text-left",children:"Status"}),e.jsx(l,{className:"text-left",children:"Date"}),e.jsx(l,{className:"text-left",children:"Time"}),e.jsx(l,{className:"max-w-max text-left",children:"Doctor"}),e.jsx(l,{className:"text-left",children:"Department"}),e.jsx(l,{className:"text-right",children:"User"})]})}),e.jsx(b,{className:"capitalize",children:t.map(s=>e.jsxs(d,{children:[e.jsx(c,{children:s.status==="scheduled"&&e.jsxs(x,{children:[e.jsx(m,{children:e.jsx("i",{className:"fa-solid fa-ellipsis-vertical text-lg text-slate-800"})}),e.jsx(u,{className:"absolute -left-4 py-2 pb-4 xs:w-52 w-36 text-sm xs:text-base",children:e.jsxs("ul",{children:[e.jsx("li",{onClick:()=>a(i({status:"cancelled",id:s.id})),className:"border-b-2 py-3 px-2 hover:text-red-600 cursor-pointer",children:"Set cancelled"}),e.jsx("li",{onClick:()=>a(i({status:"completed",id:s.id})),className:"border-b-2 py-3 px-2 hover:text-green-600 cursor-pointer",children:"Set completed"})]})})]})}),e.jsx(c,{children:D(s)}),e.jsx(c,{className:"text-left",children:w(s.date,"dd.MM.yyyy")}),e.jsx(c,{className:"text-left",children:s.time}),e.jsx(c,{className:"font-medium min-w-max text-left",children:s.doctor.split("-").join(" ")}),e.jsx(c,{className:"text-left",children:s.department}),e.jsx(c,{className:"text-right",children:e.jsxs(x,{children:[e.jsx(m,{children:e.jsx("i",{className:"fa-solid fa-eye text-lg text-slate-800"})}),e.jsx(u,{className:" py-2 pb-4 max-w-max absolute -right-4   text-sm xs:text-base",children:e.jsxs("ul",{children:[e.jsxs("li",{className:"border-b-2 py-3 px-2 capitalize",children:["Fullname: ",s.name," ",s.surname]}),e.jsxs("li",{className:"border-b-2 py-3 px-2",children:["Phone: ",s.phone]})]})})]})})]},s.date+s.time))})]})})]})})}export{H as default};
