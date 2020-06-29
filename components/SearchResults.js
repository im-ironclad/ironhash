// Import packages
import React from 'react'

const SearchResults = ({ _handleSelectTag, results }) => {
  const tagsEndpoint = "https://www.instagram.com/explore/tags/"

  return (
    <section id="search-results" className="search-results">
      {results.map(result => (
        <article key={result.hashtag.id} className="search-results__item">
          <p
            className="search-results__item__name"
          >
            <a
              href={tagsEndpoint + result.hashtag.name}
              target="_blank"
              rel="noreferrer"
            >
              #{result.hashtag.name}
            </a>
          </p>

          <p
            className="search-results__item__subtitle"
          >
            {result.hashtag.search_result_subtitle}
          </p>

          <button
            className="search-results__item__btn"
            onClick={() => _handleSelectTag(`#${result.hashtag.name}`)}
          >
            Select tag
          </button>
        </article>
      ))}
    </section>
  )
}

export default SearchResults
