import React from 'react'
import Link from 'gatsby-link'

const About = () => (
  <section id="about" className="pt-page page-layout page-current">
    <div className="content">
      <div className="layout-medium">
        <h1 className="page-title">
          <i className="pe-7s-user"></i>about me
        </h1>
        <div className="section-title center">    
          <h2>
            <i>services</i>
          </h2>
        </div>
        <div className="row">
          <div className="col-sm-6 col-md-3">
            <div className="service">
              <img src="images/site/icon-01.png" alt="image"/>
              <h4>Copywriter</h4>
              <p>I design super cool websites. It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="service">
              <img src="images/site/icon-02.png" alt="image"/>
              <h4>Game Dev</h4>
              <p>I can design beautiful type faces for both digital and print media. It is a long established fact that a reader will be distracted.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="service">
              <img src="images/site/icon-03.png" alt="image"/>
              <h4>Management</h4>
              <p>I write about web design. It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="service">
              <img src="images/site/icon-04.png" alt="image"/>
              <h4>Problem Solver</h4>
              <p>I have strong project management skills. It is a long established fact that a reader will be distracted by the readable content.</p>
            </div>
          </div>
        </div>
        <div className="section-title center">    
          <h2>
            <i>work procces</i>
          </h2>
        </div>
        <div className="row">
          <div className="col-xs-4 col-sm-2">
            <div className="process">
              <i className="pe-7s-chat"></i>
              <h4>DISCOVER</h4>
            </div>
          </div>
          <div className="col-xs-4 col-sm-2">
            <div className="process">
              <i className="pe-7s-light"></i>
              <h4>IDEA</h4>
            </div>
          </div>
          <div className="col-xs-4 col-sm-2">
            <div className="process">
              <i className="pe-7s-vector"></i>
              <h4>DESIGN</h4>
            </div>
          </div>
          <div className="col-xs-4 col-sm-2">
            <div className="process">
              <i className="pe-7s-network"></i>
              <h4>DEVELOP</h4>
            </div>
          </div>
          <div className="col-xs-4 col-sm-2">
            <div className="process">
              <i className="pe-7s-browser"></i>
              <h4>TEST</h4>
            </div>
          </div>
          <div className="col-xs-4 col-sm-2">
            <div className="process">
              <i className="pe-7s-rocket"></i>
              <h4>LAUNCH</h4>
            </div>
          </div>
        </div>
        <div className="section-title center">    
          <h2>
            <i>clients</i>
          </h2>
        </div>
        <div className="row">
          <div className="col-xs-4 col-md-2">
            <div className="client">
              <a href="#">
                <img src="images/clients/client-01.png" alt="client" />
              </a>
            </div>
          </div>
          <div className="col-xs-4 col-md-2">
            <div className="client">
              <a href="#">
                <img src="images/clients/client-02.png" alt="client" />
              </a>
            </div>
          </div> 
          <div className="col-xs-4 col-md-2">
            <div className="client">
              <a href="#">
                <img src="images/clients/client-03.png" alt="client" />
              </a>
            </div>
          </div>  
          <div className="col-xs-4 col-md-2">
            <div className="client">
              <a href="#">
                <img src="images/clients/client-04.png" alt="client" />
              </a>
            </div>
          </div>   
          <div className="col-xs-4 col-md-2">
            <div className="client">
              <a href="#">
                <img src="images/clients/client-05.png" alt="client" />
              </a>
            </div>
          </div>  
          <div className="col-xs-4 col-md-2">
            <div className="client">
              <a href="#">
                <img src="images/clients/client-06.png" alt="client" />
              </a>
            </div>
          </div>
        </div>
        <div className="section-title center">    
          <h2>
            <i>fun fact</i>
          </h2>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            <div className="fun-fact">
              <i className="pe-7s-map-2"></i>
              <h4>24 Countries Visited</h4>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="fun-fact">
              <i className="pe-7s-news-paper"></i>
              <h4>72 Articles Published</h4>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="fun-fact">
              <i className="pe-7s-coffee"></i>
              <h4>20.000 Cups Of Coffee</h4>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3">
            <div className="fun-fact">
              <i className="pe-7s-medal"></i>
              <h4>12 Awards Won</h4>
            </div>
          </div>
        </div>
        <div className="section-title center">    
          <h2>
            <i>other pages</i>
          </h2>
        </div>
        <p className="center">
          <a className="button" href="404.html">404</a>
          <a className="button" href="blog.html">Blog</a>
          <a className="button" href="blog-single.html">Blog Single</a>
          <a className="button" href="form-elements.html">Form Elements</a>
          <a className="button" href="grid.html">Grid</a>
          <a className="button" href="shortcodes.html">Shortcodes</a>
          <a className="button" href="typography.html">Typography</a>
        </p>
      </div>
    </div>
  </section>
)

export default About
