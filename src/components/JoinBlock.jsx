import React from 'react'

export default function JoinBlock() {
    return (
        <div className="join-block">
            <input type="text" placeholder="Room Id" value="" />
            <input type="text" placeholder="Name" value="" />
            <button className="btn btn-success">Enter</button>
        </div>
    )
}
