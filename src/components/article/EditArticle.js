import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { get } from '../../utils/api_calls/handle_api_calls';
import ArticleForm from './ArticleForm';
import { Heading } from '../../styled_components/Article';

const EditArticle = () => {
  const [article, setArticle] = useState({});
  const params = useParams();
  const articleId = params.articleId;

  useEffect(() => {
    get(`/articles/${articleId}`)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((error) => {
        console.error("Error fetching article:", error);
      });
  }, [articleId]);
  
  return (
    <div className='container-fluid'>
    <div className='row'>
      <div className='col offset-4'>
        <Heading>Edit Article</Heading>
      </div>
    </div>
    <div className='row'>
      <div className='col offset-1'>
        <ArticleForm article={article}/>
      </div>
    </div>
  </div>
  )
}

export default EditArticle;
