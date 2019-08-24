import React from 'react';
import shortid from 'shortid';
import Video from './Video';
import Article from './Article';
import withHighlight from './withHighlight';

const VideoHighlighted = withHighlight(Video);
const ArticleHighlighted = withHighlight(Article);

function List(props) {
  return props.list.map(item => {
    switch (item.type) {
      case 'video':
        return <VideoHighlighted {...item} key={shortid.generate()} />;

      case 'article':
        return <ArticleHighlighted {...item} key={shortid.generate()} />;
    }
  });
}

export default List;
