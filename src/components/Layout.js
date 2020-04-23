import React, { Component , Fragment} from 'react';
import {
  Row,
  Container,
  Col
} from 'reactstrap';


import Header from './header';

class Layout extends Component {

  render () {
    return (  
      <Fragment>
      <Header />
      <Container fluid className={'h-100'}>
        <Row className={'h-100'} noGutters={true}>
          <Col sm={12} className={'content'}> {this.props.children} </Col>
        </Row>
      </Container>
    </Fragment>
    );
  }
} 

export default Layout;
