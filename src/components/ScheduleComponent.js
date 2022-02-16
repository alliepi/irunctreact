import React, { Component } from 'react';
import RaceTable from './RaceTableComponent';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col } from 'reactstrap';


class Schedule extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      activeTab: '1'
    };
  }

  toggle(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }
  render() {
    return (
        <div class="container">
    {/*--Results--*/}
            <div class="row row-content mx-auto" id="results">
                <div class="col pt-5 mx-auto">
                    <h2>Results/Schedule</h2>
 
                <Nav tabs>
                    <NavItem>
                        <NavLink
                        //className={classnames({ active: this.state.activeTab === '1' })}
                        className="active: this.state.activeTab === '1'"
                        onClick={() => { this.toggle('1'); }}
                        >
                        2022
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        //className={classnames({ active: this.state.activeTab === '1' })}
                        className="active: this.state.activeTab === '2'"
                        onClick={() => { this.toggle('2'); }}
                        >
                        2021
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                        //className={classnames({ active: this.state.activeTab === '1' })}
                        className="active: this.state.activeTab === '3'"
                        onClick={() => { this.toggle('3'); }}
                        >
                        2020
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId="1">
                        <Row>
                            <Col sm="12">
                                <RaceTable />
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="2">
                        <Row>
                            <Col sm="12">
                                2021 Races Coming Soon!!
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId="3">
                        <Row>
                            <Col sm="12">
                                2020 Races Coming Soon!!
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        </div>
    </div>
    )
  }
}

export default Schedule;