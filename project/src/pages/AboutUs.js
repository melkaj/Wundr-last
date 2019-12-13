import React from 'react';
import { 
  Link,
  NavLink
} from 'react-router-dom';

import WundrLogo from '../images/Logotype.png';
import Kuar from '../images/kuar.png';
import Kajoshaj from '../images/kajoshaj.png';
import Khalil from '../images/khalil.png';

import 'bootstrap/dist/css/bootstrap.min.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';
import './LandingPage.css'

function Navigation(props) {
    return (
      <nav className="navbar navbar-expand-sm navbar-primary bg-light ">
        <Link className="navbar-brand" to="/">
          <img src={WundrLogo} alt="Logo" height="34px" width="auto" className="d-inline-block align-top" />
          </Link>
      </nav>
    );
  }


  class AboutUs extends React.Component {
    render() {
      return (

        <body className="body">
            <Navigation/>
            <Row class="AboutUs">
              <Col className="Title">
                About the Developers
              </Col>
            </Row>
            <Row>
              <Col>
              <div>
                    <img className="ProfilePics" src={Kuar} alt=""/>
                    <p className="ProfileText">
                      <strong className="Bold">Hey I'm Gurjit.</strong> I'm a Junior Computer Engineering Major at at the City College of New York. 
                      I like watching korean dramas and playing volleyball! 🏐
                    </p>
                </div>
              </Col>
              <Col>
              <div>
                    <img className="ProfilePics" src={Kajoshaj} alt=""/>
                    <p className="ProfileText"> 
                        <strong className="Bold"> Hey! I'm Meldin.</strong> I am a Junior at the City College of New York studying Computer Science. In my free time I am a queer ally and help the LGBTQ+ community
                        in any way I can! 🏳️‍🌈
                    </p>
                </div>
              </Col>
              <Col>
              <div>
                    <img className="ProfilePics" src={Khalil} alt=""/>
                    <p className="ProfileText">
                      <strong className="Bold">Howdy I'm Muhammad! </strong>  I'm a Senior Computer Science student at the College of Staten Island. I designed the mockups, front-end and design language of the site.
                      I enjoy playing Smash Bros. and watching the original Twilight Zone! 🤠
                    </p>
                </div>
              </Col>
            </Row>
        </body>

        );
      }
    }

    export default AboutUs;
