import React from "react";
import { useState, useEffect } from "react";
import { get } from "../../utils/api_calls/handle_api_calls";
import DeleteButton from "./DeleteButton";
import UnarchiveButton from "./UnarchiveButton";
import {
  ArticleCard,
  ArticleListContainer,
} from "../../styled_components/Article";

const ArchivedArticles = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    get("/articles/get_archived")
      .then((response) => {
        if (response) {
          setArticles(response.data);
        }
      })
      .catch((error) => {
        console.log("Error while fetching archived articles: ", error);
      });
  }, []);

  return (
    <ArticleListContainer>
      <h1>Archived Articles</h1>
      {articles && articles.length > 0 ? (
        <ul>
          {articles.map((article) => (
            <li key={article.id}>
              <ArticleCard>{article.title}</ArticleCard>
              <div style={{ display: "flex", marginLeft: "70px", marginTop: "10px" }}>
                <DeleteButton articleId={article.id} />
                <UnarchiveButton articleId={article.id} />
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>No archived articles.</p>
      )}
    </ArticleListContainer>
  );
};

export default ArchivedArticles;
