import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import DeleteButton from './DeleteButton';
import EditButton from './EditButton';
import { getArticle, updateArticle } from '../../utils/handle_api_calls';
import MakePrivateButton from './MakePrivateButton';
import MakePublicButton from './MakePublicButton';
import ArchiveButton from './ArchiveButton';
import { useNavigate } from 'react-router-dom';
import { currentUser } from '../../utils/get_values_from_local_storage';
import AddComment from '../comment/AddComment';
import CommentsList from '../comment/CommentsList';


function ArticleItem() {
  const [article, setArticle] = useState(null);

  const navigate = useNavigate();

  const params = useParams();
  const articleId = params.articleId;

  useEffect(() => {
    getArticle(articleId)
    .then(response => {
      setArticle(response);
    })
    .catch(error => {
      console.error('Error fetching article:', error);
    });
  }, [articleId]);

  const changeArticleStatus = async(newStatus) => {
    const inputs = {status: newStatus};
    updateArticle(article.id, inputs)
    .then((updatedArticle) => {
      setArticle(updatedArticle);
      if(updatedArticle.status === 'archived'){
        navigate("/articles");
      }
    });
  }

  const renderArticleItem = () => {
    window.location.reload();
  }

  return (
    <div>
      {article && (
        <>
          <h2>{article.title}</h2>
          <p>{article.body}</p>
          {article.user_id === currentUser.id && (
            <>
              <DeleteButton articleId={article.id} />
              <EditButton articleId={article.id} />
              {article.status === 'public' && <MakePrivateButton handleClick={() => changeArticleStatus('private')} />}
              {article.status === 'private' && <MakePublicButton handleClick={() => changeArticleStatus('public')} />}
              <ArchiveButton handleClick={() => changeArticleStatus('archived')} />
            </>
          )}
          <AddComment articleId={article.id} onCommentAdded={renderArticleItem} />
          <CommentsList articleId={article.id} />
        </>
      )}
    </div>
  );
  
}

export default ArticleItem;
