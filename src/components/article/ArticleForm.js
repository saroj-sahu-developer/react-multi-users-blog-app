import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function ArticleForm({ article }) {
  console.log('ArticleForm rendered.')
  // const [inputs, setInputs] = useState({
  //   title: article.title || '',
  //   body: article.body || ''
  // });  
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

    try {
      if (article) {
        // If editing an existing article
        await axios.put(`http://127.0.0.1:3000/articles/${article.id}`, inputs);
        navigate(`/articles/${article.id}`);
      } else {
        // If creating a new article
        await axios.post('http://127.0.0.1:3000/articles', inputs)
        .then(response => {
          const newArticle = response.data;
          navigate(`/articles/${newArticle.id}`);
        });
      }  
    } catch (error) {
      console.log('Error submitting article:', error);
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

