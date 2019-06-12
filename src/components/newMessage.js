import React, { Component } from 'react';
class NewMessage extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <div>
                <form>
                    <textarea className="newMsg"type="text" value="Type Your Message and Press enter" ></textarea>
                </form>
            </div>
        </div>
        );
    }
}
 
export default NewMessage;