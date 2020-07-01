// Import packages
import React from 'react'

// Import Components
import IconSVG from './IconSVG'

/**
 * Search results from Instagram query
 */
const SearchResults = ({ _handleSelectTag, results, selectedTags }) => {
  const tagsEndpoint = "https://www.instagram.com/explore/tags/"
  let btnClasses

  return (
    <section id="search-results" className="search-results">
      {results.map(result => {
        if (selectedTags.includes(`#${result.hashtag.name}`)) {
          btnClasses = "search-results__item__header__btn selected"
        } else {
          btnClasses = "search-results__item__header__btn"
        }

        return (
          <article key={result.hashtag.id} className="search-results__item">
            <header className="search-results__item__header">
              <p
                className="search-results__item__header__name"
              >
                <a
                  href={tagsEndpoint + result.hashtag.name}
                  target="_blank"
                  rel="noreferrer"
                >
                  #{result.hashtag.name}
                </a>
              </p>

              <button
                className={btnClasses}
                onClick={() => _handleSelectTag(`#${result.hashtag.name}`)}
              >
                <IconSVG iconName="add" />
              </button>
            </header>

            <p
              className="search-results__item__subtitle"
            >
              {result.hashtag.search_result_subtitle}
            </p>
          </article>
        )
      })}
    </section>
  )
}

export default SearchResults
