import React from 'react';
import Header from '../components/Header.js';
import Caption from '../components/Caption.js';
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
        <Header      text={this.props.header}      />
        <Caption     text={this.props.caption}     />
        <Description text={this.props.description} />
        <Footer      text={this.props.footer}      />
      </div>
    );
  }
}

export default SidePanel;
