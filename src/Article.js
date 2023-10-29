import ArticleTime from "./ArticleTime";
import ArticleComment from "./ArticleComment";

function Article({ article }) {

  return (
    <article>
      <div className='Story_container'>
        <div className='Story_data'>
          <div className='Story_title'>
            <a href={article.url}>
              <span>{article.title}</span>
            </a>
            <a
              href={article.url}
              target='_blank'
              className='Story_link'
            >
              ({article.url})
            </a>
          </div>
          <div className='Story_meta'>
            <span>
              <a href={`https://news.ycombinator.com/item?id=${article.story_id}`}>
                {article.points} points
              </a>
            </span>
            <span className='Story_separator'>|</span>
            <span>
              <a href={`https://news.ycombinator.com/user?id=${article.author}`}>
                <span>{article.author}</span>
              </a>
            </span>
            <span className='Story_separator'>|</span>
            <span>
              <a href={`https://news.ycombinator.com/item?id=${article.story_id}`}>
                <ArticleTime date={ article.created_at }></ArticleTime>
              </a>
            </span>
            <span className='Story_separator'>|</span>
            <span>
              <a href={`https://news.ycombinator.com/item?id=${article.story_id}`}>
                {article.num_comments} comments
              </a>
            </span>
            <ArticleComment article={{ ...article }}></ArticleComment>
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;
