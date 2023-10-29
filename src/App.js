import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import SearchHeader from './SearchHeader';
import SearchFilters from './SearchFilters';
import Article from './Article';
import TimeAgo from 'javascript-time-ago';

import en from 'javascript-time-ago/locale/en.json';

TimeAgo.addDefaultLocale(en);

function App() {
  const dateInSec = () => {
    return Math.round(Date.now() / 1000);
  };

  const [articles, setArticles] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSearch, setSelectedSearch] = useState('&tags=story');
  const [selectedBy, setSelectedBy] = useState('_by_date');
  const [selectedFor, setSelectedFor] = useState(86400);

  useEffect(() => {
    const query = searchQuery ? `query=${searchQuery}` : '';
    const selectedForConcat = selectedFor
      ? `&numericFilters=created_at_i>${
          dateInSec() - selectedFor
        },created_at_i<${dateInSec()}`
      : '';
    (async () => {
      const res = await axios.get(
        `http://hn.algolia.com/api/v1/search${selectedBy}?${query}${selectedSearch}${selectedForConcat}&hitsPerPage=50`
      );
      console.log(res);
      setArticles(res.data.hits);
    })();
  }, [searchQuery, selectedSearch, selectedBy, selectedFor]);

  return (
    <div className='default App'>
      <div className='container'>
        <SearchHeader props={{ setSearchQuery }}></SearchHeader>
        <SearchFilters
          props={{
            selectedSearch,
            setSelectedSearch,
            selectedBy,
            setSelectedBy,
            selectedFor,
            setSelectedFor,
          }}
        ></SearchFilters>
        <section className='SearchResults'>
          <div className='SearchResults_container'>
            {articles.map((article, i) => (
              <div article={article} key={i}>
                <Article article={{ ...article }} />
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
