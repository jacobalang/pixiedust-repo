import React from 'react';
import {Form, Button, Col, Row, Container, Image} from 'react-bootstrap';
import axios from 'axios';
import homedecor from '../images/homedecor.jpg'

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phoneNumber: '',
      subject: '',
      message: ''
    }

    this.baseSate = this.state;

    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePhone = this.handleChangePhone.bind(this);
    this.handleChangeSubject = this.handleChangeSubject.bind(this);
    this.handleChangeMessage = this.handleChangeMessage.bind(this);
    this.resetForm = this.resetForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
  }

  handleChangeEmail(event) {
    this.setState({email: event.target.value})
  }

  handleChangePhone(event) {
    this.setState({phoneNumber: event.target.value})
  }

  handleChangeSubject(event) {
    this.setState({subject: event.target.value})
  }

  handleChangeMessage(event) {
    this.setState({message: event.target.value})
  }

    resetForm() {
      this.setState( {
        email: '',
        phoneNumber: '',
        subject: '',
        message: ''
      });
  }

  handleSubmit(event) {
    event.preventDefault();
    let Data = {
    
        phoneNumber: this.state.phoneNumber,
        email: this.state.email,
        message: this.state.message,
        subject: this.state.subject
      

    }
    console.log({Data});
    axios.post('https://gczbarr6u9.execute-api.us-east-1.amazonaws.com/Test/contact-us/', {  phoneNumber: this.state.phoneNumber,
    email: this.state.email,
    message: this.state.message,
    subject: this.state.subject})
    .then(res => {alert("Message sent"); this.resetForm()}).catch(err => "Message couldn't be sent, try again later");
  }
  
    render() {  
     
      return (
        <div>

          <h1>CONTACT US FOR A FREE QUOTE TODAY</h1>

          <h2>Reach out to me at (417)781-4253 or fill out the following form and I will reach out to you.</h2>

          <Container>

            <Row>
              <Col md={6}>
              <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={this.handleChangeEmail}/>
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group controlId="phone">
    <Form.Label>Phone Number</Form.Label>
    <Form.Control type="tel" placeholder="Phone Number" value= {this.state.phoneNumber} onChange={this.handleChangePhone}/>
  </Form.Group>

  <Form.Group controlId="subject">
    <Form.Label>Subject</Form.Label>
    <Form.Control type="text" placeholder="Subject" value = {this.state.subject} onChange={this.handleChangeSubject}/>
  </Form.Group>

  <Form.Group controlId="message">
    <Form.Label>Message</Form.Label>
    <Form.Control type="text" placeholder="Message" value = {this.state.message} onChange={this.handleChangeMessage}/>
  </Form.Group>

  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>
              </Col>
              <Col md={6}>
              <Image id="optionalstuff" style={{maxHeight: '400px'}} src={homedecor}/>

              </Col>
            </Row>
          </Container>
            
        </div>
      );
    }
  }
  export default Contact;
  