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
        <a href="https://www.linkedin.com/in/ben-c-robinson/"
         target="_blank"
            rel="noopener noreferrer">
          <img className="linkedin-icon"
                     src={require('../images/social-icons/linkedin.svg')}
                     alt="linkedin" />
        </a>
        <a href="https://www.github.com/mentionbenjamin"
         target="_blank"
            rel="noopener noreferrer">
          <img className="github-icon"
                     src={require('../images/social-icons/github.svg')}
                     alt="github" />
        </a>
        <a href="mailto:mentionbenjamin@gmail.com">
          <img className="mail-icon"
                     src={require('../images/social-icons/mail.svg')}
                     alt="mail" />
        </a>
      </div>

    </div>
  );
}

export default Footer;
