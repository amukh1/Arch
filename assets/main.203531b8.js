import{r as s,j as t,a as e,c}from"./jsx-runtime.7dc17585.js";/* empty css           */function l(){return s.exports.useEffect(()=>{const o=document.getElementById("left-side"),i=n=>{o.style.width=`${n.clientX/window.innerWidth*100}%`};document.onmousemove=n=>i(n),document.ontouchmove=n=>i(n.touches[0])}),t("main",{children:[t("div",{id:"left-side",class:"side",children:[t("h2",{class:"title",children:["Arch is what you can use to "," ",e("span",{style:{color:"rgb(248,79,56)",zIndex:"101"},children:"Talk"})]}),e("button",{className:"st l",style:{opacity:"0"},children:"Start Chatting"})]}),t("div",{id:"right-side",class:"side",children:[t("h2",{class:"title",children:["Arch-js is what you can use to  "," ",e("span",{style:{color:"white"},children:"Code"})]}),t("div",{style:{zIndex:160},children:[e("button",{className:"st l",onClick:()=>{window.location.href="/login"},children:"Start Chatting"}),e("button",{className:"st r",onClick:()=>{window.location.href="https://github.com/amukh1/arch-dev"},children:"Start Developing"})]})]})]})}c.createRoot(document.getElementById("root")).render(e(l,{}));