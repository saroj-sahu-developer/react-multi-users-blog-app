import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { post, put } from "../../utils/api_calls/handle_api_calls";
import { StyledForm, FormLabel, FormInput, FormTextarea, FormSubmitButton } from "../../styled_components/StyledForm";

function ArticleForm({ article }) {
  console.log('ArticleForm rendered.')  
  const [inputs, setInputs] = useState({});
  const [error, setError] = useState({});

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
    
    if(!validateForm()) {
      return;
    }

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

  const validateForm = () => {
    const errors = {};
  
    if (!inputs.title.trim()) {
      errors.title = 'Title is required';
    } else if (inputs.title > 100) {
      errors.title = 'Title should be maximum 100 characters length.';
    }

    if (!inputs.body.trim()) {
      errors.body = 'Body is required';
    } else if (inputs.body > 200) {
      errors.body = 'Body should be maximum 200 characters length.';
    }

    setError(errors);

    return Object.keys(errors).length === 0;
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <div>
        <FormLabel>
          Title:
          <FormInput
            type="text"
            name="title"
            value={inputs.title || ''}
            onChange={handleChange}
          />
        </FormLabel>
        {error.title && <div>{error.title}</div>}
      </div>

      <div>
        <FormLabel>
          Body:
          <FormTextarea
            name="body"
            value={inputs.body || ''}
            onChange={handleChange}
          />
        </FormLabel>
        {error.body && <div>{error.body}</div>}
      </div>

      <div>
        <FormSubmitButton type="submit">Save</FormSubmitButton>
      </div>
    </StyledForm>
  );
}

export default ArticleForm;
