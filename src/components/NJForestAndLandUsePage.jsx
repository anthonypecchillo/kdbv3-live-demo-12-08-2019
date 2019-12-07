/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import NJLand from './NJLand';
import NJVegetation from './NJVegetation';
import NJCO2Emissions from './NJCO2Emissions';
import NJDeforestation from './NJDeforestation';
import Tile from './Tile';

const ForestAndLandUseGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 800px 800px;
  grid-gap: 2%;

  height: 100%;
  width: 100%;
`;

const NJForestAndLandUsePage = () => (
  <ForestAndLandUseGrid>
    <Tile gridColumn="1/3">
      <NJLand />
    </Tile>
    <Tile gridColumn="3/5">
      <NJCO2Emissions />
    </Tile>
    <Tile gridColumn="1/2">
      <NJVegetation />
    </Tile>
    <Tile gridColumn="2/5">
      <NJDeforestation />
    </Tile>
  </ForestAndLandUseGrid>
);

export default NJForestAndLandUsePage;
