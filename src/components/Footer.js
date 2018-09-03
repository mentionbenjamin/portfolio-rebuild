import React from 'react';
import '../css/Footer.css';



const Footer = (props) => {
  return (
    <div className="side-panel-footer">

      <div className="footer-mb">
        {props.text}
        {/* <Link to="/">mentionbenjamin</Link> */}
      </div>

      <div className="footer-social">
        <a href="https://www.linkedin.com/in/ben-c-robinson/" target="_blank">
          <img className="linkedin-icon" src={require('../images/social-icons/linkedin.svg')} />
        </a>
        <a href="https://www.github.com/mentionbenjamin" target="_blank">
          <img className="github-icon" src={require('../images/social-icons/github.svg')} />
        </a>
        <a href="mailto:mentionbenjamin@gmail.com">
          <img className="mail-icon" src={require('../images/social-icons/mail.svg')} />
        </a>
      </div>

    </div>
  );
}

export default Footer;
