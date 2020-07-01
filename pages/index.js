// Import Packages
import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import axios from 'axios'

// Import Components
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import Sidebar from '../components/Sidebar'
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
   * Method for handling the sorting of our searchResults
   */
  const _handleSort = sortValue => {
    // Don't do anything if we are choosing the first, empty, option
    if (sortValue === "") {
      return
    }

    const sortOptions = {
      htl: (a, b) => b - a,
      lth: (a, b) => a - b
    }

    const sortedResults = [...searchResults].sort(
      (firstEl, secondEl) => sortOptions[sortValue](firstEl.hashtag.media_count, secondEl.hashtag.media_count)
    )

    updateSearchResults(sortedResults)
  }

  /**
   * Method for handling the selection of a new tag
   */
  const _handleSelectTag = tagName => {
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
    selectedTagsRef.current.blur()
  }

  return (
    <div id="home">
      <Head>
        <title key="title">ironhash | Research Instagram Hashtags</title>
      </Head>
      
      <Header />

      <main id="content" className="content">
        <Toolbar
          _handleSearch={_handleSearch}
          searchQuery={searchQuery}
          updateSearchQuery={updateSearchQuery}
          _handleSort={_handleSort}
        />
  
        <Sidebar
          _copyToClipboard={_copyToClipboard}
          _handleDeselectTag={_handleDeselectTag}
          selectedTags={selectedTags}
          selectedTagsRef={selectedTagsRef}
        />
  
        {searchResults.length > 0 && (
          <SearchResults
            _handleSelectTag={_handleSelectTag}
            results={searchResults}
            selectedTags={selectedTags}
          />
        )}

        <div className="clearfix"></div>
      </main>

      <footer className="footer">
        <p>
          An <a href="http://blogofiron.com" target="_blank" rel="noreferrer"><strong>Ironclad</strong></a> Website
        </p>
      </footer>
    </div>
  )
}

export default HomePage
