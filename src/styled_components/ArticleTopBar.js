import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuBar = styled.nav`
  margin-bottom: 20px;
  background-color: #334;
  color: #fff;
  padding: 15px 0;
`;

export const MenuList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const MenuItem = styled.li`
  margin: 0 15px;
`;

export const MenuLink = styled(Link)`
  color: #fff;
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: #ffcc00;
  }
`;
