import React from 'react';
import Header from '../components/Header.js';
import Description from '../components/Description.js';
import Footer from '../components/Footer.js';

class SidePanelContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    return (
      <div>
        <div className="side-panel-wrapper">
          {/* <Header text="hi there"/> */}
          <Header />
          <Description />
          <Footer />
        </div>
      </div>
    );
  }
}

export default SidePanelContainer;
