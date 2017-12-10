import React from 'react'
import Link from 'gatsby-link'
import AtvImg from 'react-atv-img';
import img from '../assets/images/site/home.jpg'
import designation from '../assets/images/site/designation2.svg'
import name from '../assets/images/site/name.svg'

const IndexPage = () => (
  <section id="home" className="pt-page page-layout light-text home-section has-bg-img page-current" style={{'backgroundImage':`url(${img})`}}>
    <div className="content">
      <div className="layout-medium">
        <h4>Hi, I am</h4>
        <AtvImg
          layers={[
            'http://kloc.pm/images/back.png',
            designation,
            name
          ]}
          staticFallback="http://kloc.pm/images/kloc-icon-flattened.jpg"
          isStatic={false}
          className={'thisIsOptional'}
          style={{ width: 320, height: 190 }}
        />
        <h4>
          I am
          <strong id="typist-element" data-typist="a blogger., a wordpress lover., an adventurer.">a writer.</strong>
        </h4>
      </div>
    </div>
  </section>
)

export default IndexPage
