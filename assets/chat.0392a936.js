import{a as e,j as a,r as m,c as g}from"./jsx-runtime.b09d579d.js";function u(t){return e("main",{children:t.msgs.map((c,o)=>e("div",{className:"chat-message",children:a("div",{className:"chat-message-header",children:[e("span",{className:"chat-message-header-user msg-author msgh",children:c.user}),"-",e("span",{className:"chat-message-header-time msg-time msgh",children:c.time}),e("div",{className:"chat-message-content",children:c.msg})]})}))})}function p(){let t=window.location.hash.slice(1);const[c,o]=m.exports.useState([]),[l,d]=m.exports.useState([]);document.title=`Room: ${t}`;let n,h=4;return m.exports.useEffect(()=>{n=prompt("Enter your name");const r=new WebSocket("wss://api.arch.amukh1.dev");r.onopen=function(){console.log("WebSocket Client Connected"),r.send(JSON.stringify({type:"join",room:t,user:n}))},r.onmessage=function(i){let s=JSON.parse(i.data);console.log("Received: "),console.log(s),s.type=="msg"?s.user==n?console.log("same user msg rte?"):s.room==t?(console.log("same room msg rte?"),o(N=>s.msgs)):console.log("not same room"):s.type=="userJoin"&&(s.user==n&&(console.log("same user join rte?"),o(s.msgs)),d(s.users),alert(`${s.user} joined the room`))},document.addEventListener("keypress",i=>{i.key==="Enter"&&document.getElementById("msges").value!==""&&(o(s=>[...s,{user:n,time:new Date().toLocaleTimeString(),msg:document.getElementById("msges").value}]),r.send(JSON.stringify({type:"msg",room:t,user:n,msg:{user:n,time:new Date().toLocaleTimeString(),msg:document.getElementById("msges").value}})),setTimeout(()=>{document.getElementById("msges").value=""},0))})},[]),a("main",{children:[a("div",{className:"sidebar",children:[e("div",{className:"sidebar-header",children:a("h3",{children:["Room: ",t]})}),a("div",{className:"sidebar-body",children:[e("input",{type:"text",className:"cri cr",placeholder:"14"}),e("br",{}),e("button",{className:"crb cr",children:"Change room"})]})]}),a("div",{className:"main",children:[a("div",{className:"chat-window",children:[a("div",{className:"chat-header",children:["Room: ",t,", Logged in as: ",n,", ",h," Participants, ",new Date().toDateString()," | ARCH"]}),a("div",{className:"chat-body",children:[console.log("RENDERING!!"),e(u,{msgs:c})]})]}),a("div",{className:"right-sidebar",children:[e("div",{className:"chat-header",children:"Users"}),e("div",{className:"chat-users-body",children:l.map((r,i)=>a("div",{className:"chat-user",children:[a("div",{className:"chat-user-name m",children:[r.user,":"]}),e("div",{className:"chat-user-status m",children:r.status})]}))})]}),e("div",{className:"msg-input-bar-bottom",children:e("input",{type:"text",className:"msg-input",placeholder:"Type a message",id:"msges"})})]})]})}g.createRoot(document.getElementById("root")).render(e(p,{}));
