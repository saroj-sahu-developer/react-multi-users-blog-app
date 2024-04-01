import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; 
import NewButton from './NewButton';

function ArticleList() {
  console.log("component ArticleList rendered.");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    axios
      .get('http://127.0.0.1:3000/articles')
      .then(response => {
        console.log(response);
        setArticles(response.data);
      })
      .catch(error => {
        console.log(error);
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
