import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';

function ArticleItem() {
  const [article, setArticle] = useState(null);

  const params = useParams();
  const articleId = params.articleId;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/articles/${articleId}`)
      .then(response => {
        console.log(response);
        setArticle(response.data);
      })
      .catch(error => {
        console.log(error);
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
