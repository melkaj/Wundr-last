import React from 'react';
import { 
  Link,
  NavLink
} from 'react-router-dom';

import WundrLogo from '../images/Logotype.png';
import RunningWoman from '../images/test2.png';
import ArtGirl from "../images/artGirl.png";

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import '../App.css';
import './LandingPage.css'

  function Navigation(props) {
    return (
      <nav className="navbar navbar-expand-sm navbar-primary bg-light ">
        <Link className="navbar-brand" to="/activity">
          <img src={WundrLogo} alt="Logo" height="34px" width="auto" className="d-inline-block align-top" />
        </Link>
      </nav>
    );
  }

  function HeaderText(){
    return(
      <div className="tagline">
        <p>NYC is more</p>
        <p>than just</p>
        <p>your stoop.</p>
      </div>
    );
  }

  function Subheader(){
    return(
        <div>
          <p className="subheader">Wundr customizes activities based on:</p>
          <li className="subheader_list">Location</li> 
          <li className="subheader_list">Distance</li>
          <li className="subheader_list">Interests</li> 
          <p className="subheader_text">We'll ask you a few easy questions, and give you some wundr-ful activities!</p>
        </div>
      );
  }
  function Subheader2(){
    return(
        <div>
          <p className = "subheader">Don't waste any more time!</p>
            <p className="subheader_text">Find some great recommendations and get your day started!
          </p>
        </div>
      );
  }

class ActivityPage extends React.Component {
  render() {
    return (
        // <Router>
          <body className="body">
          <Navigation/>          
            <Row>
              <Col className="HeaderBg">
                <HeaderText/>
              </Col>
            </Row>
            
            <Row className="Row1">
              
              <Col className="lineupL" > 
                <img className ="runningWoman" src={RunningWoman} /> 
              </Col>
              
              <Col className="lineupR"> 
                <Subheader/>
                <NavLink to="/findActivities">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="outline-primary" href="https://www.google.com" className="customButton" size="lg" block active>Start Wundr-ing!</Button>
                  </div>
                </NavLink>
                <div style={{marginTop: 11}}>
                  <p className="subheader_text">OR</p>
                </div>
                <NavLink to="/activity">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="outline-primary" href="https://www.google.com" className="customButton" size="lg" block active>I'm feeling Wundr-ous</Button>
                  </div>
                </NavLink>

              </Col>
            
            </Row>

            <Row className="Row2">
              <Col>
                <Subheader2/>
              </Col>
              <Col>
                <img src={ArtGirl} className="artgirl"/>
              </Col>
            </Row>

            <Row>
              <Col> 
                <div className="footer"></div>
              </Col>
            </Row>
            </body>
        // </Router>
    );
  }
}
 

export default ActivityPage;