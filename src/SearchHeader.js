function SearchHeader({ props }) {
    return (
        <header className='SearchHeader container'>
        <div className='SearchHeader_search'>
          <span className='SearchHeader_logo'>
            <a href='https://news.ycombinator.com'>
              <img src='https://hn.algolia.com/public/899d76bbc312122ee66aaaff7f933d13.png' />
            </a>
            <a href='https://hn.algolia.com/'>
              <div className='SearchHeader_label'>
                Search
                <br />
                Hacker News
              </div>
            </a>
          </span>
          <div className='SearchHeader_container'>
            <span className='SearchIcon'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='11' cy='11' r='8'></circle>
                <line x1='21' y1='21' x2='16.65' y2='16.65'></line>
              </svg>
            </span>
            <input
              type='search'
              onChange={(e) => props.setSearchQuery(e.target.value)}
              placeholder='Search stories by title, url or author'
              className='SearchInput'
            />
            <div className='PoweredBy'>
              <span>Search By</span>
              <a
                href='https://www.algolia.com/developers/?utm_source=hackernews&utm_medium=referral'
                title='Realtime Search Engine'
                target='_blank'
              >
                <img
                  src='https://hn.algolia.com/public/38a9c67b12016b52267071c530ff2e78.svg'
                  alt='Algolia Logo'
                />
              </a>
            </div>
          </div>
          <div className='SearchHeader_settings'>
            <a href='https://hn.algolia.com/settings'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              >
                <circle cx='12' cy='12' r='3'></circle>
                <path d='M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z'></path>
              </svg>
            </a>
          </div>
        </div>
      </header>
    )
}

export default SearchHeader;