import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { getArticle } from '../../utils/handle_api_calls';

function ArticleItem() {
  const [article, setArticle] = useState(null);

  const params = useParams();
  const articleId = params.articleId;

  useEffect(() => {
    getArticle(articleId)
    .then(response => {
      setArticle(response);
    })
    .catch(error => {
      console.error('Error fetching article:', error);
    });
  }, [articleId]);

  return (
    <div>
      {article && (
        <>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          <DeleteButton articleId={article.id} />
          <EditButton articleId={article.id} />
        </>
      )}
    </div>
  );
}

export default ArticleItem;
