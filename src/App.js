import "./App.css";
import ArticleList from "./components/article/ArticleList";
import ArticleItem from "./components/article/ArticleItem";
import NewArticle from "./components/article/NewArticle";
import EditArticle from "./components/article/EditArticle";
import RegisterForm from "./components/user/RegisterForm";
import LoginForm from "./components/session/LoginForm";
import ArchivedArticles from "./components/article/ArchivedArticles";
import MyArticles from "./components/article/MyArticles";
import ArticleTopBar from "./components/article/ArticleTopBar";
import { Routes, Route } from "react-router-dom";
import { isSignedIn } from "./utils/current_user_data";
import HomePage from "./components/HomePage";
import PageNotFound from "./components/PageNotFound";

function App() {
  if (
    !isSignedIn() &&
    !["/user/login", "/user/register", "/home"].includes(
      window.location.pathname
    )
  ) {
    window.location.href = "/user/login";
  }

  return (
    <Routes>
      {isSignedIn() && (
        <Route path="articles" element={<ArticleTopBar />}>
          <Route index element={<ArticleList />} />
          <Route path="archived" element={<ArchivedArticles />} />
          <Route path=":articleId" element={<ArticleItem />} />
          <Route path="new" element={<NewArticle />} />
          <Route path=":articleId/edit" element={<EditArticle />} />
          <Route path="my-articles" element={<MyArticles />} />
        </Route>
      )}

      <Route path="user">
        <Route path="register" element={<RegisterForm />} />
        <Route path="login" element={<LoginForm />} />
      </Route>

      <Route path="home" element={<HomePage />} />

      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
}

export default App;
