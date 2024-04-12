import styled from 'styled-components';

export const TopBar = styled.div`
  background-color: #334;
  color: #fff;
  padding: 15px 20px;
`;

export const ContentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Greeting = styled.div`
  font-size: 16px;
`;

export const Navigation = styled.nav`
  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      display: inline;
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }

    a {
      color: #fff;
      text-decoration: none;
      transition: color 0.3s ease;

      &:hover {
        color: #ffcc00;
      }
    }
  }
`;