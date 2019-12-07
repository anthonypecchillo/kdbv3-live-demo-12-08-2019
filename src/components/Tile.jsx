/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const Tile = styled.div`
  grid-column: ${({ gridColumn }) => gridColumn || null};
  grid-row: ${({ gridRow }) => gridRow || null};
  align-self: ${({ align }) => align || 'center'};
  justify-self: ${({ justify }) => justify || 'center'};
  background-color: white;
  box-shadow: 6px 18px 18px rgba(0, 0, 0, 0.08), -6px 18px 18px rgba(0, 0, 0, 0.08);
  height: ${({ height }) => height || '100%'};
  /* overflow: hidden; */
  padding: 2.5%;
  width: ${({ width }) => width || '100%'};
`;

export default Tile;
