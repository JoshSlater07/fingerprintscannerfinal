import React, { Component } from "react";
import PubNubReact from 'pubnub-react';
 
class Home extends Component {
	constructor(props) {
    super(props);
    this.pubnub = new PubNubReact({
        publishKey: 'pub-c-74ebe5ce-509e-4067-8534-9071c1033573',
        subscribeKey: 'sub-c-6c2c13ec-415f-11e8-8bb7-3ab51ec5ed79'
    });
    this.pubnub.init(this);
	
	
}

 componentWillMount() {
        this.pubnub.subscribe({
            channels: ['channel1'],
            withPresence: true
        });
 
        this.pubnub.getMessage('channel1', (msg) => {
            console.log(msg);
        });
 
        this.pubnub.getStatus((st) => {
            this.pubnub.publish({
                message: 'Connecting to server...',
                channel: 'channel1'
            });
        });
    }
 
    componentWillUnmount() {
        this.pubnub.unsubscribe({
            channels: ['channel1']
        });
    }
	
  render() {
	  const messages = this.pubnub.getMessage('channel1');
    return (
	
      <div>
	 <div>
	   <img src="http://style.uwe.ac.uk/branding/couplets/engine/images/logo.png" class ="logo" alt="Logo">
		</img>
		  </div>
		  <br></br>
		  <div class= "welcome">
        <h2>Welcome To UWE Registration</h2>
        <p>Please login using your fingerprint or register if you haven't already.
		</p>
		 <ul>
                    {messages.map((m, index) => <li key={'message' + index}>{m.message}</li>)}
                </ul>
		</div>
      </div>
    );
  }
}
 
export default Home;