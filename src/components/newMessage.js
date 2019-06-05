import React, { Component } from 'react';
class NewMessage extends Component {
    state = {  }
    render() { 
        return (
        <div>
            <div>
                <form>
                    <input type="text"></input>
                    <button>Send</button>
                </form>
            </div>
        </div>
        );
    }
}
 
export default NewMessage;