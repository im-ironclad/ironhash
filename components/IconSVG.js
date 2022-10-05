// Import Packages
import React from 'react'

/**
 * @component IconSVG
 */
const IconSVG = ({ iconName }) => {
  return (
    <i className="icon">
      <svg>
        {/* This path works for now, if updates ever happen remove sprite.svg and just focus individual SVGs */}
        <use href={`/assets/images/svg/sprite.svg#icon-${iconName}`}></use>
      </svg>
    </i>
  )
}

export default IconSVG
