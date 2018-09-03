import React from 'react';
import Header from '../components/Header.js';
import Description from '../components/Description.js';
import Footer from '../components/Footer.js';

class SidePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    console.log(this.props)
    return (
      <div>
        <div className="side-panel-wrapper">
          <Header      text={this.props.header} />
          <Description text={this.props.description}/>
          <Footer      text={this.props.footer}/>
        </div>
      </div>
    );
  }
}

export default SidePanel;
