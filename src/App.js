import "./App.css";
import ArticleList from "./components/article/ArticleList";
import ArticleItem from "./components/article/ArticleItem";
import NewArticle  from "./components/article/NewArticle";
import EditArticle from "./components/article/EditArticle";
import RegisterForm from "./components/user/RegisterForm";
import LoginForm from "./components/session/LoginForm";
import ArchivedArticles from "./components/article/ArchivedArticles";
import MyArticles from "./components/article/MyArticles";
import { ArticleSidebar } from "./components/article/ArticleSidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      {/* { !isSignedin && <Route path="*" element={<LoginForm />} /> } */}
      <Routes>
        <Route path="articles" element={<ArticleSidebar />}>
          <Route index element={<ArticleList />} />
          <Route path="archived" element={<ArchivedArticles />} />
          <Route path=":articleId" element={<ArticleItem />} />
          <Route path="new" element={<NewArticle />} />
          <Route path=":articleId/edit" element={<EditArticle />} />
          <Route path="your-articles" element={<MyArticles />} />
        </Route>
        <Route path="user">
          <Route path="register" element={<RegisterForm />} />
          <Route path="login" element={<LoginForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
