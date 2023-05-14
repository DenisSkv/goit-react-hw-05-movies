import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const PageHeader = styled.header`
  display: flex;
  color: brown;
  /* border-bottom: 1px #f4f4f4 solid; */
  font-size: 24px;
  font-weight: 600;
  letter-spacing: 10px;
  background-color: #000000;
  border-end-end-radius: 20px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
      0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const StyledLink = styled(NavLink)`
  margin-left: 30px;
  padding: 20px;
  text-decoration: none;
  color: #ffffff;

  &.active {
    color: #ff0000;
  }
`;
