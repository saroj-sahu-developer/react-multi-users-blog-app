import styled from "styled-components";

export const Title = styled.h5`
  font-size: 24px;
  font-weight: bold;
  color: #333;
  margin-bottom: 10px;
`;

export const Body = styled.p`
  font-size: 16px;
  color: #555;
  line-height: 1.6;
`;

export const StyledArticle = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 20px;
  margin-left: 200px;
  margin-right: 200px;
`;

export const Heading = styled.h3``;

export const ArticleCard = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1); /* Add shadow effect */
  background-color: #f9f9f9;
  padding: 20px;
  width: 300px;

  display: flex;
  flex-direction: column;
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  color: black;
  overflow: hidden; /* Prevent content overflow */
`;

export const ArticleListContainer = styled.div`
  h1 {
    margin-bottom: 10px;
  }

  ul {
    list-style-type: none;
    padding: 0;
    display: flex;
    flex-wrap: wrap;
  }

  li {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  margin-left: 30px;
`;
