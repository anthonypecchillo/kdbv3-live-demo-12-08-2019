/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LawListItem from './LawListItem';

const DUMMY_LAW_DATA = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
  { id: 11 },
  { id: 12 },
  { id: 13 },
  { id: 14 },
  { id: 15 },
  { id: 16 },
  { id: 17 },
  { id: 18 },
  { id: 19 },
  { id: 20 },
];

const LawListStyled = styled.div`
  background-color: white;
  border-top: 3px solid #3e522d;
  height: calc(100% - 5% - 37px - 15px);
  margin: 15px 0;
  overflow-y: scroll;
  width: 100%;
`;

const LawList = () => (
  <LawListStyled>
    {DUMMY_LAW_DATA.map((law, index) => (
      <LawListItem index={index} key={law.id} law={law} lawListLength={DUMMY_LAW_DATA.length} />
    ))}
  </LawListStyled>
);

export default LawList;
