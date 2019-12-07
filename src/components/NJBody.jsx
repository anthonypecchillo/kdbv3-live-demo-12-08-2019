/**
 * Copyright 2019-present GCF Task Force. All Rights Reserved.
 */

import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import NJOverviewPage from './NJOverviewPage';
import NJForestAndLandUsePage from './NJForestAndLandUsePage';
import NJGovernancePage from './NJGovernancePage';
import NJPartnershipsPage from './NJPartnershipsPage';
import NJReportCardsPage from './NJReportCardsPage';

const NJBodyStyled = styled.div`
  background-color: #e5e5e5;
  /* background-color: #fff;
  background-image: linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%); */
  height: 100%;
  width: 100vw;
  padding: 2.5%;
`;

const NJBody = () => {
  let { pageId } = useParams();
  if (!pageId) {
    pageId = 'No ID!';
  }

  const view =
    pageId === 'overview' ? <NJOverviewPage />
      : pageId === 'forests-and-land-use' ? <NJForestAndLandUsePage />
      : pageId === 'governance' ? <NJGovernancePage />
      : pageId === 'partnerships' ? <NJPartnershipsPage />
      : pageId === 'report-cards' ? <NJReportCardsPage />
      : null;

  return (
    <NJBodyStyled>
      <center>{`Nation/Jurisidiction ${pageId} page!`}</center>
      <br />
      <br />
      {view}
    </NJBodyStyled>
  );
};

export default NJBody;
