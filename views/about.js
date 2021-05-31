import React, { Component } from 'react';
import { Button } from 'react-bootstrap';


class Main extends Component {
  render() { 
    return (  
      <div>
        <h2>Technologies I know</h2>
        <ul>
          <li>MERN stack</li>
          <li>Create simple CRUD operations using mongoose,bodyParser</li>
          <li>Javascript</li>
          <li>Arudino</li>
          <li>Very basic python</li>
          <li>Can create amazing apps</li>
          </ul>
        <h2>Some personal information</h2>
        <ul>
          <li>I created this website on May 28th 2021.</li>
          <li>I am 12 years old at the moment</li>
          <li>I love to code!</li>
        </ul>

      </div>
    );
  }
}
 
export default Main;

class Hello extends React.Component {  
  render(props) {  
      return(
      <div>
<html>
      <head><title>My first react app</title></head>
      <body>
      <h1>Who am I?</h1>
      <p>Hi my name is Hemit! I am a student who hopes to be a programmer someday!</p>
      <Main />
      <Button href="/api/info">Link to my API</Button>
      <br></br>
      <br></br>
      <br></br>
      <Button href="/">Go back home</Button>
      

      
      </body>
    </html>
      </div>
      ) 
  }  
}

module.exports = Hello;
