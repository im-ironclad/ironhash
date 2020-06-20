// Import Packages
import React from 'react'

/**
 * @component IconSVG
 */
const IconSVG = ({ iconName }) => {
  return (
    <i className="icon">
      <svg>
        <use href={`/assets/images/svg/sprite.svg#icon-${iconName}`}></use>
      </svg>
    </i>
  )
}

export default IconSVG
