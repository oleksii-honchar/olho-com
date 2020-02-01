import React, { ReactElement } from "react";
// import $ from 'jquery'

import { Nav, NavItem, Navbar } from 'react-bootstrap'

// function scrollCheckForNav () {
//   const navbarMenu = $('[data-class="Navigation"] .navbar-menu')
//   const navbarNav = $('[data-class="Navigation"] .navbar-nav')
//
//   if (document.body.scrollTop > 108) {
//     navbarMenu.addClass('solid-bg')
//     navbarNav.addClass('light-links')
//   } else {
//     navbarMenu.removeClass('solid-bg')
//     navbarNav.removeClass('light-links')
//   }
// }

export function Navigation(): ReactElement {
  // componentDidMount () {
    // scrollCheckForNav()
    // window.onscroll= scrollCheckForNav
  // }

  const socials = (
    <div className='navbar-social'>
      <a href='http://telegram.me/tuiteraz'>
        <span className='fa-stack fa-lg'>
          <i className='fa fa-circle fa-stack-2x fa-inverse'/>
          <i className='fa fa-paper-plane fa-stack-1x'/>
        </span>
      </a>
      <a href='https://fb.com/gonchara.net'>
        <span className='fa-stack fa-lg'>
          <i className='fa fa-circle fa-stack-2x fa-inverse'/>
          <i className='fa fa-facebook fa-stack-1x'/>
        </span>
      </a>
      <a href='https://ua.linkedin.com/in/alekseygonchar'>
        <span className='fa-stack fa-lg'>
          <i className='fa fa-circle fa-stack-2x fa-inverse'/>
          <i className='fa fa-linkedin fa-stack-1x'/>
        </span>
      </a>
      <a href='https://github.com/aleksey-gonchar'>
        <span className='fa-stack fa-lg'>
          <i className='fa fa-circle fa-stack-2x fa-inverse'/>
          <i className='fa fa-github-alt fa-stack-1x'/>
        </span>
      </a>
    </div>
  )

  return (
    <Navbar data-class='Navigation'>
      <div className='navbar-header'>
        <div className='navbar-avatar'>
          <img src='/assets/images/userpic-01.jpg' />
        </div>
        <div className='navbar-titles'>
          <div className='navbar-titles-container'>
            <a href='/app/about' className='navbar-name'>
              <h2>Oleksii Honchar</h2>
            </a>
            <span className='navbar-sub-title'>Full-cycle Software Engineer</span>
            {socials}
          </div>
        </div>
      </div>
    </Navbar>
  )
}
