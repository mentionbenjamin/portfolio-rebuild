import React from 'react';
import Header from '../components/Header.js';
import Caption from '../components/Caption.js';
import Details from '../components/Details.js';
import Description from '../components/Description.js';
import Link from '../components/Link.js';
import Footer from '../components/Footer.js';

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
