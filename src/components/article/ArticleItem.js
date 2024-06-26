import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DeleteButton from "./DeleteButton";
import EditButton from "./EditButton";
import { get, put } from "../../utils/api_calls/handle_api_calls";
import MakePrivateButton from "./MakePrivateButton";
import MakePublicButton from "./MakePublicButton";
import ArchiveButton from "./ArchiveButton";
import { useNavigate } from "react-router-dom";
import { currentUser } from "../../utils/current_user_data";
import AddComment from "../comment/AddComment";
import CommentsList from "../comment/CommentsList";
import { Title, Body, StyledArticle } from "../../styled_components/Article.js";

function ArticleItem() {
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);

  const navigate = useNavigate();

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

    get(`/articles/${articleId}/comments`)
      .then((response) => {
        if (response) {
          setComments(response.data);
        }
      })
      .catch((error) => {
        console.log("Error while fetching the comments: ", error);
      });
  }, [articleId]);

  const changeArticleStatus = async (newStatus) => {
    const inputs = { status: newStatus };

    put(`/articles/${article.id}`, inputs)
      .then((response) => {
        const updatedArticle = response.data;
        setArticle(updatedArticle);
        if (updatedArticle.status === "archived") {
          navigate("/articles");
        }
      })
      .catch((error) => {
        console.log("Error updating the status of article: ", error);
      });
  };

  const addNewComment = (lastAddedComment) => {
    let newCommentslist = [...comments];
    newCommentslist.unshift(lastAddedComment);
    setComments(newCommentslist);
  };

  return (
    <div>
      {article && (
        <>
          <StyledArticle>
            <Title>{article.title}</Title>
            <Body>{article.body}</Body>
          </StyledArticle>
          {article.user_id === currentUser().id && (
            <div style={{ display: 'flex', marginLeft: '200px' }}>
              <DeleteButton articleId={article.id} />
              <EditButton articleId={article.id} />
              {article.status === "public" && (
                <MakePrivateButton
                  handleClick={() => changeArticleStatus("private")}
                />
              )}
              {article.status === "private" && (
                <MakePublicButton
                  handleClick={() => changeArticleStatus("public")}
                />
              )}
              <ArchiveButton
                handleClick={() => changeArticleStatus("archived")}
              />
            </div>
          )}
          <AddComment articleId={article.id} onCommentAdded={addNewComment} />
          <CommentsList comments={comments} />
        </>
      )}
    </div>
  );
}

export default ArticleItem;
