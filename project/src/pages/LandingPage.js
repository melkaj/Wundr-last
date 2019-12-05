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
            
            <Row>
              
              <Col className="lineup" > 
                <img className ="runningWoman" src={RunningWoman} /> 
              </Col>
              
              <Col className="lineup"> 
                <Subheader/>
                <NavLink to="/findActivities">
                  <div style={{ display: "flex", justifyContent: "center" }}>
                    <Button variant="outline-primary" href="https://www.google.com" className="customButton">Start Wundr-ing!</Button>
                  </div>
                </NavLink>

              </Col>
            
            </Row>

            <Row>
              <Col>
                <div className="adCon">~Additional Content~</div>
                <Link to="./pages/AboutUsPage.js">trsta</Link>
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
