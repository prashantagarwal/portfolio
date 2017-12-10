import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import '../assets/css/bootstrap.min.css'
import '../assets/css/fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css'
import '../assets/css/fonts/fontello/css/fontello.css'
import '../assets/css/align.css'
import '../assets/css/main.css'
import '../assets/css/768.css'

import img from '../assets/images/site/me.png'

const Routes = [
  {
    id: 'home',
    pathName: '/',
    icon: 'home',
    label: 'Home'
  },
  // {
  //   id: 'about',
  //   pathName: '/about/',
  //   icon: 'user',
  //   label: 'About Me'
  // },
  {
    id: 'resume',
    pathName: '/resume/',
    icon: 'id',
    label: 'Resume'
  },
  {
    id: 'contact',
    pathName: '/contact/',
    icon: 'call',
    label: 'Contact'
  }
];

const Social = [
  {
    icon: 'facebook',
    link: 'https://www.facebook.com/prashantaggrawal'
  },
  {
    icon: 'twitter',
    link: 'https://twitter.com/prshntagrwl'
  },
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/in/prashantagrawal1/'
  },
  {
    icon: 'github',
    link: 'https://github.com/prashantagarwal'
  }
]

class Header extends Component {
  constructor (props) {
    super (props)
    this.state = {
      active: location.pathname
    }
    this.setActive = this.setActive.bind(this)
  }

  setActive (id) {
    this.setState({ active: id });
  }

  render () {
    return (
      <header id="masthead" className="header" role="banner">  
        <a onClick={this.props.onToggle} className="menu-toggle toggle-link" />
        <h1 className="site-title mobile-title">PRASHANT AGRAWAL</h1>
        <div className="header-wrap">
          <img src={img} alt="avatar" />
          <h1 className="site-title">PRASHANT</h1>
          <nav id="primary-navigation" className="site-navigation primary-navigation" role="navigation">
            <div className="nav-menu">
              <ul>
                {
                  Routes.map((route) => {
                    return (
                      <li
                        key={route.id}
                        onClick={this.setActive.bind(this, route.pathName)}
                        className={this.state.active === route.pathName ? 'current_page_item' : ''}
                      >
                        <Link to={route.pathName}><i className={`pe-7s-${route.icon}`}></i>{route.label}</Link>
                      </li>
                    )
                  })
                }
              </ul>
            </div>
          </nav>
          <div className="header-bottom">
            <ul className="social">
              {
                Social.map((s) => {
                  return (
                    <li key={s.icon}>
                      <a className={s.icon} href={s.link} />
                    </li>
                  );
                })
              }
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

class TemplateWrapper extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isToggleOpen: false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle () {
    this.setState ({ isToggleOpen: !this.state.isToggleOpen })
  } 

  render () {
    let htmlClass = ['one-page-layout', 'modern-layout'];
    if (this.state.isToggleOpen) {
      htmlClass.push('is-menu-toggled-on')
    }

    return (
      <div>
        <Helmet
          title="Gatsby Default Starter"
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
          htmlAttributes={{class: htmlClass.join(' ')}}
        />
        <div id="page" className="hfeed site">
          <Header onToggle={this.handleToggle}/>
          <div id="main" className="site-main">
            {this.props.children()}
          </div>
        </div>
      </div>
    );
  }
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
