import React,{useState}  from 'react'
import ReactDOM from 'react-dom/client'
import './App.css'

export default function msgs(props) {
  return (
    <main>
      {props.msgs.map((m, i) => (
                <div className="chat-message">
                <div className="chat-message-header">
                <span className="chat-message-header-user msg-author msgh">{m.user}</span>
                -
                    <span className="chat-message-header-time msg-time msgh">{m.time}</span>
                    <div className="chat-message-content">{m.msg}</div>
                </div>

            </div>
            ))}
    </main>
  )
}
