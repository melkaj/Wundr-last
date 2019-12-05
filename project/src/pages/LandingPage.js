import React from 'react';
import { 
  BrowserRouter as Router, 
  Switch, 
  Route, 
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
      <nav className="navbar navbar-expand-sm navbar-light bg-light shadow mb-3">
        <Link className="navbar-brand" to="/">
          <img src={WundrLogo} alt="Logo" height="27px" width="auto" className="d-inline-block align-top" />
          </Link>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/posts/new">
              Sign up
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" exact to="/about-us">
              Login
            </NavLink>
          </li>
        </ul>
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
          <p className = "subheader">What to do with all that free time?</p>
            <p className="subheader_text">Wundr is an platform that aims to connect users to relevant activities based on criteria they provide! We'll ask you a few easy questions, and give you some wundr-ful activities!
          </p>
        </div>
      );
  }

  function Subheader2(){
    return(
        <div>
          <p className = "subheader">Don't waste any more time!</p>
            <p className="subheader_text">Don't👏 pretend👏 to 👏be 👏entitled👏 to👏 financial👏 compensation👏 if 👏you 👏or👏 a👏 loved 👏one 👏hasn't👏 even 👏been 👏diagnosed👏 with 👏mesothelioma
          </p>
        </div>
      );
  }



  // function myLink(){
  //   return(
  //     <Link to="https://www.google.com" target="_blank"></Link>
  //   );
  // }

class LandingPage extends React.Component {
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
                    <Button variant="outline-primary" href="https://www.google.com" bsClass="customButton">Start Wundr-ing!</Button>
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
                <div className="footer">Footer</div>
              </Col>
            </Row>
            </body>
        // </Router>
    );
  }
}
 

export default LandingPage;
