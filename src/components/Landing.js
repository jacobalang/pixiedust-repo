import React from 'react';
import {Container, Row, Col, Button} from 'react-bootstrap';
import BannerImage from '../images/bannerImage4.jpg'

class Landing extends React.Component {
    render() {
      
      const bannerStyle = {
        backgroundImage: `url(${BannerImage})`,    
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '2.5vw',
        paddingBottom: '10vw',
        textAlign: 'center',
        color: 'white',
        fontWeight: '900',
      }
      return (
        <div>
         
         
         <Container className="banner" style={bannerStyle}>
           <Row className="justify-content-md-center">
              <p style={{fontSize: '2em', paddingTop: '2vw'}}>PIXIE DUST HOUSE CLEANING</p>
           </Row>

           <Row className="justify-content-md-center">
              <p style={{fontSize: '1.5em'}}>THE BEST HOUSE CLEANING IN KANSAS CITY</p>
           </Row>

           <Row >
             <Col>
              <Button href="/contact" style={{"float": "right"}}>GET A QUOTE</Button>
             </Col>

             <Col>
             <Button href="/contact" style={{"float": "left"}}>(417)761-4253</Button>
             </Col>
           </Row>
         </Container>

         <Container style={{'paddingTop': '1.5vw'}}>
           <Row>
             <Col>
              <h3 style={{'textAlign' : 'center'}}>Save Time</h3>
              <p>
              Start enjoying your day’s off again. With our busy schedules we often end up working during times when we should be enjoying things other than cleaning! As a Kansas City house cleaning company our goal is to save you the time it takes keeping up with your cleaning so you can start enjoying your day’s off again.
              </p>
             </Col>
             <Col>
             <h3 style={{'textAlign' : 'center'}}>Save Energy</h3>
             <p>
             Have the energy to do the things you love. A lot of effort goes into keeping your home or office building clean. Sometimes it takes more energy than we have. Let our Kansas City house cleaners take care of your all your cleaning needs so you can enjoy life to the fullest.
             </p>
             </Col>
             <Col>
             <h3 style={{'textAlign' : 'center'}}>Free Estimates</h3>
             <p>
             Contact us today for a free, no obligation estimate. We offer weekly, bi-weekly, monthly and special occasion cleaning services. Call us or request a quote here. 
             </p>
             </Col>
           </Row>

           </Container>
            <Container style={{'paddingTop': '1.5vw'}}>
           <Row>
             <h3 style={{'textAlign': 'center'}}>We do It All</h3>

             <p>
               Enjoy having a clean home. Stop worrying about picking up for company or after a party. We specialize in residential house cleaning. Once we find out exactly what you’re looking for and what’s most important to you we work out all the details. We’ll bring our own supplies and get to work.

              All of our house cleaning staff in Kansas City are bonded and insured, owner trained and professional minded individuals with excellent communication skills. All services are always covered by our 100% Satisfaction, or it’s Free, Guarantee!
             </p>
           </Row>
         </Container>

          <p>
          Save Time-Spend your free time relaxing instead of cleaning. I can clean your home top to bottom, so your evenings and weekends are free. My goal is to make your house shine and to make sure that all areas are cleaned the way you want them every time. 
          <br></br>
          <br></br>
          Free estimates-Contact me today for a free no obligation quote. I offer weekly, bi-weekly, and monthly cleaning services. I also offer move out and move in cleanings and small organization projects. Call me or schedule your quote here.   
          </p>
        </div>
      );
    }
  }
  export default Landing;
  