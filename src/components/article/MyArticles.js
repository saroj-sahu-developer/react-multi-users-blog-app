import React, {useEffect, useState} from 'react'
import { get } from '../../utils/api_calls/handle_api_calls';
import { Link } from 'react-router-dom';
import {
  ArticleCard,
  ArticleListContainer,
} from "../../styled_components/Article";


const MyArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    get('/articles/current_users_articles')
    .then(response => {
      if(response) {
        setArticles(response.data);
      }
    })
    .catch(error => {
      console.log("Error fetching my articles: ", error);
    })
  }, []);

  return (
    <ArticleListContainer>
      <h1>My Articles</h1>
      {articles && articles.length > 0 ? (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <Link to={`/articles/${article.id}`}>
                <ArticleCard>{article.title}</ArticleCard>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No articles found.</p>
      )}
    </ArticleListContainer>
  );
}

export default MyArticles;
