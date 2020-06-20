// Import Packages
import React from 'react'

// Import Components
import IconSVG from './IconSVG'

/**
 * @component Header
 */
const Header = ({
  _handleSearch,
  updateSearchQuery,
  searchQuery
}) => {
  return (
    <header className="header">
      <img
        src="/assets/images/ironhash-logo-150x150@2x.png"
        alt="ironhash logo."
        width="75"
        className="header__logo"
      />

      <h1 className="header__heading">
        Quickly and easily research related hashtags for Instagram.
      </h1>

      <div className="header__tut-link">
        <p className="header__tut-link__copy">
          Why/How to use:
        </p>

        <IconSVG iconName="play" />
      </div>
    </header>
  )
}

export default Header
