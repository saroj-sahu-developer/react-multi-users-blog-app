import React from 'react'
import { useState, useEffect } from 'react';
import { getArchivedArticles } from '../../utils/handle_api_calls';
import DeleteButton from './DeleteButton';
import UnarchiveButton from './UnarchiveButton';

const ArchivedArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArchivedArticles()
    .then(response => {
      if(response) {
        setArticles(response);
      }
    });
  }, []);

  return (
    <div>
      <h1>Archived articles</h1>
      { articles && articles.length > 0 ?
        (<ul>
          {articles.map(article => (
            <li key={article.id}>
              {article.title}
              <DeleteButton articleId={article.id} />
              <UnarchiveButton articleId={article.id} />
            </li>
          ))}
        </ul>)
        :
        (<p>No archived articles.</p>)
      }
    </div>
  );
}

export default ArchivedArticles;
