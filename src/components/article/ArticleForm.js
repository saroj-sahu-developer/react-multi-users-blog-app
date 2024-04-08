import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { post, put } from "../../utils/api_calls/handle_api_calls";

function ArticleForm({ article }) {
  console.log('ArticleForm rendered.')  
  const [inputs, setInputs] = useState({});

  useEffect(() => {
    if(article) {
      setInputs(article);
    }
  }, [article]);  

  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    if (article) {
      // If editing an existing article
      put(`/articles/${article.id}`, inputs)
      .then( () => {
        navigate(`/articles/${article.id}`);
      })
      .catch(error => {
        console.log("Error while updating the article: ", error);
      });
    } else {
      // If creating a new article
      post('/articles', inputs)
      .then(response => {
        const newArticle = response.data;
        navigate(`/articles/${newArticle.id}`);
      })
      .catch(error => {
        console.log("Error while creating the article: ", error);
      });
    }  
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={inputs.title || ''}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Body:
          <textarea
            name="body"
            value={inputs.body || ''}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <input type="submit" />
      </div>
    </form>
  );
}

export default ArticleForm;

// const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: ${props => props.$color || "#BF4F74"};
// `;

