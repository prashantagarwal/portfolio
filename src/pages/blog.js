import React from 'react'
import Link from 'gatsby-link'

const IndexPage = () => (
  <section id="blog" className="pt-page page-layout page-current">
    <div className="content">
      <div className="layout-medium">
        <h1 className="page-title">
          <i className="pe-7s-notebook"></i>from the blog
        </h1>
        <div className="latest-posts media-grid masonry" data-layout="masonry" data-item-width="340">
          <article className="hentry media-cell">
            <div className="media-box">
              <img src="images/blog/01.jpg" alt="post-image" />
              <div className="mask"></div>
              <a href="blog-single.html"></a>
            </div>
            <header className="media-cell-desc">
              <span title="2013" className="date">
                <span className="day">18</span>oct</span>
              <h3>
                <a href="blog-single.html">20 Best Practices For Designing Better UIs</a>
              </h3>
            </header>
          </article>

          <article className="hentry media-cell">
            <div className="media-box">
              <img src="images/blog/02.jpg" alt="post-image" />
              <div className="mask"></div>
              <a href="blog-single.html"></a>
            </div>

            <header className="media-cell-desc">
              <span title="2013" className="date">
                <span className="day">11</span>oct</span>
              <h3>
                <a href="blog-single.html">40 Inspirational Magazine Designs That You Should See</a>
              </h3>
            </header>
          </article>
        </div>
      </div>
    </div>
  </section>
)

export default IndexPage
