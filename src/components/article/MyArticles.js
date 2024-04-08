import React, {useEffect, useState} from 'react'
import { getMyArticles } from '../../utils/handle_api_calls';
import { Link } from 'react-router-dom';
import NewButton from './NewButton';


const MyArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getMyArticles()
    .then(response => {
      if(response) {
        setArticles(response);
      }
    });
  }, []);

  return (
    <div>
      <h1>Your articles</h1>
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
      <NewButton />
    </div>
  );
}

export default MyArticles;
