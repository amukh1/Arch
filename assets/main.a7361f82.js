import{c as l,j as a,R as r,a as n}from"./jsx-runtime.507626cb.js";/* empty css            */l.createRoot(document.getElementById("root")).render(a(r.StrictMode,{children:n("div",{className:"loginbox",children:[a("div",{className:"loginHeaderText",children:"Log In"}),n("div",{className:"loginForm",children:[a("input",{type:"text",className:"username",placeholder:"amukh1"}),a("div",{}),a("input",{type:"password",className:"password",placeholder:"Password"}),a("div",{}),a("button",{className:"loginButton",onClick:i,children:"Log In"}),a("button",{className:"loginButton",onClick:c,children:"Sign up"})]})]})}));async function i(){let t=document.querySelector(".username").value,o=document.querySelector(".password").value;window.localStorage.setItem("user",t),window.localStorage.setItem("pass",o);let e=await(await fetch(`https://api.arch.amukh1.dev/login?username=${t}&password=${o}`)).json();console.log(e),e.authenticated==!0?(window.localStorage.setItem("user",t),window.localStorage.setItem("token",e.token),window.location.href="chat"):alert(`Request failed: ${e.reason}`)}async function c(){let t=document.querySelector(".username").value,o=document.querySelector(".password").value;window.localStorage.setItem("user",t),window.localStorage.setItem("pass",o);let s=await fetch(`https://api.arch.amukh1.dev/newUser?username=${t}&password=${o}`),e=await s.json();e.authenticated==!0?(s=await fetch(`https://api.arch.amukh1.dev/login?username=${t}&password=${o}`),e=await s.json(),console.log(e),e.authenticated==!0?(window.localStorage.setItem("user",t),window.localStorage.setItem("token",e.token),window.location.href="chat"):alert(`Request failed: ${e.reason}`)):alert(`Request failed: ${e.reason}`)}
