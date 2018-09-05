import React from 'react';
// components
import Header from '../components/sidepanel/Header.js';
import Caption from '../components/sidepanel/Caption.js';
import Details from '../components/sidepanel/Details.js';
import Description from '../components/sidepanel/Description.js';
import Link from '../components/sidepanel/Link.js';
import Footer from '../components/sidepanel/Footer.js';

class SidePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  render() {
    // console.log(this.props)
    // console.log(this.props.description)

    return (
      <div>
        <Header      text={this.props.header}      />
        <Caption     text={this.props.caption}     />
        <Details     text={this.props.details}     />
        <Description text={this.props.description} />
        <Link        text={this.props.link}        />
        <Footer      text={this.props.footer}      />
      </div>
    );
  }
}

export default SidePanel;
