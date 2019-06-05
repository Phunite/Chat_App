import React from 'react'

class Message extends React.Component{
    render(){
        return(
            <div className="container">
                <p>Hello. How are you today?</p>
                <span class="time-right">11:00</span>
            </div>
        )
    }
}

export default Message