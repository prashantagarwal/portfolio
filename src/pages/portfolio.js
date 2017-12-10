import React from 'react'
import Link from 'gatsby-link'

const Portfolio = () => (
  <section id="portfolio" className="pt-page page-layout portfolio page-current">
    <div className="content">
      <div className="layout-medium">
      <h1 className="page-title">
        <i className="pe-7s-glasses"></i>my works
      </h1>
      <ul id="filters" className="filters">
        <li className="current">
          <a href="#" data-filter="*">all</a>
        </li>
        <li>
          <a href="#" data-filter=".media">Media</a>
        </li>
        <li>
          <a href="#" data-filter=".illustration">Illustration</a>
        </li>
        <li>
          <a href="#" data-filter=".video">Video</a>
        </li>
      </ul>
        <div className="portfolio-items media-grid masonry" data-layout="masonry" data-item-width="340">
            <div className="media-cell illustration hentry">
              <div className="media-box">
                <img src="images/portfolio/01.jpg" alt="portfolio-post" />
                <div className="mask"></div>
                <a href="portfolio-item-01.html" className="ajax"></a>
              </div>
              <div className="media-cell-desc">
                <h3>Bookcard</h3>
                <p className="category">a vcard theme</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  </section>
)

export default Portfolio
