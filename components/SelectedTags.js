// Import Packages
import React from 'react'

// Import Components
import IconSVG from './IconSVG'

/**
 * @component SelectedTags
 */
const SelectedTags = ({
  _copyToClipboard,
  _handleDeselectTag,
  selectedTags,
  selectedTagsRef
}) => {
  return (
    <aside className="sidebar">
      <p className="sidebar__label">Selected Hashtags ({selectedTags.length}):</p>

      <button
        className="sidebar__copy-btn"
        onClick={_copyToClipboard}
      >
        <IconSVG iconName="copy" /> Copy to Clipboard
      </button>

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

export default SelectedTags
