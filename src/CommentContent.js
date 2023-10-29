import ArticleComment from "./ArticleComment";

function CommentContent({ article }) {
  return (
    <span>
      <span className='Story_separator'>|</span>
      <span>
        <a href={`https://news.ycombinator.com/item?id=${article.parent_id}`}>
          <span>parent</span>
        </a>
      </span>
      <span className='Story_separator'>|</span>
      <span>
        <span>on: </span>
        <a href={`https://news.ycombinator.com/item?id=${article.story_id}`}>
          <span>{article.story_title}</span>
        </a>
      </span>
      <div>
        <ArticleComment text={article.comment_text} />
      </div>
    </span>
  );
}

export default CommentContent;
