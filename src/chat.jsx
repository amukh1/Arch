import React,{useState, useEffect}  from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Msgs from './msgs.jsx'

let once = 1

export default function Chat() {

    let room = window.location.hash.slice(1)

    // const [counter, setCounter] = useState(0)
/*
[
        { user: 'amukh1', msg: 'I am fine', time: '12:03' },
        { user: 'amukh1', msg: 'How are you?', time: '12:02' },
        { user: 'amukh1', msg: 'Hello', time: '12:01' },
        ]
        */


    const [msgs, setMsgs] = useState([])

        const [users, setUsers] = useState([])

//   const inc = () => {
//     setData(counter + 1)
//   }

document.title = `Room: ${room}`
// let user = 'amukh1'
let user;
let Part = 4


useEffect(()=>{
    user = prompt('Enter your name')
    // do stuff here...
    const ws = new WebSocket('wss://' + 'api.arch.amukh1.dev');
    ws.onopen = function() {
        console.log('WebSocket Client Connected');
        ws.send(JSON.stringify({
            type: 'join',
            room: room,
            user: user,
        }));
    };
    ws.onmessage = function(e) {
        let data = JSON.parse(e.data)
        console.log("Received: ");
        console.log(data);

        if(data.type == 'msg'){
            if(data.user == user){
                console.log('same user msg rte?')
            }else if(data.room == room){
                console.log('same room msg rte?')
            setMsgs((og)=> {
                // return [ ...og,data.msg]
                return data.msgs
            })
        }else {
            console.log('not same room')
        }
        }else if(data.type == 'userJoin'){
            if(data.user == user){
                console.log('same user join rte?')
                setMsgs(data.msgs)
            }
            setUsers(data.users)
            alert(`${data.user} joined the room`)
        }
      };

document.addEventListener('keypress', (e) => {
if (e.key === 'Enter' && document.getElementById('msges').value !== '') {
    setMsgs((og)=> {
        return [ ...og,{user, time: new Date().toLocaleTimeString(), msg:document.getElementById('msges').value }]
    })
    ws.send(JSON.stringify({
        type: 'msg',
        room: room,
        user: user,
        msg: {user, time: new Date().toLocaleTimeString(), msg:document.getElementById('msges').value }
    }));
    setTimeout(()=>{document.getElementById('msges').value = ''},0)
}
// else if(e.key === 'e'){
//     setUsers((og)=> {
//         return [...og,{ user: 'amukh1', status: 'online' }, ]
//     })
//     console.log('e')
// }
})
}, []) // <-- empty dependency array
  

        




  return (
    <main>
    <div className="sidebar">
        <div className="sidebar-header">
            <h3>Room: {room}</h3>
        </div>
        <div className="sidebar-body">
            <input type="text" className="cri cr" placeholder='14'/>
            <br />
            <button className="crb cr">Change room</button>
            </div>
    </div>
    <div className="main">
        <div className="chat-window">
            <div className="chat-header">
Room: {room}, Logged in as: {user}, {Part} Participants, {new Date().toDateString()} | ARCH
                </div>
            <div className="chat-body">


{console.log('RENDERING!!')}
{/* {console.log(msgs)} */}

            <Msgs msgs={msgs} />

            {/* {msgs.map((m, i) => (
                <div className="chat-message">
                <div className="chat-message-header">
                <span className="chat-message-header-user msg-author msgh">{m.user}</span>
                -
                    <span className="chat-message-header-time msg-time msgh">{m.time}</span>
                    <div className="chat-message-content">{m.msg}</div>
                </div>

            </div>
            ))} */}

            {/* <button onClick={()=>{setMsgs([{user, time: new Date().toLocaleTimeString(), msg:document.getElementById('msges').value }, ...msgs])}}>send msg</button> */}
{/* {
    ()=>{setMsgs([{user, time: new Date().toLocaleTimeString(), msg:document.getElementById('msges').value }, ...msgs])}
} */}

            {/* {msgs.toString()} */}


                {/* <div className="chat-message">
                    <div className="chat-message-header">
                    <span className="chat-message-header-user msg-author msgh">amukh1</span>
                    -
                        <span className="chat-message-header-time msg-time msgh">12:00</span>
                        <div className="chat-message-content">Hello World!</div>
                    </div>

                </div> */}


                </div>
        </div>
        <div className="right-sidebar">
            <div className="chat-header">Users</div>
            <div className="chat-users-body">


{/* 
                {console.log('rendering')}
                {counter}
                <button onClick={() => setCounter(counter + 1)}>+</button> */}



                {users.map((u, i) => (
                    <div className="chat-user">
                    <div className="chat-user-name m">{u.user}:</div>
                    <div className="chat-user-status m">{u.status}</div>
                </div>
                ))}

                

</div>

        </div>
        <div className="msg-input-bar-bottom">
            <input type="text" className="msg-input" placeholder="Type a message" id="msges"/>
            {/* <button className="msg-send-btn">Send</button> */}
        </div>
    </div>
    </main>
  )
}