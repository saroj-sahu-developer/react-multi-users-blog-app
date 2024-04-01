import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import NewButton from './NewButton';
import { getAllArticles } from '../../utils/handle_api_calls';

function ArticleList() {
  console.log("component ArticleList rendered.");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getAllArticles()
    .then(response => {
      if(response) {
        setArticles(response);
      }
    })
    .catch(error => {
      console.error('Error fetching article:', error);
    });
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>
      <NewButton />
    </div>
  );
}

export default ArticleList;
