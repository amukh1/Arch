import{a as s,j as t,r as m,c as u}from"./jsx-runtime.7dc17585.js";/* empty css             *//* empty css           */function p(o){return s("main",{children:o.msgs.map((n,l)=>s("div",{className:"chat-message",children:t("div",{className:"chat-message-header",children:[s("span",{className:"chat-message-header-user msg-author msgh",color:n.user=="amukh1"?"yellow":"white",children:n.user}),"-",s("span",{className:"chat-message-header-time msg-time msgh",children:n.time}),s("div",{className:"chat-message-content",children:n.msg})]})}))})}function f(){window.localStorage.getItem("user")==null&&(window.location.href="https://amukh1.github.io/Arch/login",alert("You are not logged in"),window.location.href="https://amukh1.github.io/Arch/login",window.location.reload());let o=window.location.hash.slice(1);const[n,l]=m.exports.useState([]),[d,g]=m.exports.useState([]);document.title=`Room: ${o}`;let a;return m.exports.useEffect(()=>{a=window.localStorage.getItem("user");const i=new WebSocket("wss://api.arch.amukh1.dev");i.onopen=function(){console.log("WebSocket Client Connected"),i.send(JSON.stringify({type:"join",room:o,user:a}))},i.onmessage=function(c){let e=JSON.parse(c.data);console.log("Received: "),console.log(e),e.type=="msg"?e.user==a?console.log("same user msg rte?"):e.room==o?(console.log("same room msg rte?"),r==!0&&(Notification.requestPermission().then(h=>{console.log(h)}),new Notification(e.user,{body:e.msg.msg,icon:"https://amukh1.github.io/Arch/logo192.png"})),l(h=>e.msgs)):console.log("not same room"):e.type=="ready"?(e.user==a&&(console.log("same user join rte?"),l(e.msgs)),e.room==o&&(console.log("same room join rte?"),g(e.users))):e.type=="shoot"&&(e.user==a&&console.log("same user shoot rte?"),document.body.classList.add("blur"))};let r=!1;document.addEventListener("visibilitychange",c=>{document.visibilityState==="visible"?r=!1:r=!0}),document.addEventListener("keypress",c=>{c.key==="Enter"&&document.getElementById("msges").value!==""&&(l(e=>[...e,{user:a,time:new Date().toLocaleTimeString(),msg:document.getElementById("msges").value}]),i.send(JSON.stringify({type:"msg",room:o,user:a,token:window.localStorage.getItem("token"),msg:{user:a,time:new Date().toLocaleTimeString(),msg:document.getElementById("msges").value}})),setTimeout(()=>{document.getElementById("msges").value=""},0))})},[]),t("main",{children:[t("div",{className:"sidebar",children:[s("div",{className:"sidebar-header",children:t("h3",{children:["Room: ",o]})}),t("div",{className:"sidebar-body",children:[s("input",{type:"text",className:"cri cr",id:"cr",placeholder:"14"}),s("br",{}),s("button",{className:"crb cr",onClick:w,children:"Change room"})]})]}),t("div",{className:"main",children:[t("div",{className:"chat-window",children:[t("div",{className:"chat-header",children:["Room: ",o,", ",d.length," Participants, ",new Date().toDateString()," | ARCH"]}),t("div",{className:"chat-body",children:[console.log("RENDERING!!"),s(p,{msgs:n})]})]}),t("div",{className:"right-sidebar",children:[s("div",{className:"chat-header",children:"Users"}),s("div",{className:"chat-users-body",children:d.map((i,r)=>t("div",{className:"chat-user",children:[t("div",{className:"chat-user-name m",children:[i.user,":"]}),s("div",{className:"chat-user-status m",children:i.status})]}))})]}),s("div",{className:"msg-input-bar-bottom",children:s("input",{type:"text",className:"msg-input",placeholder:"Type a message",id:"msges"})})]})]})}function w(){let o=document.getElementById("cr").value;window.location.href=window.location.href.split("#")[0]+`#${o}`,window.location.reload()}u.createRoot(document.getElementById("root")).render(s(f,{}));
