/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import PartnershipList from './PartnershipList';

const PartnershipsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1000px;
  grid-gap: 5%;

  height: 100%;
  width: 100%;
`;

const NJPartnershipsPage = () => {
  return (
    <PartnershipsGrid>
      <PartnershipList />
    </PartnershipsGrid>
  );
}

export default NJPartnershipsPage;
