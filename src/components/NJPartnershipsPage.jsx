/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import styled from 'styled-components';

import PartnershipList from './PartnershipList';

const PartnershipsGrid = styled.div`
  display: grid;
  grid-gap: 5%;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1000px;

  height: 100%;
  width: 100%;
`;

const NJPartnershipsPage = () => (
  <PartnershipsGrid>
    <PartnershipList />
  </PartnershipsGrid>
);

export default NJPartnershipsPage;
