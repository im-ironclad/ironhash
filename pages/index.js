// Import Packages
import React, { useState } from 'react'
import axios from 'axios'

// Import Components
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import SelectedTags from '../components/SelectedTags'
import Toolbar from '../components/Toolbar'

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
        <Toolbar
          _handleSearch={_handleSearch}
          searchQuery={searchQuery}
          updateSearchQuery={updateSearchQuery}
        />
  
        <SelectedTags
          _copyToClipboard={_copyToClipboard}
          _handleDeselectTag={_handleDeselectTag}
          selectedTags={selectedTags}
          selectedTagsRef={selectedTagsRef}
        />
  
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
