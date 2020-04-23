import React, {Component} from 'react';
import Layout from './components/Layout';
import classnames from 'classnames';

import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col
} from 'reactstrap';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      activeTab: '1'
    };
  }

  switchActiveTab(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({activeTab: tab});
    }

  }

  render() {
    return (
      <Layout>
        <Col sm={4}>
          <Nav tabs className={'nav-fill'}>
            <NavItem>
              <NavLink
                className={classnames({
                active: this.state.activeTab === '1'
              })}
                onClick={() => {
                this.switchActiveTab('1');
              }}>
                Sent Messages
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({
                active: this.state.activeTab === '2'
              })}
                onClick={() => {
                this.switchActiveTab('2');
              }}>
                Incomming Messages
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Row>
                <Col sm="12">
                  <h4>Tab 1 Contents</h4>
                </Col>
              </Row>
            </TabPane>
            <TabPane tabId="2">
              <Row>
                <Col sm="12">
                  <h4>Tab 2 Contents</h4>
                </Col>

              </Row>
            </TabPane>
          </TabContent>

        </Col>

      </Layout>
    );
  }

}

export default App;
