import logonxt from './logonxt.svg';
import thor_avatars_01 from './thor_avatars_01.svg';
import rain from './rain.svg';
import bolt_light from './bolt_light.svg';
import pulse from './ps.svg';
import chatbot from './chatbot.svg';
import './App.css';
import { Row, Col, CardGroup } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='row'>
          <div className='Header-logo'>
            <a className='Header-img' href='http://localhost:3000/'>
              <img src={logonxt} className="App-logo"  alt="logo" width="100" height="50"/>
            </a>
          </div>
          <div className='Header-menu'>
            <div className='main-menu section' id='main-menu' name='Main menu'>
              <div className='Header-widget'>
                <ul id='main-menu-nav'>
                  <li className='has-sub'><a href='/'>Home</a></li>
                  <li className='has-sub'><a href='#'>Technology</a></li>
                  <li className='has-sub'><a href='#'>Services</a></li>
                  <li className='has-sub'><a href='#'>Careers</a></li>
                  <li className='has-sub'><a href='#'>About Us</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div id='Home-page'>
      <div className='clearfix'></div>
          <div className='Page-head'>
            <div className='row'>
              <div className='column'>
              <div className='head-text section'>
                <p className='h1-content'>Technology, like art, is a soaring exercise of the human imagination</p>
                <p className='head-content'>NXT is the innovation wing of Tarento with primary focus on bringing new technologies, new perspectives and new ways of working into Tarento. We take pride in being unconventional with our approaches while retaining the passion with which we work. Empowering customer experience with data & Insights.</p>
              </div>
              </div>
            </div>
          </div>
      </div>
      <div className='clearfix'></div>
      <div className='cards'>
        <Row>
            <>
            <CardGroup>
              <Col>
              <div className='card1'>
              <div className='cardfix'></div>
                <div className='card-text'>
                  <div className='card-texts'>
                    <div>
                    <img src={thor_avatars_01} style={{borderRadius: "20px"}} className="Thor-logo" width="350" height="400"/>
                    </div>
                  <h2><center>THOR</center></h2>
                  <p>
                  THOR is highly scalable, extensible and allows deep integration to any
                  domain. Multi channel capabilities of THOR enables businesses to engage
                  their users over a wide range of channels.
                  </p>
                  </div>
                </div>  
              </div>
              </Col>
              <div className='clearfix'></div>
              <Col>
              <div className= "card2">
              <div className='clearfix'></div>
                <div className = "card-text">
                  <div className="card-texts">
                    <img src= {rain} style={{borderRadius: "10px"}} className="Rain-logo" width="150" height="50"/>
                      <center><h3>RAIN</h3></center>
                      <p>Realtime. Analytics. Insights.</p>
                  </div>
                </div>
              </div>
              <div className='cardfix'></div><div className='cardfix'></div>
              <div className= "card2">
                <div className = "card-text">
                  <div className="card-texts">
                    <img src= {pulse} style={{borderRadius: "10px"}} className="Pulse-logo" width="150" height="80"/>
                      <center><h3>PULSE</h3></center>
                      <p>Information. Feedback.</p>
                  </div>
                </div>
              </div>
              </Col>
              <Col>
              <div className= "card3">
              <div className='clearfix'></div>
                <div className = "card-text">
                  <div className="card-texts">
                    <img src= {bolt_light} style={{borderRadius: "10px"}} className="Bolt-logo" width="150" height="50"/>
                      <center><h3>BOLT</h3></center>
                      <p>Data. Information. Insight.</p>
                  </div>
                </div>
              </div>
              <div className='cardfix'></div><div className='cardfix'></div>
              <div className= "card2">
                <div className = "card-text">
                  <div className="card-texts">
                    <img src= {chatbot} style={{borderRadius: "10px"}} className="Chatbot-logo" width="150" height="80"/>
                      <center><h3>CHATBOT</h3></center>
                      <p>THORbot. AIpowered.</p>
                  </div>
                </div>
              </div>
              </Col>
              </CardGroup>
            </>
        </Row>
      </div>
    </div>
  );
}

export default App;
