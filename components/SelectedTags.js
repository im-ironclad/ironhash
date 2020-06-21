// Import Packages
import React from 'react'

const SelectedTags = ({
  _copyToClipboard,
  selectedTags,
  selectedTagsRef
}) => {
  return (
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
          className="sidebar__tags__hidden-val visually-hidden"
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
  )
}

export default SelectedTags
