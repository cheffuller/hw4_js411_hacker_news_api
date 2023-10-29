import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';

function ArticleComment({ text }) {
  if (text) {
    return (
      <div className='Story_comment'>
        <span>
          <Markdown rehypePlugins={[rehypeRaw]} children={text} />
        </span>
      </div>
    );
  }

  return null;
}

export default ArticleComment;
