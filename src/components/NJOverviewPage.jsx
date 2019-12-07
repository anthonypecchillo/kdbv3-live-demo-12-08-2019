/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const OverviewGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1000px;
  grid-gap: 5%;

  height: 100%;
  width: 100%;
`;

const NJOverviewPage = () => {
  return (
    <OverviewGrid>
      <div>OverviewPage</div>
    </OverviewGrid>
  );
}

export default NJOverviewPage;
