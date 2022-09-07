import React,{useState}  from 'react'
import ReactDOM from 'react-dom/client'
import './chat.css'
import Chat from './chat.jsx'



// let msgs = [
//     { user: 'amukh1', msg: 'I am fine', time: '12:03' },
//     { user: 'amukh1', msg: 'How are you?', time: '12:02' },
//     { user: 'amukh1', msg: 'Hello', time: '12:01' },
// ]

// let users = [
//     { user: 'amukh1', status: 'online' },
//     { user: 'amukh2', status: 'offline' },
// ]

// document.addEventListener('keypress', (e) => {
//     if (e.key === 'Enter') {
//         let msg = e.target.value
//         e.target.value = ''
//         let time = new Date().toLocaleTimeString()
//         data.msgs.push({ user, msg, time })
//         console.log(data.msgs)
//     }
// })

ReactDOM.createRoot(document.getElementById('root')).render(
	// <React.StrictMode>
        <Chat />
	// </React.StrictMode>
)
