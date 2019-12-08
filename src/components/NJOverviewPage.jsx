/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import LottieControl from './LottieControl';
import Tile from './Tile';

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 600px;
  grid-gap: 5%;

  height: 100%;
  width: 100%;
`;

const NJOverviewPage = () => {
  return (
    <OverviewGrid>
      <Tile height="600px" width="1000px">
        <LottieControl />
        <center><h1>Under Construction!</h1></center>
      </Tile>
    </OverviewGrid>
  );
}

export default NJOverviewPage;
