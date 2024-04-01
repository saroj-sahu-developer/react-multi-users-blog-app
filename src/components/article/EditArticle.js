import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ArticleForm from './ArticleForm';

const EditArticle = () => {
  console.log('EditArticle rendered.');
  const [article, setArticle] = useState({});
  const params = useParams();
  const articleId = params.articleId;

  useEffect(() => {
    axios
      .get(`http://127.0.0.1:3000/articles/${articleId}`)
      .then(response => {
        // console.log(response);
        setArticle(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [articleId]);
  
  return (
    <div>
      <h2>Edit Article</h2>
      <ArticleForm article={article} />
    </div>
  )
}

export default EditArticle;
