/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const NJNavGrid = styled.div`
  grid-column: 1/5;
  grid-row: 3/5;

  display: grid;
  grid-template-columns: ${({ length }) => `repeat(${length}, auto) minmax(10px, 5fr)`};
  grid-column-gap: 10px;
  place-items: center;

  background-color: white;
  border-bottom: 3px solid #3E522D;
  height: 100%;
  padding: 0 25px;
  width: 100%;
`;

const NJNavLink = styled(NavLink)`
  font-weight: 600;
  height: 100%
  width: 100%;
  text-align: center;
  padding: 0 5px;
  line-height: 60px;
  text-decoration: none;
  transition: color 0.4s ease 0.05s;
  &:link {
    color: black;
  }

  &:visited {
    color: black;
  }
  &:hover {
    color: #582399;
    /* color: #b0cf44; */
    /* color: #c2e645; */
    /* color: #bfe639; */
    /* color: #b5db37; */
    cursor: pointer;
  }
  &:active {
    text-decoration: ${({ underline }) => underline && 'underline solid black'};
  }

  /* @media (max-width: 990px) {
    display: none;
  } */
`;

const NJNav = ({ navLinkList }) => {
  let { path, url } = useRouteMatch();

  return (
    <NJNavGrid length={navLinkList.length}>
      {navLinkList.map((navLink, index) => (
        <NJNavLink key={index} to={`${path}/${navLink.urlText}`} activeStyle={{textDecoration: "underline solid black"}}>
          {navLink.linkText}
        </NJNavLink>
      ))}
      <div />
    </NJNavGrid>
  );
}

export default NJNav;
