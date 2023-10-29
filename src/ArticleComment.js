import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function ArticleComment({ article }) {
  if (article.story_text) {
    return (
      <div className='Story_comment'>
        <span>
          <Markdown rehypePlugins={[rehypeRaw]} children={article.story_text}>
            {/* {article.story_text} */}
          </Markdown>
        </span>
      </div>
    );
  }

  return null;
}

export default ArticleComment;
