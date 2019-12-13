import React from 'react';
import { 
  Link,
  NavLink
} from 'react-router-dom';

import WundrLogo from '../images/Logotype.png';
import Kuar from "../images/kuar.png";
import Kajoshaj from "../images/kajoshaj.png";


import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import './ActivityPage.css'

  function Navigation(props) {
    return (
      <nav className="navbar navbar-expand-sm navbar-primary bg-light ">
        <Link className="navbar-brand" to="/">
          <img src={WundrLogo} alt="Logo" height="34px" width="auto" className="d-inline-block align-top" />
          </Link>
      </nav>
    );
  }

  function HeaderText(){
    return(
      <div className="tagline">
        <p className="test10">Chinese Scholar's Garden, Snug Harbor</p>
        <p className="subHeader3">Staten Island, 10301</p>
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
          <p className = "subheader2">Why Wundr?</p>
            <p className="subheader_text">Users can search Google to find activities, but they may find conflicting reviews that can diminish the attraction of an activity to the point of disinterest. Wanderer delivers users information about an activity in a concise, direct voice to prevent “analysis paralysis.”
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

            <Row className="Row1" >
              <Col xl={8}>
                <div className="descriptor">
                  "Visit wonderland without leaving the city" 
                </div>
                <div className="desciption">
                <p>
                The NYCSG is a compilation of different gardens in China. It is based on Ming Dynasty gardens (1368-1644 AD). All the architectural components of the NYCSG were fabricated in Suzhou, China, including roof and floor tiles, columns and beams, doors and windows, bridges and paving materials.
                </p>
                <p>
                The garden features magnificent rocks resembling mountains that inspired the poetry and paintings of Confucian, Buddhist, and Taoist monks, as well as other scholars. Visitors can explore eight pavilions, a bamboo forest path, waterfalls, a Koi-filled pond, Chinese calligraphy, and a variety of Ghongshi scholar’s rocks including a 15-foot formation that towers over the central courtyard. A team of 40 Chinese artists and craftspeople spent a year in China creating the Garden’s components and another six months in Staten Island as craftsmen-in-residence at Snug Harbor to complete the construction. 

                </p>
                </div>
              </Col>
              <Col>
                <div className="info">
                  <p className="infoHeader">Info</p>
                  <div className="information">
                      <p>📍 <a href="https://goo.gl/maps/DDWcr2uh3jwxGjPa6">1000 Richmond Terrace, Staten Island, NY 10301</a> </p>
                      <p>📞 <a href="tel:(718) 555-5555" >(718) 555-5555</a> </p>
                      <p>🌐 <a href="https://snug-harbor.org/">snug-harbor.org</a> </p>
                      <p>🕖 Su-Sat: 9AM-5PM</p>
                  </div>
                </div>
              </Col>
            </Row>
            
            <Row className="Row1">
              <Col>
              <div className="sectionHeader">
                What are Wundrers saying?
              </div>
              </Col>
            </Row>

            <Row className="Row1">
              <Col xl={2}>
                <div class="imgCent">
                  <img className="profilePic" src={Kuar}/>
                </div>

              </Col>

              <Col>
                <div className="Review">

                  <p className="ReviewTitle">It's awesome!</p>
                  <p>This place is  definitely worth the trip. If you're in Newyork you can take the ferry for free to Staten Island and also see the statue of liberty on the way ( which is a plus! ). 
                    It's very unique, well kept China theme garden with cool places to take lots of pictures. For the $5 entrance fee it's a must stop attraction site.</p>
                
                </div>
                
              </Col>
            </Row>

            <Row className="Row1">
              <Col xl={2}>
                <div class="imgCent">
                  <img className="profilePic" src={Kajoshaj}/>
                </div>

              </Col>

              <Col>
                <div className="Review">

                  <p className="ReviewTitle">Must go!</p>
                  <p>This place is  definitely worth the trip. If you're in Newyork you can take the ferry for free to Staten Island and also see the statue of liberty on the way ( which is a plus! ). 
                    It's very unique, well kept China theme garden with cool places to take lots of pictures. For the $5 entrance fee it's a must stop attraction site.</p>
                
                </div>
                
              </Col>
            </Row>

              
            </body>
    );
  }
}
 

export default ActivityPage;