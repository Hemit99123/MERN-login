//importing react and other important things
import React from 'react';
import LoginForm from './components/form'

//inline styling
const color= {
color: 'blue' , 
background : 'red'
}


class Hello extends React.Component {  
  render(props) {  
      return(
      <div>
    <html>
      <head><title>Early access</title></head>
      <body style={color}>
      <h1>Register early access to my app</h1>
      <p>Here is an explainer video!</p>
      <LoginForm />
      </body>
    </html>
      </div>
      ) 
  }  
}

module.exports = Hello;
