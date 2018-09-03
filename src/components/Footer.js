import React from 'react';
import '../css/Footer.css';


const Footer = (props) => {
  return (
    <div className="side-panel-footer">

      <div className="footer-mb">
        {props.text}
      </div>

      <img className="linkedin-icon" src={require('../images/social-icons/linkedin.svg')} />
      <img className="github-icon"   src={require('../images/social-icons/github.svg')} />
      <img className="mail-icon"     src={require('../images/social-icons/mail.svg')} />

    </div>
  );
}

export default Footer;
