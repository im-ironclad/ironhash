// Import Packages
import React from 'react'

// Import Components
import IconSVG from './IconSVG'

/**
 * @component Toolbar
 */
const Toolbar = ({ _handleSearch, _handleSort, searchQuery, updateSearchQuery }) => {
  return (
    <section className="toolbar">
      <form
        onSubmit={_handleSearch}
        className="toolbar__search"
      >
        <label
          htmlFor="search"
          className="toolbar__search__label"
        >
          #
        </label>
        <input
          id="search"
          type="text"
          value={searchQuery}
          className="toolbar__search__input"
          onChange={e => updateSearchQuery(e.target.value)}
        />

        <button
          className="btn toolbar__search__submit"
        >
          Search
        </button>
      </form>

      {/* Sort By Input/Form */}
      <form className="toolbar__sort">
        <label
          htmlFor="sort"
          className="toolbar__sort__label"
        >
          Sort By:
        </label>

        <select
          id="sort"
          className="toolbar__sort__select"
          onChange={e => {_handleSort(e.target.value)}}
        >
          <option value=""></option>
          <option value="htl">Posts - High to Low</option>
          <option value="lth">Posts - Low to High</option>
        </select>

        <IconSVG iconName="triangle-down" />
      </form>
    </section>
  )
}

export default Toolbar
