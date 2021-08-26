import React from 'react'
import socket from '../socket'
import axios from 'axios'

export default function JoinBlock() {
    const [roomId, setRoomId] = React.useState('')
    const [userName, setUserName] = React.useState('')

    const onEnter= ()=>{
        if (!roomId || !userName){
            return alert("Error data")
        }
        axios.post('/rooms',{
            roomId,
            userName
        })
    }

 
    return (
        <div className="join-block">
            <input 
                type="text" 
                placeholder="Room Id" 
                value={roomId} 
                onChange={e => setRoomId(e.target.value)} 
            />

            <input 
                type="text" 
                placeholder="Name" 
                value={userName} 
                onChange={e => setUserName(e.target.value)}
            />

            <button  
                className="btn btn-success"
                onClick={onEnter}
            >
                Enter
            </button>
        </div>
    )
}
