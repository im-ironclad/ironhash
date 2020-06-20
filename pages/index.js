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
    <main id="home">
      <Header
        _handleSearch={_handleSearch}
        updateSearchQuery={updateSearchQuery}
        searchQuery={searchQuery}
      />

      <section id="toolbar" className="toolbar">
        <form
          onSubmit={_handleSearch}
          className="header__search"
        >
          <input
            type="text"
            value={searchQuery}
            className="header__search__input"
            placeholder="#"
            onChange={e => updateSearchQuery(e.target.value)}
          />

          <input
            type="submit"
            value="Search"
            className="header__search__submit"
          />
        </form>

        {/* Sort By Input/Form */}
      </section>

      <section id="tags-list" className="tags-list">
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
      </section>

      <aside className="sidebar">
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
        </div>
      </aside>

      {searchResults.length > 0 && (
        <SearchResults results={searchResults} _handleSelectTag={_handleSelectTag} />
      )}
    </main>
  )
}

export default HomePage
