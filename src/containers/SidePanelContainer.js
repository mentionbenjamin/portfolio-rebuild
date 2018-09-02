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
      <div className="side-panel-wrapper">
        <Header />
        <Description />
        <Footer />
      </div>
    );
  }
}



export default SidePanelContainer;
