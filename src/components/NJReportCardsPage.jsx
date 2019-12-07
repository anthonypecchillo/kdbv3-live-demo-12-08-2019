/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

const ReportCardsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1000px;
  grid-gap: 5%;

  height: 100%;
  width: 100%;
`;

const NJReportCardsPage = () => {
  return (
    <ReportCardsGrid>
      <div>ReportCardsPage</div>
    </ReportCardsGrid>
  );
}

export default NJReportCardsPage;
