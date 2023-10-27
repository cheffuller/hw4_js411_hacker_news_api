import './App.css';
import { useState } from 'react';
import axios from 'axios';
import SearchHeader from './SearchHeader';
import SearchFilters from './SearchFilters';
import Article from './Article';

function App() {
  const [articles, setArticles] = useState([]);

  const updateArticles = async (e) => {
    console.log('e.target.value', e.target.value);
    const res = await axios.get(
      `http://hn.algolia.com/api/v1/search?query=${e.target.value}`
    );
    setArticles(res.data.hits);
  };

  return (
    <div className='App'>
      <SearchHeader updateArticles={updateArticles}></SearchHeader>
      <SearchFilters></SearchFilters>
      <div className='container'>
        {console.log(articles)}
        {articles.map((article, i) => (
          <div article={article} key={i}>
            <Article article={{ ...article }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
