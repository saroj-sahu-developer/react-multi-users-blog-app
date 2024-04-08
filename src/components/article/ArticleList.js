import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import { get } from '../../utils/api_calls/handle_api_calls';

function ArticleList() {
  console.log("component ArticleList rendered.");
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    get("/articles")
      .then((response) => {
        setArticles(response.data);
      })
      .catch((error) => {
        console.log("Error while fetching articles: ", error);
      })
  }, []);

  return (
    <div>
      <h1>Articles</h1>
      {articles && articles.length>0 ?
      (<ul>
        {articles.map(article => (
          <li key={article.id}>
            <Link to={`/articles/${article.id}`}>{article.title}</Link>
          </li>
        ))}
      </ul>)
      :
      (<p>No article found.</p>)
      }
    </div>
  );
}

export default ArticleList;
