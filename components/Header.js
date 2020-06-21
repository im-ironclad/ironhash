// Import Packages
import React from 'react'

// Import Components
import IconSVG from './IconSVG'

/**
 * @component Header
 */
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo-title">
        <img
          src="/assets/images/ironhash-logo-150x150@2x.png"
          alt="ironhash logo."
          className="header__logo-title__logo"
          title="ironhash"
        />
  
        <h1 className="header__logo-title__title">
          Quickly and easily research related <a href="https://instagram.com" target="_blank">Instagram</a> hashtags.
        </h1>
      </div>

      <div className="header__tut-link">
        <p className="header__tut-link__copy">
          Why/How to use:
        </p>

        <a
          href="https://youtube.com"
          target="_blank"
          className="header__tut-link__icon"
          title="Video Tutorial"
        >
          <IconSVG iconName="play" />
        </a>
      </div>
    </header>
  )
}

export default Header
