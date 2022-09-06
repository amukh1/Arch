import React,{useState}  from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'
import Msgs from './msgs.jsx'

export default function Chat() {
    let room = window.location.hash.slice(1)

    const [msgs, setMsgs] = useState([
        { user: 'amukh1', msg: 'I am fine', time: '12:03' },
        { user: 'amukh1', msg: 'How are you?', time: '12:02' },
        { user: 'amukh1', msg: 'Hello', time: '12:01' },
        ])

        const [users, setUsers] = useState([
            { user: 'amukh1', status: 'online' },
            { user: 'amukh2', status: 'offline' },
        ])

//   const inc = () => {
//     setData(counter + 1)
//   }

document.title = `Room: ${room}`
let user = 'amukh1'
let Part = 4


document.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' && document.getElementById('msges').value !== '') {
            let msg = document.getElementById('msges').value
        let time = new Date().toLocaleTimeString()
            // console.log(msgs.toString())
            // console.log(msges)
            // console.log([{ user:user, msg:msg, time:time }])
            // return [...msgs, { user, msg, time }]
            // return msgs.concat({ user, msg, time })
         
        // data.msgs.push({ user, msg, time })
        // let d = data
        // setData(()=> {
        //     return data
        // })
        // console.log(data)
        let x = msgs
        x.push({ user, msg, time })
        setMsgs(x)
        // console.log(msgs)
        // console.log(msgs.map(e=>(e)))
        document.getElementById('msges').value = ''
    }
})


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
{console.log(msgs)}
            <Msgs msgs={msgs} />


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