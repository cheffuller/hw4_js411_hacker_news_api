import SelectedSearch from "./SelectedSearch";
import SelectedBy from "./SelectedBy";
import SelectedFor from "./SelectedFor";

function SearchFilters({props}) {
  return (
    <div className='SearchFilters container'>
      <button className='SearchFilters_menuButton'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='14'
          height='14'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='3' y1='12' x2='21' y2='12'></line>
          <line x1='3' y1='6' x2='21' y2='6'></line>
          <line x1='3' y1='18' x2='21' y2='18'></line>
        </svg>
      </button>
      <div className='SearchFilters_filters'>
        <span className='SearchFilters_filterContainer'>
          <span className='SearchFilters_text'>Search</span>
          <SelectedSearch props={{ ...props }}></SelectedSearch>
        </span>
        <span className='SearchFilters_filterContainer'>
          <span className='SearchFilters_text'>by</span>
          <SelectedBy props={{ ...props }}></SelectedBy>
        </span>
        <span className='SearchFilters_filterContainer'>
          <span className='SearchFilters_text'>for</span>
          <SelectedFor props={{ ...props }}></SelectedFor>
        </span>
      </div>
      <div className='SearchFilters_meta'>
        <p className='SearchFilters_engineProcessingTime'>
          0 results (0.002 seconds)
        </p>
        <div className='SocialShare'>
          {/* <div
            className='Dropdown'
            role='combobox'
            aria-expanded='false'
            aria-haspopup='listbox'
            aria-labelledby='downshift-3-label'
          >
            <label
              htmlFor='downshift-3-input'
              id='downshift-3-label'
              tabIndex='0'
              className='Dropdown_label'
            > */}
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
                <circle cx='18' cy='5' r='3'></circle>
                <circle cx='6' cy='12' r='3'></circle>
                <circle cx='18' cy='19' r='3'></circle>
                <line x1='8.59' y1='13.51' x2='15.42' y2='17.49'></line>
                <line x1='15.41' y1='6.51' x2='8.59' y2='10.49'></line>
              </svg>{' '}
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
                <polyline points='6 9 12 15 18 9'></polyline>
              </svg>
            {/* </label>
             <ul
              className='Dropdown_list'
              role='listbox'
              aria-labelledby='downshift-3-label'
              id='downshift-3-menu'
              style='position: fixed; left: 1409.65px; top: 92.5px; z-index: 50;'
            ></ul>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default SearchFilters;
