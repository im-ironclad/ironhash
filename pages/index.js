// Import Packages
import React, { useState } from 'react'
import axios from 'axios'

// Import Components
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'

/**
 * Home page of our site
 */
const HomePage = () => {
  let [searchQuery, updateSearchQuery] = useState("")
  let [searchResults, updateSearchResults] = useState([])
  let [selectedTags, updateSelectedTags] = useState([])
  const selectedTagsRef = React.createRef()
  const baseEndpoint = "https://www.instagram.com/web/search/topsearch/?query=%23"

  /**
   * Method for handling each search
   */
  const _handleSearch = async e => {
    e.preventDefault()

    updateSearchResults(
      await axios
        .get(baseEndpoint + searchQuery)
        .then(res => res.data.hashtags)
        .catch(err => console.error(err)) // todo: handle properly
    )
  }

  /**
   * Method for handling the selection of a new tag
   */
  const _handleSelectTag = (tagName) => {
    if (selectedTags.includes(tagName)) {
      return
    }

    updateSelectedTags([`${tagName}`, ...selectedTags])
  }

  /**
   * Method for handling the de-selection of an existing tag
   */
  const _handleDeselectTag = (tagName) => {
    if (selectedTags.length > 0) {
      updateSelectedTags(selectedTags.filter(tag => tag !== tagName))
    }
  }

  /**
   * Method for copying selectedTags to clipboard
   */
  const _copyToClipboard = () => {
    selectedTagsRef.current.select()
    document.execCommand("copy")
  }

  return (
    <div id="home">
      <Header />

      <main id="content" className="content">
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
              onChange={(e) => {console.log(e.target.value)}}
            >
              <option value=""></option>
              <option value="htl">Posts - High to Low</option>
              <option value="lth">Posts - Low to High</option>
            </select>
          </form>
        </section>
  
        <aside className="selected-tags">
          <div className="sidebar__tags">
            <p className="sidebar__tags__label">Selected tags:</p>
  
            <button
              className="sidebar__tags__copy-btn"
              onClick={_copyToClipboard}
            >
              Copy to Clipboard
            </button>
  
            <textarea
              className="sidebar__tags__hidden-val"
              aria-hidden="true"
              ref={selectedTagsRef}
              defaultValue={selectedTags.join(" ")}
              tabIndex="-1"
            />
  
            {/* List of selected tags */}
            <div id="selected-tags" className="selected-tags">
              {selectedTags.length > 0 && (
                <ul className="sidebar__tags__list">
                  {selectedTags.map(tag => (
                    <li key={tag} className="sidebar__tags__list__item">
                      <p className="sidebar__tags__list__item__tag">{tag}</p>
  
                      <button
                        aria-label={`Remove the hashtag: ${tag}`}
                        className="sidebar__tags__list__item__btn"
                        onClick={() => _handleDeselectTag(tag)}
                      />
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </aside>
  
        {searchResults.length > 0 && (
          <SearchResults results={searchResults} _handleSelectTag={_handleSelectTag} />
        )}
      </main>

      <footer className="footer">
        <p>
          An <a href="http://blogofiron.com" target="_blank"><strong>Ironclad</strong></a> Website
        </p>
      </footer>
    </div>
  )
}

export default HomePage
