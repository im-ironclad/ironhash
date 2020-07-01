// Import Packages
import React from 'react'

// Import Components
import IconSVG from './IconSVG'

/**
 * @component Sidebar
 */
const Sidebar = ({
  _copyToClipboard,
  _handleDeselectTag,
  selectedTags,
  selectedTagsRef
}) => {
  const copyMsg = React.createRef()
  // Create a variable and two functions to help with the timing of the copy message
  let timer
  const setTimer = () => {
    timer = setTimeout(() => {
      copyMsg.current.classList.remove('visible')
    }, 1500)
  }
  const showCopyMsg = () => {
    clearTimeout(timer)
    copyMsg.current.classList.add('visible')
    setTimer()
  }

  return (
    <aside className="sidebar">
      <p className="sidebar__label">Selected Hashtags ({selectedTags.length}):</p>

      <div className="sidebar__copy">
        <button
          className="sidebar__copy__btn"
          onClick={() => {
            showCopyMsg()
            _copyToClipboard()
          }}
        >
          <IconSVG iconName="copy" /> Copy to Clipboard
        </button>
  
        <p className="sidebar__copy__msg" ref={copyMsg}>
          Copied!
        </p>
      </div>

      <textarea
        className="sidebar__hidden-val visually-hidden"
        aria-hidden="true"
        ref={selectedTagsRef}
        defaultValue={selectedTags.join(" ")}
        tabIndex="-1"
      />

      {/* List of selected tags */}
      {selectedTags.length > 0 && (
        <section className="sidebar__selected-tags">
          <ul className="sidebar__selected-tags__list">
            {selectedTags.map(tag => (
              <li key={tag} className="sidebar__selected-tags__list__item">
                <p className="sidebar__selected-tags__list__item__tag">{tag}</p>

                <button
                  aria-label={`Remove the hashtag: ${tag}`}
                  title={`Remove the hashtag: ${tag}`}
                  className="sidebar__selected-tags__list__item__btn"
                  onClick={() => _handleDeselectTag(tag)}
                />
              </li>
            ))}
          </ul>
        </section>
      )}
    </aside>
  )
}

export default Sidebar
