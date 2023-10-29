import SelectedSearch from './SelectedSearch';
import SelectedBy from './SelectedBy';
import SelectedFor from './SelectedFor';

function SearchFilters({ props }) {
  return (
    <div className='SearchFilters container'>
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
          50 results (0.002 seconds)
        </p>
        <div className='SocialShare'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='18'
            height='18'
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
          </svg>
        </div>
      </div>
    </div>
  );
}

export default SearchFilters;
