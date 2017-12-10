import React from 'react'
import Link from 'gatsby-link'

const Contact = () => (
  <section id="contact" className="pt-page page-layout contact light-text page-current">
    <div className="content">
      <div className="layout-medium">
        <h1 className="page-title">
          <i className="pe-7s-call"></i>contact me
        </h1>
        <div className="section-title center">    
          <h2>
            <i>Let's Socialize</i>
          </h2>
        </div>
        <ul className="social">
          <li><a className="facebook" href="#"></a></li>
          <li><a className="twitter" href="#"></a></li>
          <li><a className="linkedin" href="#"></a></li>
          <li><a className="google-plus" href="#"></a></li>
          <li><a className="pinterest" href="#"></a></li>
          <li><a className="instagram" href="#"></a></li>
          <li><a className="vine" href="#"></a></li>
          <li><a className="vimeo" href="#"></a></li>
        </ul>
        <div className="section-title center">    
          <h2>
            <i>Reach Me</i>
          </h2>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <div className="fun-fact">
              <i className="pe-7s-map-marker"></i>
              <h4>based in Los Angeles, USA</h4>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="fun-fact">
              <i className="pe-7s-call"></i>
              <h4>Tel : +123 456 78900</h4>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="fun-fact">
              <i className="pe-7s-mail"></i>
              <h4>johndoe [at] gmail.com</h4>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="fun-fact">
              <i className="pe-7s-check"></i>
              <h4>Freelance Available</h4>
            </div>
          </div>
        </div>
        <div className="section-title center">    
          <h2>
            <i>Drop Me A Line</i>
          </h2>
        </div>
        <div className="contact-form">
          <form id="contact-form" className="validate-form" method="post" action="http://themes.pixelwars.org/empathy-html/demo/send-mail.php">
            <input type="hidden" name="subject" id="subject" value="You have a new message from Photographer!" />
            <p>
              <label for="name">NAME</label>
              <input type="text" name="name" id="name" className="required" />
            </p>
            <p>
              <label for="email">EMAIL</label>
              <input type="text" name="email" id="email" className="required email" />
            </p>
            <p className="antispam">Leave this empty if you are a human :
              <br /><input name="url" />
            </p>
            <p>
              <label for="message">MESSAGE</label>
              <textarea name="message" id="message" className="required"></textarea>
            </p>
            <p>
              <button className="submit button">Send</button>
            </p>
          </form>
        </div>
        <div className="map">
          <div data-latitude="-25.363882" data-longitude="131.044922" data-zoom="5" data-marker-image="images/site/marker.png" id="map-canvas" className="map-canvas" />
        </div>
      </div>
    </div>
  </section>
)

export default Contact
