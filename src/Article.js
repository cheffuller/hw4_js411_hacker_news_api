import ArticleTime from './ArticleTime';
import ArticleComment from './ArticleComment';
import CommentContent from './CommentContent';

function Article({ article }) {
  const DisplayArticleUrl = () => {
    return article.url ? `(${article.url})` : null;
  };

  const DisplayStoryTitle = () => {
    if (article.title) {
      return (
        <div className='Story_title'>
          <a href={article.url}>
            <span>{article.title}</span>
          </a>
          <a href={article.url} target='_blank' rel="noreferrer" className='Story_link'>
            <DisplayArticleUrl />
          </a>
        </div>
      );
    }
  };

  const DisplayArticlePoints = () => {
    if (article.points) {
      return (
        <span>
          <span>
            <a
              href={`https://news.ycombinator.com/item?id=${article.story_id}`}
            >
              {article.points} points
            </a>
          </span>
          <span className='Story_separator'>|</span>
        </span>
      );
    }
    return null;
  };

  const DisplayCommentContent = ({ article }) => {
    if (article.comment_text) {
      return <CommentContent article={{ ...article }} />;
    }
    return null;
  };

  return (
    <article>
      <div className='Story_container'>
        <div className='Story_data'>
          <DisplayStoryTitle />
          <div className='Story_meta'>
            <DisplayArticlePoints />
            <span>
              <a
                href={`https://news.ycombinator.com/user?id=${article.author}`}
              >
                <span>{article.author}</span>
              </a>
            </span>
            <span className='Story_separator'>|</span>
            <span>
              <a
                href={`https://news.ycombinator.com/item?id=${article.story_id}`}
              >
                <ArticleTime date={article.created_at} />
              </a>
            </span>
            <span className='Story_separator'>|</span>
            <span>
              <a
                href={`https://news.ycombinator.com/item?id=${article.story_id}`}
              >
                {article.num_comments ? article.num_comments : 0} comments
              </a>
            </span>
            <ArticleComment text={article.story_text} />
            <DisplayCommentContent article={{ ...article }} />
          </div>
        </div>
      </div>
    </article>
  );
}

export default Article;
