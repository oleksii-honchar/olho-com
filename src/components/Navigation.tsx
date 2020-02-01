import React, { ReactElement } from "react";
// import $ from 'jquery'

import { SocialLinks } from "src/components/SocialLinks";
import { NavigationContainer } from "src/components/NavigationContainer";
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

  return (
    <NavigationContainer>
      <div className="col align-items-start">
        <div className='navbar-brand'>
          <img src='/assets/images/userpic-01.jpg' />
        </div>
      </div>
      <div className="col d-flex flex-column align-items-center">
        <h2 className="">Oleksii Honchar</h2>
        <p className="navbar-sub-title justify-content-end">Full-cycle Software Engineer</p>
        <div className="justify-content-end">
          <SocialLinks/>
        </div>
      </div>

    </NavigationContainer>
  )
}
