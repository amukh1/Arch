import{a as e,j as t,r as l,c as g}from"./jsx-runtime.b09d579d.js";function h(a){return e("main",{children:a.msgs.map((i,r)=>e("div",{className:"chat-message",children:t("div",{className:"chat-message-header",children:[e("span",{className:"chat-message-header-user msg-author msgh",children:i.user}),"-",e("span",{className:"chat-message-header-time msg-time msgh",children:i.time}),e("div",{className:"chat-message-content",children:i.msg})]})}))})}function u(){window.localStorage.getItem("user")==null&&(window.location.href="https://amukh1.github.io/Arch/login",alert("You are not logged in"),window.location.href="https://amukh1.github.io/Arch/login",window.location.reload());let a=window.location.hash.slice(1);const[i,r]=l.exports.useState([]),[m,d]=l.exports.useState([]);document.title=`Room: ${a}`;let o;return l.exports.useEffect(()=>{o=window.localStorage.getItem("user");const n=new WebSocket("wss://api.arch.amukh1.dev");n.onopen=function(){console.log("WebSocket Client Connected"),n.send(JSON.stringify({type:"join",room:a,user:o}))},n.onmessage=function(c){let s=JSON.parse(c.data);console.log("Received: "),console.log(s),s.type=="msg"?s.user==o?console.log("same user msg rte?"):s.room==a?(console.log("same room msg rte?"),r(p=>s.msgs)):console.log("not same room"):s.type=="ready"?(s.user==o&&(console.log("same user join rte?"),r(s.msgs)),s.room==a&&(console.log("same room join rte?"),d(s.users))):s.type=="shoot"&&(s.user==o&&console.log("same user shoot rte?"),document.body.classList.add("blur"))},document.addEventListener("keypress",c=>{c.key==="Enter"&&document.getElementById("msges").value!==""&&(r(s=>[...s,{user:o,time:new Date().toLocaleTimeString(),msg:document.getElementById("msges").value}]),n.send(JSON.stringify({type:"msg",room:a,user:o,msg:{user:o,time:new Date().toLocaleTimeString(),msg:document.getElementById("msges").value}})),setTimeout(()=>{document.getElementById("msges").value=""},0))})},[]),t("main",{children:[t("div",{className:"sidebar",children:[e("div",{className:"sidebar-header",children:t("h3",{children:["Room: ",a]})}),t("div",{className:"sidebar-body",children:[e("input",{type:"text",className:"cri cr",placeholder:"14"}),e("br",{}),e("button",{className:"crb cr",children:"Change room"})]})]}),t("div",{className:"main",children:[t("div",{className:"chat-window",children:[t("div",{className:"chat-header",children:["Room: ",a,", Logged in as: ",o,", ",m.length," Participants, ",new Date().toDateString()," | ARCH"]}),t("div",{className:"chat-body",children:[console.log("RENDERING!!"),e(h,{msgs:i})]})]}),t("div",{className:"right-sidebar",children:[e("div",{className:"chat-header",children:"Users"}),e("div",{className:"chat-users-body",children:m.map((n,c)=>t("div",{className:"chat-user",children:[t("div",{className:"chat-user-name m",children:[n.user,":"]}),e("div",{className:"chat-user-status m",children:n.status})]}))})]}),e("div",{className:"msg-input-bar-bottom",children:e("input",{type:"text",className:"msg-input",placeholder:"Type a message",id:"msges"})})]})]})}g.createRoot(document.getElementById("root")).render(e(u,{}));
